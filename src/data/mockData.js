export const templatesData = {
  'health-1': {
    name: 'CareerFolio Health - Premium',
    category: 'Kesehatan & Medis',
    price: 349000,
    mockContent: {
      profile: {
        name: 'dr. Andi Pratama',
        title: 'Dokter Umum & Edukator Kesehatan',
        str: '1234567890123456',
        bio: 'Dokter umum berdedikasi dengan pengalaman lebih dari 2 tahun di klinik primer IGD rumah sakit rujukan. Fokus pada pelayanan kesehatan promotif dan preventif, serta aktif mengedukasi masyarakat melalui media sosial mengenai gaya hidup sehat dan pencegahan penyakit metabolik.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
      },
      rotations: [
        { id: 1, department: 'Ilmu Penyakit Dalam', hospital: 'RSUD Kota Bandung', duration: '10 Minggu', desc: 'Menangani 50+ kasus rawat inap, asistensi prosedur endoskopi.' },
        { id: 2, department: 'Ilmu Kesehatan Anak', hospital: 'RSIA Hermina', duration: '10 Minggu', desc: 'Pemantauan tumbuh kembang anak, penanganan kejang demam.' },
        { id: 3, department: 'Ilmu Bedah', hospital: 'RS Hasan Sadikin', duration: '12 Minggu', desc: 'Asistensi operasi minor dan mayor, perawatan luka pasca operasi.' },
        { id: 4, department: 'Obstetri & Ginekologi', hospital: 'RSIA Bunda', duration: '10 Minggu', desc: 'Menolong persalinan normal (APN), observasi preeklampsia.' }
      ],
      certifications: ['ACLS (Advanced Cardiovascular Life Support)', 'BLS (Basic Life Support)', 'ATLS (Advanced Trauma Life Support)', 'Sertifikasi USG Dasar']
    }
  },
  'health-2': {
    name: 'CareerFolio Health - Pro',
    category: 'Kesehatan & Medis',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Dr. James Aris, MD',
        title: 'Senior Medical Resident',
        bio: 'In the evolving landscape of medicine, I believe that the bridge between technical excellence and human connection is where the most profound healing occurs. My journey is defined by a rigorous pursuit of clinical mastery and a dedication to understanding the narrative behind every patient encounter.',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLviBGusm8c2NuUIcwOriuSj8r-YUkVaOJv-fHuoQ5ALeautdE8xB_PLlDFaJhQ9n0Om8pL1DxKEKNvqLmamZ-u48AX-kG3KQSIZRQ3GIAauXTihsi5dT1Nv9Ou1klcV42fnwLYgMHAVr1NnSZC08fSd5elfjBI2sGc-bfQ1Bd_mSk3Z58TdBq0W5Adr5_54wAX44btsAiRieJIy7CGRoFSWyf7em45AdJ-j81iypac2aDLv4SO9MgEjLQAn'
      },
      rotations: [
        { id: 1, department: 'Internal Medicine', hospital: 'City General Hospital', duration: '12 Weeks', desc: 'Developed proficiency in complex diagnosis and chronic disease management for diverse patient populations.' },
        { id: 2, department: 'Pediatrics', hospital: 'Children\'s Healthcare Center', duration: '8 Weeks', desc: 'Gained expertise in developmental assessments and building trust with young patients and their families.' }
      ]
    }
  },
  'health-3': {
    name: 'CareerFolio Health - Executive',
    category: 'Kesehatan & Medis',
    price: 599000,
    mockContent: {
      profile: {
        name: 'Dr. Aris Setiawan',
        title: 'Future Physician & Clinical Researcher',
        bio: 'Dedicated to merging surgical precision with innovative research. Shaping healthcare through analytical rigor and patient-centric empathy.',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLviBGusm8c2NuUIcwOriuSj8r-YUkVaOJv-fHuoQ5ALeautdE8xB_PLlDFaJhQ9n0Om8pL1DxKEKNvqLmamZ-u48AX-kG3KQSIZRQ3GIAauXTihsi5dT1Nv9Ou1klcV42fnwLYgMHAVr1NnSZC08fSd5elfjBI2sGc-bfQ1Bd_mSk3Z58TdBq0W5Adr5_54wAX44btsAiRieJIy7CGRoFSWyf7em45AdJ-j81iypac2aDLv4SO9MgEjLQAn'
      },
      rotations: [
        { id: 1, department: 'Surgical Foundations', hospital: 'General Hospital', duration: '12 Weeks', desc: 'Expertise in pre-operative diagnostics and minimally invasive techniques.' }
      ],
      certifications: ['ACLS Certified', 'GCP Proficiency', 'IELTS 8.5']
    }
  },
  'agro-1': {
    name: 'CareerFolio Agro - Field Expert',
    category: 'Pertanian & Lingkungan',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Budi Santoso, S.P.',
        title: 'Agronomist & Sustainability Expert',
        bio: 'Ahli agronomi yang memiliki spesialisasi dalam sustainable farming dan smart agriculture. Berpengalaman dalam mengelola lahan lebih dari 500 hektar menggunakan teknologi IoT untuk efisiensi irigasi dan pupuk.',
        image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop',
      },
      fieldworks: [
        { id: 1, project: 'Optimasi Hasil Panen Padi Menthik Wangi', location: 'Subang, Jawa Barat', result: '+15% Yield', desc: 'Penerapan pupuk organik cair dan sistem jajar legowo.' },
        { id: 2, project: 'Implementasi Irigasi Tetes Berbasis IoT', location: 'Indramayu', result: '-30% Water Usage', desc: 'Mengurangi konsumsi air tanah di musim kemarau.' },
        { id: 3, project: 'Pengendalian Hama Terpadu', location: 'Garut', result: '-40% Pest Damage', desc: 'Penggunaan predator alami alih-alih pestisida kimia.' }
      ]
    }
  },
  'agro-2': {
    name: 'CareerFolio Agro - Researcher',
    category: 'Pertanian & Lingkungan',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Elena Thorne',
        title: 'Ph.D Candidate 2024',
        bio: 'Graduate researcher specialized in precision ecology and soil health restoration. Bridging the gap between technological innovation and ecological preservation.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuCn8Vzy8mubfMh1F8TvL0V7lOdDRvaLRUZs_qo1oAytuQ-fv8uGhE7skWxW4Vze-fXbtsJtLIvzmNochyEeD2SobLhbTsQbGJJDOpE2JGhUHdrEFtFp8k-XFAlcNxjJYGevg_JaG1dkze9CZf0He54BXQCuuaoQzm2U_bStgch6IQF2O9U6aXvQtCX6hSN1cuEVGSbfKbqvU1_zjaKYBGejwn1Aiqd_U8ibbZGwPDVZSD0SaJCTWc4PVEubyE9HJzCteoK6g0sw'
      },
      fieldworks: [
        { id: 1, project: 'Crop Yield Optimization', location: 'Central Valley', result: 'Published Paper', desc: 'Evaluating precision nitrogen application using multispectral imaging in Central Valley wheat fields.' },
        { id: 2, project: 'Smart Water Systems', location: 'California', result: '30% Water Savings', desc: 'Designing automated irrigation feedback loops using real-time soil moisture sensor data.' },
        { id: 3, project: 'Regenerative Soil Study', location: 'Highlands', result: 'Award Winning', desc: 'Assessing microbial activity and carbon sequestration rates in organic highland farming systems.' }
      ]
    }
  },
  'agro-3': {
    name: 'CareerFolio Agro - Tech Data',
    category: 'Pertanian & Lingkungan',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Elena Thorne',
        title: 'Lead IoT Agronomist',
        bio: 'MSc Graduate Researcher specializing in the intersection of technology and ecology. Currently architecting soil health restoration frameworks and precision agriculture systems.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuCn8Vzy8mubfMh1F8TvL0V7lOdDRvaLRUZs_qo1oAytuQ-fv8uGhE7skWxW4Vze-fXbtsJtLIvzmNochyEeD2SobLhbTsQbGJJDOpE2JGhUHdrEFtFp8k-XFAlcNxjJYGevg_JaG1dkze9CZf0He54BXQCuuaoQzm2U_bStgch6IQF2O9U6aXvQtCX6hSN1cuEVGSbfKbqvU1_zjaKYBGejwn1Aiqd_U8ibbZGwPDVZSD0SaJCTWc4PVEubyE9HJzCteoK6g0sw'
      },
      fieldworks: [
        { id: 1, project: 'Crop Yield Optimization', location: 'Lab 1', result: 'PUBLISHED_PAPER', desc: 'Precision nitrogen analysis via high-spectrum imaging in Central Valley wheat corridors.' },
        { id: 2, project: 'Smart Water Systems', location: 'Lab 2', result: '30%_EFFICIENCY', desc: 'Autonomous feedback loops leveraging real-time telemetry from subsurface moisture grids.' },
        { id: 3, project: 'Regenerative Soil Study', location: 'Lab 3', result: 'AWARD_POSTER', desc: 'Quantifying microbial dynamics and carbon sequestration across organic highland zones.' }
      ]
    }
  },
  'tech-civil': {
    name: 'CareerFolio Tech - Constructor',
    category: 'Teknik Non-IT',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Citra Kirana, S.T.',
        title: 'Lead Civil Engineer',
        bio: 'Insinyur sipil dengan spesialisasi pada struktur beton prategang dan perancangan infrastruktur jalan raya. Telah terlibat dalam 3 Proyek Strategis Nasional (PSN) di bawah Kementerian PUPR.',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2000&auto=format&fit=crop',
      },
      projects: [
        { id: 1, name: 'Jembatan Penyeberangan Sei Rampah', specs: 'Panjang 50m, Beton Prategang', role: 'Structural Designer' },
        { id: 2, name: 'Gedung Perkantoran Sudirman 15', specs: 'Struktur Baja H-Beam, 15 Lantai', role: 'Project Engineer' }
      ],
      skills: ['AutoCAD', 'SAP2000', 'ETABS', 'RAB Calculation', 'BIM Modelling']
    }
  },
  'law-prac': {
    name: 'CareerFolio Law - Associate',
    category: 'Hukum & Soshum',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Dewi Lestari, S.H., M.H.',
        title: 'Corporate Legal Counsel',
        bio: 'Konsultan hukum korporat dinamis dengan keahlian khusus dalam merger & akuisisi, kepatuhan regulasi (compliance), serta penyelesaian sengketa bisnis (alternative dispute resolution). Lulusan cumlaude dengan pengalaman di firma hukum tier-1.',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop',
      },
      cases: [
        { id: 1, title: 'Akuisisi PT Maju Bersama oleh Nusantara Group', role: 'Lead Legal Advisor', outcome: 'Transaksi Rp 500M Sukses' },
        { id: 2, title: 'Moot Court Competition ALSA 2023', role: 'Ketua Tim Delegasi', outcome: 'Juara 1 Nasional & Best Memorial' },
        { id: 3, title: 'Legal Due Diligence Startup TechX', role: 'Associate', outcome: 'Clearance untuk Pendanaan Seri A' }
      ],
      publications: ['Analisis Yuridis Merger Bank Digital di Indonesia (2025)', 'Tantangan Perlindungan Konsumen di Era E-Commerce (2024)']
    }
  },
  'biz-fin': {
    name: 'CareerFolio Business - Analyst',
    category: 'Ekonomi & Bisnis',
    price: 499000,
    mockContent: {
      profile: {
        name: 'Eko Putra, S.E., BKP',
        title: 'Senior Financial Analyst',
        bio: 'Analis keuangan tersertifikasi dengan keahlian dalam financial modeling, valuasi startup, dan perencanaan pajak korporat. Membantu lebih dari 10 startup dalam menyusun proyeksi keuangan untuk fundraise.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000&auto=format&fit=crop',
      },
      metrics: [
        { label: 'Portfolio Managed', value: 'Rp 15M+' },
        { label: 'Tax Savings Generated', value: '18%' },
        { label: 'Financial Models Built', value: '30+' },
        { label: 'Fundraising Success', value: '$2M+' }
      ],
      certifications: ['Brevet Pajak A & B Terapan', 'CFA Level 1 Passed', 'Financial Modeling Institute (FMI)']
    }
  }
};
