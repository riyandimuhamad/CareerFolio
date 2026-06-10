import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';

const Success = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-lg w-full text-center p-8 border-0 shadow-xl">
        <CardBody>
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Pemesanan Berhasil!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Terima kasih telah mempercayakan portofolio Anda pada CareerFolio. Jendela WhatsApp seharusnya sudah terbuka untuk konfirmasi.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-800 flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Admin kami akan membalas pesan Anda dalam 1x24 jam.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/">
              <Button variant="outline" className="w-full">Kembali ke Beranda</Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Success;
