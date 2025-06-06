import React, { useState } from 'react';

interface FormulaResultProps {
  result: string;
}

const FormulaResult: React.FC<FormulaResultProps> = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-50 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">生成結果</h3>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {copied ? 'コピーしました！' : 'コピー'}
        </button>
      </div>
      <div className="whitespace-pre-wrap font-mono bg-white p-4 rounded border">
        {result}
      </div>
    </div>
  );
};

export default FormulaResult; 