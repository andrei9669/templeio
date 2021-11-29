module.exports = {
  env: {
    es2021: true,
    browser: true,
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
  plugins: ['react', 'use-encapsulation', 'react-hooks'],
  extends: [
    './rules/commonBase.js',
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    './rules/rules.js',
  ],
  rules: {
    'use-encapsulation/prefer-custom-hooks': [
      2,
      {
        allow: ['useMemo', 'useState', 'useReducer', 'useRef'],
        block: ['useQuery'],
      },
    ],

    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,

    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-unstable-nested-components': 1,
    'react/boolean-prop-naming': 1,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
  },
  overrides: [
    {
      files: ['**/!(setupTests|test/utils|*.spec.*|*.test.*).ts?x'],
      rules: {
        '@typescript-eslint/no-empty-function': 2,
        '@typescript-eslint/explicit-function-return-type': [
          2,
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
