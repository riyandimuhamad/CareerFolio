import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardBody, CardHeader } from '../components/common/Card';
import { templatesData } from '../data/mockData';

const Order = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get('template') || 'health-basic';
  const template = templatesData[templateId];

  // Placeholder Google Form Link (bisa diganti URL asli nantinya)
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform";
  
  const adminPhone = '6281234567890';
  const waMessage = `Halo Admin CareerFolio, saya sudah mengisi form pemesanan untuk template ${template?.name || templateId}. Mohon segera diproses ya!`;
  const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-gray-50 min-h-[80vh] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Pemesanan Template</h1>
          <p className="text-gray-600">Selesaikan pesanan Anda hanya dalam 2 langkah mudah.</p>
        </div>

        <Card className="shadow-lg border-0 overflow-hidden mb-8">
          {template && (
            <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 mb-1">Template Terpilih:</p>
                <h3 className="text-lg font-bold">{template.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Kategori:</p>
                <p className="font-medium">{template.category}</p>
              </div>
            </div>
          )}

          <CardBody className="p-8 space-y-12">
            
            {/* Langkah 1 */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-tech-blue text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Isi Form Pemesanan</h3>
                  <p className="text-gray-600 mb-6">
                    Silakan isi data diri Anda dan unggah aset portofolio melalui formulir resmi kami. Data Anda otomatis aman.
                  </p>
                  <a href={googleFormUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="w-full md:w-auto flex items-center justify-center border-tech-blue text-tech-blue hover:bg-blue-50">
                      Buka Google Form <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              {/* Connector Line */}
              <div className="absolute left-5 top-10 bottom-[-3rem] w-0.5 bg-gray-200"></div>
            </div>

            {/* Langkah 2 */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Konfirmasi ke WhatsApp</h3>
                  <p className="text-gray-600 mb-6">
                    Setelah form di atas di-submit, tekan tombol di bawah ini agar tim kami segera memproses portofolio Anda.
                  </p>
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <Button variant="primary" className="w-full md:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 border-none">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Konfirmasi Pesanan
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </CardBody>
        </Card>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
          <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-blue-900 mb-1">Jaminan Keamanan</h4>
            <p className="text-sm text-blue-800">
              Pengisian data Anda sepenuhnya di-host di server Google yang sangat aman. Kami tidak akan pernah membagikan data Anda kepada pihak ketiga.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Order;
