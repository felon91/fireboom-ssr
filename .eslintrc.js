module.exports = {
  root: true,
  extends: [
    './codestyle/eslint/base',
    './codestyle/eslint/prettier',
    './codestyle/eslint/typescript',
    './codestyle/eslint/import',
    './codestyle/eslint/react',
  ],
  rules: {
    // import
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index', 'object'],
        pathGroups: ['components', 'lib', 'features'].map(dir => ({
          pattern: `${dir}/**`,
          group: 'external',
          position: 'after',
        })),
        'newlines-between': 'always',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
  },
};
