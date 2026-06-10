import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, Globe, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-gray-900 mb-4">
              <Briefcase className="h-6 w-6 text-tech-blue" />
              <span className="font-bold text-xl tracking-tight">CareerFolio.</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-md mb-6">
              Satu klik untuk portofolio premium yang merepresentasikan keahlian spesifik jurusanmu, tanpa perlu mengerti baris kode. Solusi digital untuk mahasiswa aktif dan fresh graduate.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Kategori Jurusan</h3>
            <ul className="space-y-3">
              <li><Link to="/catalog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Kesehatan & Medis</Link></li>
              <li><Link to="/catalog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pertanian & Lingkungan</Link></li>
              <li><Link to="/catalog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Teknik Non-IT</Link></li>
              <li><Link to="/catalog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Hukum & Soshum</Link></li>
              <li><Link to="/catalog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Ekonomi & Bisnis</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Dukungan</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cara Pemesanan</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CareerFolio by Riyandi Muhammad Rizki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
