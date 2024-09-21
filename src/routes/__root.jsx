import { useEffect } from 'react';
import { createRootRoute, useNavigate, Outlet } from '@tanstack/react-router';
import { useSession } from '@clerk/clerk-react';
import { useMutation } from 'react-query';
import useAxiosInstance from '../hooks/useAxiosInstance';

const RootAppSignIn = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxiosInstance();
  const { session, isSignedIn } = useSession();
  const findOrCreateUser = async (data) => {
    const response = await axiosInstance.post('/users', {
      user: data,
    });
    return response;
  };

  const { mutate } = useMutation(findOrCreateUser, {
    onSuccess: (data) => {
      console.log('success case', data);
      if (data.status === 200) {
        navigate({ to: '/dashboard' });
      }
    },
    onError: () => {
      console.log('error finding or creating user');
      navigate({ to: '/' });
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
  }, [session?.user?.id]);

  return (
    <>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootAppSignIn,
});
