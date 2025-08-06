// File: /components/AISummary.tsx
'use client';

import { useEffect, useState } from 'react';

interface ChartDataPoint {
  year: string;
  sales: number;
}

interface Props {
  chartData: ChartDataPoint[];
}

export default function AISummary({ chartData }: Props) {
  const [summary, setSummary] = useState('Loading AI summary...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chartData || chartData.length === 0) {
      setSummary('No chart data available.');
      return;
    }

    const formattedText = chartData
      .map((item) => `Year: ${item.year}, Sales: ${item.sales}`)
      .join('\n');

    async function fetchSummary() {
      try {
        const res = await fetch('/api/summary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: formattedText }), // ✅ FIX: pass `text`
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data: { summary?: string } = await res.json();
        setSummary(data.summary || 'No summary found.');
      } catch (error) {
        console.error('Error fetching summary:', error);
        setSummary('❌ Failed to generate summary.');
      } finally {
        setLoading(false);
      }
    }

    fetchSummary();
  }, [chartData]);

  return (
    <div className="bg-white p-4 rounded shadow mt-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">📊 AI Summary</h2>
      {loading ? (
        <p className="text-gray-500 italic">Generating summary...</p>
      ) : (
        <p className="text-gray-700 whitespace-pre-line">{summary}</p>
      )}
    </div>
  );
}
