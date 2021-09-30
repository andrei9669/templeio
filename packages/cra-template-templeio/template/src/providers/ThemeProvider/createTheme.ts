import type { Theme } from '@mui/material';
import { createTheme as createMuiTheme } from '@mui/material';

const createTheme = (isDarkMode: boolean): Theme =>
  createMuiTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

export default createTheme;
