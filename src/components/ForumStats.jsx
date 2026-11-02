import React from 'react';

export default function ForumStats({ totalPosts, totalReplies, activeContributors }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Diskusi</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{totalPosts}</p>
        </div>
        <span className="text-3xl">📌</span>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Balasan</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{totalReplies}</p>
        </div>
        <span className="text-3xl">💬</span>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Kontributor Aktif</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{activeContributors}</p>
        </div>
        <span className="text-3xl">👥</span>
      </div>
    </section>
  );
}