module.exports = {
  env: {
    node: true,
    es2021: true,
    'shared-node-browser': true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      modules: true,
    },
    sourceType: 'module',
  },
  plugins: ['sonarjs', 'prettier', '@typescript-eslint', 'eslint-plugin-tsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'airbnb-base',
    './rules/import.js',
    './rules/rules.js',
    'prettier',
  ],
};
