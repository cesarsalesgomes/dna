module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'max-len': ['error', { code: 160, comments: 160, ignoreStrings: true }],
  },
};
