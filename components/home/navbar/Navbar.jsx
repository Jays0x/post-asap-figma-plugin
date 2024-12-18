import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import navData from './data'

function Navbar() {
  return (
    <div className='bg-[var(--background)] px-2 py-2 w-[750px] border border-white border-opacity-10 rounded-xl fixed mt-20 flex justify-between max-w-screen-2xl font-[family-name:var(--figtree)]'>
        <Link href='/'>
            <Image src='/icon.svg' height={45} width={45} alt='logo' />
        </Link>

        <div className='flex gap-8 items-center text-white/70 text-[14px]'>
            {
                navData.map((item) => (
                    <div key={item.id} className='flex gap-3'>
                        <Link href={item.href} className='hover:text-white'>{item.label}</Link>
                    </div>
                ))
            }
        </div>

        <Link href='/register' className='bg-[#ffffff20] border border-white border-opacity-10 flex justify-center items-center text-center py-2  px-4 rounded-lg text-white font-medium text-[14px] hover:bg-[#ffffff10]'>Get started</Link>
    </div>
  )
}

export default Navbar