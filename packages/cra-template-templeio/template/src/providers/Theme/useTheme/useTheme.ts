import { useEffect, useMemo } from 'react';
import { useMediaQuery } from '@material-ui/core';
import type { Theme } from '@material-ui/core';

import { useDarkMode, useDarkModeDispatch } from '@store/darkMode/store';

import createTheme from '../createTheme';

const useTheme = (): Theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDarkModeDispatch();
  const isDarkMode = useDarkMode();
  const theme = useMemo(() => createTheme(isDarkMode), [isDarkMode]);

  useEffect(() => {
    dispatch(prefersDarkMode);
  }, [dispatch, prefersDarkMode]);

  return theme;
};

export default useTheme;
