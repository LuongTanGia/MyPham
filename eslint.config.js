import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import typescript from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'

export default [
  {
    ignores: ['dist'] // Ignore 'dist' folder
  },
  {
    extends: [
      js.configs.recommended,
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@tanstack/eslint-plugin-query/recommended'
    ],
    files: ['**/*.{ts,tsx}'], // Target TypeScript files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescript
    },
    rules: {
      // React Hooks Rules
      ...reactHooks.configs.recommended.rules,

      // React Rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // TypeScript Rules
      ...typescript.configs.recommended.rules,

      // TanStack Query Rules
      '@tanstack/query/exhaustive-deps': 'error',
      '@tanstack/query/no-deprecated-options': 'error',
      '@tanstack/query/prefer-query-object-syntax': 'error',
      '@tanstack/query/stable-query-client': 'error',

      // Custom Rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-no-target-blank': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'no-lonely-if': 'warn',
      'no-unused-vars': 'off',
      'no-trailing-spaces': 'warn',
      'no-multi-spaces': 'warn',
      'no-multiple-empty-lines': 'warn',
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': ['warn', 'always'],
      indent: ['warn', 2],
      'array-bracket-spacing': 'warn',
      'linebreak-style': 'off',
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': 'warn',
      'arrow-spacing': 'warn'
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    }
  }
]
