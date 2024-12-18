import Image from 'next/image'
import React from 'react'

function Features() {
  return (
    <div className='py-[100px] container'>

        <div className='flex gap-[80px] items-center mb-[100px]'>
           <div className='w-[40%]'>
                <span className='opacity-50 '>FEATURES</span>
                <h1 className='text-[50px] font-medium leading-tight mb-2'>One click, post it</h1>
                <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus vel ipsum dapibus luctus.</p>
           </div>

           <Image src='/frame1.svg' alt='feature' width={850} height={850}/>
        </div>

        <div className='flex gap-[80px] items-center mb-[100px]'>
           <div className='w-[40%]'>
                <span className='opacity-50 '>FEATURES</span>
                <h1 className='text-[50px] font-medium leading-tight mb-2'>Multiple selection</h1>
                <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus vel ipsum dapibus luctus.</p>
           </div>

           <Image src='/frame1.svg' alt='feature' width={850} height={850}/>
        </div>

        <div className='flex gap-[80px] items-center '>
           <div className='w-[40%]'>
                <span className='opacity-50 '>FEATURES</span>
                <h1 className='text-[50px] font-medium leading-tight mb-2'>Schedule post for later</h1>
                <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus vel ipsum dapibus luctus.</p>
           </div>

           <Image src='/frame1.svg' alt='feature' width={850} height={850}/>
        </div>


    </div>
  )
}

export default Features