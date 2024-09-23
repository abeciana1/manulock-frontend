import { defineConfig } from 'cypress';
import { clerkSetup } from '@clerk/testing/cypress';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  env: {
    CLERK_TESTING_TOKEN: process.env.VITE_CLERK_TESTING_TOKEN,
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      return clerkSetup({ config });
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
