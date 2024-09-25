import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginCypress from 'eslint-plugin-cypress';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx,tsx}'] }, // Removed .ts extension
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.cypress,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
      cypress: pluginCypress,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-assigning-return-values': 'error',
    },
  },
  {
    files: ['cypress/**/*.cy.{js,jsx,ts,tsx}'], // Target Cypress test files specifically
    languageOptions: {
      globals: {
        ...globals.cypress, // Add Cypress globals like 'cy' and 'Cypress'
      },
    },
  },
];
