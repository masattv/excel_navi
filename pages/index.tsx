import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">エクセル数式ナビAI</h1>
        <p className="mb-8 text-lg text-gray-700">AIがあなたの要件に合わせて最適なエクセル数式を自動生成します。</p>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">主な機能</h2>
          <ul className="list-disc pl-6 text-gray-800">
            <li>業務テンプレートからの数式自動生成</li>
            <li>自由入力によるカスタム数式生成</li>
            <li>最新のExcel関数にも対応</li>
            <li>数式の日本語解説付き</li>
          </ul>
        </div>
        <div className="text-center">
          <a href="/generate" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">数式を生成する</a>
        </div>
      </div>
    </div>
  );
};

export default Home; 