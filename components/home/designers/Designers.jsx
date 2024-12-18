'use client'
import React, { useState } from 'react';
import designerOne from './data';
import Link from 'next/link';

function Designers() {
  const [hoveredDesigner, setHoveredDesigner] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredDesigner(id);
  };

  const handleMouseLeave = () => {
    setHoveredDesigner(null);
  };

  return (
    <div className='flex flex-row py-[80px] justify-between items-center w-full container'>
      <div className='w-[40%]'>
        <h1 className='text-[35px] opacity-70 leading-tight'>Trusted by senior designers around the world</h1>
      </div>

      <div className='w-[1px] bg-white/10 h-[150px] rounded-lg'></div>

      <div className='flex gap-5'>
        {designerOne.map((d) => (
          <div key={d.id} className='relative'>
            <Link href={d.link} target='_blank'>
              <img
                src={d.image}
                alt={d.name}
                width={50}
                height={50}
                onMouseEnter={() => handleMouseEnter(d.id)}
                onMouseLeave={handleMouseLeave}
                className='cursor-pointer'
              />
              {hoveredDesigner === d.id && (
                <div className='absolute top-[60px] -left-8 px-5 bg-[var(--component)] rounded-lg text-[14px] py-2 w-[120px] text-center'>
                  <p>{d.name}</p>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designers;
