module.exports = {
  extends: ['eslint:recommended', 'plugin:json/recommended-with-comments', 'plugin:jest/all'],
  plugins: ['jest', 'unicorn'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  rules: {
    // allow console.error & console.warning
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // always use brackets after if's
    curly: 'error',

    // omit useless function brackets
    'arrow-body-style': ['error', 'as-needed'],

    // unicorn
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/no-for-loop': 'error',
    'unicorn/import-index': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
  },
};
