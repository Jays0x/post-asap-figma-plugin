import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const testimonies = [
  {
    name: 'John Doe',
    role: 'Designer @Meta',
    text: '“ Loving the plugin. Proudly recommend for beginners. ”',
    avatar: '/avatar1.svg',
    link: 'https://x.com/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'Designer @Google',
    text: '“ This plugin made my workflow so much easier! ”',
    avatar: '/avatar2.svg',
    link: 'https://x.com/janesmith',
  },
  {
    name: 'Sam Wilson',
    role: 'Developer @Apple',
    text: '“ Fantastic tool for professionals and beginners alike. ”',
    avatar: '/avatar3.svg',
    link: 'https://x.com/samwilson',
  },
  {
    name: 'Alice Brown',
    role: 'UI/UX @Adobe',
    text: '“ Game changer! Highly recommend to everyone. ”',
    avatar: '/avatar4.svg',
    link: 'https://x.com/alicebrown',
  },
  {
    name: 'Michael Lee',
    role: 'Lead Dev @Microsoft',
    text: '“ Elegant and easy to use. 5 stars! ”',
    avatar: '/avatar5.svg',
    link: 'https://x.com/michaellee',
  },
  {
    name: 'Emily Davis',
    role: 'Creative @Figma',
    text: '“ Helped me speed up my designs so much! ”',
    avatar: '/avatar6.svg',
    link: 'https://x.com/emilydavis',
  },
];

function Testimonies() {
  return (
    <div className="container py-[80px] overflow-hidden">
      <div className="flex flex-col justify-center mb-[60px]">
        <span className="text-white/50 text-center">TESTIMONIES</span>
        <h1 className="text-[50px] text-center">Loved by designers</h1>
      </div>

      <div className="animation-wrapper">
        {/* First column (scrolling up) */}
        <div className="column">
          {[...testimonies, ...testimonies].map((testimony, index) => (
            <TestimonyCard key={index} testimony={testimony} />
          ))}
        </div>

        {/* Middle column (scrolling down) */}
        <div className="column middle delay-5s">
          {[...testimonies, ...testimonies].map((testimony, index) => (
            <TestimonyCard key={index} testimony={testimony} />
          ))}
        </div>

        {/* Third column (scrolling up with delay) */}
        <div className="column delay-10s">
          {[...testimonies, ...testimonies].map((testimony, index) => (
            <TestimonyCard key={index} testimony={testimony} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TestimonyCard = ({ testimony }) => (
  <div className="testimony-card">
    <p className="text-[16px] text-white/70 mb-8">{testimony.text}</p>
    <div className="flex justify-between">
      <div className="flex gap-3">
        <Image src={testimony.avatar} alt="avatar" width={40} height={40} />
        <div>
          <h1>{testimony.name}</h1>
          <p>{testimony.role}</p>
        </div>
      </div>
      <Link href={testimony.link}>
        <Image src="/x.svg" alt="x-twitter" width={20} height={20} />
      </Link>
    </div>
  </div>
);

export default Testimonies;
