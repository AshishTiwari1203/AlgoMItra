// pages/api/ask.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: "AIzaSyBoHd-PRJ36Id1G4-LVTCcpKFdM_s2IwsA"! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: question }] }],
    });

    const text =
      result.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';

    return res.status(200).json({ response: text });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
