import { formulaTemplates } from './formulaTemplates';

/**
 * 日本語の要件文からExcel数式を生成する（MVP: キーワードマッチ方式）
 */
export function generateFormulaFromPrompt(prompt: string): {
  formula: string;
  templateId?: string;
  explanation?: string;
} {
  // シンプルなキーワードマッチ
  const lower = prompt.toLowerCase();

  if (lower.includes('合計') || lower.includes('sum')) {
    return {
      formula: '=SUM(A1:A10)',
      templateId: 'sum',
      explanation: '指定範囲の合計を計算します',
    };
  }
  if (lower.includes('if') || lower.includes('条件')) {
    return {
      formula: '=IF(A1>100, "高い", "低い")',
      templateId: 'if',
      explanation: '条件に応じて値を切り替えます',
    };
  }
  if (lower.includes('vlookup') || lower.includes('検索')) {
    return {
      formula: '=VLOOKUP(B1, A2:C10, 3, FALSE)',
      templateId: 'vlookup',
      explanation: '表から値を検索します',
    };
  }
  if (lower.includes('日付') && lower.includes('差')) {
    return {
      formula: '=DATEDIF(A1, B1, "D")',
      templateId: 'date-diff',
      explanation: '2つの日付の差（日数）を計算します',
    };
  }
  if (lower.includes('消費税') || lower.includes('税')) {
    return {
      formula: '=A1*0.1',
      templateId: 'tax',
      explanation: '売上合計から消費税（10%）を計算します',
    };
  }

  // テンプレートに該当しない場合
  return {
    formula: '',
    explanation: '該当するテンプレートが見つかりませんでした。',
  };
} 