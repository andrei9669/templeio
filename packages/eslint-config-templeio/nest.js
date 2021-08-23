module.exports = {
  env: {
    node: true,
    browser: true,
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
    'prettier',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    '@next/eslint-plugin-next',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    './rules/import.js',
    'next',
    './rules/rules.js',
    'prettier',
  ],
};
