import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'plugin:@next/next/recommended', // Extend Next.js recommended rules
      'plugin:@typescript-eslint/recommended', // Extend TypeScript rules
    ],
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
    ignorePatterns: [
      '**/node_modules/**', // Ignore node_modules directory
      '**/.next/**',        // Ignore Next.js build directory
      '**/build/**',        // Ignore build directory if applicable
      '**/public/**',       // Ignore public directory if applicable
      '**/*.log'           // Ignore log files
    ],
    rules: {
      'curly': 'error', // Require curly braces for all control statements
      'quotes': ['error', 'single'], // Enforce single quotes
      'semi': ['error', 'always'], // Require semicolons
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Disallow unused variables, allowing ignored ones
      'prefer-const': ['error'], // Prefer const over let
      'no-var': ['error'], // Disallow var
      'max-len': ['error', { 'code': 80 }], // Limit maximum line length to 80 characters
      'indent': ['error', 2], // Enforce consistent indentation of 2 spaces
    },
  }),
];

export default eslintConfig;
