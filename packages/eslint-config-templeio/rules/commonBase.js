module.exports = {
  plugins: ['@typescript-eslint', 'sonarjs', 'eslint-plugin-tsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
};
