import { createFileRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Signup from '../components/Signup';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import useAxiosInstance from '../hooks/useAxiosInstance';
import { useNavigate } from '@tanstack/react-router';
import { useSession } from '@clerk/clerk-react';

const SignupPage = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxiosInstance();
  const [hasMutated, setHasMutated] = useState(false);
  const { isLoaded, session, isSignedIn } = useSession();
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
      navigate({ to: '/signup' });
    },
  });

  useEffect(() => {
    // Prevent mutation and redirection during sign-out process
    if (isLoaded) {
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
    }
  }, [isLoaded, isSignedIn, session?.user]);

  return (
    <>
      <Signup />
      {process.env.NODE_ENV !== 'production' && <TanStackRouterDevtools />}
    </>
  );
};

export const Route = createFileRoute('/signup')({
  component: SignupPage,
  //     path: '/signup',
  //   getParentRoot: () => rootRoute,
});
