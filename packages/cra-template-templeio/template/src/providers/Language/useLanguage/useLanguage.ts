import { useEffect, useState } from 'react';

import i18n, { LOCAL_STORAGE_KEY } from 'i18n';

const useLanguage = (): boolean => {
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    setIsLanguageLoaded(false);

    (async () => {
      const localLanguage = localStorage.getItem(LOCAL_STORAGE_KEY);

      await i18n.changeLanguage(
        localLanguage ?? process.env.REACT_APP_DEFAULT_LOCALE ?? 'eng',
      );

      if (mounted) {
        setIsLanguageLoaded(true);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return isLanguageLoaded;
};

export default useLanguage;
