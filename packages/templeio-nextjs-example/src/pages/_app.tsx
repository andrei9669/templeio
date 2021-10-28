import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';

import type { EmotionCache } from '@emotion/react';
import createEmotionCache from '@theme/createEmotionCache';
import AppProviders from 'providers/AppProviders';

import nextI18NextConfig from '../../next-i18next.config';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type Props = AppProps & {
  emotionCache?: EmotionCache;
}
function MyApp(props: Props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return <AppProviders emotionCache={emotionCache}><Component {...pageProps} /></AppProviders>
}

export default appWithTranslation(MyApp, nextI18NextConfig);
