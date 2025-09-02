import TradeForm from './TradeForm';
import WhaleTracker from './WhaleTracker';
import SocialFeed from './SocialFeed';
import RiskCalculator from './RiskCalculator';
import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('trade');

  const tabs = [
    { id: 'trade', label: 'Trade', component: <TradeForm /> },
    { id: 'whales', label: 'Whale Tracker', component: <WhaleTracker /> },
    { id: 'social', label: 'Social Feed', component: <SocialFeed /> },
    { id: 'risk', label: 'Risk Calculator', component: <RiskCalculator /> },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium ${activeTab === tab.id ? 'text-vaad-blue border-b-2 border-vaad-blue' : 'text-gray-400'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs.find((tab) => tab.id === activeTab)?.component}</div>
    </div>
  );
};

export default Dashboard;