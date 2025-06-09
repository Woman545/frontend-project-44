"use strict";

module.exports = {
  "extends": ['airbnb-base', 'prettier'],
  env: {
    es2022: true,
    node: true
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    '@stylistic/semi': ['warn'],
    '@stylistic/quotes': ['warn'],
    '@stylistic/max-statements-per-line': ['warn']
  },
  plugins: ['prettier', 'stylistic']
};