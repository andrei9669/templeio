import { Theme, useMediaQuery } from '@mui/material';
import { useEffect, useMemo } from 'react';

import { useDarkMode, useDarkModeDispatch } from '@stores/darkMode/store';

import createTheme from 'providers/Theme/createTheme';

const useTheme = (): Theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDarkModeDispatch();
  const isDarkMode = useDarkMode();
  const theme = useMemo(() => createTheme(isDarkMode), [isDarkMode]);

  useEffect(() => {
    dispatch(prefersDarkMode);
  }, [prefersDarkMode, dispatch]);

  return theme;
};

export default useTheme;
