import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../state/auth';

function Dashboard() {
  const auth = useAuth();

  const navigate = useNavigate({ from: '/dashboard' });

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          auth.logout();
          navigate({ to: '/login' });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
