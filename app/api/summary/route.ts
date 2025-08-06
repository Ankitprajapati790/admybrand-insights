// app/api/summary/route.ts

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { chartData } = await req.json();

  const prompt = `Analyze this marketing campaign data and give a short summary in 2 lines:\n${JSON.stringify(chartData)}`;

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful marketing analyst.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const summary = chat.choices[0]?.message?.content ?? 'No summary generated.';
    return NextResponse.json({ summary });
  } catch (err) {
    console.error('AI Summary Error:', err);
    return NextResponse.json({ summary: 'Failed to generate summary.' }, { status: 500 });
  }
}
