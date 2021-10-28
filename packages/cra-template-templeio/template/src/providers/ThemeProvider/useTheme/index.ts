import { useEffect, useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material';

import { useDarkMode, useDarkModeDispatch } from '@stores/darkMode/store';

import createTheme from '../createTheme';

const useTheme = (): Theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDarkModeDispatch();
  const isDarkMode = useDarkMode();

  useEffect(() => {
    dispatch(prefersDarkMode);
  }, [prefersDarkMode, dispatch]);

  return useMemo(() => createTheme(isDarkMode), [isDarkMode]);
};

export default useTheme;
