import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    if (context.auth.status === 'UNAUTHENTICATED') {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
        replace: true,
      });
    }
  },
});
