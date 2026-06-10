import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Menu } from 'lucide-react';
import Button from '../common/Button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity">
              <Briefcase className="h-6 w-6 text-tech-blue" />
              <span className="font-bold text-xl tracking-tight">CareerFolio.</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Beranda</Link>
            <Link to="/catalog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Katalog Template</Link>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Harga</a>
            <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Admin</Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/catalog">
              <Button variant="primary" size="sm">Buat Portofolio</Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
