import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Halaman tidak ditemukan.</p>
      <a href="/" className="text-tech-blue hover:underline">Kembali ke Beranda</a>
    </div>
  );
};

export default NotFound;
