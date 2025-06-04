export type FormulaTemplate = {
  id: string;
  name: string;
  description: string;
  category: string;
  formula: string;
  example?: string;
};

export const formulaTemplates: FormulaTemplate[] = [
  {
    id: 'sum',
    name: '合計（SUM）',
    description: '指定範囲の合計を計算します',
    category: '集計',
    formula: '=SUM(A1:A10)',
    example: 'A1からA10までの合計を求める: =SUM(A1:A10)',
  },
  {
    id: 'if',
    name: '条件分岐（IF）',
    description: '条件に応じて値を切り替えます',
    category: '条件分岐',
    formula: '=IF(A1>100, "高い", "低い")',
    example: 'A1が100より大きければ「高い」、そうでなければ「低い」: =IF(A1>100, "高い", "低い")',
  },
  {
    id: 'vlookup',
    name: '検索（VLOOKUP）',
    description: '表から値を検索します',
    category: '検索',
    formula: '=VLOOKUP(B1, A2:C10, 3, FALSE)',
    example: 'B1の値をA2:C10の1列目で検索し、3列目の値を返す: =VLOOKUP(B1, A2:C10, 3, FALSE)',
  },
  {
    id: 'date-diff',
    name: '日付の差分',
    description: '2つの日付の差（日数）を計算します',
    category: '日付',
    formula: '=DATEDIF(A1, B1, "D")',
    example: 'A1とB1の日付の差（日数）: =DATEDIF(A1, B1, "D")',
  },
  {
    id: 'tax',
    name: '消費税計算',
    description: '売上合計から消費税を計算します',
    category: '税計算',
    formula: '=A1*0.1',
    example: 'A1が売上合計の場合、消費税10%: =A1*0.1',
  },
]; 