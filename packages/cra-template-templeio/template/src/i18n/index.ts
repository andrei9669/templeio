import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enCommon from './en-US/common.json';

export const LOCAL_STORAGE_KEY = 'i18nextLng';

const resources = {
  en: {
    common: enCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: LOCAL_STORAGE_KEY,
    },
    resources,
    fallbackLng: process.env.REACT_APP_DEFAULT_LOCALE,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
