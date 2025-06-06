import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヒーローセクション */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
          エクセル数式ナビAI
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
          日本のビジネスシーンに最適化されたAI数式生成ツール「エクセル数式ナビAI」。<br />
          直感的な操作で、業務効率を劇的にアップ。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link 
            href="/generate" 
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            数式を生成する
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">日本語で要件を入力</h3>
            <p className="text-gray-600">自然な日本語で要件を入力するだけで、最適な数式を自動生成</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">直感的な操作</h3>
            <p className="text-gray-600">複雑な設定は不要。日本語で要件を入力するだけで、最適な数式を自動生成します。</p>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主な特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">直感的な操作</h3>
              <p className="text-gray-600">
                複雑な設定は不要。日本語で要件を入力するだけで、最適な数式を自動生成します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">業務に最適化</h3>
              <p className="text-gray-600">
                日本のビジネスシーンでよく使われる数式パターンを豊富に収録。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 