'use client';
// React
import { FC, useState } from 'react';
// Next
import { signOut } from 'next-auth/react';
// Components
import Button from './ui/Button';
import { toast } from './ui/Toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutUser = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signOutUser} isLoading={isLoading}>
      SignOut
    </Button>
  );
};

export default SignOutButton;
