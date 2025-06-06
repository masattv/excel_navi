import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `あなたはExcel数式の専門家です。
以下のルールに従って数式を生成してください：
1. 最新のExcel関数（XLOOKUP, TEXTAFTER, TEXTBEFORE等）も積極的に使用
2. 数式の解説を日本語で丁寧に説明
3. エラー処理も考慮した堅牢な数式を提案
4. 数式は必ず「=」で始める
5. セル参照はA1形式を使用`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { templateName, requirement } = req.body;
  if (!templateName || !requirement) {
    return res.status(400).json({ error: 'テンプレート名と要件は必須です' });
  }
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `テンプレート: ${templateName}\n要件: ${requirement}` },
      ],
      temperature: 0.7,
    });
    const content = completion.choices[0].message.content || '';
    res.status(200).json({ result: content });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: '数式の生成中にエラーが発生しました。' });
  }
} 