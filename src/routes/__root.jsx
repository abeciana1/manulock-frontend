import {
  createRootRoute,
  Outlet,
  useNavigate,
  useLocation,
} from '@tanstack/react-router';
import { useSession } from '@clerk/clerk-react';
import NavBar from '../components/_navigation/NavBar';
import { useEffect } from 'react';

const RootAppSignIn = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useSession();
  const location = useLocation();

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn && location.pathname !== '/signup') {
        navigate({ to: '/signin' });
      } else if (!isSignedIn && location.pathname !== '/signin') {
        navigate({ to: '/signup' });
      }
    }
  }, [isLoaded, isSignedIn]);

  return (
    <>
      {isSignedIn && (
        <>
          <NavBar />
        </>
      )}
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootAppSignIn,
});
