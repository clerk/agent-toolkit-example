<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_agent_toolkit" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://images.clerk.com/static/logo-dark-mode-400x400.png">
      <img src="https://images.clerk.com/static/logo-light-mode-400x400.png" height="64">
    </picture>
  </a>
  <br />
  <h1 align="center">Clerk Agent Toolkit Example</h1>
</p>

<div align="center">

[![Chat on Discord](https://img.shields.io/discord/856971667393609759.svg?logo=discord)](https://clerk.com/discord)
[![Clerk documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://clerk.com/docs?utm_source=github&utm_medium=clerk_agent_toolkit)
[![Follow on Twitter](https://img.shields.io/twitter/follow/ClerkDev?style=social)](https://twitter.com/intent/follow?screen_name=ClerkDev)

[Changelog](https://github.com/clerk/javascript/blob/main/packages/agent-toolkit/CHANGELOG.md)
·
[Report a Bug](https://github.com/clerk/javascript/issues/new?assignees=&labels=needs-triage&projects=&template=BUG_REPORT.yml)
·
[Request a Feature](https://feedback.clerk.com/roadmap)
·
[Get Help](https://clerk.com/contact/support?utm_source=github&utm_medium=clerk_agent_toolkit)

</div>

## Introduction
In this project, you will build a simple chatbot that updates the signed-in user's metadata with knowledge from the discussion, similar to the ChatGPT "Memory" feature. When asked, the chatbot will only respond with the information it knows about the current user. The chatbot will be able to both store and retrieve information.

## Getting Started
1. Clone this repository.
2. Copy `.env.example` to `.env.local` and fill in the required environment variables.
3. Run `pnpm install` to install the dependencies.
4. Run `pnpm dev` to start the development server.

## Navigating the app
The app was kept as simple as possible to focus on the agent toolkit integration. The main components are:
- `app/api/ai-sdk/route.ts` and `app/ai-sdk/page.tsx`: The Vercel AI SDK integration.
- `app/api/agent-toolkit/route.ts` and `app/agent-toolkit/page.tsx`: The Clerk Agent Toolkit integration.

## Vercel AI SDK RAG Guide Starter Project
This repo is a simplified version of the [Vercel AI SDK RAG Guide Starter Project](https://sdk.vercel.ai/docs/guides/rag-chatbot). For more details, visit the [Vercel AI SDK documentation](https://sdk.vercel.ai/docs/introduction).
