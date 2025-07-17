'use client';

import { useState } from 'react';

const chatrooms = [
  { id: '1', name: 'AI Assistant' },
  { id: '2', name: 'Product Support' },
  { id: '3', name: 'Creative Bot' },
];

export default function ChatList({ onSelect }: { onSelect: (id: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full max-w-xs bg-white border-r h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Chatrooms</h2>
      {chatrooms.map((room) => (
        <div
          key={room.id}
          className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 ${
            selected === room.id ? 'bg-blue-100 font-medium' : ''
          }`}
          onClick={() => {
            setSelected(room.id);
            onSelect(room.id);
          }}
        >
          {room.name}
        </div>
      ))}
    </div>
  );
}
