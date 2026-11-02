import React, { useState } from 'react';
import ForumHeader from './components/ForumHeader';
import ForumStats from './components/ForumStats';
import AddPostForm from './components/AddPostForm';
import ForumList from './components/ForumList';

// Data Awal Diskusi (Realistis untuk Topik Web Development)
const INITIAL_POSTS = [
  {
    id: 1,
    author: 'Budi Setiawan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
    title: 'Bagaimana cara mengatasi error CORS pada Vite + React ketika fetch ke Backend Laravel?',
    category: 'React',
    content: 'Teman-teman, saya sedang mencoba fetch data dari API Laravel ke React Vite tapi kena error CORS header missing. Apakah perlu diatur dari middleware Laravel atau config proxy Vite?',
    likes: 12,
    replies: 5,
    createdAt: '2 jam yang lalu',
  },
  {
    id: 2,
    author: 'Siti Rahma',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
    title: 'Rekomendasi Best Practice relasi Eloquent Many-to-Many di Laravel 11',
    category: 'Laravel',
    content: 'Halo semua, untuk pengerjaan project Tugas Webpro minggu ini, apakah lebih efektif membuat Pivot Model terpisah atau cukup memakai belongToMany di Model utama saja?',
    likes: 8,
    replies: 3,
    createdAt: '5 jam yang lalu',
  },
];

export default function App() {
  // a. Simpan daftar item sebagai state (array)
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Fungsi untuk menambah data baru dari form
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Fungsi interaktif untuk menambah like pada item tertentu
  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Filter berdasarkan kategori yang dipilih
  const filteredPosts =
    activeCategory === 'Semua'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const totalReplies = posts.reduce((acc, curr) => acc + curr.replies, 0);
  const uniqueAuthors = new Set(posts.map((p) => p.author)).size;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ForumHeader
          title="WebPro Discussion Forum"
          description="Wadah diskusi pemrograman web, berbagi solusi bug, dan tips seputar tugas perkuliahan."
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ForumStats
          totalPosts={posts.length}
          totalReplies={totalReplies}
          activeContributors={uniqueAuthors}
        />

        {/* b. Form input (controlled component) beserta tombol "Tambah" */}
        <AddPostForm onAddPost={handleAddPost} />

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-slate-800">
              Topik Diskusi ({filteredPosts.length})
            </h2>
          </div>

          {/* c. Conditional rendering: tampilkan teks jika daftar kosong */}
          {filteredPosts.length === 0 ? (
            <div className="bg-white p-8 rounded-xl text-center border border-slate-200 text-slate-500 shadow-sm">
              <p className="text-base font-medium">Belum ada data diskusi</p>
              <p className="text-xs text-slate-400 mt-1">
                Belum ada topik yang tersedia pada kategori "{activeCategory}". Silakan buat diskusi baru melalui form di atas.
              </p>
            </div>
          ) : (
            // a. Tampilkan menggunakan render list (.map()) dengan key unik pada tiap item
            <ForumList posts={filteredPosts} onLike={handleLike} />
          )}
        </div>
      </div>
    </div>
  );
}