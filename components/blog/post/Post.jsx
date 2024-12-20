import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Post({ posts = [] }) {
  return (
    <div className="container">
      {posts && posts.length > 0 ? ( // Ensure posts exist and have items
        posts.map((post) => (
          <div
            key={post.id}
            className="flex gap-[80px] mb-[40px] p-[20px] items-center"
          >
            {/* Image on the left */}
            <div className="">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={450}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content on the right */}
            <Link href={`/blog/${post.id}`} className="w-2/3">
              <span className="text-white/50">{post.category}</span>
              <h1 className="text-[24px] font-semibold mt-2">{post.title}</h1>
              <p className="text-white/70 mt-4">{post.content}</p>
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
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-white/50">{
            posts.length < 0 ? 'No post found' : null
        }</p>
      )}
    </div>
  );
}

export default Post;
