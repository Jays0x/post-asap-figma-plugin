import Image from 'next/image'
import React from 'react'

function Platforms() {
  return (
    <div className='container py-[80px]'>
        <div className='flex flex-col justify-center mb-[60px]'>
            <span className='text-white/50 text-center'>PLATFORMS</span>
            <h1 className='text-[50px] text-center'>Supported platforms</h1>
        </div>

        <div className='grid grid-cols-2 gap-8'>
            <div className='flex'>
                <Image src='/platform1.svg' alt='dribbble' width={220} height={220} />
                <div className='w-[380px] h-[185px] flex items-center justify-center border border-white/10 rounded-r-lg'>
                    <p className='text-white/70'>Share your designs to Dribbble!</p>
                </div>
            </div>

            <div className='flex'>
                <Image src='/platform2.svg' alt='dribbble' width={220} height={220} />
                <div className='w-[380px] h-[185px] flex items-center justify-center border border-white/10 rounded-r-lg'>
                    <p className='text-white/70'>Coming soon</p>
                </div>
            </div>

            <div className='flex'>
                <Image src='/platform3.svg' alt='dribbble' width={220} height={220} />
                <div className='w-[380px] h-[185px] flex items-center justify-center border border-white/10 rounded-r-lg'>
                    <p className='text-white/70'>Coming soon</p>
                </div>
            </div>

            <div className='flex'>
                <Image src='/platform4.svg' alt='dribbble' width={220} height={220} />
                <div className='w-[380px] h-[185px] flex items-center justify-center border border-white/10 rounded-r-lg'>
                    <p className='text-white/70'>Coming soon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Platforms