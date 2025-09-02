import Dashboard from '../components/Dashboard';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Trading Assistant Dashboard</h2>
      <Dashboard />
    </div>
  );
};

export default Home;