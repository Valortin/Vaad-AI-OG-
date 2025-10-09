import TradeForm from './TradeForm';
import WhaleTracker from './WhaleTracker';
import SocialFeed from './SocialFeed';
import RiskCalculator from './RiskCalculator';
import StorageManager from './StorageManager';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('trade');

  const tabs = [
    { id: 'trade', label: 'Trade', component: <TradeForm /> },
    { id: 'whales', label: 'Whales', component: <WhaleTracker /> },
    { id: 'social', label: 'Social', component: <SocialFeed /> },
    { id: 'risk', label: 'Risk', component: <RiskCalculator /> },
    { id: 'storage', label: 'Storage', component: <StorageManager /> },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10">
      <div className="flex space-x-1 border-b border-white/20 overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            className={`px-6 py-3 font-semibold whitespace-nowrap rounded-t-xl transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white bg-white/5'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 p-6 bg-white/3 rounded-xl border border-white/10"
      >
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </motion.div>
    </div>
  );
};

export default Dashboard;