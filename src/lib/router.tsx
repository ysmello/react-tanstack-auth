import { createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { queryClient } from './query';
import { QueryClient } from '@tanstack/react-query';
import { AuthData } from '../state/auth';

type RouterContext = {
  auth: AuthData;
  queryClient: QueryClient;
};

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: null as unknown as AuthData,
    queryClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };
export type { RouterContext };
