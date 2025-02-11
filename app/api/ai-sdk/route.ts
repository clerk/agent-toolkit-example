import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { auth } from "@clerk/nextjs/server";

import { systemPrompt } from "@/lib/ai/prompts";
import { createClerkToolkit } from "@clerk/agent-toolkit/ai-sdk";

export const maxDuration = 30;

export async function POST(req: Request) {
  const authContext = await auth.protect();
  const { messages } = await req.json();

  const toolkit = await createClerkToolkit({ authContext });

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system: toolkit.injectSessionClaims(systemPrompt),
    tools: toolkit.users(),
  });

  return result.toDataStreamResponse();
}
