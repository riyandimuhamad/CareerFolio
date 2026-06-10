import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "CareerFolio | Buat Portofolio Profesional dalam Sekejap", 
  description = "Platform pembuatan portofolio premium instan untuk mahasiswa dan fresh graduate. Pilih desain sesuai rumpun jurusan Anda (Kesehatan, Teknik, Hukum, Pertanian, Bisnis).",
  name = "CareerFolio",
  type = "website",
  image = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop"
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* Facebook & WhatsApp tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
