import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/axios';

export function useSignOutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['sign-out'],
    mutationFn: async () => {
      return await api.post('/sign-out');
    },
    onSuccess: () => {
      queryClient.setQueryData(['auth'], null);
      sessionStorage.removeItem('accessToken');
    },
  });
}
