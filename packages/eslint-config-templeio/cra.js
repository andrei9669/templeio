module.exports = {
  env: {
    es2021: true,
    'shared-node-browser': true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'sonarjs',
    'react',
    '@kyleshevlin',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    './rules/import.js',
    './rules/rules.js',
    'prettier',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    'react/require-default-props': 0,
    'react/no-unstable-nested-components': 1,
    'react/boolean-prop-naming': 1,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 0,
  },
};
