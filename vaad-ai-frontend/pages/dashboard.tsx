import { motion } from 'framer-motion';
import Dashboard from '../components/Dashboard';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'BTC Price',
        data: [65000, 68000, 62000, 70000, 72000, 75000],
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Portfolio Performance' } },
    scales: { y: { beginAtZero: false } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <header className="p-6 bg-white/5 backdrop-blur-xl shadow-2xl flex justify-between items-center border-b border-white/10">
        <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          VAAD AI-0G Dashboard
        </h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.aside 
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col space-y-4"
        >
          <nav className="space-y-2">
            {['Dashboard', 'Trade', 'Portfolio', 'Whales', 'Social', 'Risk', 'Storage'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 4 }}
                className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
              >
                {item}
              </motion.button>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Portfolio Overview */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {[
                { title: 'Total Value', value: '$125,430', change: '+2.5%', color: 'green' },
                { title: 'Daily P&L', value: '+1.2%', change: '+0.8%', color: 'blue' },
                { title: 'Open Positions', value: '5', change: '-1', color: 'purple' },
                { title: 'Win Rate', value: '78%', change: '+3%', color: 'emerald' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10"
                >
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${stat.color}-400`}>{stat.change}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10">
              <Line data={chartData} options={chartOptions} />
            </div>
          </motion.section>

          {/* Main Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trading Assistant
            </h2>
            <Dashboard />
          </motion.div>
        </main>
      </div>

      <footer className="w-full p-6 bg-white/5 backdrop-blur-xl text-center border-t border-white/10 mt-auto">
        <p className="text-gray-400">
          &copy; 2025 VAAD AI-0G.
        </p>
      </footer>
    </div>
  );
};

export default DashboardPage;