import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div className='flex flex-col items-center justify-center mt-[120px] font-[family-name:var(--figtree)]'>
        <div className='mb-10'>
            <h1 className='text-[30px] text-center font-medium'>Forgot password</h1>
            <p className='text-white/70 text-center'>Kindly input your email to reset your password</p>
        </div>

        <div>
            <form className='flex flex-col gap-4'>

                <input 
                type='email' 
                placeholder='Enter email' 
                className='w-[350px] px-4 py-2 rounded-lg bg-[#000] border border-white/10 placeholder:text-white/30'
                />


                <Link href='/verify-email' className='bg-[var(--primary)] px-4 w-[350px] text-center font-medium text-black py-3 rounded-lg'>Continue</Link>
            </form>
            <div className="mt-[40px] flex gap-2 justify-center">
                <p className="text-white/70">Don&apos;t have an account?</p>
                <Link href='/register' className="font-semibold">Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Page