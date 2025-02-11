import { ChatOpenAI } from "@langchain/openai";
import { createClerkToolkit } from "@clerk/agent-toolkit/langchain";
import { auth } from "@clerk/nextjs/server";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { LangChainAdapter } from "ai";
import { systemPrompt } from "@/lib/ai/prompts";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { userId } = await auth.protect();
  const { prompt } = await req.json();

  const model = new ChatOpenAI({ model: "gpt-4o", temperature: 0 });
  const toolkit = await createClerkToolkit({ context: { userId } });
  const modelWithTools = model.bindTools(toolkit.allTools());

  const messages = [new SystemMessage(toolkit.injectSessionClaims(systemPrompt)), new HumanMessage(prompt)];
  const aiMessage = await modelWithTools.invoke(messages);
  messages.push(aiMessage);

  for (const toolCall of aiMessage.tool_calls || []) {
    // @ts-expect-error @nikos - need to make the types less strict here
    const selectedTool = toolkit.toolMap()[toolCall.name];
    const toolMessage = await selectedTool.invoke(toolCall);
    messages.push(toolMessage);
  }

  // To simplify the setup, this example uses the ai-sdk langchain adapter
  // to stream the results back to the /langchain page.
  // https://sdk.vercel.ai/providers/adapters/langchain
  const stream = await modelWithTools.stream(messages);
  return LangChainAdapter.toDataStreamResponse(stream);
}
