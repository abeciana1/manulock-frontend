import { createFileRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Signup from '../components/Signup';

const SignupPage = () => {
  return (
    <>
      <Signup />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createFileRoute('/signup')({
    component: SignupPage,
//     path: '/signup',
//   getParentRoot: () => rootRoute,
});
