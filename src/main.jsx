import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'; // Ensure this is correct
import { QueryClient, QueryClientProvider } from 'react-query';
import { ClerkProvider } from '@clerk/clerk-react';

// Retrieve the Clerk publishable key from the environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Initialize the QueryClient for react-query
const queryClient = new QueryClient();

// Create the router using the route tree
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

const clerkTestingToken = import.meta.env.VITE_CLERK_TESTING_TOKEN;

// Render the root of your React application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider
      testing={{ token: clerkTestingToken }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          {/* The RouterProvider now handles routing, no need for App if using __root */}
        </RouterProvider>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
