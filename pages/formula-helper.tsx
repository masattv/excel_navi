import React from 'react';
import { FormulaHelper } from '../components/FormulaHelper';
import Link from 'next/link';

export default function FormulaHelperPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              フォーミュラ開発支援
            </h1>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">この機能の使い方</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">1. 数式のステップ解説</h3>
                <p className="text-gray-600">
                  複雑な数式を入力すると、各ステップごとに解説を表示します。
                  数式の構造や各関数の役割を理解しながら、効率的に数式を作成できます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">2. エラー診断・修正アシスト</h3>
                <p className="text-gray-600">
                  #N/A や #VALUE! などのエラーが発生した場合、
                  考えられる原因と解決策を提案します。
                  エラーの修正方法を理解しながら、正しい数式を作成できます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">3. 対話型チューニング</h3>
                <p className="text-gray-600">
                  チャット形式で数式の調整ができます。
                  「合計だけ出したい」「特定条件で除外したい」などの要望に応じて、
                  数式を逐次更新します。
                </p>
              </div>
            </div>
          </div>

          <FormulaHelper />
        </div>
      </main>
    </div>
  );
} 