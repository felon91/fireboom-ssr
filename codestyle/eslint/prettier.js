module.exports = {
  extends: [
    'prettier',
    'prettier/react',

    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
