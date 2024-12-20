import CallToAction from '@/components/home/cta/CallToAction'
import Footer from '@/components/home/footer/Footer'
import Hero from '@/components/pricing/hero/Hero'
import Price from '@/components/pricing/price/Price'
import React from 'react'

function Page() {
  return (
    <div className="flex flex-col h-full font-[family-name:var(--figtree)] ">
       <Hero />
       <Price />
       <CallToAction />
       <Footer />
    </div>
  )
}

export default Page