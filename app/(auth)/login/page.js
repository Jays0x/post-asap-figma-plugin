'use client'
import Link from "next/link";
import { useState } from "react";

import { FiEye } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";

function Page() {

        const [ show, setShow ] = useState(false);
    
        const handleShow = () => {
            setShow(true);
        }
    
        const closeShow = () => {
            setShow(false);
        }

  return (
    <div className='flex flex-col items-center justify-center mt-[120px] font-[family-name:var(--figtree)]'>
        <div className='mb-10'>
            <h1 className='text-[30px] text-center font-medium'>Log in</h1>
            <p className='text-white/70 text-center'>Kindly log in to your account</p>
        </div>

        <div>
            <form className='flex flex-col gap-4'>

                <input 
                type='email' 
                placeholder='Enter email' 
                className='w-[350px] px-4 py-2 rounded-lg bg-[#000] border border-white/10 placeholder:text-white/30'
                />

                <div className='w-[350px] px-4 py-2 rounded-lg bg-[#000] border border-white/10  flex items-center'>
                    <input 
                    type={`${ show ? 'text' : 'password'}` }
                    placeholder='Enter password' 
                    className='w-full bg-transparent border-none outline-none placeholder:text-white/30'
                    />

                   
                    {
                        show ? <LuEyeClosed onClick={closeShow} className="cursor-pointer"/> : <FiEye onClick={handleShow} className="cursor-pointer"/> 
                    }
                    
                </div>

                <Link href='#' className='bg-[var(--primary)] px-4 w-[350px] text-center font-medium text-black py-3 rounded-lg'>Log in</Link>
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