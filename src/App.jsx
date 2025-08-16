import React from "react";

export default function App() {
  const comics = [
    { title: "Necromancer Academy", img: "/assets/comic-sample1.jpg" },
    { title: "Martial Arts Legend", img: "/assets/comic-sample2.jpg" },
    { title: "Genius Summoner", img: "/assets/comic-sample3.jpg" },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <header className="bg-gray-900 text-white p-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
          <span className="font-bold text-xl">Perkomik</span>
        </div>
        <nav className="space-x-4">
          <a href="#hero" className="hover:underline">Beranda</a>
          <a href="#comics" className="hover:underline">Komik</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row items-center p-10 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Baca Komik Berwarna Favoritmu
          </h1>
          <p className="text-white mb-6">
            Jelajahi dunia komik dengan ilustrasi penuh warna dan cerita seru setiap chapter.
          </p>
          <a href="#comics" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">
            Lihat Komik
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="/assets/hero-comic.jpg" alt="Hero Comic" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Comics Section */}
      <section id="comics" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Komik Populer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comics.map((comic, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={comic.img} alt={comic.title} className="rounded mb-4" />
              <h3 className="text-xl font-semibold">{comic.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Kontak Kami</h2>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Nama" className="p-3 border rounded" required />
          <input type="email" placeholder="Email" className="p-3 border rounded" required />
          <textarea placeholder="Pesan" className="p-3 border rounded" rows="4" required></textarea>
          <button type="submit" className="bg-purple-700 text-white p-3 rounded font-semibold hover:bg-purple-800 transition">
            Kirim Pesan
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-5 text-center">
        © 2025 Perkomik. Semua Hak Dilindungi.
      </footer>
    </div>
  );
}
