import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='bg-[url("/hero.svg")] bg-cover w-[100%] h-[160vh]'>
        <div className='flex flex-col justify-center items-center mt-[200px]'>
          <h1 className='text-[72px] font-semibold text-center'>Post it Asap!</h1>
          <p className='text-[20px] text-white/70 mb-5'>Share your designs directly anywhere from Figma.</p>
          <Link 
          href='/' className='bg-[var(--component)] px-4 py-4 border border-white border-opacity-10 flex w-[200px] justify-center items-center rounded-lg gap-3 hover:bg-white/10'
          >
            <Image src='/figma.svg' alt='figma' width={16} height={16}/>
            <p className='text-[14px] font-medium'>OPEN ON FIGMA</p>
          </Link>
        </div>
    </div>
  )
}

export default Hero