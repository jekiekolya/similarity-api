'use client';
// React
import { FC, useState } from 'react';
// Next
import { signIn } from 'next-auth/react';
// Components
import Button from './ui/Button';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      toast({
        title:
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      SignIn
    </Button>
  );
};

export default SignInButton;
