import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay before redirecting to dashboard (optional)
    const timer = setTimeout(() => router.push('/dashboard'), 10000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-vaad-gradient-start to-vaad-gradient-end text-white">
      <header className="p-6 bg-gray-800 shadow-lg flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="VAAD AI-0G Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold">VAAD AI-0G</h1>
        </div>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-vaad-blue rounded hover:bg-vaad-gradient-end transition duration-300"
        >
          Enter Dashboard
        </button>
      </header>

      <main className="container mx-auto p-6 space-y-12">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to VAAD AI-0G</h2>
          <p className="text-lg text-gray-200">
            Built on Thursday, September 11, 2025, 05:32 PM WAT - Your AI-Powered Trading Revolution
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-vaad-blue">What It Does</h3>
          <p className="text-gray-300">
            VAAD AI-0G is a cutting-edge, AI-driven trading assistant dApp that empowers cryptocurrency traders with real-time market insights, whale intelligence, and risk management tools for spot and futures trading. Integrated with a SocialFi platform, it fosters community-driven strategies and validates trades on 0G’s decentralized Layer 1 blockchain, making AI a public good.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-vaad-blue">The Problem It Solves</h3>
          <p className="text-gray-300">
            It addresses the lack of accessible, transparent, and scalable AI tools in DeFi trading, where centralized platforms often hide data and charge high fees. VAAD AI-0G eliminates this by providing decentralized, real-time analytics, helping traders mitigate risks and capitalize on market movements, while bridging the gap between individual traders and whale activities.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-vaad-blue">Challenges I Ran Into</h3>
          <p className="text-gray-300">
            Integrating 0G Compute for onchain AI inference proved complex due to initial latency issues. Balancing real-time data from 0G Chain with external APIs required optimization, and designing an intuitive UI that visualized whale intelligence and risk metrics posed a creative challenge. Securing wallet authentication across multiple networks also demanded meticulous testing.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-vaad-blue">Technologies I Used</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Frontend: Next.js, Tailwind CSS, TypeScript</li>
            <li>Blockchain: 0G Chain (EVM-compatible), Web3.js</li>
            <li>AI Integration: 0G Compute for inference and model training</li>
            <li>Storage: 0G Storage for datasets and trade history</li>
            <li>Data Availability: 0G Data Availability (DA) for scalability</li>
            <li>Database: SQLite with Prisma ORM</li>
            <li>APIs: Twelve Data for technical indicators</li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-vaad-blue">How We Built It</h3>
          <p className="text-gray-300">
            We started with a Next.js foundation, styling it with Tailwind CSS for a sleek UI. Smart contracts were developed using Hardhat on 0G Chain to handle price fetching, trade validation, and whale tracking. 0G Compute powered AI models for recommendations and risk analysis, while 0G Storage secured data. The frontend evolved into an interactive dashboard, with wallet integration and SocialFi features added iteratively, tested on 0G’s testnet before mainnet deployment.
          </p>
        </section>

        <div className="text-center">
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-vaad-blue rounded-lg hover:bg-vaad-gradient-end transition duration-300 text-lg font-semibold"
          >
            Get Started Now
          </button>
        </div>
      </main>

      <footer className="p-4 text-center bg-gray-800 mt-12">
        <p className="text-gray-400">&copy; 2025 VAAD AI-0G. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;