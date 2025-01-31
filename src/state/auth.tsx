import { useEffect } from 'react';
import { authQueryOptions, useAuthQuery } from './queries/auth';
import { useQueryClient } from '@tanstack/react-query';
import { router } from '../lib/router';
import { useSignOutMutation } from './queries/sign-out';

type AuthState =
  | { status: 'PENDING' }
  | { status: 'UNAUTHENTICATED' }
  | { status: 'AUTHENTICATED' };

type AuthUtils = {
  signIn: () => void;
  signOut: () => void;
  ensureData: () => Promise<void>;
};

type AuthData = AuthState & AuthUtils;

function useAuth(): AuthData {
  const authQuery = useAuthQuery();
  const signOutMutation = useSignOutMutation();

  const queryClient = useQueryClient();

  useEffect(() => {
    router.invalidate();
  }, [authQuery.data]);

  useEffect(() => {
    if (authQuery.error === null) return;
    queryClient.setQueryData(['auth'], null);
  }, [authQuery.error, queryClient]);

  const utils: AuthUtils = {
    signIn: () => {
      router.navigate({ to: '/login' });
    },
    signOut: () => {
      signOutMutation.mutate();
    },
    ensureData: () => {
      return queryClient.ensureQueryData(authQueryOptions());
    },
  };

  switch (true) {
    case authQuery.isPending:
      return { ...utils, status: 'PENDING' };

    case !authQuery.data:
      return { ...utils, status: 'UNAUTHENTICATED' };

    default:
      return { ...utils, status: 'AUTHENTICATED' };
  }
}

export { useAuth };
export type { AuthData };
