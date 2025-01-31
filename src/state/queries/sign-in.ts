import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/axios';
import { z } from 'zod';

export const signInFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type SignInResponse = {
  accessToken: string;
};

export type SignInFormSchema = z.infer<typeof signInFormSchema>;

async function mutationSignIn({
  username,
  password,
}: SignInFormSchema): Promise<SignInResponse> {
  const response = await api.post('/sign-in', { username, password });
  return response.data;
}

export function useSignInMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: mutationSignIn,
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], data);
      console.log(data);
      sessionStorage.setItem('accessToken', data.accessToken);
    },
    onError: () => {
      sessionStorage.removeItem('accessToken');
    },
  });
}
