import React from 'react';
import { DataIntegration } from '../components/DataIntegration';
import Link from 'next/link';

export default function DataIntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              連携・データ取得
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
                <h3 className="text-lg font-semibold text-blue-600 mb-2">1. Webサービス連携</h3>
                <p className="text-gray-600">
                  WEBSERVICE関数やFILTERXML関数を使用して、外部APIからデータを取得する数式を生成します。
                  リアルタイムでデータを更新できます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  使用例：株価情報の取得、為替レートの取得、天気情報の取得
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">2. Google スプレッドシート連携</h3>
                <p className="text-gray-600">
                  GOOGLEFINANCE関数やQUERY関数など、Google スプレッドシート用の数式を生成します。
                  Google スプレッドシートと連携してデータを取得できます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  使用例：株価情報の取得、為替レートの取得、カスタムクエリの実行
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">3. クラウド連携</h3>
                <p className="text-gray-600">
                  OneDrive、SharePoint、Teams、Slackなどのクラウドサービスと連携するスクリプトを生成します。
                  クラウド上のデータを自動で取得・更新できます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  使用例：OneDrive/SharePoint上のファイル参照、Teams/Slackへの結果通知
                </p>
              </div>
            </div>
          </div>

          <DataIntegration />
        </div>
      </main>
    </div>
  );
} 