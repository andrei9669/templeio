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
  plugins: [],
  extends: [
    './rules/commonBase.js',
    'airbnb',
    'airbnb-typescript',
    './rules/commonRules.js',
  ],
  overrides: [
    {
      files: ['**/!(setupTests|test/utils|*.spec.*|*.test.*).ts?x'],
      rules: {
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
    },
    {
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
      files: ['*.js'],
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/dot-notation': 0,
        '@typescript-eslint/no-implied-eval': 0,
        '@typescript-eslint/no-throw-literal': 0,
        '@typescript-eslint/no-var-requires': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/return-await': 0,
        'global-require': 0,
      },
    },
  ],
};
