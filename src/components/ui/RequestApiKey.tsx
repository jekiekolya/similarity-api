'use client';

import { FC, FormEvent, useState } from 'react';
import { toast } from './Toast';
import { createApiKey } from '@/helpers/create-api.key';
import { Key } from 'lucide-react';

const RequestApiKey: FC = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCreating(true);

    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Error',
          message: error.message,
          type: 'error',
        });

        return;
      }

      toast({
        title: 'Error',
        message: 'Something went wrong',
        type: 'error',
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container md:max-w-2xl ">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
      </div>
    </div>
  );
};

export default RequestApiKey;
