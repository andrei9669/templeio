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
    './rules/commonRules.js',
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

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
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
};
