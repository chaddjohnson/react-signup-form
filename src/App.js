import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import theme, { globalStyles } from './theme';
import Router from './Router';

const App = () => (
  <>
    <Global
      styles={css`
        ${globalStyles}
      `}
    />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);

export default App;
