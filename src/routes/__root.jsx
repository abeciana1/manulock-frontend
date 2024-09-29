import { useEffect, useState } from 'react';
import { createRootRoute, useNavigate, Outlet } from '@tanstack/react-router';
import { useSession } from '@clerk/clerk-react';
import { useMutation } from 'react-query';
import useAxiosInstance from '../hooks/useAxiosInstance';
import NavBar from '../components/_navigation/NavBar';
import Login from '../components/Login';

const RootAppSignIn = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxiosInstance();
  const { session, isSignedIn } = useSession();
  const [hasMutated, setHasMutated] = useState(false); // To prevent multiple mutations
  const findOrCreateUser = async (data) => {
    const response = await axiosInstance.post('/users', {
      user: data,
    });
    return response;
  };

  const { mutate } = useMutation(findOrCreateUser, {
    onSuccess: (data) => {
      console.log('data', data);
      if (data.status === 200) {
        navigate({ to: '/dashboard' });
      }
    },
    onError: () => {
      console.log('error finding or creating user');
      navigate({ to: '/signup' });
    },
  });

  useEffect(() => {
    // Redirect to /signin if not signed in
    if (!session?.user) {
      navigate({ to: '/signin' });
      return;
    }

    // Only call mutate if the user is signed in, the session is available, and we haven't mutated yet
    if (isSignedIn && session?.user && !hasMutated) {
      const userData = {
        first_name: session?.user?.firstName,
        last_name: session?.user?.lastName,
        email: session?.user?.primaryEmailAddress?.emailAddress,
        auth_id: session?.user?.id,
        role: 0,
      };
      mutate(userData);
      setHasMutated(true); // Ensure mutate is only called once
    }
  }, [session?.user, hasMutated]);

  return (
    <>
      {isSignedIn && <NavBar />}
      {!isSignedIn && <Login />}
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootAppSignIn,
});
