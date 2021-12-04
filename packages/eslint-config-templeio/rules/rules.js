module.exports = {
  plugins: ['eslint-comments'],
  extends: ['plugin:eslint-comments/recommended', './import.js', 'prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        trailingComma: 'all',
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        bracketSameLine: false,
        arrowParens: 'always',
        printWidth: 80,
      },
    ],

    'tsdoc/syntax': 1,

    'no-plusplus': 0,
    'no-param-reassign': [2, { props: false }],
    'no-console': [1, { allow: ['warn', 'error', 'info'] }],
    'no-unneeded-ternary': 2,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-fallthrough': 0,
    'no-lonely-if': 2,
    complexity: 1,
    'prefer-arrow-callback': [2],
    camelcase: [0, { properties: 'never' }],
    'prefer-const': [
      2,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-underscore-dangle': [1, { allowAfterThis: true }],

    '@typescript-eslint/no-use-before-define': 2,
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
      2,
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: ['validationSchema'],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],

    'sonarjs/no-duplicate-string': 1,
    'sonarjs/no-identical-functions': 1,
    'sonarjs/no-collapsible-if': 1,
    'sonarjs/no-nested-template-literals': 0,
    'sonarjs/cognitive-complexity': 0,

    'eslint-comments/require-description': 2,
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
