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

      {/* 機能紹介セクション */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主な機能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/formula-helper" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">フォーミュラ開発支援</h3>
                <p className="text-gray-600 mb-4">
                  数式のステップ解説、エラー診断、対話型チューニングで、複雑な数式も簡単に作成できます。
                </p>
                <p className="text-blue-600">使用シーン：</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>複雑な数式の作り方がわからない</li>
                  <li>エラーが出たが原因がわからない</li>
                  <li>数式を少し修正したい</li>
                </ul>
              </div>
            </Link>

            <Link href="/data-visualization" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">データ可視化・レポート自動化</h3>
                <p className="text-gray-600 mb-4">
                  グラフ生成、Office Scripts、ピボットテーブルで、データの分析と可視化を自動化します。
                </p>
                <p className="text-blue-600">使用シーン：</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>定期的なレポート作成を自動化したい</li>
                  <li>データをグラフで可視化したい</li>
                  <li>ピボットテーブルを簡単に作成したい</li>
                </ul>
              </div>
            </Link>

            <Link href="/data-integration" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">連携・データ取得</h3>
                <p className="text-gray-600 mb-4">
                  Webサービス、Google スプレッドシート、クラウドサービスと連携して、データを自動取得します。
                </p>
                <p className="text-blue-600">使用シーン：</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>外部データを自動で取り込みたい</li>
                  <li>Google スプレッドシートと連携したい</li>
                  <li>クラウドサービスと連携したい</li>
                </ul>
              </div>
            </Link>

            <Link href="/templates" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">業種特化テンプレート</h3>
                <p className="text-gray-600 mb-4">
                  製造業、小売業、財務分析、プロジェクト管理など、業種別のテンプレートを提供します。
                </p>
                <p className="text-blue-600">使用シーン：</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>業種特有の分析をしたい</li>
                  <li>定型的な計算を自動化したい</li>
                  <li>プロジェクト管理を効率化したい</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 