"use client";

import { useChat } from "ai/react";
import { UserButton } from "@clerk/nextjs";

export default function Chat() {
  const api = "/api/ai-sdk";
  const { messages, input, handleInputChange, handleSubmit } = useChat({ maxSteps: 5, api });
  console.log(messages);
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role}</div>
              <p>
                {m.content.length > 0 ? (
                  m.content
                ) : (
                  <span className="italic font-light">{"calling tool: " + m?.toolInvocations?.[0].toolName}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-row fixed bottom-0 w-full max-w-md mb-8 gap-4">
        <UserButton />
        <form onSubmit={handleSubmit} className="flex-grow relative">
          <div className="absolute right-0 -top-8">
            (<pre className="inline">{api}</pre>)
          </div>
          <input
            className="w-full border border-gray-300 rounded shadow-xl p-2"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
