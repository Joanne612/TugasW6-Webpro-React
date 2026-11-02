import React from 'react';

export default function ForumHeader({ title, description, activeCategory, onCategoryChange }) {
  const categories = ['Semua', 'Web Dev', 'Laravel', 'React', 'Tugas & Assignment'];

  return (
    <header className="bg-slate-900 text-white p-6 rounded-2xl shadow-md mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-indigo-400">
            💬 {title}
          </h1>
          <p className="text-slate-300 text-sm mt-1">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}