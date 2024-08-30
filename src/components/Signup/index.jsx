import { SignedOut, useSession, SignUp } from '@clerk/clerk-react';

const Signup = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignedOut>
        <SignUp path="/signup" />
      </SignedOut>
    </section>
  );
};

export default Signup;
