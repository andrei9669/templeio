import React from 'react';
import {
  CssBaseline,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useTheme from './useTheme';

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
