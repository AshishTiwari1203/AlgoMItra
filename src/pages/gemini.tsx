import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Gemini() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setResponse(data.response || data.error);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Ask Gemini</h1>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="w-full border px-4 py-2 mb-4 rounded-md"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>

      {response && (
        <div className="mt-6 bg-white p-4 rounded shadow-md w-full max-w-md">
          <h2 className="font-medium mb-2">Response:</h2>
          <div className="prose prose-sm max-w-none">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
