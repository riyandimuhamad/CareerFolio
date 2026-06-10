import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';
import Badge from '../components/common/Badge';
import SEO from '../components/common/SEO';

// Mock data mapping to PRD
const templates = [
  { id: 'health-basic', name: 'CareerFolio Health - Basic', category: 'Kesehatan & Medis', badgeType: 'health', desc: 'Template minimalis fokus pada rotasi klinis dan sertifikasi.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop' },
  { id: 'health-pro', name: 'CareerFolio Health - Pro', category: 'Kesehatan & Medis', badgeType: 'health', desc: 'Advanced template dengan case gallery dan publikasi jurnal.', image: 'https://images.unsplash.com/photo-1584982751601-97d8cb0f6669?q=80&w=600&auto=format&fit=crop' },
  { id: 'agro-field', name: 'CareerFolio Agro - Field', category: 'Pertanian & Lingkungan', badgeType: 'agro', desc: 'Fokus pada riset data, dokumentasi lapangan, dan yield prediction.', image: 'https://images.unsplash.com/photo-1592982537447-6f296d3f2ec4?q=80&w=600&auto=format&fit=crop' },
  { id: 'tech-civil', name: 'CareerFolio Tech - Civil', category: 'Teknik Non-IT', badgeType: 'tech', desc: 'Sempurna untuk blueprint, CAD drawings, dan spesifikasi RAB.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop' },
  { id: 'tech-mech', name: 'CareerFolio Tech - Mech', category: 'Teknik Non-IT', badgeType: 'tech', desc: 'Fokus pada sistem mesin, inovasi, dan portofolio pabrikasi.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
  { id: 'law-prac', name: 'CareerFolio Law - Practitioner', category: 'Hukum & Soshum', badgeType: 'law', desc: 'Desain elegan untuk moot court, legal drafting, dan publikasi.', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop' },
  { id: 'biz-fin', name: 'CareerFolio Business - Finance', category: 'Ekonomi & Bisnis', badgeType: 'biz', desc: 'Professional dashboard vibe untuk metrik finansial dan ROI.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  { id: 'biz-market', name: 'CareerFolio Business - Market', category: 'Ekonomi & Bisnis', badgeType: 'biz', desc: 'Modern & trendy untuk case study marketing dan digital campaigns.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop' },
];

const categories = ['Semua Kategori', 'Kesehatan & Medis', 'Pertanian & Lingkungan', 'Teknik Non-IT', 'Hukum & Soshum', 'Ekonomi & Bisnis'];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');

  const filteredTemplates = activeCategory === 'Semua Kategori' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <SEO 
        title="Katalog Template | CareerFolio" 
        description="Jelajahi berbagai pilihan desain portofolio profesional untuk mahasiswa Kesehatan, Teknik, Pertanian, Hukum, dan Bisnis." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Katalog Template</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih arsitektur portofolio yang paling tepat untuk mempresentasikan keahlian spesifik jurusan Anda.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, idx) => (
            <motion.div 
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card hover className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  {/* Using placeholder image for MVP, will be real templates later */}
                  <img src={template.image} alt={template.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <CardBody className="flex flex-col flex-grow">
                  <div className="mb-2">
                    <Badge variant={template.badgeType}>{template.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{template.desc}</p>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/preview/${template.id}`} className="flex-1">
                      <Button variant="outline" className="w-full text-sm">Live Preview</Button>
                    </Link>
                    <Link to="/order" className="flex-1">
                      <Button variant="primary" className="w-full text-sm">Pesan Ini</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Tidak ada template yang ditemukan untuk kategori ini.
          </div>
        )}

      </div>
    </div>
  );
};

export default Catalog;
