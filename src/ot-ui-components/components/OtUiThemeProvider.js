import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Component } from 'react';

import defaultTheme from '../theme';
import setupIcons from '../icons/setupIcons';

class OtUiThemeProvider extends Component {
  componentDidMount() {
    setupIcons();
  }
  render() {
    const { children, theme = defaultTheme } = this.props;
    return (
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }
}

export default OtUiThemeProvider;
