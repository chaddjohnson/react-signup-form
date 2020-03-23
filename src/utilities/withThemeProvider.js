import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';

const withThemeProvider = Component => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);

export default withThemeProvider;
