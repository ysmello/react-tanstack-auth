import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../lib/axios';

async function fetchAuth() {
  const response = await api.get('auth');
  return response.data;
}

export function authQueryOptions() {
  return queryOptions({
    queryKey: ['auth'],
    queryFn: fetchAuth,
  });
}

export function useAuthQuery() {
  return useQuery(authQueryOptions());
}
