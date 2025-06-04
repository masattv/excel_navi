import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: '数式生成', href: '/generate' },
];

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-md">
      <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white hover:text-blue-100 transition-colors duration-200">
              エクセル数式ナビAI
            </Link>
            <div className="hidden sm:flex sm:space-x-4 ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-white text-blue-700 shadow-md transform scale-105'
                      : 'text-white hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* モバイルメニューボタン */}
          <button
            className="sm:hidden p-2 rounded-md text-white hover:bg-blue-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'bg-white text-blue-700'
                      : 'text-white hover:bg-blue-400 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 