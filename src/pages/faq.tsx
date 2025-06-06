import React from 'react';

const FAQPage: React.FC = () => (
  <div className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="text-2xl font-bold mb-6">よくあるご質問（FAQ）</h1>
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Q. 入力した要件文や生成した数式は保存されますか？</h2>
      <p className="text-gray-700">A. いいえ、要件文や数式はサーバーに保存されません。プライバシーに配慮しています。</p>
    </div>
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Q. どんなExcel関数に対応していますか？</h2>
      <p className="text-gray-700">A. 最新のExcel関数（XLOOKUP, TEXTAFTER, TEXTBEFORE等）にも対応しています。</p>
    </div>
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Q. 無料プランの利用回数制限は？</h2>
      <p className="text-gray-700">A. 1日3回までAI数式生成が可能です。回数はブラウザごとに管理されます。</p>
    </div>
  </div>
);

export default FAQPage; 