'use client';
import React, { useState } from 'react';
import Monthly from './Monthly';

function Price() {
  const [billing, setBilling] = useState('monthly');

  const toggleBilling = () => {
    setBilling((prev) => (prev === 'monthly' ? 'annually' : 'monthly'));
  };

  return (
    <div className="container py-[50px]">
      {/* Toggle Button */}
      <div className="flex gap-3 items-center justify-center">
        <div
          className="w-[70px] h-[40px] border border-white/10 rounded-[40px] flex items-center px-2 cursor-pointer"
          onClick={toggleBilling}
        >
          <div
            className={`bg-[var(--primary)] w-[25px] h-[25px] rounded-full transition-transform ${
              billing === 'annually' ? 'translate-x-[30px]' : 'translate-x-0'
            }`}
          ></div>
        </div>
        <p className="text-white/70">
          {billing === 'annually' ? 'Billed annually' : 'Billed monthly'}
        </p>
      </div>

      {/* Pricing Cards */}
      <Monthly billing={billing} />
    </div>
  );
}

export default Price;
