import React from 'react';
import Image from 'next/image';
import plans from './data';

function Monthly({ billing }) {
  const getPrice = (basePrice) => {
    if (billing === 'annually') {
      return (basePrice * 12 * 0.9).toFixed(2); 
    }
    return basePrice.toFixed(2);
  };

  return (
    <div className="flex gap-4 items-start w-full py-[80px]">
      {/* Free Plan */}
      <div className="border border-white/10 w-[400px] h-[700px] p-8 rounded-lg flex flex-col justify-between">
        <div>
          <span className="text-white/50">FREE</span>
          <div className="flex items-end mb-6">
            <h1 className="text-white text-[50px]">$0.00</h1>
            <p className="text-white/70">/ Lifetime</p>
          </div>
          <div className="w-full h-[1px] bg-white/10 mb-6"></div>
          <div>
            {plans.free.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <Image src={item.icon} alt="tick" width={20} height={20} />
                <p className="text-white/70">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-6 w-full py-3 bg-[var(--primary)] text-black rounded-lg hover:bg-[#777777]">
          Get started
        </button>
      </div>

      {/* Plus Plan */}
      <div className="border border-white/10 w-[400px] h-[700px] p-8 rounded-lg flex flex-col justify-between">
        <div>
          <span className="text-white/50">PLUS</span>
          <div className="flex items-end mb-6">
            <h1 className="text-white text-[50px]">${getPrice(9.99)}</h1>
            <p className="text-white/70">
              / {billing === 'annually' ? 'Year' : 'Month'}
            </p>
          </div>
          <div className="w-full h-[1px] bg-white/10 mb-6"></div>
          <div>
            {plans.plus.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <Image src={item.icon} alt="tick" width={20} height={20} />
                <p className="text-white/70">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-6 w-full py-3 bg-[var(--primary)] text-black rounded-lg hover:bg-[#777777]">
          Get started
        </button>
      </div>

      {/* Pro Plan */}
      <div className="border border-white/10 w-[400px] h-[700px] p-8 rounded-lg flex flex-col justify-between">
        <div>
          <span className="text-white/50">PRO</span>
          <div className="flex items-end mb-6">
            <h1 className="text-white text-[50px]">${getPrice(29.99)}</h1>
            <p className="text-white/70">
              / {billing === 'annually' ? 'Year' : 'Month'}
            </p>
          </div>
          <div className="w-full h-[1px] bg-white/10 mb-6"></div>
          <div>
            {plans.pro.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <Image src={item.icon} alt="tick" width={20} height={20} />
                <p className="text-white/70">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-6 border border-white/10 w-full py-3 bg-[var(--component)] text-white rounded-lg hover:bg-white/20">
          Join waitlist
        </button>
      </div>
    </div>
  );
}

export default Monthly;
