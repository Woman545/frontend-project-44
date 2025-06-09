module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
  },
  plugins: ['prettier'],
};