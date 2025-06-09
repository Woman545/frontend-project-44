"use strict";

module.exports = {
  env: {
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  "extends": ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', {
      avoidEscape: true
    }],
    'max-statements-per-line': ['error', {
      max: 1
    }],
    'brace-style': ['error', '1tbs'],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'no-console': 'warn',
    'import/extensions': ['error', 'never', {
      js: 'never'
    }],
    'prettier/prettier': ['error']
  }
};