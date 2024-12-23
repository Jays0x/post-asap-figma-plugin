import Price from '@/components/pricing/price/Price'
import React from 'react'

function Page() {
  return (
    <div className='font-[family-name:var(--figtree)]'>
        <div className='container pt-[150px]'>
          <h1 className='text-[40px] font-semibold text-center'>Choose plan</h1>
          <p className='text-[20px] text-center text-white/70'>Best and affordable pricing tailored to your needs</p>
        </div>
        <Price />
    </div>
  )
}

export default Page