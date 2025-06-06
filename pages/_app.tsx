import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="w-full bg-white border-b mb-8">
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/">
            <span className="font-bold text-lg text-blue-700">エクセル数式ナビAI</span>
          </Link>
          <div className="space-x-6">
            <Link href="/generate"><span>数式生成</span></Link>
            <Link href="/faq"><span>FAQ</span></Link>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-2 text-sm z-50">
        入力内容は保存されません。プライバシーに配慮しています。
      </div>
    </>
  );
}

export default MyApp; 