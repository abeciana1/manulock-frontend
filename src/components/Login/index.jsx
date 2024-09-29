import React from 'react';
import { SignedOut, SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignedOut>
        <SignIn path="/" />
      </SignedOut>
    </section>
  );
};

export default Login;
