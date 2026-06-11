import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';
import Badge from '../components/common/Badge';
import SEO from '../components/common/SEO';
import FadeIn from '../components/common/FadeIn';

// Mock data mapping to PRD
const templates = [
  { id: 'health-1', name: 'CareerFolio Health - Premium', category: 'Kesehatan & Medis', badgeType: 'health', desc: 'Template minimalis fokus pada rotasi klinis dan sertifikasi.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop' },
  { id: 'health-2', name: 'CareerFolio Health - Pro', category: 'Kesehatan & Medis', badgeType: 'health', desc: 'Advanced template dengan case gallery dan publikasi jurnal.', image: 'https://images.unsplash.com/photo-1584982751601-97d8cb0f6669?q=80&w=600&auto=format&fit=crop' },
  { id: 'health-3', name: 'CareerFolio Health - Executive', category: 'Kesehatan & Medis', badgeType: 'health', desc: 'Executive class template for senior practitioners and medical researchers.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop' },
  { id: 'agro-1', name: 'CareerFolio Agro - Field Expert', category: 'Pertanian & Lingkungan', badgeType: 'agro', desc: 'Fokus pada riset data, dokumentasi lapangan, dan yield prediction.', image: 'https://images.unsplash.com/photo-1592982537447-6f296d3f2ec4?q=80&w=600&auto=format&fit=crop' },
  { id: 'agro-2', name: 'CareerFolio Agro - Researcher', category: 'Pertanian & Lingkungan', badgeType: 'agro', desc: 'Layout asimetris dan modern untuk Ph.D candidate atau peneliti.', image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&auto=format&fit=crop' },
  { id: 'agro-3', name: 'CareerFolio Agro - Tech Data', category: 'Pertanian & Lingkungan', badgeType: 'agro', desc: 'Dashboard style dengan data visualization untuk smart farming.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop' },
  { id: 'tech-1', name: 'CareerFolio Tech - Constructor', category: 'Teknik Non-IT', badgeType: 'tech', desc: 'Sempurna untuk blueprint, CAD drawings, dan spesifikasi RAB.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop' },
  { id: 'tech-2', name: 'CareerFolio Tech - Industrial', category: 'Teknik Non-IT', badgeType: 'tech', desc: 'Dashboard industrial style dengan panel instrumen dan diagnostik.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop' },
  { id: 'tech-3', name: 'CareerFolio Tech - Architectural', category: 'Teknik Non-IT', badgeType: 'tech', desc: 'Desain blueprint interaktif dengan WebGL 3D render background.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' },
  { id: 'tech-mech', name: 'CareerFolio Tech - Mech', category: 'Teknik Non-IT', badgeType: 'tech', desc: 'Fokus pada sistem mesin, inovasi, dan portofolio pabrikasi.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
  { id: 'law-prac', name: 'CareerFolio Law - Associate', category: 'Hukum & Soshum', badgeType: 'law', desc: 'Desain elegan untuk moot court, legal drafting, dan publikasi.', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop' },
  { id: 'biz-fin', name: 'CareerFolio Business - Analyst', category: 'Ekonomi & Bisnis', badgeType: 'biz', desc: 'Professional dashboard vibe untuk metrik finansial dan ROI.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  { id: 'biz-market', name: 'CareerFolio Business - Market', category: 'Ekonomi & Bisnis', badgeType: 'biz', desc: 'Modern & trendy untuk case study marketing dan digital campaigns.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop' },
];

const categories = ['Semua Kategori', 'Kesehatan & Medis', 'Pertanian & Lingkungan', 'Teknik Non-IT', 'Hukum & Soshum', 'Ekonomi & Bisnis'];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');

  const filteredTemplates = activeCategory === 'Semua Kategori' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Katalog Template | CareerFolio" 
        description="Jelajahi berbagai pilihan desain portofolio profesional untuk mahasiswa Kesehatan, Teknik, Pertanian, Hukum, dan Bisnis." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Katalog Template</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Pilih arsitektur portofolio yang paling tepat untuk mempresentasikan keahlian spesifik jurusan Anda dengan elegan.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.2} direction="up" className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, idx) => (
            <motion.div 
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <Card hover glass className="overflow-hidden h-full flex flex-col border-transparent bg-white/70">
                <div className="relative h-56 overflow-hidden bg-gray-200 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img src={template.image} alt={template.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant={template.badgeType} glow className="bg-white/90 shadow-sm">{template.category}</Badge>
                  </div>
                </div>
                <CardBody className="flex flex-col flex-grow p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{template.name}</h3>
                  <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed font-light">{template.desc}</p>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/preview/${template.id}`} className="flex-1">
                      <Button variant="outline" className="w-full text-sm font-semibold border-gray-300 hover:bg-gray-50">Live Preview</Button>
                    </Link>
                    <Link to="/order" className="flex-1">
                      <Button variant="primary" className="w-full text-sm font-semibold shadow-md shadow-gray-900/10">Pesan Ini</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <FadeIn className="text-center py-20 text-gray-500 text-lg">
            Tidak ada template yang ditemukan untuk kategori ini.
          </FadeIn>
        )}

      </div>
    </div>
  );
};

export default Catalog;
