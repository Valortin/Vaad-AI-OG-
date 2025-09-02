const WhaleTracker = () => {
  const whales = [
    { tier: 'Mega Whale', impact: 'High', activity: '$10M moved' },
    { tier: 'Whale', impact: 'Medium', activity: '$2M moved' },
    { tier: 'Dolphin', impact: 'Low', activity: '$500K moved' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Whale Activity</h3>
      <ul className="space-y-2">
        {whales.map((whale, index) => (
          <li key={index} className="p-2 bg-gray-700 rounded">
            <span className="font-bold">{whale.tier}</span> - Impact: {whale.impact}, Activity: {whale.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhaleTracker;