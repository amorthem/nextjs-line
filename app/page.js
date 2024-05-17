import Link from 'next/link'

import { FaLine } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 min-h-screen w-full flex items-center justify-center font-mono text-sm">

        <div>
          <div className="mb-10">
            <img src="/next.svg" />
          </div>

          <Link href="/auth/lineliff">
            <button className="bg-white hover:bg-slate-100 font-bold py-2 px-4 border border-slate-300 rounded flex items-center">
              <FaLine className="mr-2 text-green-600 h-10 w-10" /> Sign in with LINE
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}
