import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Template {
  name: string;
  description: string;
  formulas: {
    name: string;
    formula: string;
    explanation: string;
  }[];
}

interface Templates {
  manufacturing: Template[];
  retail: Template[];
  financial: Template[];
  project_management: Template[];
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Templates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('/api/templates');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'テンプレートの取得に失敗しました');
        }
        const data = await response.json();
        
        // データ構造の検証
        if (!data || 
            !Array.isArray(data.manufacturing) || 
            !Array.isArray(data.retail) || 
            !Array.isArray(data.financial) || 
            !Array.isArray(data.project_management)) {
          throw new Error('テンプレートデータの形式が不正です');
        }
        
        setTemplates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'エラーが発生しました');
      }
    };

    fetchTemplates();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-red-600 mb-4">エラー</h1>
          <p className="text-gray-600">{error}</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  if (!templates) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">読み込み中...</h1>
          <p className="text-gray-600">テンプレートを読み込んでいます...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              業種特化テンプレート
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
            <p className="text-gray-600 mb-4">
              業種や業務に特化したテンプレートを提供しています。
              各テンプレートには、よく使用される数式とその説明が含まれています。
              テンプレートを選択して、必要な数式をコピーして使用できます。
            </p>
          </div>

          {/* 製造業向けテンプレート */}
          {templates.manufacturing.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">製造業向けテンプレート</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.manufacturing.map((template, index) => (
                  <div key={index} className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="space-y-4">
                      {template.formulas.map((formula, formulaIndex) => (
                        <div key={formulaIndex} className="border-t pt-4">
                          <h4 className="font-semibold text-blue-600 mb-2">{formula.name}</h4>
                          <p className="text-gray-600 mb-2">{formula.explanation}</p>
                          <code className="block bg-gray-100 p-2 rounded">{formula.formula}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 小売業向けテンプレート */}
          {templates.retail.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">小売業向けテンプレート</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.retail.map((template, index) => (
                  <div key={index} className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="space-y-4">
                      {template.formulas.map((formula, formulaIndex) => (
                        <div key={formulaIndex} className="border-t pt-4">
                          <h4 className="font-semibold text-blue-600 mb-2">{formula.name}</h4>
                          <p className="text-gray-600 mb-2">{formula.explanation}</p>
                          <code className="block bg-gray-100 p-2 rounded">{formula.formula}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 財務・経営分析テンプレート */}
          {templates.financial.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">財務・経営分析テンプレート</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.financial.map((template, index) => (
                  <div key={index} className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="space-y-4">
                      {template.formulas.map((formula, formulaIndex) => (
                        <div key={formulaIndex} className="border-t pt-4">
                          <h4 className="font-semibold text-blue-600 mb-2">{formula.name}</h4>
                          <p className="text-gray-600 mb-2">{formula.explanation}</p>
                          <code className="block bg-gray-100 p-2 rounded">{formula.formula}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* プロジェクト管理テンプレート */}
          {templates.project_management.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">プロジェクト管理テンプレート</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.project_management.map((template, index) => (
                  <div key={index} className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="space-y-4">
                      {template.formulas.map((formula, formulaIndex) => (
                        <div key={formulaIndex} className="border-t pt-4">
                          <h4 className="font-semibold text-blue-600 mb-2">{formula.name}</h4>
                          <p className="text-gray-600 mb-2">{formula.explanation}</p>
                          <code className="block bg-gray-100 p-2 rounded">{formula.formula}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 