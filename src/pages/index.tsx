import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">エクセル数式ナビAI</h1>
      <p className="mb-8">日本企業の業務に特化したExcel数式自動生成サービス</p>
      <Link href="/generate">
        <a className="inline-block bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition">数式をAIで生成する</a>
      </Link>
    </div>
  );
};

export default Home; 