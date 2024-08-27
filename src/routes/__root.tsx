import React from 'react';
import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import SignIn from '../components/SignIn';

const RootAppSignIn: React.FC = () => {
  console.log('RootAppSignIn rendered');
  return (
    <>
      <SignIn />
      <TanStackRouterDevtools />
    </>
  );
};

// Create the root route
export const Route = createRootRoute({
  component: RootAppSignIn,  // Pass the component directly
});
