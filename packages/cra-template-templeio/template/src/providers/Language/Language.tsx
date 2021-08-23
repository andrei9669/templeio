import React from 'react';

import useLanguage from './useLanguage/useLanguage';
import { LanguageProps } from './Language.types';

import 'i18n';

const Language: LanguageProps = ({ children }) => {
  const loaded = useLanguage();

  if (!loaded) {
    return null;
  }

  return <>{children}</>;
};

export default Language;
