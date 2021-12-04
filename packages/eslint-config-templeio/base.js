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
  extends: ['./rules/commonBase.js', 'airbnb-base', './rules/rules.js'],
};
