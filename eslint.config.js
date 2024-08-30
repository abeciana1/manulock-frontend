import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx,tsx}'] }, // Removed .ts extension
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended, // JS-specific config
  pluginReact.configs.flat.recommended, // React-specific config
  prettier, // Disable rules that conflict with Prettier
  {
    plugins: {
      prettier: pluginPrettier, // Add Prettier plugin
    },
    rules: {
      'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    },
  },
];
