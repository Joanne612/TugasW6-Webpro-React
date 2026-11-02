import React from 'react';

export default function ForumCard({ post, onLike }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.author}
            className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200"
          />
          <div>
            <h4 className="text-sm font-bold text-slate-800">{post.author}</h4>
            <span className="text-xs text-slate-400">{post.createdAt}</span>
          </div>
        </div>
        <span className="px-2.5 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-md border border-indigo-100">
          {post.category}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          {post.content}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-rose-50 hover:text-rose-600 transition-colors font-medium"
        >
          ❤️ <span>{post.likes} Suka</span>
        </button>
        <div className="flex items-center gap-4">
          <span>💬 {post.replies} Balasan</span>
        </div>
      </div>
    </div>
  );
}