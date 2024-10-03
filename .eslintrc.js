module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
      'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors
    ],
    env: {
      browser: true, // Allows for the use of browser global variables
      es2021: true, // Sets ECMAScript 2021 globals
      node: true, // Allows for the use of Node.js global variables and Node.js scoping
    },
    settings: {
      react: {
        version: 'detect' // Automatically detects the React version
      }
    },
    parserOptions: {
      ecmaVersion: 2021, // Allows the use of modern ECMAScript features
      sourceType: 'module', // Allows the use of imports
      ecmaFeatures: {
        jsx: true // Allows for parsing of JSX
      }
    },
    rules: {
      'prettier/prettier': 'error', // Displays Prettier issues as ESLint errors
      'react/react-in-jsx-scope': 'off', // Next.js automatically imports React
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
    },
  };
  