import type { Theme } from '@mui/material';
import { createTheme } from '@mui/material';

const createBaseTheme = (isDarkMode: boolean): Theme =>
  createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

export default createBaseTheme;
