'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import LoadingScreen from '@components/Loadingscreen'

export default function Index() {
  const [profile, setProfile] = useState({})
  const router = useRouter()
  
  const logout = async () => {
    liff.logout();
    router.push('/')
    
  }
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const liff = (await import('@line/liff')).default
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID });
        await liff.ready
  
        if (!liff.isLoggedIn()) {
          router.push('/')
        }
  
        let userProfile = await liff.getProfile()
        userProfile.email = liff.getDecodedIDToken().email
        setProfile(userProfile)
  
      } catch (err) {
        console.log({ error: err.message })
  
      }
  
    }
    
    getUser()
  }, [profile.userId])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">

      {
        profile.displayName
          ? (
            <div className="z-10 max-w-5xl w-full flex-col gap-2 font-mono text-sm lg:flex">

              <div className="mb-10 text-right">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={logout}>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                    Sign Out
                  </div>
                </button>
              </div>

              <div>
                <div>
                  <ul className="list-none">
                    {profile.pictureUrl &&
                      <li className="px-2 py-3 my-2">
                        <div className="mb-2">
                          <h1>Picture : </h1>
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src={profile.pictureUrl}
                            alt={profile.displayName}
                            priority
                            width={240}
                            height={240}
                            className="rounded-full border-4 border-indigo-300"
                          />
                        </div>
                      </li>
                    }
                    <li className="border-2 border-indigo-400 px-2 py-3 my-2 rounded-lg">
                      Name : {profile.displayName}
                    </li>
                    <li className="border-2 border-indigo-400 px-2 py-3 my-2 rounded-lg">
                      Email : {profile.email}
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          )
          : (<LoadingScreen />)
      }


    </main>
  );
}
