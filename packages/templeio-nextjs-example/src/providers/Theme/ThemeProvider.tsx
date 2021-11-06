import React from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import useTheme from './hooks/useTheme';
import createEmotionCache from './createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
const ThemeProvider: React.FC<{ emotionCache?: EmotionCache }> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => {
  const theme = useTheme();
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
