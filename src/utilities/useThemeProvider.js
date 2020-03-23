import React from 'react';
import theme from '../theme';
import { ThemeProvider } from 'emotion-theming';

const useThemeProvider = Component => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);

export default useThemeProvider;
