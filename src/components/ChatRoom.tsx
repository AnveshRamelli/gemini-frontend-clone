// components/ChatRoom.tsx
"use client";

import { useState } from "react";
import MessageInput from "./MessageInput";

type Message = {
  id: number;
  from: "user" | "ai";
  text: string;
};

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: Date.now(),
      from: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        from: "ai",
        text: `AI: "${text}" — got it! (simulated)`,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-between h-screen w-full p-4">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-md max-w-md ${
              msg.from === "user"
                ? "ml-auto bg-blue-200"
                : "mr-auto bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {isTyping && (
          <div className="italic text-sm text-gray-500 animate-pulse">
            AI is typing...
          </div>
        )}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
}
