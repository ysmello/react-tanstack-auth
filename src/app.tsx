import { RouterProvider } from '@tanstack/react-router';
import { useAuth } from './state/auth';
import { router } from './lib/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/query';

function RouterProviderWithContext() {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProviderWithContext />
    </QueryClientProvider>
  );
}
