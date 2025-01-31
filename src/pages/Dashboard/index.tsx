import { useAuth } from '../../state/auth';

function Dashboard() {
  const auth = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
