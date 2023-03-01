module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/semi': 'off',
        'import/order': [
          'error',
          {
            alphabetize: {
              order: 'asc',
            },
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            pathGroups: [
              {
                group: 'external',
                pattern: 'src/**',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
          },
        ],
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'react/react-in-jsx-scope': 'off', // react 18
        semi: ['error', 'never'],
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: true,
            ignoreDeclarationSort: true,
          },
        ],
        'sort-keys-fix/sort-keys-fix': 'warn',
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'sort-keys-fix', 'typescript-sort-keys'],
  root: true,
}
