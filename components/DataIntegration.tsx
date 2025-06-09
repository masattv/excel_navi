import React, { useState } from 'react';

interface WebServiceConfig {
  url: string;
  method: 'GET' | 'POST';
  headers: Record<string, string>;
  params: Record<string, string>;
}

interface CloudConfig {
  platform: 'onedrive' | 'sharepoint' | 'teams' | 'slack';
  action: 'read' | 'write' | 'notify';
  path: string;
}

export const DataIntegration: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('web');
  const [inputData, setInputData] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleFeatureChange = (feature: string) => {
    setSelectedFeature(feature);
    setInputData('');
    setResult('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際の処理を実装
    setResult('処理結果がここに表示されます');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">機能を選択</h3>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleFeatureChange('web')}
            className={`p-4 rounded-lg border ${
              selectedFeature === 'web'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            Webサービス連携
          </button>
          <button
            onClick={() => handleFeatureChange('sheets')}
            className={`p-4 rounded-lg border ${
              selectedFeature === 'sheets'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            Google Sheets連携
          </button>
          <button
            onClick={() => handleFeatureChange('cloud')}
            className={`p-4 rounded-lg border ${
              selectedFeature === 'cloud'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            クラウドサービス連携
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="input"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            入力データ
          </label>
          <textarea
            id="input"
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder={
              selectedFeature === 'web'
                ? 'APIのエンドポイントやパラメータを入力してください'
                : selectedFeature === 'sheets'
                ? 'Google Sheetsの設定を入力してください'
                : 'クラウドサービスの設定を入力してください'
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          生成
        </button>
      </form>

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">結果</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
}; 