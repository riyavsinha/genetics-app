import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@mui/styles/withStyles';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import OtTablePaginationActions from './OtTablePaginationActions';
import HelpIcon from '@mui/icons-material/Help';

import PlotContainer from './PlotContainer';
import PlotContainerSection from './PlotContainerSection';

const PAGE_SIZE = 10;

const getComparator = (columns, sortBy, order) => {
  const column = columns.find((col) => col.id === sortBy);

  if (column && column.comparator) {
    if (order === 'asc') {
      return column.comparator;
    }
    return (a, b) => -column.comparator(a, b);
  }

  const comparatorValue = order === 'desc' ? 1 : -1;

  return (a, b) => {
    if (a[sortBy] === b[sortBy]) {
      return 0;
    }

    if (a[sortBy] === undefined || a[sortBy] === '' || a[sortBy] < b[sortBy]) {
      return comparatorValue;
    }

    if (b[sortBy] === undefined || b[sortBy] === '' || a[sortBy] > b[sortBy]) {
      return -comparatorValue;
    }
  };
};

const tableStyles = (theme) => ({
  tableWrapper: {
    overflowX: 'auto',
  },
  tooltipIcon: {
    fontSize: '1.2rem',
    paddingLeft: `0.6rem`,
  },
  buttonMargin: {
    marginRight: '4px',
  },
  tableRow: {
    height: '31px',
  },
  tableRowFixed: {
    background: theme.palette.grey[300],
  },
  tableRowFilters: {
    verticalAlign: 'bottom',
  },
  tableCell: {
    padding: '0 12px 0 0',
    '&:first-child': {
      paddingLeft: '24px',
    },
    '&:last-child': {
      paddingRight: '24px',
    },
  },
  tableCellHeader: {
    paddingRight: '12px',
    paddingLeft: 0,
    '&:first-child': {
      paddingLeft: '24px',
    },
    '&:last-child': {
      paddingRight: '24px',
    },
  },
  tableCellSpanHeader: {
    borderLeft: '1px solid #E0E0E0',
    paddingLeft: '5px',
    '&:first-child': {
      borderLeft: 'none',
    },
  },
  tableCellHeaderVertical: {
    textAlign: 'center',
    verticalAlign: 'bottom',
  },
  tableCellVertical: {
    minWidth: '24px',
    width: '24px',
    paddingRight: 0,
  },
  tableCellFill: {
    width: '100%',
  },
  verticalHeader: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    whiteSpace: 'nowrap',
  },
  downloadHeader: {
    marginTop: '7px',
  },
  badgeWithTooltip: {
    flexShrink: 1,
  },
});

class OtTableRF extends Component {
  state = {
    page: 0,
    sortBy: this.props.sortBy,
    order: this.props.order,
  };

  handleChangePage = (event, page) => {
    const { onPageSort, pageSize } = this.props;
    this.setState({
      page,
    });
    if (onPageSort) {
      onPageSort({ page: page, pageSize: pageSize });
    }
  };

  selectSortColumn = (sortBy) => {
    const { reportTableSortEvent, onPageSort } = this.props;
    let order = 'desc';

    if (this.state.sortBy === sortBy && this.state.order === 'desc') {
      order = 'asc';
    }

    if (reportTableSortEvent) {
      reportTableSortEvent(sortBy, order);
    }

    if (onPageSort) {
      onPageSort({ sortBy: sortBy, order: order });
    }
    this.setState({ sortBy, order });
  };

  render() {
    const {
      loading,
      error,
      columns,
      data,
      columnsFixed,
      dataFixed,
      verticalHeaders,
      classes,
      left,
      center,
      message,
      filters,
      pageSize,
      headerGroups,
      tableRowComponent,
      serverSide,
      totalRowsCount,
    } = this.props;
    const { sortBy, order, page } = this.state;
    const filterRow = filters ? (
      <TableRow className={classes.tableRowFilters}>
        {columns.map((column) => (
          <TableCell key={column.id} className={classes.tableCellHeader}>
            {column.renderFilter ? column.renderFilter() : null}
          </TableCell>
        ))}
      </TableRow>
    ) : null;
    return (
      <PlotContainer
        loading={loading}
        error={error}
        left={left}
        center={center}
      >
        {message ? (
          <PlotContainerSection>
            <div align="center">
              <Typography variant="subtitle1">{message}</Typography>
            </div>
          </PlotContainerSection>
        ) : null}
        <PlotContainerSection>
          <div className={classes.tableWrapper}>
            <Table>
              <TableHead>
                {headerGroups ? (
                  <TableRow>
                    {headerGroups.map((g, i) => (
                      <TableCell
                        colSpan={g.colspan}
                        key={i}
                        className={classNames(
                          classes.tableCellHeader,
                          classes.tableCellSpanHeader
                        )}
                      >
                        {g.label}
                      </TableCell>
                    ))}
                  </TableRow>
                ) : null}
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      className={classNames(classes.tableCellHeader, {
                        [classes.tableCellHeaderVertical]:
                          column.verticalHeader,
                        [classes.tableCellVertical]: column.verticalHeader,
                      })}
                      style={{
                        width: column.width,
                      }}
                    >
                      {column.orderable !== false ? (
                        <TableSortLabel
                          active={column.id === sortBy}
                          direction={order}
                          onClick={this.selectSortColumn.bind(null, column.id)}
                          className={
                            column.verticalHeader
                              ? classes.verticalHeader
                              : null
                          }
                        >
                          {column.tooltip ? (
                            <Badge
                              className={classes.badgeWithTooltip}
                              badgeContent={
                                <Tooltip title={column.tooltip} placement="top">
                                  <HelpIcon className={classes.tooltipIcon} />
                                </Tooltip>
                              }
                            >
                              {column.label}
                            </Badge>
                          ) : (
                            column.label
                          )}
                        </TableSortLabel>
                      ) : (
                        column.label
                      )}
                    </TableCell>
                  ))}
                  {verticalHeaders ? (
                    <TableCell className={classes.tableCellFill} />
                  ) : null}
                </TableRow>
                {filterRow}
              </TableHead>
              <TableBody>
                {columnsFixed && dataFixed
                  ? dataFixed.map((row, index) => (
                      <TableRow
                        key={index}
                        className={classNames(
                          classes.tableRow,
                          classes.tableRowFixed
                        )}
                        component={tableRowComponent}
                        data={row}
                      >
                        {columnsFixed.map((column) => (
                          <TableCell
                            key={column.id}
                            className={classNames(classes.tableCell, {
                              [classes.tableCellVertical]:
                                column.verticalHeader,
                            })}
                          >
                            {column.renderCell
                              ? column.renderCell(row)
                              : row[column.id]}
                          </TableCell>
                        ))}
                        {verticalHeaders ? (
                          <TableCell className={classes.tableCellFill} />
                        ) : null}
                      </TableRow>
                    ))
                  : null}
                {data
                  .slice()
                  .sort(getComparator(columns, sortBy, order))
                  .slice(
                    (serverSide ? 0 : page) * pageSize,
                    (serverSide ? 0 : page) * pageSize + pageSize
                  )
                  .map((row, index) => (
                    <TableRow
                      key={index}
                      className={classes.tableRow}
                      component={tableRowComponent}
                      data={row}
                    >
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          className={classNames(classes.tableCell, {
                            [classes.tableCellVertical]: column.verticalHeader,
                          })}
                          style={column.style}
                        >
                          {column.renderCell
                            ? column.renderCell(row)
                            : row[column.id]}
                        </TableCell>
                      ))}
                      {verticalHeaders ? (
                        <TableCell className={classes.tableCellFill} />
                      ) : null}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          {!loading && data.length === 0 ? (
            <PlotContainerSection>
              <div align="center">
                <Typography variant="subtitle1">(no data)</Typography>
              </div>
            </PlotContainerSection>
          ) : null}
          <TablePagination
            component="div"
            count={serverSide ? totalRowsCount : data.length}
            onPageChange={this.handleChangePage}
            page={page}
            rowsPerPage={pageSize}
            rowsPerPageOptions={[]}
            ActionsComponent={OtTablePaginationActions}
          />
        </PlotContainerSection>
      </PlotContainer>
    );
  }
}

OtTableRF.defaultProps = {
  pageSize: PAGE_SIZE,
};

export default withStyles(tableStyles)(OtTableRF);
