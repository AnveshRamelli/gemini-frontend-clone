// components/MessageInput.tsx
'use client';

import { useState } from 'react';

export default function MessageInput({ onSend }: { onSend: (msg: string) => void }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <div className="flex gap-2 p-4 border-t">
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded">
        Send
      </button>
    </div>
  );
}
