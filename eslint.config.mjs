import globals from 'globals';
import pluginJs from '@eslint/js';
import htmlPlugin from 'eslint-plugin-html';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      html: htmlPlugin,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-unused-expressions': 'warn',
    },
  },
];
