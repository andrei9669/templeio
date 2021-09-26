import type { Theme } from '@material-ui/core';
import { createTheme as createMuiTheme } from '@material-ui/core';

const createTheme = (isDarkMode: boolean): Theme =>
  createMuiTheme({
    isDarkMode,
    palette: {
      type: isDarkMode ? 'dark' : 'light',
    },
  });

export default createTheme;
