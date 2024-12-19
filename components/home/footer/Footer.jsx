import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='container py-[80px]'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
                <Image src='/jays.svg' alt='jays' width={50} height={50} />
                <p className='text-white/70'>Made with ❤️ by <span className='font-bold text-white'>Jays Alimi</span></p>
                <Link href='https://x.com/thejays0x' target='_blank'>
                    <Image src='/x.svg' alt='x-twitter' width={20} height={20} />
                </Link>
            </div>
            <div className='border border-white/10 w-[850px] h-[80px] rounded-lg gap-10 flex justify-center items-center'>
                <Link href='/pricing' className='text-white/70 hover:text-white'>Pricing</Link>
                <Link href='/blog' className='text-white/70 hover:text-white'>Blog</Link>
                <Link href='/support' className='text-white/70 hover:text-white'>Support</Link>
                <Link href='/terms' className='text-white/70 hover:text-white'>Terms</Link>
                <Link href='/privacy' className='text-white/70 hover:text-white'>Privacy</Link>
            </div>
        </div>

        <div className='flex gap-2 justify-center items-center pt-[50px]'>
        
           <Link href='https://x.com' target='_blank'> <Image src='/x-icon.svg' alt='x-twitter' width={50} height={50} /></Link>

            <Link href='https://instagram.com' target='_blank'><Image src='/insta-icon.svg' alt='Instagram' width={50} height={50} /></Link>

            <Link href='https://t.me/' target='_blank'><Image src='/telegram-icon.svg' alt='Telegram' width={50} height={50} /></Link>

        </div>
    </div>
  )
}

export default Footer