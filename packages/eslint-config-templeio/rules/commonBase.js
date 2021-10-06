module.exports = {
  plugins: ['@typescript-eslint', 'sonarjs', 'eslint-plugin-tsdoc', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
};
