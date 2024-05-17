import Link from 'next/link'

export default function Index() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 max-w-5xl w-full flex-col gap-2 font-mono text-sm lg:flex">

        <div className="text-right">
          <Link href="/">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back
              </div>
            </button>
          </Link>
        </div>

        <div className="min-h-screen flex items-center justify-center font-semibold leading-6 text-indigo-500 pb-[50%]">
          Someting went wrong, please try again.
        </div>

      </div>

    </main>

  )

}
