import { createFileRoute, redirect } from '@tanstack/react-router';
import Dashboard from '../pages/Dashboard';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: ({ context: { auth }, location }) => {
    if (!auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: Dashboard,
});
