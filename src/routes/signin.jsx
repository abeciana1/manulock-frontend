import { createFileRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Login from '../components/Login';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import useAxiosInstance from '../hooks/useAxiosInstance';
import { useNavigate } from '@tanstack/react-router';
import { useSession } from '@clerk/clerk-react';

const SigninPage = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxiosInstance();
  const [hasMutated, setHasMutated] = useState(false);
  const { session, isSignedIn } = useSession();
  const findOrCreateUser = async (data) => {
    const response = await axiosInstance.post('/users', {
      user: data,
    });
    return response;
  };

  const { mutate } = useMutation(findOrCreateUser, {
    onSuccess: (data) => {
      if (data.status === 200) {
        navigate({ to: '/dashboard' });
      }
    },
    onError: () => {
      console.log('error finding or creating user');
      navigate({ to: '/signin' });
    },
  });

  useEffect(() => {
    // Redirect to /signin if not signed in
    if (!isSignedIn) {
      navigate({ to: '/signin' });
      return;
    }

    // Prevent mutation and redirection during sign-out process
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
  }, [isSignedIn, session?.user, hasMutated, mutate, navigate]);

  return (
    <>
      <Login />
      {process.env.NODE_ENV !== 'production' && <TanStackRouterDevtools />}
    </>
  );
};

export const Route = createFileRoute('/signin')({
  component: SigninPage,
});
