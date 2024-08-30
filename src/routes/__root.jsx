import React from 'react';
import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Login from '../components/Login';

const RootAppSignIn = () => {
  console.log('RootAppSignIn rendered');
  return (
    <>
      <Login />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: RootAppSignIn,
});
