import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vaad-gradient-start to-vaad-gradient-end">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;