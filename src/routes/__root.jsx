import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useSession } from '@clerk/clerk-react';
import NavBar from '../components/_navigation/NavBar';

const RootAppSignIn = () => {
  const { isSignedIn } = useSession();

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
