import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-2 text-sm z-50">
        入力内容は保存されません。プライバシーに配慮しています。
      </div>
    </>
  );
}

export default MyApp; 