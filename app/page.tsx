import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-gray-100 h-dvh justify-center items-center">
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="/ai-sdk">Vercel AI SDK</Link>
        </li>
        <li>
          <Link href="/langchain">Langchain SDK</Link>
        </li>
      </ul>
    </div>
  );
}
