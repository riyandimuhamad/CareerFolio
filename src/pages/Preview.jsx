import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MonitorSmartphone } from 'lucide-react';
import Button from '../components/common/Button';
import { templatesData } from '../data/mockData';

import HealthBasic from '../components/templates/kesehatan/HealthBasic';
import AgroField from '../components/templates/pertanian/AgroField';
import TechCivil from '../components/templates/teknik/TechCivil';
import LawPrac from '../components/templates/hukum/LawPrac';
import BizFin from '../components/templates/ekonomi/BizFin';

const TemplateRenderer = ({ templateId, data }) => {
  switch (templateId) {
    case 'health-basic': return <HealthBasic data={data} />;
    case 'agro-field': return <AgroField data={data} />;
    case 'tech-civil': return <TechCivil data={data} />;
    case 'law-prac': return <LawPrac data={data} />;
    case 'biz-fin': return <BizFin data={data} />;
    default: return <div className="p-8 text-center">Template sedang dalam pengembangan.</div>;
  }
};

const Preview = () => {
  const { id } = useParams();
  const template = templatesData[id] || templatesData['health-basic'];

  if (!template || !template.mockContent) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-2xl text-red-500 mb-4">Error: Data Template Tidak Ditemukan</h1>
        <Link to="/catalog">
          <Button variant="primary">Kembali ke Katalog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Sticky Navigation per FR-2.2 */}
      <div className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/catalog" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Katalog
          </Link>
          
          <div className="hidden md:flex items-center font-medium">
            <MonitorSmartphone className="h-5 w-5 mr-2 text-gray-400" />
            Live Preview: <span className="ml-2 text-gray-300">{template.name}</span>
          </div>

          <Link to={`/order?template=${id}`}>
            <Button variant="primary" className="bg-tech-blue hover:bg-blue-600 text-white shadow-lg border-none">
              Gunakan Template Ini &rarr;
            </Button>
          </Link>
        </div>
      </div>

      {/* Render Area */}
      <div className="flex-grow p-4 md:p-8 flex justify-center items-start">
        <div className="w-full max-w-5xl bg-white min-h-[80vh] shadow-xl rounded-b-lg border-t-4 border-gray-200 overflow-hidden relative">
          {/* Simulated Browser Bar */}
          <div className="bg-gray-100 h-8 flex items-center px-4 gap-2 border-b border-gray-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="mx-auto text-xs text-gray-400 font-mono">portfolio.riyandimhmd.my.id</div>
          </div>

          {/* Actual Template Rendering */}
          <div className="w-full">
            <TemplateRenderer templateId={id} data={template.mockContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
