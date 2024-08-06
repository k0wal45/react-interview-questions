import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl text-bold">Interview questions</h1>
      <ul className="flex flex-col gap-2 pl-8 list-disc text-2xl mt-6">
        <li>
          <Link href="/real-time-filtering" className="hover:underline">
            real-time-filtering
          </Link>
        </li>
        <li>
          <Link href="/use-debounce-hook" className="hover:underline">
            use-debounce-hook
          </Link>
        </li>
        <li>
          <Link href="/phone-number-input" className="hover:underline">
            phone-number-input
          </Link>
        </li>
      </ul>
    </main>
  );
}
