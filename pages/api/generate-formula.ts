import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'No API key' });

  const systemPrompt = `
あなたはExcelの数式生成AIです。ユーザーの要件を日本語で受け取り、最適なExcel数式を1つだけ返してください。
TEXTAFTER, TEXTBEFORE, FILTER, UNIQUE, XLOOKUP などの最新関数も積極的に使ってください。
古い関数（VLOOKUP等）よりも新しい関数（XLOOKUP等）を優先してください。
数式の説明も簡潔に添えてください。
出力例:
数式: =TEXTAFTER(A1, "-")
説明: A1のテキストから「-」以降の文字列を抽出します。

数式: =XLOOKUP(B1, A2:A10, C2:C10)
説明: B1の値をA2:A10で検索し、対応するC列の値を返します。
`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      max_tokens: 256,
    }),
  });

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || '';

  res.status(200).json({ result: text });
} 