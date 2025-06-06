import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = typeof window !== 'undefined' ? require('next/router').useRouter() : { pathname: '' };
  return (
    <>
      {/* 共通ナビゲーションバー */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto flex items-center px-4 py-3">
          <Link href="/">
            <span className="font-bold text-lg mr-8">エクセル数式ナビAI</span>
          </Link>
          <div className="flex space-x-2">
            <Link href="/">
              <span className={`px-4 py-1 rounded-full font-semibold ${router.pathname === '/' ? 'bg-white text-blue-700' : 'text-white'}`}>ホーム</span>
            </Link>
            <Link href="/generate">
              <span className={`px-4 py-1 rounded-full font-semibold ${router.pathname === '/generate' ? 'bg-white text-blue-700' : 'text-white'}`}>数式生成</span>
            </Link>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-2 text-sm z-50">
        入力内容は保存されません。プライバシーに配慮しています。
      </div>
    </>
  );
}

export default MyApp; 