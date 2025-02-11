"use client";

import { useCompletion } from "ai/react";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Chat() {
  const api = "/api/langchain";
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({ api });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">{completion}</div>
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
