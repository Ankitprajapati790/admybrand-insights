// File: /pages/api/summary.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { openai } from '@/lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { text } = req.body;

    // Validate input
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Invalid input. `text` must be a non-empty string.' });
    }

    // Call OpenAI API with the input text
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that summarizes long text.',
        },
        {
          role: 'user',
          content: `Summarize the following:\n\n${text}`,
        },
      ],
      temperature: 0.7,
    });

    const summary = completion.choices?.[0]?.message?.content?.trim();

    // Return the summary
    return res.status(200).json({ summary });
  } catch (error: any) {
    console.error('Summary API error:', error);
    return res.status(500).json({ error: 'Something went wrong while summarizing.' });
  }
}
