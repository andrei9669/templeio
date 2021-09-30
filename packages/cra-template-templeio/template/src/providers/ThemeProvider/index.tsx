import React from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import useTheme from './useTheme';

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
