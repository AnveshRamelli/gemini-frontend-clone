// app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import ChatList from '@/components/ChatList';
import ChatRoom from '@/components/ChatRoom';

export default function DashboardPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      <ChatList onSelect={setSelectedRoom} />
      {selectedRoom ? (
        <ChatRoom />
      ) : (
        <div className="flex items-center justify-center flex-1 text-gray-500">
          Select a chatroom to begin
        </div>
      )}
    </div>
  );
}
