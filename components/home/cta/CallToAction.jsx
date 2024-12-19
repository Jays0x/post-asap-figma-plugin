'use client'
import Image from 'next/image'
import React from 'react'

function CallToAction() {
  return (
    <div className='py-[80px]'>
        <div className='bg-[url("/cta-image.svg")] bg-cover w-[100%] h-[50vh] mb-[80px]'>
        </div>

        <div className='pt-[60px]'>
            <div className='flex flex-col justify-center mb-[30px]'>
                <span className='text-white/50 text-center'>BETA</span>
                <h1 className='text-[50px] text-center'>Join our waitlist</h1>
            </div>

            <div>
                <form className='flex flex-col gap-[10px] w-[35%] mx-auto'>
                    <input type='email' placeholder='Your email' className='bg-[#000] border border-white/10 placeholder:text-white/30 border-opacity-10 p-4 rounded-lg text-white w-full mb-2' />
                    <div className='flex justify-center items-center'>
                        <button className='bg-[#ffffff20] border border-white border-opacity-10 p-3 rounded-lg text-white w-[150px]' onClick={() => alert('You&apos;ve successfully joined our waitlist') }>Join</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CallToAction