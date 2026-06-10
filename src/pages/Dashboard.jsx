import React, { useState } from 'react';
import { Activity, Users, DollarSign, ShoppingCart, ArrowUpRight, FileText } from 'lucide-react';
import Card, { CardBody, CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';

const MOCK_ORDERS = [
  { id: 'ORD-001', name: 'Ayu Kartika', template: 'Health - Basic', date: '10 Jun 2026', status: 'delivered', amount: 'Rp 299.000' },
  { id: 'ORD-002', name: 'Bima Santoso', template: 'Tech - Civil', date: '09 Jun 2026', status: 'in-progress', amount: 'Rp 499.000' },
  { id: 'ORD-003', name: 'Citra Kirana', template: 'Law - Practitioner', date: '08 Jun 2026', status: 'paid', amount: 'Rp 499.000' },
  { id: 'ORD-004', name: 'Deni Pratama', template: 'Agro - Field', date: '08 Jun 2026', status: 'contacted', amount: 'Rp 299.000' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderStatus = (status) => {
    switch (status) {
      case 'delivered': return <Badge variant="tech" className="bg-green-100 text-green-800">Selesai</Badge>;
      case 'in-progress': return <Badge variant="tech" className="bg-blue-100 text-blue-800">Sedang Dikerjakan</Badge>;
      case 'paid': return <Badge variant="tech" className="bg-purple-100 text-purple-800">Lunas / Antrean</Badge>;
      case 'contacted': return <Badge variant="tech" className="bg-orange-100 text-orange-800">Menunggu Pembayaran</Badge>;
      default: return <Badge variant="gray">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
          <Activity className="h-6 w-6 text-tech-blue mr-2" />
          Admin Panel
        </h2>
        <nav className="space-y-2 flex-grow">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-tech-blue/10 text-tech-blue' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <div className="flex items-center"><Activity className="w-4 h-4 mr-2" /> Overview</div>
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'orders' ? 'bg-tech-blue/10 text-tech-blue' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <div className="flex items-center"><ShoppingCart className="w-4 h-4 mr-2" /> Pesanan Masuk</div>
          </button>
          <button 
            onClick={() => setActiveTab('templates')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'templates' ? 'bg-tech-blue/10 text-tech-blue' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <div className="flex items-center"><FileText className="w-4 h-4 mr-2" /> Kelola Template</div>
          </button>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">CareerFolio MVP v1.0<br/>Admin: Founder</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Selamat datang, Founder!</h1>
          <p className="text-gray-600">Berikut adalah ringkasan performa bisnis Anda bulan ini.</p>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardBody className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <span className="flex items-center text-green-500 text-sm font-bold">
                      <ArrowUpRight className="w-4 h-4 mr-1" /> +24%
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Total Pendapatan</p>
                  <h3 className="text-3xl font-bold text-gray-900">Rp 12.5M</h3>
                </CardBody>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardBody className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <span className="flex items-center text-green-500 text-sm font-bold">
                      <ArrowUpRight className="w-4 h-4 mr-1" /> +12%
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Pesanan Baru</p>
                  <h3 className="text-3xl font-bold text-gray-900">34</h3>
                </CardBody>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardBody className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="flex items-center text-gray-400 text-sm font-bold">
                      0%
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Conversion Rate</p>
                  <h3 className="text-3xl font-bold text-gray-900">4.2%</h3>
                </CardBody>
              </Card>
            </div>

            {/* Popular Templates */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <CardHeader className="bg-white px-6 py-5 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Popularitas Template</h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span>Tech - Civil (Teknik)</span>
                      <span>12 pesanan</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-tech-blue h-2.5 rounded-full w-[45%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span>Health - Pro (Kesehatan)</span>
                      <span>8 pesanan</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-health-teal h-2.5 rounded-full w-[30%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span>Law - Practitioner (Hukum)</span>
                      <span>5 pesanan</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-law-navy h-2.5 rounded-full w-[15%]"></div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        )}

        {activeTab === 'orders' && (
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-white px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Daftar Pesanan Terbaru</h3>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">ID Pesanan</th>
                    <th className="px-6 py-4">Nama Pelanggan</th>
                    <th className="px-6 py-4">Template</th>
                    <th className="px-6 py-4">Tanggal</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Nilai</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MOCK_ORDERS.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4">{order.name}</td>
                      <td className="px-6 py-4">{order.template}</td>
                      <td className="px-6 py-4">{order.date}</td>
                      <td className="px-6 py-4">{renderStatus(order.status)}</td>
                      <td className="px-6 py-4 text-right font-medium text-gray-900">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
        
        {activeTab === 'templates' && (
          <div className="text-center py-20 text-gray-500">
            <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Manajemen Template</h2>
            <p>Fitur pengelolaan template dinamis akan hadir di fase 2 (Integrasi Headless CMS).</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
