import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...['eslint:recommended', 'plugin:react/recommended']
    .flatMap(ext => compat.extends(ext)),
  {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
