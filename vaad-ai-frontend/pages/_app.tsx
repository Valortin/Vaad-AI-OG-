import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vaad-gradient-start to-vaad-gradient-end">
      <header className="p-4 bg-gray-800 shadow-lg">
        <img src="/logo.png" alt="VAAD AI-0G Logo" className="h-12" />
        <h1 className="text-2xl font-bold text-white">VAAD AI-0G</h1>
      </header>
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;