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
            <h1 className='text-[30px] text-center font-medium'>Reset password</h1>
            <p className='text-white/70 text-center'>Kindly reset your password to protect your account</p>
        </div>

        <div>
            <form className='flex flex-col gap-4'>

                <div className='w-[350px] px-4 py-2 rounded-lg bg-[#000] border border-white/10  flex items-center'>
                    <input 
                    type={`${ show ? 'text' : 'password'}` }
                    placeholder='New password' 
                    className='w-full bg-transparent border-none outline-none placeholder:text-white/30'
                    />

                   
                    {
                        show ? <LuEyeClosed onClick={closeShow} className="cursor-pointer"/> : <FiEye onClick={handleShow} className="cursor-pointer"/> 
                    }
                    
                </div>

                <div className='w-[350px] px-4 py-2 rounded-lg bg-[#000] border border-white/10  flex items-center'>
                    <input 
                    type={`${ show ? 'text' : 'password'}` }
                    placeholder='Confirm password' 
                    className='w-full bg-transparent border-none outline-none placeholder:text-white/30'
                    />

                   
                    {
                        show ? <LuEyeClosed onClick={closeShow} className="cursor-pointer"/> : <FiEye onClick={handleShow} className="cursor-pointer"/> 
                    }
                    
                </div>

                <Link href='/dash/password' className='bg-[var(--primary)] px-4 w-[350px] text-center font-medium text-black py-3 rounded-lg'>Reset now</Link>
            </form>

        </div>
    </div>
  )
}

export default Page