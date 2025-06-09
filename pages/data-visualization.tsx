import React from 'react';
import { DataVisualization } from '../components/DataVisualization';
import Link from 'next/link';

export default function DataVisualizationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              データ可視化・レポート自動化
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
                <h3 className="text-lg font-semibold text-blue-600 mb-2">1. グラフ生成フォーミュラ</h3>
                <p className="text-gray-600">
                  SPARKLINE関数やIMAGE関数を使用して、セル内にミニグラフを埋め込む数式を生成します。
                  データの傾向を一目で把握できます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  使用例：売上推移のミニグラフ、在庫変動の可視化、KPIのトレンド表示
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">2. Office Scriptsコード生成</h3>
                <p className="text-gray-600">
                  定期的なレポート作成を自動化するためのOffice Scriptsコードを生成します。
                  ワンクリックでレポートを更新できます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  使用例：月次レポートの自動生成、データの自動集計、フォーマットの自動適用
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">3. ピボットテーブル自動設定</h3>
                <p className="text-gray-600">
                  データを選択するだけで、最適なピボットテーブルの設定を自動生成します。
                  複雑な設定作業を省略できます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  使用例：売上分析、顧客分析、在庫分析、予実管理
                </p>
              </div>
            </div>
          </div>

          <DataVisualization />
        </div>
      </main>
    </div>
  );
} 