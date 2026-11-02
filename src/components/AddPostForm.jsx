import React, { useState } from 'react';

export default function AddPostForm({ onAddPost }) {
  // Controlled component states
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Dev');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(), // Key unik menggunakan timestamp
      author,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`,
      title,
      category,
      content,
      likes: 0,
      replies: 0,
      createdAt: 'Baru saja',
    };

    onAddPost(newPost);

    // Reset form setelah submit
    setAuthor('');
    setTitle('');
    setContent('');
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        ✏️ Buat Topik Diskusi Baru
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama / Username</label>
            <input
              type="text"
              placeholder="Contoh: Joanne"
              value={author} // Controlled value
              onChange={(e) => setAuthor(e.target.value)} // Controlled handler
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Kategori Topik</label>
            <select
              value={category} // Controlled value
              onChange={(e) => setCategory(e.target.value)} // Controlled handler
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="Web Dev">Web Dev</option>
              <option value="Laravel">Laravel</option>
              <option value="React">React</option>
              <option value="Tugas & Assignment">Tugas & Assignment</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Judul Diskusi</label>
          <input
            type="text"
            placeholder="Contoh: Kendala konfigurasi Tailwind di Vite"
            value={title} // Controlled value
            onChange={(e) => setTitle(e.target.value)} // Controlled handler
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Isi Pertanyaan / Topik</label>
          <textarea
            rows="3"
            placeholder="Jelaskan detail pertanyaan atau topik diskusi..."
            value={content} // Controlled value
            onChange={(e) => setContent(e.target.value)} // Controlled handler
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
        </div>

        {/* Tombol Tambah */}
        <button
          type="submit"
          className="w-full md:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow transition-colors cursor-pointer"
        >
          + Tambah Diskusi
        </button>
      </form>
    </div>
  );
}