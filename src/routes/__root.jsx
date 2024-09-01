import { useEffect } from 'react';
import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Login from '../components/Login';
import { useSession } from '@clerk/clerk-react';
// import axios from 'axios';
import { useMutation } from 'react-query';

const findOrCreateUser = async (data) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  console.log('backendUrl', backendUrl)
  console.log('findOrCreateUser data', data);
};

const RootAppSignIn = () => {
  const { session, isSignedIn } = useSession();
  console.log('isSignedIn', isSignedIn);
  console.log('session', session);

  const { mutate } = useMutation(findOrCreateUser, {
    onSuccess: (data) => {
      console.log('success case', data);
    },
    onError: () => {
      console.log('error finding or creating user');
    },
  });

  useEffect(() => {
    if (isSignedIn && session?.user) {
      // Added conditional for URL params - if invited-by-id # -> role = 1
      const userData = {
        first_name: session?.user?.firstName,
        last_name: session?.user?.lastName,
        email: session?.user?.primaryEmailAddress?.emailAddress,
        auth_id: session?.user?.id,
        role: 0,
      };
      mutate(userData);
      // post request to backend - find or create user
      // window.Clerk redirect to dashboard page
    }
  }, [session, isSignedIn]);

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
