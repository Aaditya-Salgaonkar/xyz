import React from 'react';
import { useSession } from 'clerk/clerk-react';

function Dashboard() {
  const { user } = useSession();

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      {/* Add your dashboard components here */}
    </div>
  );
}

export default Dashboard;