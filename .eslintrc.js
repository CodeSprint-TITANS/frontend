module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
      'airbnb-typescript/base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      project: './tsconfig.json', // Add this line
    },
    plugins: [
      '@typescript-eslint',
      '@angular-eslint',
    ],
    rules: {
      // Add your custom rules here
    },
  };