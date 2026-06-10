import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Sparkles, MonitorSmartphone } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import SEO from '../components/common/SEO';

const Landing = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-gray-100/[0.2] bg-[length:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                Satu klik untuk portofolio <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue via-health-teal to-agro-green">
                  premium sesuai jurusanmu
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tanpa perlu mengerti baris kode. Didesain khusus untuk mahasiswa dan fresh graduate non-IT di Indonesia.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/catalog">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-gray-900/20">
                  Lihat Katalog Template
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Cara Kerja
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih CareerFolio?</h2>
            <p className="text-lg text-gray-600">Fitur yang dirancang khusus untuk mempercepat karir Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md" hover>
              <CardBody className="text-center p-8">
                <div className="mx-auto w-16 h-16 bg-health-teal/10 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-health-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spesialisasi Jurusan</h3>
                <p className="text-gray-600">Template yang disesuaikan untuk kebutuhan spesifik Kesehatan, Teknik, Pertanian, Hukum, dan Bisnis.</p>
              </CardBody>
            </Card>
            
            <Card className="border-none shadow-md" hover>
              <CardBody className="text-center p-8">
                <div className="mx-auto w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-tech-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Deployment</h3>
                <p className="text-gray-600">Setelah pembayaran, portofolio Anda langsung siap digunakan dalam hitungan jam.</p>
              </CardBody>
            </Card>

            <Card className="border-none shadow-md" hover>
              <CardBody className="text-center p-8">
                <div className="mx-auto w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mb-6">
                  <MonitorSmartphone className="h-8 w-8 text-agro-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Responsif Sempurna</h3>
                <p className="text-gray-600">Tampilan luar biasa di ponsel cerdas, tablet, maupun layar desktop.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investasi Untuk Masa Depan</h2>
            <p className="text-lg text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda saat ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paket Mahasiswa */}
            <Card hover className="relative mt-8">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">Mahasiswa</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  Rp299<span className="text-xl text-gray-500 font-medium">.000</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Subdomain gratis (nama.careerfolia.my.id)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">1x Revisi minor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Dukungan teknis email</span>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Link to="/catalog">
                  <Button variant="outline" className="w-full">Pilih Paket</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Paket Fresh Grad - Highlighted */}
            <Card hover className="relative border-tech-blue shadow-xl scale-105 z-10">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                <span className="bg-tech-blue text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mx-auto w-max block">
                  Paling Populer
                </span>
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">Fresh Graduate</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  Rp499<span className="text-xl text-gray-500 font-medium">.000</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Semua fitur Paket Mahasiswa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Template premium / lanjutan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">3x Revisi konten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Prioritas pengerjaan 1x24 jam</span>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Link to="/catalog">
                  <Button variant="primary" className="w-full">Pilih Paket</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Paket Custom */}
            <Card hover className="relative mt-8">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">Custom Domain</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  Rp799<span className="text-xl text-gray-500 font-medium">.000</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Semua fitur Fresh Graduate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Domain .com / .id pribadi (1 thn)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-gray-600">Revisi tak terbatas selama 1 bulan</span>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Link to="/catalog">
                  <Button variant="outline" className="w-full">Pilih Paket</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
