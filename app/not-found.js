import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div>
        <Image src='/404.svg' alt='404' width={700} height={350} className='mb-10' />
        
        <p className='text-white/70 text-center '>Sorry. This page doesn&apos;t exist.</p>

        <div className='flex flex-col items-center justify-center my-10'>
          <Link href='/' className='border-b border-white/20 pb-1'>Go back home</Link>
        </div>

        <div className='flex gap-2 justify-center items-center pt-[50px]'>
        
          <Link href='https://x.com' target='_blank'> <Image src='/x-icon.svg' alt='x-twitter' width={50} height={50} /></Link>

          <Link href='https://instagram.com' target='_blank'><Image src='/insta-icon.svg' alt='Instagram' width={50} height={50} /></Link>

          <Link href='https://t.me/' target='_blank'><Image src='/telegram-icon.svg' alt='Telegram' width={50} height={50} /></Link>

        </div>

      </div>
    </div>
  )
}