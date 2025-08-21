import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useCoinData } from '../hooks/useCoinData';
import { formatEther } from 'viem';

interface Zora20Token {
  address: string;
  name?: string;
  symbol?: string;
  marketCap?: string;
  volume24h?: string;
  marketCapDelta24h?: string;
}

const Chart: React.FC = () => {
  const { coins, loading, error } = useCoinData();

  const data = coins.map((coin: Zora20Token) => {
    // Validate and clean marketCap and volume24h
    const marketCapValue = coin.marketCap && !isNaN(Number(coin.marketCap)) && Number(coin.marketCap) >= 0 ? coin.marketCap : '0';
    const volume24hValue = coin.volume24h && !isNaN(Number(coin.volume24h)) && Number(coin.volume24h) >= 0 ? coin.volume24h : '0';

    return {
      name: coin.symbol || coin.name || 'Unknown',
      marketCap: Number(formatEther(BigInt(marketCapValue))),
      volume: Number(formatEther(BigInt(volume24hValue))),
    };
  });

  if (loading) return <p>Loading chart data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marketCap" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="volume" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;