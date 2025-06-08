const globals = require("globals");
const pluginReact = require('eslint-plugin-react');
const pluginReactNative = require('eslint-plugin-react-native');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const pluginImport = require('eslint-plugin-import');
const pluginPrettier = require('eslint-plugin-prettier');

const pluginTypeScript = require('@typescript-eslint/eslint-plugin');
const eslintRecommended = require('@eslint/js');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json', // Optional: required for certain rules
      },
      globals: {
        ...globals.node,
        __DEV__: true,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      react: pluginReact,
      'react-native': pluginReactNative,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      ...eslintRecommended.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactNative.configs.all.rules,
      ...pluginPrettier.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-default-export': 'warn',
      // Not work.
      // 'import/no-unused-modules': ['error', { unusedExports: true }],
      // Not load from .prettierrc.js, hence re-config again in this file.
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'semi': true,
        'trailingComma': 'all',
        'printWidth': 100,
        'tabWidth': 4,
        'arrowParens': 'avoid',
        'bracketSpacing': true,
        'bracketSameLine': true,
      }],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'block-spacing': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'no-unused-vars': ['error', {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      // Optional: Add useful TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off'
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/?(*.)+(spec|step|test).[jt]s?(x)'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: require('eslint-plugin-jest'),
    },
    rules: {
      ...require('eslint-plugin-jest').configs.recommended.rules,
    },
  },
  {
    files: ['**/*.json'],
    plugins: {
      jsonc: require('eslint-plugin-jsonc'),
    },
    rules: {
      'jsonc/indent': ['error', 4],
      'prettier/prettier': ['error', {
        'tabWidth': 4,
      }],
    },
  },
];
