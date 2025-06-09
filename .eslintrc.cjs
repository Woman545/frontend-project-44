module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    es2022: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
  },
};