import { useState } from 'react';

const TradeForm = () => {
  const [form, setForm] = useState({ type: 'spot', asset: 'BTC', amount: '', entry: '', takeProfit: '', stopLoss: '' });
  const [validation, setValidation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { entry, takeProfit, stopLoss } = form;
    const riskReward = (Number(takeProfit) - Number(entry)) / (Number(entry) - Number(stopLoss));
    setValidation(`Trade Validated! Risk/Reward Ratio: ${riskReward.toFixed(2)}`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full p-2 bg-gray-700 rounded"
        >
          <option value="spot">Spot Trading</option>
          <option value="futures">Futures Trading</option>
        </select>
        <input
          type="text"
          placeholder="Asset (e.g., BTC)"
          value={form.asset}
          onChange={(e) => setForm({ ...form, asset: e.target.value })}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          placeholder="Entry Price"
          value={form.entry}
          onChange={(e) => setForm({ ...form, entry: e.target.value })}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          placeholder="Take Profit"
          value={form.takeProfit}
          onChange={(e) => setForm({ ...form, takeProfit: e.target.value })}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          placeholder="Stop Loss"
          value={form.stopLoss}
          onChange={(e) => setForm({ ...form, stopLoss: e.target.value })}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button type="submit" className="w-full p-2 bg-vaad-blue rounded hover:bg-vaad-gradient-end">
          Validate Trade
        </button>
      </form>
      {validation && <p className="text-green-400">{validation}</p>}
    </div>
  );
};

export default TradeForm;