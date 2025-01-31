import { createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';

type AuthContext = {
  isAuthenticated: boolean;
};

type RouterContext = {
  auth: AuthContext;
};

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined! as AuthContext,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };
export type { RouterContext };
