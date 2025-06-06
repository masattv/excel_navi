export type Template = {
  id: string;
  name: string;
  description: string;
  promptExample: string;
};

export const templates: Template[] = [
  {
    id: 'tax-10',
    name: '消費税10%自動計算',
    description: '金額から10%の消費税を自動計算し、税込金額を算出します。',
    promptExample: 'A列に日付、B列に金額があるとき、C列に10%の消費税を計算し、D列に税込金額を出す数式を教えて',
  },
  {
    id: 'sales-compare',
    name: '売上前年比較',
    description: '当月売上と前年同月売上を比較し、増減率を算出します。',
    promptExample: 'A列に当月売上、B列に前年同月売上があるとき、C列に増減率（%）を計算する数式を教えて',
  },
  {
    id: 'attendance',
    name: '月次勤怠集計',
    description: '出勤日数、残業時間、休暇日数などを集計します。',
    promptExample: 'A列に日付、B列に出勤/休み、C列に勤務時間があるとき、出勤日数と残業時間の合計を計算する数式を教えて',
  },
  {
    id: 'expense',
    name: '経費精算集計',
    description: '部署別・勘定科目別に経費を集計します。',
    promptExample: 'A列に部署、B列に勘定科目、C列に金額があるとき、部署・勘定科目ごとの合計金額を集計する数式を教えて',
  },
  {
    id: 'salary-deduction',
    name: '給与控除計算',
    description: '健康保険料・厚生年金・所得税などの控除額を計算します。',
    promptExample: 'A列に基本給、B列に健康保険料率、C列に厚生年金料率、D列に所得税率があるとき、各控除額と手取り額を計算する数式を教えて',
  },
  {
    id: 'invoice-number',
    name: '請求書番号自動生成',
    description: '日付や連番を組み合わせて請求書番号を自動生成します。',
    promptExample: 'A列に日付（2024/06/01形式）、B列に連番があるとき、C列に「INV-20240601-001」のような請求書番号を生成する数式を教えて',
  },
  {
    id: 'yearly-summary',
    name: '年間売上集計',
    description: '月別売上データから年間合計や平均を集計します。',
    promptExample: 'A列に月、B列に売上があるとき、年間売上合計と平均を計算する数式を教えて',
  },
  {
    id: 'leave-balance',
    name: '有給残日数計算',
    description: '付与日数と取得日数から有給残日数を計算します。',
    promptExample: 'A列に付与日数、B列に取得日数があるとき、C列に有給残日数を計算する数式を教えて',
  },
]; 