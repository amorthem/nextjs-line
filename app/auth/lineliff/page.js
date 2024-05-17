'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoadingScreen from '@components/Loadingscreen'

export default function Index() {
  const router = useRouter()
  
  useEffect(() => {
    const login = async () => {
      
      try {
        const liff = (await import('@line/liff')).default
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID });
  
      } catch (error) {
        console.error('liff init error', error.message)
  
      }
  
      await liff.isLoggedIn() ? router.push('/user/profile') : liff.login()
  
    }

    login()
  }, [])

  return (
    <LoadingScreen />
  )

}
