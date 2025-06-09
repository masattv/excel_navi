import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  formulas: string[];
  createdBy: string;
  createdAt: Date;
}

interface History {
  id: string;
  formula: string;
  requirements: string;
  createdAt: Date;
}

export const Customization: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [history, setHistory] = useState<History[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleTemplateSubmit = (template: Omit<Template, 'id' | 'createdAt'>) => {
    const newTemplate: Template = {
      ...template,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    setTemplates([...templates, newTemplate]);
  };

  const handleHistoryRestore = (historyItem: History) => {
    // 履歴から数式を復元
    console.log('Restoring formula:', historyItem.formula);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">UX向上・カスタマイズ性</h2>

      {/* カスタムテンプレート管理エリア */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">カスタムテンプレート管理</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">テンプレート登録</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleTemplateSubmit({
                  name: formData.get('name') as string,
                  description: formData.get('description') as string,
                  category: formData.get('category') as string,
                  formulas: (formData.get('formulas') as string).split(','),
                  createdBy: formData.get('createdBy') as string
                });
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="テンプレート名"
                className="w-full p-2 border rounded mb-2"
              />
              <textarea
                name="description"
                placeholder="説明"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="category"
                placeholder="カテゴリー"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="formulas"
                placeholder="数式（カンマ区切り）"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="createdBy"
                placeholder="作成者"
                className="w-full p-2 border rounded mb-2"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                登録
              </button>
            </form>
          </div>
          <div>
            <h4 className="font-bold mb-2">テンプレート一覧</h4>
            <div className="h-64 overflow-y-auto border rounded p-2">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <p className="font-bold">{template.name}</p>
                  <p className="text-sm text-gray-600">{template.description}</p>
                  <p className="text-xs text-gray-500">
                    {template.createdBy} - {template.createdAt.toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 履歴・バージョン管理エリア */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">履歴・バージョン管理</h3>
        <div className="h-64 overflow-y-auto border rounded p-2">
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-2 border-b last:border-b-0"
            >
              <p className="font-bold">数式: {item.formula}</p>
              <p className="text-sm">要件: {item.requirements}</p>
              <p className="text-xs text-gray-500">
                {item.createdAt.toLocaleDateString()}
              </p>
              <button
                onClick={() => handleHistoryRestore(item)}
                className="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded"
              >
                復元
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 使いこなしガイドエリア */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">使いこなしガイド</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2">サンプルスプレッドシート</h4>
            <p className="text-sm mb-2">
              各機能の使用例を含むサンプルファイルをダウンロードできます。
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              ダウンロード
            </button>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2">動画チュートリアル</h4>
            <p className="text-sm mb-2">
              基本的な使い方から応用テクニックまで、動画で解説しています。
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              視聴する
            </button>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2">よくある質問</h4>
            <p className="text-sm mb-2">
              ユーザーからよく寄せられる質問と回答をまとめています。
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              確認する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 