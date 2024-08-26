import React from 'react'
import { SignedOut, SignInButton } from "@clerk/clerk-react";

const SignIn = () => {
    return (
        <>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
        </>
    )
}

export default SignIn