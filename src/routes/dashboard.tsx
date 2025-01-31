import { createFileRoute, redirect } from '@tanstack/react-router';
import Dashboard from '../pages/Dashboard';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ context }) => {
    if (context.auth.status === 'UNAUTHENTICATED') {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: Dashboard,
});
