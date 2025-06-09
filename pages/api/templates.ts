import type { NextApiRequest, NextApiResponse } from 'next';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Templates | { error: string }>
) {
  try {
    const filePath = path.join(process.cwd(), 'data/templates.yaml');
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'テンプレートファイルが見つかりません' });
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const templates = yaml.load(fileContents) as Templates;

    // データ構造の検証
    if (!templates || 
        !Array.isArray(templates.manufacturing) || 
        !Array.isArray(templates.retail) || 
        !Array.isArray(templates.financial) || 
        !Array.isArray(templates.project_management)) {
      return res.status(500).json({ error: 'テンプレートデータの形式が不正です' });
    }

    res.status(200).json(templates);
  } catch (error) {
    console.error('テンプレート読み込みエラー:', error);
    res.status(500).json({ error: 'テンプレートの読み込みに失敗しました' });
  }
} 