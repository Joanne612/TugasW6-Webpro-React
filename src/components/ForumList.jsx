import React from 'react';
import ForumCard from './ForumCard';

export default function ForumList({ posts, onLike }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        // Menggunakan key unik pada tiap item komponen anak
        <ForumCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}