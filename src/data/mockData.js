export const templatesData = {
  'health-basic': {
    name: 'CareerFolio Health - Basic',
    category: 'Kesehatan & Medis',
    price: 299000,
    mockContent: {
      profile: {
        name: 'dr. Andi Pratama',
        title: 'Dokter Umum',
        str: '1234567890123456',
        bio: 'Dokter umum dengan pengalaman 2 tahun di klinik primer, berdedikasi tinggi terhadap pelayanan kesehatan masyarakat.'
      },
      rotations: [
        { id: 1, department: 'Ilmu Penyakit Dalam', hospital: 'RSUD Kota', duration: '10 Minggu' },
        { id: 2, department: 'Ilmu Kesehatan Anak', hospital: 'RSIA', duration: '10 Minggu' }
      ],
      certifications: ['ACLS', 'BLS', 'ATLS']
    }
  },
  'agro-field': {
    name: 'CareerFolio Agro - Field',
    category: 'Pertanian & Lingkungan',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Budi Santoso, S.P.',
        title: 'Agronomist',
        bio: 'Ahli agronomi dengan fokus pada sustainable farming dan smart agriculture.'
      },
      fieldworks: [
        { id: 1, project: 'Optimasi Hasil Panen Padi', location: 'Subang', result: '+15% Yield' },
        { id: 2, project: 'Implementasi Irigasi Tetes', location: 'Indramayu', result: '-30% Water Usage' }
      ]
    }
  },
  'tech-civil': {
    name: 'CareerFolio Tech - Civil',
    category: 'Teknik Non-IT',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Citra Kirana, S.T.',
        title: 'Civil Engineer',
        bio: 'Insinyur sipil spesialisasi struktur beton dan perancangan jalan raya.'
      },
      projects: [
        { id: 1, name: 'Jembatan Penyeberangan', specs: 'Panjang 50m, Beton Prategang', role: 'Structural Designer' },
        { id: 2, name: 'Gedung Perkantoran 5 Lantai', specs: 'Struktur Baja H-Beam', role: 'Project Engineer' }
      ],
      skills: ['AutoCAD', 'SAP2000', 'ETABS', 'RAB Calculation']
    }
  },
  'law-prac': {
    name: 'CareerFolio Law - Practitioner',
    category: 'Hukum & Soshum',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Dewi Lestari, S.H., M.H.',
        title: 'Legal Counsel',
        bio: 'Konsultan hukum korporat dengan keahlian dalam merger & akuisisi serta penyelesaian sengketa bisnis.'
      },
      cases: [
        { id: 1, title: 'Akuisisi PT Maju Bersama', role: 'Lead Legal Advisor', outcome: 'Successful Acquisition' },
        { id: 2, title: 'Moot Court Competition 2023', role: 'Ketua Tim', outcome: 'Juara 1 Nasional' }
      ],
      publications: ['Analisis Yuridis Merger Bank', 'Perlindungan Konsumen di Era Digital']
    }
  },
  'biz-fin': {
    name: 'CareerFolio Business - Finance',
    category: 'Ekonomi & Bisnis',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Eko Putra, S.E., BKP',
        title: 'Financial Analyst',
        bio: 'Analis keuangan dengan sertifikasi brevet pajak dan pengalaman menyusun proyeksi keuangan startup.'
      },
      metrics: [
        { label: 'Portfolio Managed', value: 'Rp 5M+' },
        { label: 'Tax Savings', value: '12%' },
        { label: 'Financial Models Built', value: '25+' }
      ],
      certifications: ['Brevet A & B', 'CFA Level 1']
    }
  }
};
