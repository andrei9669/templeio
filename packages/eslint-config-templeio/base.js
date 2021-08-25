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
