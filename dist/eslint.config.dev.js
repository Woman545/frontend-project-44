'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

exports.default = void 0;

const _default = [
  require('eslint-config-airbnb-base'),
  require('eslint-config-prettier'),
  {
    languageOptions: {
      globals: {
        es2022: true,
        node: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
      '@stylistic/semi': ['warn'],
      '@stylistic/quotes': ['warn'],
      '@stylistic/max-statements-per-line': ['warn'],
    },
    plugins: ['prettier', 'stylistic'],
  },
];

exports.default = _default;