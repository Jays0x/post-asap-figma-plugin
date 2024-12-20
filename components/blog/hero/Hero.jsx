'use client';
import React, { useState } from 'react';
import postData from '../post/data';
import Post from '../post/Post';

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(postData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const filtered = postData.filter((post) => 
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tag.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredData(filtered);
  };

  return (
    <div className="container pt-[180px] pb-[80px]">
      <h1 className="text-[72px] font-semibold text-center">Blog Post</h1>
      <p className="text-[20px] text-center text-white/70">List of curated blogs just for you.</p>

      <div className="flex flex-col justify-center items-center mt-[20px] mb-[80px]">
        <input
          type="text"
          placeholder="Search for blog post"
          value={searchTerm}
          onChange={handleSearch}
          className="py-[10px] px-[20px] mt-[20px] rounded-[10px] bg-[var(--component)] border border-white/10 placeholder:text-white/30 w-[450px]"
        />
      </div>

      <Post posts={filteredData} />
    </div>
  );
}

export default Hero;
