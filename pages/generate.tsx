import React, { useState } from 'react';
import { templates } from '../data/templates';
import TemplateSelector from '@/components/TemplateSelector';
import LoadingSpinner from '@/components/LoadingSpinner';

// 結果表示用の新コンポーネント
const FormulaResult: React.FC<{ result: string }> = ({ result }) => {
  // コードブロック（```excel ... ```）を抽出
  const codeBlocks = Array.from(result.matchAll(/```(?:excel)?\n([\s\S]*?)```/g)).map(m => m[1].trim());
  // =で始まる行も抽出
  const formulaLines = result.split('\n').filter(line => line.trim().startsWith('='));
  // 解説部分（コードブロックと=で始まる行を除外）
  let explanation = result.replace(/```(?:excel)?\n[\s\S]*?```/g, '');
  explanation = explanation.replace(/^=.+$/gm, '');
  explanation = explanation.replace(/。/g, '。\n');

  return (
    <div className="mt-8 p-4 bg-gray-50 border rounded-lg">
      {(formulaLines.length > 0 || codeBlocks.length > 0) && (
        <div className="mb-4">
          <div className="font-semibold mb-1">生成された数式</div>
          {formulaLines.map((f, i) => (
            <pre key={i} className="bg-white border rounded px-3 py-2 font-mono text-blue-700 whitespace-pre-wrap break-all text-sm mb-2">{f}</pre>
          ))}
          {codeBlocks.map((block, i) => (
            <pre key={i + formulaLines.length} className="bg-white border rounded px-3 py-2 font-mono text-blue-700 whitespace-pre-wrap break-all text-sm mb-2">{block}</pre>
          ))}
        </div>
      )}
      <div className="text-gray-800 whitespace-pre-line leading-relaxed">
        {explanation.trim()}
      </div>
    </div>
  );
};

const GeneratePage: React.FC = () => {
  const [selectedId, setSelectedId] = useState('');
  const [requirement, setRequirement] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedTemplate = templates.find(t => t.id === selectedId);

  // テンプレート選択時に要件欄へ例文を自動入力（未入力時のみ）
  const handleSelectTemplate = (id: string) => {
    setSelectedId(id);
    const template = templates.find(t => t.id === id);
    if (template && !requirement) {
      setRequirement(template.promptExample);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setResult('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateName: selectedTemplate ? selectedTemplate.name : '',
          requirement,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || '生成に失敗しました');
      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">エクセル数式ナビAI - 数式自動生成</h1>
      <TemplateSelector
        templates={templates}
        selectedId={selectedId}
        onSelect={handleSelectTemplate}
      />
      <div className="mb-6">
        <label className="block mb-2 font-semibold">要件を入力</label>
        <textarea
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder={selectedTemplate ? selectedTemplate.promptExample : '例: 売上合計から消費税を計算する数式を教えて'}
          value={requirement}
          onChange={e => setRequirement(e.target.value)}
        />
      </div>
      <button
        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!requirement || loading}
        onClick={handleGenerate}
      >
        {loading ? <LoadingSpinner /> : 'AIで数式を生成'}
      </button>
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}
      {result && <FormulaResult result={result} />}
    </div>
  );
};

export default GeneratePage; 