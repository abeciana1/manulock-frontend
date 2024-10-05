import { SignUp } from '@clerk/clerk-react';

const Signup = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignUp
        signInUrl={import.meta.env.CLERK_SIGN_UP_URL}
        routing="path"
        path="/signup"
        afterSignIn="/dashboard"
      />
    </section>
  );
};

export default Signup;
