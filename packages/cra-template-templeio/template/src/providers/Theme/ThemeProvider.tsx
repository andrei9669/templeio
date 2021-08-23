import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useTheme from './useTheme';

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
