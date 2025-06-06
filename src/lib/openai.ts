import OpenAI from 'openai';
import { Template } from '../../data/templates';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `あなたはExcel数式の専門家です。
以下のルールに従って数式を生成してください：

1. 最新のExcel関数（XLOOKUP, TEXTAFTER, TEXTBEFORE等）も積極的に使用
2. 数式の解説を日本語で丁寧に説明
3. エラー処理も考慮した堅牢な数式を提案
4. 数式は必ず「=」で始める
5. セル参照はA1形式を使用`;

export async function generateFormula(template: Template, requirement: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `テンプレート: ${template.name}\n要件: ${requirement}` }
      ],
      temperature: 0.7,
    });

    return completion.choices[0].message.content || '数式の生成に失敗しました。';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('数式の生成中にエラーが発生しました。');
  }
} 