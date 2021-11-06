import { EmotionCache } from '@emotion/react';
import React from 'react';

import { DarkModeProvider } from '@stores/darkMode/store';

import ErrorBoundary from './ErrorBoundary';
import ThemeProvider from './Theme/ThemeProvider';

const AppProviders: React.FC<{ emotionCache?: EmotionCache }> = ({
  children,
  emotionCache,
}) => (
  <DarkModeProvider>
    <ThemeProvider emotionCache={emotionCache}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  </DarkModeProvider>
);

export default AppProviders;
