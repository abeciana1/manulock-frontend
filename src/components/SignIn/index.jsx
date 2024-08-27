import React from 'react'
import { SignedOut, SignInButton, useSignIn } from "@clerk/clerk-react";
import { Heading1 } from '../_styled/Headings'
import { SolidButton } from '../_inputs/Buttons'

const SignIn = () => {
    const { signIn } = useSignIn()

    console.log('res sign in', signIn)

    return (
        <section className='hero w-full max-w-xs sm:max-w-md mx-auto flex justify-center items-center h-screen'>
            <div className="hero-content bg-accent-yellow text-center flex flex-col rounded-md">
                <Heading1 text='Sign in or sign up for an account' color='primary' />
                <div className="py-6">Click on the button below to sign into your account or create a new one.</div>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <SolidButton
                            text='Sign in/Sign up'
                            color='blue'
                        />
                    </SignInButton>
                </SignedOut>
            </div>
        </section>
    )
}

export default SignIn