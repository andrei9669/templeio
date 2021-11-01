module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    'shared-node-browser': true,
    jest: true,
  },
  extends: ['next/core-web-vitals', './react'],
  overrides: [
    {
      files: ['src/pages/_document.tsx'],
      rules: {
        'react/display-name': 0,
        '@next/next/no-document-import-in-page': 0,
      },
    },
  ],
};
