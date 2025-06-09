module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    '@stylistic/semi': 'off',
    '@stylistic/quotes': 'off',
    '@stylistic/max-statements-per-line': 'off',
    '@stylistic/brace-style': 'off',
    '@stylistic/quote-props': 'off',
    '@stylistic/comma-dangle': 'off',
    '@stylistic/eol-last': 'off',
  },
};