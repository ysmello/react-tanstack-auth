import { createFileRoute, redirect } from '@tanstack/react-router';
import Login from '../pages/Login';

export const Route = createFileRoute('/login')({
  beforeLoad: async ({ context }) => {
    if (context.auth.status === 'AUTHENTICATED') {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: Login,
});
