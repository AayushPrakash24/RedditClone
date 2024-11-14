"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState('');
  const router = useRouter();

  const addPost = () => {
    if (newPost.trim() !== ''){
      setPosts([newPost, ...posts]);
      setNewPost('');
    }
  };

  const clickPost = (postId: number) => {
    router.push(`/${postId}`);
  };

  return (
    <div>
      <h1>This is my Reddit Clone!</h1>
      <div>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />

        <button onClick={addPost}>Post</button>
      </div>
      
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post" onClick={() => clickPost(index)}>
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}
