// eslint.config.mjs
import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  airbnb,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    plugins: {
      react,
    },
    rules: {
      'import/no-cycle': 0,
      'no-console': 0,
      'react/prop-types': 0,
      'linebreak-style': 0,
      'react/state-in-constructor': 0,
      'import/prefer-default-export': 0,
      'max-len': [2,250],
      'object-curly-newline': 0,
      'react/jsx-filename-extension': 0,
      'react/jsx-one-expression-per-line': 0,
      'jsx-ally/click-events-have-key-events': 0,
      'jsx-ally/alt-text': 0,
      'jsx-ally/no-autofocus': 0,
      'jsx-ally/no-static-element-interactions' : 0,
      ' react/no-array-index-key': 0,
      'no-param-reassign': 0,
      ' react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading':0,
      'no-sparse-array': 0,
      'no-array-index-key':0,
      camelcase: 0,

      // Custom rules go here
    },
  },
];

