import React from 'react';

import useLanguage from './useLanguage/useLanguage';

import '@/i18n';

const Language: React.FC = ({ children }) => {
  const loaded = useLanguage();

  if (!loaded) {
    return null;
  }

  return <>{children}</>;
};

export default Language;
