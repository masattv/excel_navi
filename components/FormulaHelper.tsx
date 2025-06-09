import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormulaStep {
  step: number;
  explanation: string;
  formula: string;
}

interface ErrorDiagnosis {
  error: string;
  possibleCauses: string[];
  solutions: string[];
}

export const FormulaHelper: React.FC = () => {
  const [formula, setFormula] = useState('');
  const [steps, setSteps] = useState<FormulaStep[]>([]);
  const [errorDiagnosis, setErrorDiagnosis] = useState<ErrorDiagnosis | null>(null);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [chatInput, setChatInput] = useState('');

  // Excel関数の簡易説明辞書
  const functionDescriptions: Record<string, string> = {
    SUM: '指定した範囲の合計を計算します',
    AVERAGE: '指定した範囲の平均値を計算します',
    IF: '条件によって異なる値を返します',
    VLOOKUP: '表の左端列で値を検索し、指定した列から値を返します',
    COUNTIF: '条件に一致するセルの個数を数えます',
    NETWORKDAYS: '2つの日付間の営業日数を計算します',
    PMT: 'ローンの定期支払額を計算します',
    // 必要に応じて追加
  };

  // 数式を関数ごとに分解し、説明を返す
  const analyzeFormula = (formula: string) => {
    setSteps([]);
    setErrorDiagnosis(null);
    if (!formula) return;
    // 関数名を抽出
    const regex = /([A-Z]+)\s*\(/g;
    let match;
    let step = 1;
    const found: FormulaStep[] = [];
    while ((match = regex.exec(formula))) {
      const func = match[1];
      found.push({
        step: step++,
        explanation: functionDescriptions[func] || `${func}関数の説明はありません`,
        formula: `${func}(...)`
      });
    }
    if (found.length === 0) {
      found.push({
        step: 1,
        explanation: '関数が見つかりませんでした。数式を確認してください。',
        formula
      });
    }
    setSteps(found);
  };

  // よくあるExcelエラーの診断
  const diagnoseError = (error: string) => {
    const errorMap: Record<string, ErrorDiagnosis> = {
      '#DIV/0!': {
        error: '#DIV/0!（ゼロ除算エラー）',
        possibleCauses: ['除数が0になっています', '参照セルが空白です'],
        solutions: ['除数が0でないか確認してください', '空白セルを0以外の値に修正してください']
      },
      '#VALUE!': {
        error: '#VALUE!（値エラー）',
        possibleCauses: ['数値が必要な場所に文字列が入力されています', '関数の引数が正しくありません'],
        solutions: ['数値・引数の型を確認してください', '関数の引数を見直してください']
      },
      '#REF!': {
        error: '#REF!（参照エラー）',
        possibleCauses: ['参照しているセルが削除されています'],
        solutions: ['参照範囲を修正してください']
      },
      '#NAME?': {
        error: '#NAME?（名前エラー）',
        possibleCauses: ['関数名や範囲名のスペルミス', '定義されていない名前を使用'],
        solutions: ['関数名や範囲名のスペルを確認してください']
      },
      '#N/A': {
        error: '#N/A（データなしエラー）',
        possibleCauses: ['検索値が見つかりません'],
        solutions: ['検索値や参照範囲を確認してください']
      }
    };
    setErrorDiagnosis(errorMap[error] || {
      error: error,
      possibleCauses: ['原因不明のエラーです'],
      solutions: ['数式や参照範囲を見直してください']
    });
  };

  // チャット形式での数式チューニング
  const handleChatMessage = (message: string) => {
    if (!message) return;
    setChatHistory([...chatHistory, `ユーザー: ${message}`]);
    // 簡易的な応答例
    let reply = '';
    if (message.includes('簡単')) {
      reply = '数式を簡略化するには、不要な関数や重複部分を省きましょう。具体的な数式を入力してください。';
    } else if (message.includes('高速')) {
      reply = '計算速度を上げるには、配列数式や範囲を絞ることが有効です。';
    } else if (message.match(/#\w+!?/)) {
      diagnoseError(message.match(/#\w+!?/)[0]);
      reply = 'エラー診断を表示しました。';
    } else {
      reply = 'ご要望を詳しく教えてください。例：「この数式をもっと簡単に」「#DIV/0!の原因を知りたい」など';
    }
    setChatHistory(history => [...history, `AI: ${reply}`]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">フォーミュラ開発支援</h2>
      {/* 数式入力エリア */}
      <div className="mb-4">
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="数式を入力してください"
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => analyzeFormula(formula)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            解析
          </button>
          <button
            onClick={() => diagnoseError(formula)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            エラー診断
          </button>
        </div>
      </div>
      {/* ステップ解説エリア */}
      {steps.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">ステップ解説</h3>
          {steps.map((step) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-2 border rounded mb-2"
            >
              <p className="font-bold">ステップ {step.step}</p>
              <p>{step.explanation}</p>
              <code className="block bg-gray-100 p-2 mt-1">{step.formula}</code>
            </motion.div>
          ))}
        </div>
      )}
      {/* エラー診断エリア */}
      {errorDiagnosis && (
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">エラー診断</h3>
          <div className="p-4 bg-red-50 rounded">
            <p className="font-bold text-red-600">{errorDiagnosis.error}</p>
            <div className="mt-2">
              <p className="font-bold">考えられる原因:</p>
              <ul className="list-disc pl-5">
                {errorDiagnosis.possibleCauses.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <p className="font-bold">解決策:</p>
              <ul className="list-disc pl-5">
                {errorDiagnosis.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* チャットエリア */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">対話型チューニング</h3>
        <div className="h-64 overflow-y-auto border rounded p-2 mb-2">
          {chatHistory.map((message, index) => (
            <div key={index} className="mb-2">
              <p>{message}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="要望を入力してください"
            className="flex-1 p-2 border rounded"
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleChatMessage(chatInput);
                setChatInput('');
              }
            }}
          />
          <button
            onClick={() => {
              handleChatMessage(chatInput);
              setChatInput('');
            }}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}; 