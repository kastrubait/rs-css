module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'unicorn'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/unicorn',
  ],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'unicorn/prevent-abbreviations': 'off',
  },
};
