import { RouterProvider } from '@tanstack/react-router';
import { AuthProvider, useAuth } from './state/auth';
import { router } from './lib/router';

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}
