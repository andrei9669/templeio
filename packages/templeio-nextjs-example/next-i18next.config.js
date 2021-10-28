const { initReactI18next } = require('react-i18next');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  keySeparator: '.',
  serializeConfig: false,
  use: [initReactI18next],
};
