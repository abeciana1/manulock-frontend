import { createFileRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Login from '../components/Login';

const SigninPage = () => {
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
