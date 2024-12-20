import Hero from '@/components/blog/hero/Hero'
import Post from '@/components/blog/post/Post'
import CallToAction from '@/components/home/cta/CallToAction'
import Footer from '@/components/home/footer/Footer'
import React from 'react'

function Page() {
  return (
    <div className='flex flex-col h-full font-[family-name:var(--figtree)] pt-[180px'>
        <Hero />
        <Post />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Page