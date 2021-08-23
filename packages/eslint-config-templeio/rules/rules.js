module.exports = {
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        printWidth: 80,
      },
    ],

    'tsdoc/syntax': 'warn',

    'no-plusplus': 0,
    'no-param-reassign': [2, { props: false }],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-fallthrough': 0,
    'no-lonely-if': 'error',
    complexity: ['warn', 30],
    'prefer-arrow-callback': ['error'],
    camelcase: [0, { properties: 'never' }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-underscore-dangle': [1, { allowAfterThis: true }],

    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowNullableBoolean: true,
        allowNullableObject: true,
        allowString: true,
        allowNullableString: true,
        allowNumber: false,
        allowNullableNumber: false,
        allowAny: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: ['validationSchema'],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],

    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-collapsible-if': 'warn',
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
