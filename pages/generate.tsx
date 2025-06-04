import { useState } from 'react';
import Layout from '../components/layout/Layout';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');
    try {
      const res = await fetch('/api/generate-formula', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
      } else {
        setError(data.error || '生成に失敗しました');
      }
    } catch {
      setError('通信エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="max-w-2xl mx-auto py-12">
        <h1 className="text-2xl font-bold mb-6 text-center">数式自動生成（AI）</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="例: 売上合計から消費税を計算する数式を教えて"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? '生成中...' : '数式を生成'}
          </button>
        </form>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {result && (
          <div className="bg-white rounded-lg shadow-md p-6 whitespace-pre-line">
            <h2 className="text-lg font-bold mb-2">AI生成結果</h2>
            <div className="text-gray-800">{result}</div>
          </div>
        )}
      </section>
    </Layout>
  );
} 