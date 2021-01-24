module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  rules: {
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'import/prefer-default-export': 'error',
  },
};
