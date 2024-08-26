import React from 'react';
import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import SignIn from '../components/SignIn'

export const Route = createRootRoute({
  component: () => RootAppSignIn,
});

const RootAppSignIn = () => {
  return (
    <>
        <SignIn/>
      <TanStackRouterDevtools />
    </>
  );
};
