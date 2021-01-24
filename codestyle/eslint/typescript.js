module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          arrowFunctions: true,
        },
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { varsIgnorePattern: '^_+', argsIgnorePattern: '^_+' },
        ],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': true,
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': true,
            'ts-check': true,
            minimumDescriptionLength: 3,
          },
        ],

        // prefer `string[]`, but Array<string | number>
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'never'],

        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            // emulates @typescript-eslint/class-name-casing
            selector: 'class',
            format: ['PascalCase'],
          },
          {
            // emulates @typescript-eslint/interface-name-prefix
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],

        '@typescript-eslint/unbound-method': 'off',
        // FIXME:
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',

        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
        ],
      },
    },
  ],
};
