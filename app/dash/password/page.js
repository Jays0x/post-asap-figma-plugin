import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Page() {
  return (
    <div className='flex flex-col h-[100vh] justify-center items-center font-[family-name:var(--figtree)]'>

      <div className='mb-10'>
        <Image src='/asap-figma.svg' width={200} height={200} alt='asap-figma' />
      </div>
       
      <div className='mb-10 w-[30%]'>
        <h1 className='text-white text-center text-[30px] font-semibold mb-2'>Open Figma Plugin</h1>
        <p className='text-center text-white/70'>You&apos;ve successfully reset your password. You can log in through our Figma plugin to start using our features. </p>
      </div>

      <p className='text-white/50 mb-5 text-center'>Or</p>

      <div className='flex flex-col items-center justify-center my-10'>
          <Link href='#' className='border-b text-white/70 border-white/70 pb-1 hover:text-white hover:border-white'>Explore plugin on Figma community</Link>
      </div>


    </div>
  )
}

export default Page