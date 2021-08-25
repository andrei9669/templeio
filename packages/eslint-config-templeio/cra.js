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
    'react/no-unused-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-unstable-nested-components': 1,
    'react/boolean-prop-naming': 1,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
  },
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
