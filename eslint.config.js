import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'public/geogebra']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'object-curly-spacing': [
        2,
        'always',
        { arraysInObjects: true, objectsInObjects: true },
      ],
      'no-constant-condition': ['error', { checkLoops: false }],
      'prefer-const': 'error',
      'space-before-blocks': [1, 'always'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'space-infix-ops': ['error', { int32Hint: false }],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'no-extra-semi': 'error',
      'no-extra-boolean-cast': 'error',
    },
  },
]);
