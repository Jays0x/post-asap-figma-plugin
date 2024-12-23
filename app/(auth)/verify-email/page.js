import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div className='flex flex-col items-center justify-center mt-[120px] font-[family-name:var(--figtree)]'>
        <div className='mb-10'>
            <h1 className='text-[30px] text-center font-medium'>Verify email</h1>
            <p className='text-white/70 text-center'>Kindly input the code sent to your email</p>
        </div>


        <div>
            <form className='flex flex-col gap-4'>

                <input 
                type='text' 
                maxLength={6}
                placeholder='Enter code' 
                className='w-[350px] px-4 py-2 rounded-lg bg-[#000] border border-white/10 placeholder:text-white/30'
                />

                <Link href='/reset-password' className='bg-[var(--primary)] px-4 w-[350px] text-center font-medium text-black py-3 rounded-lg'>Continue</Link>
            </form>

        </div>


    </div>
  )
}

export default Page