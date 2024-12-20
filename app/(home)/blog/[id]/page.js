'use client'
import postData from '@/components/blog/post/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

import { FaArrowLeftLong } from "react-icons/fa6";
import Image from 'next/image';
import CallToAction from '@/components/home/cta/CallToAction';
import Footer from '@/components/home/footer/Footer';

function Page() {

    const pathname = usePathname();

    const id = pathname.split('/').pop()


    const post = postData.find((post) => post.id === parseInt(id));

    if(!post) {
        return (
            <div className="flex flex-col h-full font-[family-name:var(--figtree)] pt-[180px]">
              <h1>No post found</h1>
            </div>
          );
    }


  return (
    <div className='flex flex-col h-full font-[family-name:var(--figtree)] '>
      <div className='pt-[180px] flex container gap-[190px]'>
        <Link href='/blog'>
                <div className='bg-[var(--component)] p-5 rounded-full border border-white/10'>
                    <FaArrowLeftLong />
                </div>
        </Link>

        <div className='w-[100%]'>
            <div className="mb-10">
              <span className="text-white/50">{post.category}</span>
              <h1 className="text-[35px] font-semibold mt-2">{post.title}</h1>
              <p className="text-white/70 my-4">{post.content}</p>
              <div className="flex flex-wrap gap-2 mt-[10px]">
                {post.tag.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 rounded text-white/50 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

             <div className="w-full mb-[50px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={200}
                    className="rounded-lg object-cover w-[80%] h-[400px]"
                />
            </div>

            <div className='mb-[80px] w-[80%]'>
                <p>{post.description}</p>
            </div>
        </div>
        
      </div>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default Page