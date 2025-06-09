import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ChartConfig {
  type: 'sparkline' | 'image';
  data: any[];
  options: any;
}

interface PivotConfig {
  rows: string[];
  columns: string[];
  values: string[];
  aggregation: 'sum' | 'average' | 'count';
}

export const DataVisualization: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('graph');
  const [inputData, setInputData] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig | null>(null);
  const [pivotConfig, setPivotConfig] = useState<PivotConfig | null>(null);
  const [scriptCode, setScriptCode] = useState<string>('');

  const handleFeatureChange = (feature: string) => {
    setSelectedFeature(feature);
    setInputData('');
    setResult('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let output = '';
    if (selectedFeature === 'graph') {
      // 例: "A1:A10, line" または "https://example.com/image.png, width=200, height=100"
      if (inputData.includes('http')) {
        // IMAGE関数
        const [url, ...opts] = inputData.split(',').map(s => s.trim());
        const options: any = {};
        opts.forEach(opt => {
          const [k, v] = opt.split('=');
          if (k && v) options[k] = v;
        });
        output = `=IMAGE(\"${url}\"${Object.keys(options).length ? ', ' + Object.values(options).join(', ') : ''})`;
      } else {
        // SPARKLINE関数
        const [range, type] = inputData.split(',').map(s => s.trim());
        if (range) {
          output = `=SPARKLINE(${range}${type ? ', \"' + type + '\"' : ''})`;
        } else {
          output = 'データ範囲を入力してください（例：A1:A10, line）';
        }
      }
    } else if (selectedFeature === 'script') {
      // Office Scripts雛形生成
      // 例: "行:部門, 列:月, 値:売上, 集計:sum"
      const rows = inputData.match(/行:([^,]+)/)?.[1]?.trim() || '';
      const cols = inputData.match(/列:([^,]+)/)?.[1]?.trim() || '';
      const vals = inputData.match(/値:([^,]+)/)?.[1]?.trim() || '';
      const agg = inputData.match(/集計:([^,]+)/)?.[1]?.trim() || 'sum';
      output = `function main(workbook: ExcelScript.Workbook) {\n  const sheet = workbook.getActiveWorksheet();\n  const range = sheet.getUsedRange();\n  const pivotTable = sheet.addPivotTable(range, \"PivotTable1\");\n  pivotTable.addRowHierarchy(\"${rows}\");\n  pivotTable.addColumnHierarchy(\"${cols}\");\n  pivotTable.addDataHierarchy(\"${vals}\", \"${agg}\");\n}`;
    } else if (selectedFeature === 'pivot') {
      // ピボットテーブル設定例
      // 例: "行:部門, 列:月, 値:売上, 集計:sum"
      const rows = inputData.match(/行:([^,]+)/)?.[1]?.trim() || '';
      const cols = inputData.match(/列:([^,]+)/)?.[1]?.trim() || '';
      const vals = inputData.match(/値:([^,]+)/)?.[1]?.trim() || '';
      const agg = inputData.match(/集計:([^,]+)/)?.[1]?.trim() || 'sum';
      output = `ピボットテーブル設定例:\n- 行フィールド: ${rows}\n- 列フィールド: ${cols}\n- 値フィールド: ${vals}\n- 集計方法: ${agg}`;
    }
    setResult(output);
  };

  const generateSparklineFormula = (data: any[], options: any) => {
    // SPARKLINE関数の数式を生成
    const formula = `=SPARKLINE(${data.join(',')},${JSON.stringify(options)})`;
    return formula;
  };

  const generateImageFormula = (url: string, options: any) => {
    // IMAGE関数の数式を生成
    const formula = `=IMAGE("${url}",${JSON.stringify(options)})`;
    return formula;
  };

  const generateOfficeScript = (config: PivotConfig) => {
    // Office Scriptsのコードを生成
    const script = `
      function main(workbook: ExcelScript.Workbook) {
        const sheet = workbook.getActiveWorksheet();
        const range = sheet.getUsedRange();
        
        // ピボットテーブルの作成
        const pivotTable = sheet.addPivotTable(range, "PivotTable1");
        
        // 行フィールドの設定
        ${config.rows.map(row => `pivotTable.addRowHierarchy("${row}");`).join('\n')}
        
        // 列フィールドの設定
        ${config.columns.map(col => `pivotTable.addColumnHierarchy("${col}");`).join('\n')}
        
        // 値フィールドの設定
        ${config.values.map(val => `pivotTable.addDataHierarchy("${val}", "${config.aggregation}");`).join('\n')}
      }
    `;
    setScriptCode(script);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">機能を選択</h3>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleFeatureChange('graph')}
            className={`p-4 rounded-lg border ${
              selectedFeature === 'graph'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            グラフ生成数式
          </button>
          <button
            onClick={() => handleFeatureChange('script')}
            className={`p-4 rounded-lg border ${
              selectedFeature === 'script'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            Office Scripts
          </button>
          <button
            onClick={() => handleFeatureChange('pivot')}
            className={`p-4 rounded-lg border ${
              selectedFeature === 'pivot'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            ピボットテーブル
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
              selectedFeature === 'graph'
                ? 'データ範囲を入力してください（例：A1:B10）'
                : selectedFeature === 'script'
                ? 'スクリプトの要件を入力してください'
                : 'ピボットテーブルの設定を入力してください'
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