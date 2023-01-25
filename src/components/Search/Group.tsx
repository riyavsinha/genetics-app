import { Theme, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  groupHeading: {
    paddingBottom: '.25rem',
  },
  groupHeadingText: {
    padding: '0 .25rem',
    fontSize: '.75rem',
    color: theme.palette.secondary.main,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const groupNameMap = {
  any: 'any',
  variant: 'Variants',
  gene: 'Genes',
  study: 'Studies',
};

type GroupProps = {
  children: JSX.Element;
  name: keyof typeof groupNameMap;
};
const Group = ({ children, name }: GroupProps) => {
  const classes = useStyles();

  return (
    <div className={classes.groupHeading}>
      {name !== 'any' && (
        <Typography className={classes.groupHeadingText} variant="body1">
          {groupNameMap[name]}
        </Typography>
      )}
      {children}
    </div>
  );
};

export default Group;
