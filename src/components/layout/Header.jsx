import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Menu } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '../../lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3" 
          : "bg-white/0 border-b border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-gray-900 group">
              <div className="bg-gray-900 p-1.5 rounded-lg group-hover:bg-tech-blue transition-colors duration-300">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-tech-blue group-hover:to-blue-400 transition-all duration-300">
                CareerFolio.
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 hover:-translate-y-0.5 transition-all">Beranda</Link>
            <Link to="/catalog" className="text-sm font-semibold text-gray-600 hover:text-gray-900 hover:-translate-y-0.5 transition-all">Katalog Template</Link>
            <a href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-gray-900 hover:-translate-y-0.5 transition-all">Harga</a>
            <Link to="/admin" className="text-sm font-semibold text-gray-600 hover:text-gray-900 hover:-translate-y-0.5 transition-all">Admin</Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/catalog">
              <Button variant="primary" size="sm" className="shadow-lg shadow-gray-900/20 hover:shadow-gray-900/40">
                Buat Portofolio
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-lg">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
