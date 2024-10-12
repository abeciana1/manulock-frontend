import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'; // Ensure this is correct
import { QueryClient, QueryClientProvider } from 'react-query';
import { ClerkProvider } from '@clerk/clerk-react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Instances from './components/_modals/Instances';

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
    <Provider store={store}>
      <ClerkProvider
        testing={{ token: clerkTestingToken }}
        publishableKey={PUBLISHABLE_KEY}
        signInFallbackRedirectUrl="/dashboard"
        signUpFallbackRedirectUrl="/dashboard"
        signInUrl="/signin"
        signUpUrl="/signup"
      >
        <QueryClientProvider client={queryClient}>
          {/* <div id="modal"></div>
          <div id="loading"></div> */}
          <Instances />
          <RouterProvider router={router}>
            {/* The RouterProvider now handles routing, no need for App if using __root */}
          </RouterProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </Provider>
  </StrictMode>
);
