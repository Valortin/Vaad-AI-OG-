import { useState } from 'react';

const RiskCalculator = () => {
  const [risk, setRisk] = useState({ entry: '', takeProfit: '', stopLoss: '' });
  const [result, setResult] = useState('');

  const calculateRisk = () => {
    const { entry, takeProfit, stopLoss } = risk;
    if (entry && takeProfit && stopLoss) {
      const riskReward = (Number(takeProfit) - Number(entry)) / (Number(entry) - Number(stopLoss));
      const positionSize = (1000 / (Number(entry) - Number(stopLoss))).toFixed(2);
      setResult(`Risk/Reward: ${riskReward.toFixed(2)}, Position Size: ${positionSize} units`);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Risk Calculator</h3>
      <input
        type="number"
        placeholder="Entry Price"
        value={risk.entry}
        onChange={(e) => setRisk({ ...risk, entry: e.target.value })}
        className="w-full p-2 bg-gray-700 rounded"
      />
      <input
        type="number"
        placeholder="Take Profit"
        value={risk.takeProfit}
        onChange={(e) => setRisk({ ...risk, takeProfit: e.target.value })}
        className="w-full p-2 bg-gray-700 rounded"
      />
      <input
        type="number"
        placeholder="Stop Loss"
        value={risk.stopLoss}
        onChange={(e) => setRisk({ ...risk, stopLoss: e.target.value })}
        className="w-full p-2 bg-gray-700 rounded"
      />
      <button onClick={calculateRisk} className="w-full p-2 bg-vaad-blue rounded hover:bg-vaad-gradient-end">
        Calculate Risk
      </button>
      {result && <p className="text-green-400">{result}</p>}
    </div>
  );
};

export default RiskCalculator;