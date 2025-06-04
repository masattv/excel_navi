import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴとコピーライト */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
              エクセル数式ナビAI
            </Link>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} エクセル数式ナビAI. All rights reserved.
            </p>
          </div>

          {/* リンク（数式生成のみ） */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/generate" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                  数式生成
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">お問い合わせ</h3>
            <p className="text-sm text-gray-500">
              ご質問やご要望は
              <a
                href="https://x.com/mk_dev_0430"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                @mk_dev_0430 (X)
              </a>
              までご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 