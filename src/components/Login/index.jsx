import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignIn
        signUpUrl={import.meta.env.CLERK_SIGN_IN_URL}
        routing="path"
        path="/signin"
      />
    </section>
  );
};

export default Login;
