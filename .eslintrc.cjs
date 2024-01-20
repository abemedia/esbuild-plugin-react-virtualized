// @ts-check
const { builtinModules } = require('node:module')
const { defineConfig } = require('eslint-define-config')

/// <reference types="@eslint-types/typescript-eslint" />
/// <reference types="@eslint-types/import" />

module.exports = defineConfig({
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    eqeqeq: ['warn', 'always', { null: 'never' }],
    'no-debugger': ['error'],
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'prefer-const': ['warn', { destructuring: 'all' }],
    'no-restricted-globals': ['error', 'require', '__dirname', '__filename'],

    'node/no-unsupported-features/es-syntax': 'off',

    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

    'import/no-nodejs-modules': ['error', { allow: builtinModules.map((mod) => `node:${mod}`) }],
    'import/no-duplicates': 'error',
    'import/order': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'],
      rules: {
        'no-restricted-globals': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['build.config.ts'],
      rules: {
        'no-undef': 'off',
        'node/no-missing-import': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  reportUnusedDisableDirectives: true,
})
