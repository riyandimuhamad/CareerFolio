# CAREERFOLIA - PRODUCT REQUIREMENT DOCUMENT (PRD) & SOFTWARE REQUIREMENT SPECIFICATION (SRS)

**Version**: 1.0 MVP  
**Last Updated**: June 2026  
**Product Name**: CareerFolio (Primary) / CareerPulse (Tagline)  
**Founder**: Riyandi Muhammad Rizki  
**Domain**: careerfolia.riyandimhmd.my.id  

---

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Product Overview & Objectives](#product-overview--objectives)
3. [User Personas & Market Segmentation](#user-personas--market-segmentation)
4. [Academic Niches & Template Categories](#academic-niches--template-categories)
5. [Feature Epics & User Stories](#feature-epics--user-stories)
6. [Technical Architecture & Stack](#technical-architecture--stack)
7. [Functional Requirements](#functional-requirements)
8. [Non-Functional Requirements](#non-functional-requirements)
9. [Data Model & Database Schema](#data-model--database-schema)
10. [API Specifications](#api-specifications)
11. [UI/UX Design System](#uiux-design-system)
12. [Pricing Model](#pricing-model)
13. [Analytics & Metrics Dashboard](#analytics--metrics-dashboard)
14. [Customer Support & FAQ](#customer-support--faq)
15. [Privacy Policy & Data Compliance](#privacy-policy--data-compliance)
16. [Mock Data Samples](#mock-data-samples)
17. [Deployment & Infrastructure](#deployment--infrastructure)
18. [Testing Strategy](#testing-strategy)
19. [Timeline & Milestones](#timeline--milestones)
20. [Go-to-Market Strategy](#go-to-market-strategy)
21. [Risk Assessment & Mitigation](#risk-assessment--mitigation)
22. [Success Metrics & KPIs](#success-metrics--kpis)
23. [Future Roadmap (Phase 2+)](#future-roadmap-phase-2)

---

## 1. EXECUTIVE SUMMARY

**CareerFolio** adalah platform pembuat portofolio digital yang dirancang khusus untuk **mahasiswa aktif dan fresh graduate non-IT di Indonesia**. Platform ini memberikan solusi one-click untuk membuat portofolio profesional yang disesuaikan dengan spesialisasi bidang studi mereka, tanpa perlu kemampuan coding.

### Core Value Proposition
> **"Satu klik untuk portofolio premium yang merepresentasikan keahlian spesifik jurusanmu, tanpa perlu mengerti baris kode."**

### Key Differentiators
- 🎯 **Spesialisasi per Jurusan**: Template dirancang khusus untuk Kesehatan, Pertanian, Teknik, Hukum/Soshum, dan Ekonomi
- ⚡ **Instant Deployment**: Setelah pembayaran, portofolio langsung siap digunakan
- 💰 **Harga Terjangkau**: Mulai dari Rp 299.000 dengan revisi gratis
- 📱 **Mobile-First**: Responsif sempurna di semua perangkat
- 🎨 **Profesional & Customizable**: Tema modern dengan fleksibilitas tinggi
- 🚀 **Scalable**: Arsitektur Jamstack untuk pertumbuhan tanpa batas

---

## 2. PRODUCT OVERVIEW & OBJECTIVES

### 2.1 Vision Statement
Memberdayakan mahasiswa dan fresh graduate di Indonesia untuk membangun personal brand yang kuat melalui portofolio digital profesional yang accessible dan affordable.

### 2.2 Mission Statement
Menyediakan platform pembuat portofolio dengan:
- Template khusus per disiplin ilmu
- Proses pemesanan yang simple dan cepat
- Support customer yang responsif
- Harga yang kompetitif dan terjangkau

### 2.3 Business Objectives (12 Bulan)
1. **Akuisisi Pengguna**: Target 500+ portofolio dibuat dalam 6 bulan pertama
2. **Revenue**: Rp 150 juta+ (dari penjualan paket)
3. **Market Awareness**: Presence di LinkedIn, Instagram, WhatsApp communities
4. **Customer Satisfaction**: NPS score ≥ 70
5. **Product Maturity**: MVP fully functional dengan analytics dashboard

### 2.4 Problem Statement
- Mahasiswa Indonesia kesulitan membuat portofolio yang mencerminkan expertise spesifik mereka
- Solusi existing (Figma, Canva, WordPress) memerlukan skill teknis yang tidak dimiliki target audience
- Portfolio builders generic tidak mempertimbangkan konteks akademis dan industri lokal
- Harga premium untuk portfolio services di luar jangkau mahasiswa

---

## 3. USER PERSONAS & MARKET SEGMENTATION

### 3.1 Primary User Personas

#### Persona 1: "Ayu - Si Mahasiswa Aktif Berkeinginan"
- **Age**: 20-22 tahun
- **Status**: Mahasiswa Tahun 3-4
- **Background**: Jurusan Kesehatan/Teknik/Ekonomi, aktif di organisasi
- **Tech Savvy**: Moderate (bisa navigate social media tapi tidak bisa code)
- **Goals**: 
  - Membuat portfolio untuk melamar internship/kerja
  - Showcase pengalaman klinis/project teknik/achievement akademis
  - Portfolio yang bisa dibagikan ke alumni/recruiter
- **Pain Points**:
  - Tidak tahu cara membuat portfolio
  - Khawatir terlihat unprofessional
  - Tidak punya budget besar
- **Budget**: Rp 300-500k (monthly allowance)

#### Persona 2: "Budi - Fresh Graduate Siap Kerja"
- **Age**: 22-25 tahun
- **Status**: Fresh graduate (<1 tahun)
- **Background**: Lulusan baru, sudah punya pengalaman magang/freelance
- **Tech Savvy**: Moderate to Advanced
- **Goals**:
  - Membuat portfolio untuk portfolio/CV online
  - Custom domain untuk personal branding
  - Showcase work samples & certifications
- **Pain Points**:
  - Terbatas budget tapi ingin terlihat professional
  - Perlu quick turnaround
  - Ingin support jika ada revisi
- **Budget**: Rp 500-1000k (dari tabungan/pertama kali kerja)

#### Persona 3: "Citra - Alumni Sukses Mentor"
- **Age**: 25-35 tahun
- **Status**: Professional, alumni aktif
- **Background**: Career sudah established, mentor di komunitas
- **Tech Savvy**: Advanced
- **Goals**:
  - Recommend platform ke junior/mentee
  - Possibly reseller/affiliate di kemudian hari
- **Pain Points**:
  - Proses recruitment yang complicated
  - Ingin trust yang tinggi ke platform
- **Budget**: Willing to invest (potential for referral program)

### 3.2 Market Sizing (Indonesia)

| Segment | Total Populasi | Target Market | Estimasi Penetrasi Tahun 1 |
|---------|----------------|---------------|---------------------------|
| Mahasiswa Aktif (non-IT) | ~3.5 juta | 1.5 juta | 1-2% (15,000-30,000) |
| Fresh Graduate (1-3 tahun) | ~2.5 juta | 1 juta | 0.5-1% (5,000-10,000) |
| **Total Year 1 Target** | - | - | **20,000-40,000 users** |

---

## 4. ACADEMIC NICHES & TEMPLATE CATEGORIES

Platform CareerFolio membagi portofolio berdasarkan **5 rumpun jurusan utama** dengan template spesifik:

### 4.1 Kategori A: KESEHATAN & MEDIS
**Target**: Dokter, Perawat, Farmasi, Gizi, Bidan

#### Visual Identity
- **Color Scheme**: Putih dominan + Teal (#14B8A6) + Soft Cyan (#06B6D4)
- **Typography**: Inter, Roboto (Sans-Serif, clean & modern)
- **Tone**: Profesional, trustworthy, hygienic

#### Template Components
- **Personal Info Section**: Nama, gelar, no registrasi (STR/SIP)
- **Rotasi Klinis/Stase**: Riwayat rotasi (tempat, durasi, supervisor)
- **Sertifikasi Medis**: STR, UKMPPD, sertifikat skill (BLS, ACLS, dll)
- **Case Logbook**: Portfolio penanganan kasus (anonim, follow SOP medis)
- **Publikasi Ilmiah**: Jurnal, paper, research yang sudah publish
- **Organisasi & Kepemimpinan**: UKM, kepanitiaan, mentoring
- **Dokumentasi**: Foto kegiatan (pasien blurred, professional)

#### MVP Templates Count
- **CareerFolio Health - Basic**: Template sederhana, fotografi minimal
- **CareerFolio Health - Professional**: Template advanced, case gallery, publikasi
- **CareerFolio Health - Clinic Ready**: Template lengkap untuk praktik privat/klinik

---

### 4.2 Kategori B: PERTANIAN, PETERNAKAN, & LINGKUNGAN
**Target**: Agroteknologi, Peternakan, Kehutanan, Biologi, Agribisnis

#### Visual Identity
- **Color Scheme**: Hijau (#10B981) + Cokelat Tanah (#92400E) + Krem (#FEF3C7)
- **Typography**: Poppins, Lato (friendly, approachable)
- **Tone**: Natural, sustainable, progressive

#### Template Components
- **Profil & Expertise**: Fokus bidang (hama, tanah, ternak, dll)
- **Fieldwork Documentation**: Foto/video project lapangan (eksperimen, observasi)
- **Analisis Data**: Hasil riset, statistik harvest, yield prediction
- **Sertifikasi**: AMDAL, ISO 14001, sertifikat pertanian organik
- **Supply Chain Portfolio**: Project manajemen logistik hasil tani
- **Community Impact**: Program sosial, farmer education, sustainability
- **Equipment & Technology**: Tools yang dikuasai (GIS, drone, lab analysis)

#### MVP Templates Count
- **CareerFolio Agro - Field Researcher**: Fokus data & fieldwork
- **CareerFolio Agro - Agribusiness**: Fokus bisnis & supply chain
- **CareerFolio Agro - Sustainability**: Fokus lingkungan & impact

---

### 4.3 Kategori C: TEKNIK NON-IT
**Target**: Teknik Sipil, Mesin, Elektro, Industri, Astronomi, Arsitektur

#### Visual Identity
- **Color Scheme**: Abu-abu Gelap (#374151) + Hitam (#111827) + Safety Orange (#F97316) + Neon Blue (#3B82F6)
- **Typography**: Courier New, IBM Plex Mono (technical feel), Inter (body)
- **Tone**: Presisi, struktural, professional, innovative

#### Template Components
- **Technical Skills**: Tools & software (CAD, MATLAB, Python, PLC, dll)
- **Project Gallery**: Cetak biru, CAD drawings, 3D renders, video demo
- **Project Specifications**: RAB (Rencana Anggaran Biaya), teknis detail, skala model
- **Sertifikasi Teknis**: K3, MATLAB certification, Autocad, BIM, dll
- **Research & Innovation**: Patent, inovasi, publikasi teknis
- **Internship/Experience**: Pengalaman di perusahaan manufaktur/konstruksi
- **Soft Skills**: Leadership, teamwork (dalam konteks project teknik)

#### MVP Templates Count
- **CareerFolio Tech - Civil Engineer**: Fokus konstruksi & blueprint
- **CareerFolio Tech - Mechanical/Electrical**: Fokus mesin & sistem
- **CareerFolio Tech - Innovation**: Fokus research & inovasi

---

### 4.4 Kategori D: HUKUM, SOSIAL, & HUMANIORA
**Target**: Hukum, Hubungan Internasional, Sosiologi, Ilmu Komunikasi, Pendidikan

#### Visual Identity
- **Color Scheme**: Navy Blue (#001F3F) + Burgundy (#800020) + Gold (#D4AF37)
- **Typography**: Playfair Display, Merriweather (Serif, elegant & formal)
- **Tone**: Formal, authoritative, trustworthy, intellectual

#### Template Components
- **Professional Profile**: Gelar, expertise, areas of practice
- **Moot Court & Case Study**: Portfolio moot court, analisis kasus hukum
- **Publikasi & Research**: Paper, artikel, blog, thought leadership
- **Legal/Policy Documents**: Drafting portfolio, legal opinion samples (sanitized)
- **Advocacy & Community**: Pengabdian masyarakat, volunteer work
- **Educational Background**: Universitas, prestasi akademis, beasiswa
- **Speaking & Presentations**: Konferensi, seminar, webinar participation
- **Media & Publications**: Featured articles, media appearance

#### MVP Templates Count
- **CareerFolio Law - Practitioner**: Untuk lawyer/legal counsel
- **CareerFolio Soshum - Academic**: Untuk research/academic pathway
- **CareerFolio Advocacy - Activist**: Untuk NGO/advocacy worker

---

### 4.5 Kategori E: EKONOMI & BISNIS
**Target**: Akuntansi, Manajemen, Manajemen Pemasaran, Bisnis, Entrepreneurship

#### Visual Identity
- **Color Scheme**: Putih-Biru Tua (#1E40AF) atau Hitam-Emas (#FFD700)
- **Typography**: Inter, Rubik (modern, corporate)
- **Tone**: Professional, data-driven, ambitious, trendy

#### Template Components
- **Executive Summary**: Elevator pitch, core competencies
- **Financial Metrics & Portfolio**: ROI projects, revenue growth, budget management
- **Business Analysis Dashboard**: Infografis market analysis, bisnis metrics
- **Case Studies**: Business case, strategi marketing, sales achievement
- **Sertifikasi Bisnis**: CFA, Google Analytics, Digital Marketing, Brevet Pajak
- **Entrepreneurial Ventures**: Startup yang dijalankan, product/service launched
- **Awards & Recognition**: Penghargaan bisnis, scholarship, competition wins
- **Data Visualization**: Charts, graphs, infografis untuk showcase analytical skills

#### MVP Templates Count
- **CareerFolio Business - Finance**: Fokus akuntansi & keuangan
- **CareerFolio Business - Marketing**: Fokus marketing & digital
- **CareerFolio Business - Startup**: Fokus entrepreneur & business owner

---

## 5. FEATURE EPICS & USER STORIES

### Epic EP-01: Landing Page & Katalog Template
**Priority**: P0 (Critical)  
**Description**: Pengguna dapat melihat halaman utama dengan katalog template interaktif

#### FR-1.1: Landing Page Utama
```
User Story: 
Sebagai calon klien, saya ingin melihat halaman utama yang menjelaskan:
- Value proposition CareerFolio
- 5 kategori template dengan thumbnail preview
- Pricing packages
- Social proof (testimonial, featured di mana)
- CTA buttons (Lihat Template, Hubungi Kami)

Acceptance Criteria:
✓ Halaman fully responsive (mobile-first design)
✓ Load time < 1.2 detik (FCP)
✓ Hero section dengan video/animasi menarik
✓ Category cards dengan hover effect
✓ Pricing comparison table yang jelas
✓ Testimonial carousel (dari early customers)
✓ FAQ section terfold
✓ Footer dengan contact info & links
```

#### FR-1.2: Category & Template Catalog
```
User Story:
Sebagai mahasiswa, saya ingin melihat daftar template per kategori jurusan saya
dan melihat preview live untuk memilih yang tepat.

Acceptance Criteria:
✓ 5 kategori utama visible (Kesehatan, Pertanian, Teknik, Hukum, Ekonomi)
✓ Setiap kategori punya 2-3 template options
✓ Setiap template card menampilkan:
  - Thumbnail preview
  - Template name
  - Brief description
  - "Live Preview" button
  - "Pesan Sekarang" button
✓ Filter functionality (by category, price, features)
✓ Search functionality
✓ Sorting (new, popular, price)
```

#### FR-1.3: Pricing & Package Display
```
User Story:
Sebagai pembeli, saya ingin melihat paket apa saja, harga, dan apa yang included
untuk membuat keputusan pembelian.

Acceptance Criteria:
✓ 4 paket jelas terdisplay:
  - Paket Mahasiswa (Rp 299.000)
  - Paket Fresh Graduate (Rp 499.000)
  - Paket Custom Domain (Rp 799.000)
  - Revisi Tambahan (Rp 99.000/revisi)
✓ Comparison table menunjukkan fitur per paket
✓ FAQ section untuk pricing clarification
✓ "Ambil Paket" CTA yang prominent
```

---

### Epic EP-02: Live Preview System
**Priority**: P0 (Critical)  
**Description**: Pengguna dapat melihat preview lengkap template sebelum membeli

#### FR-2.1: Template Preview Rendering
```
User Story:
Sebagai mahasiswa, saya ingin melihat preview lengkap template dengan data tiruan
yang realistic dan relevan dengan jurusan saya untuk memastikan cocok.

Acceptance Criteria:
✓ Preview page render template utuh dengan mock data
✓ Mock data realistic & sesuai kategori:
  - Kesehatan: STR, rotasi klinis, case logbook
  - Pertanian: Fieldwork photos, analisis data
  - Teknik: CAD drawings, project specs
  - Hukum: Moot court, case studies
  - Ekonomi: Business metrics, case studies
✓ Responsif di semua device sizes
✓ Smooth scrolling & navigation
✓ Preview tidak bisa dicopy/download (watermark atau JS prevention)
✓ Performance optimized (lazy loading images)
```

#### FR-2.2: Sticky Navigation in Preview
```
User Story:
Sebagai pengguna, saya ingin navigation bar sticky agar bisa kembali/order
dari mana saja di preview page.

Acceptance Criteria:
✓ Sticky nav bar di top dengan:
  - "← Kembali ke Katalog" button
  - Template name/category indicator
  - "Gunakan Template Ini →" CTA button (prominent color)
✓ Nav bar tidak blocking content
✓ Nav bar responsive (hamburger di mobile)
```

---

### Epic EP-03: Order & Payment Integration
**Priority**: P0 (Critical)  
**Description**: Pengguna dapat memesan template, mengisi form data, dan melakukan pembayaran

#### FR-3.1: Order Initiation
```
User Story:
Sebagai pembeli, saya ingin mengklik "Gunakan Template Ini" dan diarahkan
ke form pengisian data yang spesifik untuk jurusan saya.

Acceptance Criteria:
✓ Klik button → redirect ke Google Forms/Tally form tertentu per kategori
✓ Form pre-filled dengan:
  - Template ID yang dipilih
  - Category/jurusan otomatis
  - Timestamp order
✓ Form fields disesuaikan per kategori:
  
  KESEHATAN:
  - Nama lengkap, email, no HP
  - Universitas, jurusan, tahun angkatan
  - Gelar (dr., ns., apt., etc)
  - No STR (optional)
  - Rotasi klinis (list)
  - Sertifikasi medis
  - Bio singkat
  - Upload foto profil
  
  PERTANIAN:
  - Nama, universitas, jurusan
  - Fokus bidang (hama, tanah, ternak, etc)
  - Fieldwork experience (list)
  - Sertifikasi
  - Bio & passion statement
  - Upload foto profil & fieldwork docs
  
  TEKNIK:
  - Nama, universitas, jurusan
  - Spesialisasi (sipil, mesin, elektro, etc)
  - Soft skills & technical skills
  - Project portfolio (descriptions)
  - Sertifikasi teknis
  - CAD/drawing samples
  
  HUKUM/SOSHUM:
  - Nama, universitas, jurusan
  - Bidang keahlian
  - Pengalaman profesional
  - Publikasi/paper links
  - Moot court experience
  - Award/recognition
  
  EKONOMI:
  - Nama, universitas, jurusan
  - Core competencies
  - Business/project experience
  - Metrics & achievements
  - Sertifikasi bisnis
  - Business case studies

✓ Form dengan upload file capability (PDF, image)
✓ Form validation yang clear
✓ Estimated submission time: 5-10 menit
```

#### FR-3.2: WhatsApp Integration & Redirect
```
User Story:
Sebagai pengguna non-teknis, saya ingin setelah submit form, langsung
bisa hubungi admin via WhatsApp dengan template pesan otomatis.

Acceptance Criteria:
✓ Post-form submission → success page dengan:
  - Confirmation message
  - Next steps explanation
  - "Hubungi Admin via WhatsApp" button
  
✓ WhatsApp button menggunakan wa.me link:
  Format: https://wa.me/62XXXXXXXXXXX?text=
  Pesan template:
  "Halo, saya [NAMA]. Saya mahasiswa [JURUSAN] dari [UNIVERSITAS].
  Saya baru saja mengisi form data dan memesan CareerFolio Template ID: [TEMPLATE_ID].
  Paket: [PAKET_NAME] - Rp [HARGA]. Silakan konfirmasi order saya."
  
✓ Admin nomor di-hardcode atau environment variable
✓ Pesan bisa di-copy & modify oleh user sebelum send
✓ Chat history tracking di spreadsheet admin:
  - Timestamp
  - Nama klien
  - Template order
  - Status (contacted, negotiating, confirmed, paid, delivered)
```

#### FR-3.3: Payment via QR Code
```
User Story:
Sebagai pembeli, saya ingin mengetahui cara pembayaran dan bisa langsung
scan QR code bisnis untuk transfer.

Acceptance Criteria:
✓ Payment instruction page menampilkan:
  - Bank transfer details (dengan QR code)
  - E-wallet options (QR code)
  - Nominal yang harus ditransfer
  - Atas nama (untuk verifikasi)
  - Estimasi waktu verifikasi
  
✓ QR codes di-generate dari:
  - Static QR code dari bank app (user setup sendiri)
  - Atau dynamic QR code dengan nominal embedded
  
✓ Payment confirmation via WhatsApp follow-up:
  Admin akan confirm via chat setelah melihat transfer
```

---

### Epic EP-04: Admin Dashboard (Founder Only)
**Priority**: P0 (Critical) untuk MVP  
**Description**: Founder dapat melihat analytics, manage orders, track customer conversations

#### FR-4.1: Orders Management
```
User Story:
Sebagai admin/founder, saya ingin melihat semua order masuk
dengan status dan detail untuk manage customer.

Acceptance Criteria:
✓ Dashboard showing:
  - Total orders (pending, confirmed, paid, delivered)
  - Recent orders list dengan:
    - Order ID
    - Customer name
    - Template selected
    - Package
    - Date ordered
    - Status (contacted, confirmed payment, in progress, delivered, revision pending)
    - Action buttons (view details, mark as paid, send reminder, deliver)
  
✓ Order detail view:
  - Customer info
  - Form data yang diisi (all fields)
  - Payment status & amount
  - Revision history
  - Timeline (order → payment → delivery → revision)
  
✓ Search & filter:
  - By customer name
  - By template
  - By status
  - By date range
  - By payment status
```

#### FR-4.2: Analytics & Metrics
```
User Story:
Sebagai founder, saya ingin melihat analytics untuk track
performa business saya.

Acceptance Criteria:
✓ Dashboard metrics:
  - Total Orders (this month/all time)
  - Revenue (dari QRIS scans)
  - Template Popularity:
    - View count per template
    - Order count per template
    - Conversion rate per template
  - Conversion Funnel:
    - Total page views
    - Catalog clicks
    - Preview clicks
    - Order form submissions
    - Conversion rate (submission → payment)
  - Customer Insights:
    - Most popular category
    - Average order value
    - Repeat customers
    - Pending payments (amount & who)

✓ Charts & visualizations:
  - Bar chart (template popularity)
  - Line chart (revenue trend)
  - Pie chart (order by category)
  - Funnel chart (conversion funnel)
  
✓ Date range filter (7 days, 30 days, 3 months, all time)
✓ Export capability (CSV for further analysis)
```

#### FR-4.3: Chat History & Customer Tracking
```
User Story:
Sebagai admin, saya ingin track conversation dengan setiap customer
untuk follow-up dan CRM purposes.

Acceptance Criteria:
✓ Admin memiliki spreadsheet/database simple:
  - Customer name
  - Kontak (phone, email)
  - Template order
  - Date contacted
  - Conversation notes
  - Payment status
  - Last contact date
  - Next action/reminder

✓ Admin bisa:
  - Add manual notes dari WhatsApp conversation
  - Set follow-up reminders
  - Mark as active/inactive
  - Track conversation status

✓ Integration: Bisa link ke Google Forms response
```

#### FR-4.4: Template Management
```
User Story:
Sebagai admin, saya ingin manage template (edit content, preview, etc)
untuk MVP manual editing via React code.

Acceptance Criteria:
✓ Admin interface untuk:
  - View all templates (list with thumbnail)
  - Edit template content:
    - Update mock data
    - Update descriptions
    - Update category
    - Toggle active/inactive
  
✓ For MVP: Edit akan dilakukan di React code directly
  - Template components di `/components/templates/`
  - Mock data di `/data/mockData.js`
  - Require code redeploy untuk update
  
✓ Future Phase 2: Headless CMS integration (Contentful, Strapi)
```

---

### Epic EP-05: Custom Domain Setup (Phase 1 - Manual)
**Priority**: P1 (High) - Optional untuk MVP tapi included di paket  
**Description**: Setup custom domain untuk portofolio klien

#### FR-5.1: Custom Domain Ordering
```
User Story:
Sebagai fresh graduate professional, saya ingin portofolio saya
menggunakan domain .com pribadi saya untuk personal branding.

Acceptance Criteria:
✓ Custom Domain Paket (Rp 799.000) termasuk:
  - 1 tahun DNS setup
  - SSL certificate
  - Email support untuk setup
  - Dokumentasi setup lengkap
  
✓ Process:
  1. Klien order paket "Custom Domain"
  2. Klien sudah punya domain terpisah atau beli baru
  3. Admin guide klien untuk:
     - Add DNS records (A record pointing to Vercel)
     - Setup SSL
     - Verify domain
  4. Admin confirm setelah DNS propagate
  5. Portfolio live di custom domain
  
✓ Support documentation:
  - Step-by-step guide per registrar populer (Niagahoster, etc)
  - FAQ untuk DNS setup
  - Troubleshooting common issues

Note: Untuk MVP, setup masih manual oleh admin.
      Nanti di-automate dengan DNS API integration.
```

---

## 6. TECHNICAL ARCHITECTURE & STACK

### 6.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    CAREERFOLIA ARCHITECTURE                  │
├─────────────────────────────────────────────────────────────┤
│                          JAMSTACK                            │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  CLIENT LAYER (Frontend)                                     │
│  ├─ React.js + Vite.js                                      │
│  ├─ React Router DOM v6                                     │
│  ├─ Tailwind CSS                                            │
│  └─ Components Library (Reusable)                           │
│                                                               │
│  ├─ Landing Page                                            │
│  ├─ Template Catalog                                        │
│  ├─ Live Preview System                                     │
│  ├─ Payment/Order Page                                      │
│  └─ Admin Dashboard (Protected Route)                       │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  DATA LAYER                                                  │
│  ├─ Google Forms API (Form Submission)                      │
│  ├─ Google Sheets API (Data Storage)                        │
│  ├─ Environment Variables (Config)                          │
│  └─ GitHub (Version Control)                                │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  INTEGRATION LAYER                                           │
│  ├─ WhatsApp API (wa.me links)                              │
│  ├─ Vercel Analytics                                        │
│  ├─ Sentry (Error Tracking)                                 │
│  ├─ UptimeRobot (Monitoring)                                │
│  └─ Google Analytics 4                                      │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  DEPLOYMENT                                                  │
│  ├─ Hosting: Vercel (careerfolio.riyandimhmd.my.id)         │
│  ├─ CDN: Vercel Edge Network                                │
│  ├─ SSL: Automatic (Let's Encrypt)                          │
│  └─ Domain: Subdomain of riyandimhmd.my.id                  │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### 6.2 Tech Stack Detail

#### Frontend
```javascript
{
  "Framework": "React 18.x + Vite 4.x",
  "Language": "JavaScript/TypeScript (optional for Phase 2)",
  "Styling": "Tailwind CSS 3.x + CSS-in-JS (optional)",
  "Routing": "React Router DOM v6",
  "State Management": "React Context API (simple) / Redux (if needed)",
  "UI Components": {
    "Icons": "Lucide React / Heroicons",
    "Forms": "React Hook Form + Zod validation",
    "Animations": "Framer Motion / React Spring",
    "Toasts": "React Hot Toast",
    "Modals": "Headless UI / Radix UI"
  },
  "Build Tools": {
    "Bundler": "Vite",
    "Tree Shaking": "Enabled",
    "Code Splitting": "Manual chunks untuk vendor libs"
  },
  "Performance": {
    "Image Optimization": "Next.js Image atau Sharp",
    "Lazy Loading": "React.lazy + Suspense",
    "Bundle Analysis": "Vite plugin analyzer"
  }
}
```

#### Backend & Data
```javascript
{
  "API": "REST API (optional, via Vercel Functions)",
  "Data Storage": {
    "Primary": "Google Sheets (via API)",
    "Alternative": "Tally.so (automated)",
    "Backup": "GitHub (version control)"
  },
  "Integration": {
    "Form Handling": "Google Forms API / Tally.so",
    "WhatsApp": "wa.me links (no API)",
    "Analytics": "Google Analytics 4",
    "Error Tracking": "Sentry",
    "Monitoring": "UptimeRobot"
  }
}
```

#### Deployment & Infrastructure
```javascript
{
  "Hosting": "Vercel (Jamstack)",
  "Domain": "careerfolio.riyandimhmd.my.id",
  "DNS": "Current registrar",
  "SSL": "Automatic (Let's Encrypt via Vercel)",
  "CDN": "Vercel Edge Network",
  "Environment": {
    "Production": "careerfolio.riyandimhmd.my.id",
    "Staging": "staging-careerfolio.riyandimhmd.my.id (optional)",
    "Development": "localhost:5173"
  },
  "CI/CD": "GitHub Actions (optional)",
  "Monitoring": {
    "Error Tracking": "Sentry",
    "Uptime": "UptimeRobot",
    "Performance": "Vercel Analytics + Web Vitals"
  }
}
```

### 6.3 Project Structure

```
careerfolio/
├── public/
│   ├── images/
│   │   ├── templates/
│   │   │   ├── kesehatan/
│   │   │   ├── pertanian/
│   │   │   ├── teknik/
│   │   │   ├── hukum/
│   │   │   └── ekonomi/
│   │   ├── logos/
│   │   └── icons/
│   └── data/
│
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── StickyNav.jsx
│   │   │
│   │   ├── templates/              # Template components
│   │   │   ├── kesehatan/
│   │   │   │   ├── HealthBasic.jsx
│   │   │   │   └── HealthProfessional.jsx
│   │   │   ├── pertanian/
│   │   │   ├── teknik/
│   │   │   ├── hukum/
│   │   │   └── ekonomi/
│   │   │
│   │   ├── catalog/
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── TemplateGrid.jsx
│   │   │   └── TemplateFilter.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── Spinner.jsx
│   │   │
│   │   └── dashboard/
│   │       ├── OrdersList.jsx
│   │       ├── MetricsCards.jsx
│   │       ├── Charts/
│   │       └── AdminNav.jsx
│   │
│   ├── pages/
│   │   ├── Landing.jsx             # /
│   │   ├── Catalog.jsx             # /catalog
│   │   ├── Preview.jsx             # /preview/:template_id
│   │   ├── Order.jsx               # /order
│   │   ├── Success.jsx             # /order/success
│   │   ├── Dashboard.jsx           # /admin (protected)
│   │   ├── NotFound.jsx            # 404
│   │   └── Terms.jsx               # /terms, /privacy
│   │
│   ├── hooks/
│   │   ├── useTemplate.js
│   │   ├── useAnalytics.js
│   │   ├── useFetch.js
│   │   └── useAuth.js              # Admin auth
│   │
│   ├── context/
│   │   ├── AuthContext.jsx         # Admin auth state
│   │   ├── OrderContext.jsx        # Order state
│   │   └── ThemeContext.jsx        # Dark mode
│   │
│   ├── data/
│   │   ├── mockData.js             # Sample data per template
│   │   ├── templates.json          # Template metadata
│   │   ├── pricing.json            # Pricing data
│   │   ├── categories.json         # Category definitions
│   │   └── faq.json                # FAQ content
│   │
│   ├── utils/
│   │   ├── analytics.js            # Analytics tracking
│   │   ├── validation.js           # Form validation
│   │   ├── formatting.js           # Currency, date formatting
│   │   ├── generateMessages.js     # WhatsApp message generation
│   │   └── constants.js            # Global constants
│   │
│   ├── styles/
│   │   ├── globals.css             # Global styles
│   │   ├── tailwind.config.js      # Tailwind config
│   │   └── animations.css          # Custom animations
│   │
│   └── assets/
│       ├── fonts/
│       └── svgs/
│
├── .env.example
├── .env.local                      # Local env (git-ignored)
├── .gitignore
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
├── README.md
└── DEPLOYMENT.md
```

### 6.4 Build Configuration (vite.config.js)

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false, // true for production debug
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'analytics': ['react-hot-toast', 'framer-motion'],
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'https://sheets.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
```

---

## 7. FUNCTIONAL REQUIREMENTS (DETAILED)

### 7.1 Landing Page (/

)

#### Components
1. **Hero Section**
   - Eye-catching headline
   - Subheading explaining value prop
   - CTA buttons (Browse Templates / Learn More)
   - Hero image/video showing portfolio examples
   - Scroll-triggered animations

2. **Problem-Solution Section**
   - Display pain points of target audience
   - Show how CareerFolio solves each
   - 3-4 main pain points highlighted

3. **Features Showcase**
   - 6-8 key features highlighted
   - Icons + brief descriptions
   - Feature benefits explained

4. **Category Preview**
   - Show 5 categories with visual representation
   - Category card per jurusan
   - Brief explanation of specialization
   - "Explore Category" CTA

5. **Pricing Section**
   - 4 pricing tiers (Mahasiswa, Fresh Grad, Custom Domain, Add-ons)
   - Comparison table
   - Most popular badge on one tier
   - FAQ toggle for pricing questions

6. **Social Proof**
   - Customer testimonials (carousel or grid)
   - Featured in / Partner logos
   - Stats (X+ portfolios created, Y% satisfaction)

7. **FAQ Section**
   - Accordion with common questions
   - FAQ synced with /faq page

8. **CTA Section**
   - Final call-to-action
   - Options: Browse or Contact

9. **Footer**
   - Company info
   - Quick links
   - Social media
   - Contact info
   - Privacy / Terms links

#### Technical Details
```javascript
// Landing Page Features
- Smooth scroll behavior
- Page transitions
- Image optimization (WebP/AVIF)
- Lazy loading below fold
- Meta tags optimization
- Schema markup for SEO
- Google Analytics event tracking
- Conversion tracking
```

### 7.2 Catalog Page (/catalog)

#### Components
1. **Category Filter**
   - Category buttons (Kesehatan, Pertanian, Teknik, Hukum, Ekonomi)
   - All categories view default

2. **Sorting Options**
   - Most popular
   - Latest added
   - Price (low to high / high to low)

3. **Search Bar**
   - Search by template name or description

4. **Template Grid**
   - Template cards in 2-3 column grid (responsive)
   - Card shows:
     - Thumbnail/preview image
     - Template name
     - Brief description
     - Category badge
     - Price
     - "Live Preview" button
     - "Pesan Sekarang" button
   - Hover effects (shadow, scale)

5. **Sidebar (Desktop)**
   - Filter options
   - Price range slider
   - Features checklist

#### Interaction Flow
```
Landing → Click "Browse Templates" 
  → /catalog page loads
  → User filter by category (default: all)
  → User click preview on specific template
  → /preview/:template_id page loads
```

### 7.3 Preview Page (/preview/:template_id)

#### Components
1. **Sticky Navigation Bar**
   - "← Back to Catalog" button
   - Template name / category indicator
   - "Use This Template →" CTA button
   - Navigation sticky on scroll

2. **Full Template Preview**
   - Entire portfolio template rendered with mock data
   - Responsive preview (can view at different breakpoints)
   - Smooth scrolling
   - No copy-paste prevention (CSS + JS)

3. **Template Information Panel** (optional)
   - Template features list
   - What's included
   - Customization notes

#### Security & Prevention
```javascript
// Anti-copy-paste measures
- user-select: none CSS
- context-menu prevention
- console prevention
- Screenshot watermark overlay (optional)
- Disable right-click in preview
- Disable developer tools inspection (optional)
```

### 7.4 Order Form Integration

#### Form Submission Flow
```
1. User clicks "Use This Template" button
   ↓
2. System captures template_id & category
   ↓
3. Redirect to Google Form / Tally with pre-filled data
   - Template ID
   - Category
   - Timestamp
   ↓
4. User fills form (5-10 minutes)
   ↓
5. Form submission (auto to Google Sheets)
   ↓
6. Redirect to Success Page (/order/success)
   ↓
7. Display WhatsApp contact CTA
   ↓
8. User contact via WhatsApp with pre-written message
   ↓
9. Admin receives message, track in spreadsheet
   ↓
10. Admin request payment via QRIS
    ↓
11. User scan QRIS & transfer
    ↓
12. Admin verify payment, mark as "paid" in tracker
    ↓
13. Admin setup portfolio & deliver link
    ↓
14. Portfolio live!
```

#### Form Fields (Dynamic per Category)

**KESEHATAN**
- Nama lengkap
- Email
- No HP
- Universitas
- Jurusan
- Tahun angkatan
- Gelar (dr., ns., apt., bidan, etc)
- No STR (optional)
- Rotasi klinis/stase (text area: tempat, durasi, outcome)
- Sertifikasi medis (comma separated)
- Bio singkat (100 kata)
- Foto profil upload
- Consent checkbox

**PERTANIAN**
- Nama, email, HP, universitas, jurusan, tahun
- Fokus bidang (pilihan: hama, tanah, ternak, air, panen, dsb)
- Fieldwork experience (list: lokasi, tema, durasi)
- Sertifikasi pertanian
- Passion statement (100 kata)
- Foto profil
- Fieldwork photos upload
- Publikasi/research (links)

**TEKNIK**
- Nama, email, HP, universitas, jurusan, tahun
- Spesialisasi (pilihan: sipil, mesin, elektro, industri, lain)
- Soft skills (pilihan: leadership, teamwork, communication, problem-solving)
- Technical skills (text: tools/software)
- Project portfolio (text area: project name, description, role, outcome)
- Sertifikasi teknis
- CAD/drawing/3D model upload

**HUKUM/SOSHUM**
- Nama, email, HP, universitas, jurusan, tahun
- Bidang keahlian (pilihan: corporate, labour, human rights, international, education, dsb)
- Pengalaman profesional (list: posisi, organisasi, durasi)
- Publikasi/paper (links)
- Moot court experience (text: kompetisi, peran, outcome)
- Award/recognition (list)
- Bio/statement

**EKONOMI**
- Nama, email, HP, universitas, jurusan, tahun
- Core competencies (pilihan: finance, marketing, entrepreneurship, analysis, dsb)
- Business/project experience (list: nama, peran, metrics)
- Sertifikasi bisnis (comma separated)
- Business case studies (description of successful projects)
- Metrics (revenue managed, profit, growth %, dsb)

### 7.5 Payment & Success Page

#### Payment Instruction Page
```
Display after form submission:
1. Confirmation message
   "Terima kasih! Form data Anda sudah kami terima."
   
2. Next steps:
   - Admin akan review data Anda
   - Admin hubungi via WhatsApp dalam 24 jam
   - Konfirmasi template yang akan dibuat
   - Kirim invoice & QRIS untuk pembayaran
   
3. WhatsApp Contact Button
   - Pre-written message (copy-able)
   - wa.me link
   - Admin nomor visible
   
4. Payment Methods Display:
   - Bank transfer (BCA, Mandiri, BNI) + QR codes
   - E-wallet (Dana, OVO, GoPay) + QR codes
   - Nominal yang harus ditransfer: Rp XXX
   - Atas nama: [Admin Name]
   
5. FAQ section:
   - "Berapa lama portofolio selesai?"
   - "Bagaimana cara pembayaran?"
   - "Bisa revisi berapa kali?"
```

### 7.6 Admin Dashboard (/admin - Protected)

#### Authentication
```javascript
// Simple password-based auth for MVP
- Login page with username/password
- Session stored in localStorage
- Protected route check in Router
- Logout functionality

// Future: Firebase Auth, OAuth, etc
```

#### Dashboard Layout
```
┌─────────────────────────────────────────┐
│  Header: CareerFolio Admin              │
│  [Welcome, Admin Name] [Logout]         │
├─────────────────────────────────────────┤
│                                         │
│  Sidebar                  Main Content  │
│  ├─ Dashboard    ├─ Overview Metrics   │
│  ├─ Orders       │  ├─ Total Orders    │
│  ├─ Analytics    │  ├─ Revenue         │
│  ├─ Templates    │  ├─ Pending Payments│
│  ├─ Chat Log     │  └─ New Orders List │
│  └─ Settings     │                     │
│                  ├─ Quick Actions      │
│                  │  ├─ [View All Orders│
│                  │  ├─ [View Analytics]│
│                  │  └─ [Contact Stats] │
│                  │                     │
│                  └─ Recent Activity    │
│                     ├─ 2h ago: Payment │
│                     │  confirmed...    │
│                     └─ ...             │
└─────────────────────────────────────────┘
```

#### Dashboard Pages

**1. Dashboard Home**
- Metrics cards:
  - Total Orders (pending/paid/delivered)
  - Revenue (this month)
  - New customers (this month)
  - Pending payments amount
  - Conversion rate
  - Template views (top 3)

- Charts:
  - Revenue trend (last 30 days)
  - Orders by category (pie chart)
  - Conversion funnel
  - Template popularity (bar chart)

- Recent orders list:
  - Last 5 orders with status

**2. Orders Management**
- Full orders table:
  - Order ID
  - Customer name
  - Template selected
  - Package
  - Date ordered
  - Status (dropdown to change)
  - Actions (view details, mark paid, send reminder)

- Order detail modal:
  - Customer info
  - All form data submitted
  - Payment status
  - Timeline
  - Revision history
  - Admin notes (text area)

**3. Analytics**
- Detailed metrics:
  - Total page views
  - Catalog clicks
  - Preview clicks
  - Form submissions
  - Payment completions
  - Conversion rate (submission → payment)
  - Template views breakdown
  - Category breakdown

- Charts:
  - Funnel chart (view → preview → form → payment)
  - Time series (orders by day/week/month)
  - Category distribution
  - Template performance comparison

- Filters:
  - Date range picker
  - Category filter

- Export:
  - CSV export button

**4. Templates**
- Template list with thumbnails
- Edit button per template
- Toggle active/inactive
- View count per template

- Edit page:
  - Template name
  - Category
  - Description
  - Mock data (JSON)
  - Preview button
  - Save changes

**5. Chat Log / Customer Tracker**
- Table of all customers:
  - Name
  - Phone
  - Template ordered
  - Status (contacted/negotiating/confirmed/paid/delivered)
  - Date contacted
  - Last message date
  - Next action
  - Edit button

- Edit customer note:
  - Conversation summary
  - Payment status
  - Revision tracking
  - Follow-up reminders

---

## 8. NON-FUNCTIONAL REQUIREMENTS (DETAILED)

### 8.1 Performance

#### Speed & Load Times
```
Requirements:
- First Contentful Paint (FCP): < 1.2 seconds (4G)
- Largest Contentful Paint (LCP): < 2.5 seconds
- Time to Interactive (TTI): < 3.5 seconds
- Cumulative Layout Shift (CLS): < 0.1
- Overall Lighthouse Score: > 90

Optimization strategies:
- Image optimization (WebP, AVIF, next-gen formats)
- Code splitting (React.lazy + Suspense)
- Lazy loading (IntersectionObserver)
- Minification (Vite auto)
- Gzip compression (Vercel auto)
- DNS prefetch / Preconnect
- Resource hints (preload critical)
- Tree shaking (Vite auto)
- Vite chunk splitting:
  {
    "react-vendor": ["react", "react-dom"],
    "router": ["react-router-dom"],
    "ui": ["framer-motion", "react-hot-toast"]
  }
```

#### Scalability
```
MVP Phase (0-500 users):
- Vercel hobby/pro plan sufficient
- Bandwidth: <10GB/month
- Build time: <5 minutes

Growth Phase (500-5000 users):
- Vercel pro plan upgrade
- Bandwidth: 10-50GB/month
- Consider CDN optimization

Scale Phase (5000+ users):
- Vercel enterprise
- Database migration (for analytics)
- API gateway setup
```

### 8.2 Security

#### HTTPS & Encryption
```
- All connections HTTPS (Vercel provides)
- SSL certificate auto-renewed
- Security headers set:
  - Strict-Transport-Security
  - X-Content-Type-Options
  - X-Frame-Options
  - Content-Security-Policy
```

#### Data Protection
```
- User form data encrypted in transit (HTTPS)
- Google Forms auto-saves to Sheets (Google's security)
- Admin auth with password hashing (future: bcrypt)
- No sensitive data in localStorage without encryption
- Environment variables protected (.env.local)
```

#### GDPR & Privacy Compliance
```
- Privacy policy page explaining:
  - Data collection (what)
  - Data usage (why)
  - Data retention (1 year then deleted)
  - User rights (access, delete, export)
  
- Consent checkbox on form:
  "Saya setuju dengan Privacy Policy dan Terms of Service"
  
- Data retention policy:
  - Customer data kept 1 year after project completion
  - After 1 year, data deleted from sheets
  - Backup data deleted after 90 days
  
- Contact email for data requests:
  privacy@riyandimhmd.my.id
```

### 8.3 SEO & Discoverability

#### Meta Tags & Open Graph
```javascript
// Landing Page
<title>CareerFolio - Portfolio Professional untuk Mahasiswa & Fresh Graduate</title>
<meta name="description" content="Buat portofolio profesional dalam sekali klik. Template khusus untuk Kesehatan, Pertanian, Teknik, Hukum, & Ekonomi." />
<meta property="og:title" content="CareerFolio - Portfolio Profesional Untuk Mahasiswa" />
<meta property="og:description" content="Portofolio premium yang mewakili expertise spesifik jurusanmu." />
<meta property="og:image" content="https://careerfolio.riyandimhmd.my.id/og-image.jpg" />
<meta property="og:url" content="https://careerfolio.riyandimhmd.my.id/" />

// Template Preview Pages (Dynamic)
<title>[Template Name] - CareerFolio</title>
<meta name="description" content="Lihat preview template [Template Name] untuk jurusan [Category]." />
<meta property="og:image" content="[Template Thumbnail URL]" />

// Individual Portfolio Pages (Client portfolios)
// When delivered, client portfolio will have:
<title>[Client Name] - Portfolio Profesional</title>
<meta name="description" content="Portfolio profesional [Client Name] - [Jurusan]" />
<meta property="og:image" content="[Portfolio Screenshot or Photo]" />
<meta property="og:title" content="[Client Name] - Portfolio" />
```

#### Structured Data (Schema.org)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CareerFolio",
  "description": "Professional portfolio builder for Indonesian students",
  "provider": {
    "@type": "Organization",
    "name": "CareerFolio",
    "url": "https://careerfolio.riyandimhmd.my.id"
  },
  "areaServed": "ID",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Portfolio Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Paket Mahasiswa",
        "price": "299000",
        "priceCurrency": "IDR"
      }
    ]
  }
}
```

#### SEO Best Practices
```
- Mobile-first indexing (responsive design)
- Fast load times (Core Web Vitals)
- Clean URL structure
- Internal linking strategy
- Sitemap.xml submission to Google Search Console
- robots.txt configuration
- Canonical tags (no duplicates)
- Alt text on all images
- Structured heading hierarchy (H1, H2, H3)
- Keyword research & optimization:
  - Primary: "portfolio profesional" "portfolio mahasiswa" "buat portfolio"
  - Secondary: jurusan-specific terms
  - Long-tail: "portfolio kesehatan mahasiswa" dll
```

### 8.4 Accessibility (WCAG 2.1 AA)

#### Color & Contrast
```
- Minimum contrast ratio 4.5:1 for text on background
- Color not used as only visual indicator
- Dark mode support for users who prefer it
- No color-dependent UI elements
```

#### Keyboard Navigation
```
- All interactive elements focusable (tab order logical)
- Focus indicators visible (outline/highlight)
- No keyboard traps
- Keyboard shortcuts documented
```

#### Screen Reader Support
```
- Semantic HTML (buttons, links, headings)
- ARIA labels where needed
- Alt text on all images (informative)
- Form labels properly associated
- Live regions for dynamic content
```

#### Text & Readability
```
- Minimum font size 16px (mobile)
- Line height 1.5+ for body text
- Line length max 80 characters
- Language clearly defined (lang="id")
- Abbreviations explained
```

#### Mobile Accessibility
```
- Touch targets min 44x44 pixels
- Responsive text sizing
- No hover-only interactions
- Proper zoom behavior (not disabled)
```

### 8.5 Reliability & Uptime

#### Monitoring
```
- Sentry.io for error tracking:
  - Auto-reports errors from production
  - Alerts on critical issues
  - Performance monitoring
  
- UptimeRobot for uptime monitoring:
  - 5-minute interval checks
  - Email alerts on downtime
  - Uptime SLA tracking
  
- Vercel Analytics:
  - Real User Monitoring (RUM)
  - Performance metrics
  - Traffic patterns
```

#### Backup & Disaster Recovery
```
- Google Forms auto-backup to Sheets
- GitHub repository as backup (all code)
- Vercel auto-snapshots (previous 14 days)
- Manual monthly backups of Google Sheets → CSV → GitHub

Recovery procedures:
- Data loss: Restore from previous day backup
- Code issue: Revert to previous Vercel deployment
- Service outage: Failover to static backup (backup domain)
```

#### Error Handling
```javascript
// Global error boundary
<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>

// Network error handling
- Retry logic for API calls
- User-friendly error messages
- Offline mode (if applicable)

// Form validation errors
- Clear error messages per field
- Highlight invalid fields
- Prevent submission until fixed

// 404 & Not found
- Custom 404 page with navigation options
```

---

## 9. DATA MODEL & DATABASE SCHEMA

### 9.1 Data Structure (Google Sheets)

Since MVP uses Google Forms → Google Sheets, here's the schema:

#### Sheet 1: ORDERS (Master Orders)
```
Column A: Order_ID              (Auto-generated: ORD-YYYYMMDD-001)
Column B: Timestamp             (Datetime when form submitted)
Column C: Customer_Name         (Full name)
Column D: Customer_Email        (Email address)
Column E: Customer_Phone        (WhatsApp number)
Column F: Template_ID           (Which template ordered)
Column G: Template_Name         (Template name for reference)
Column H: Category              (Kesehatan / Pertanian / etc)
Column I: Package_Selected      (Mahasiswa / Fresh Graduate / Custom)
Column J: Price                 (IDR amount)
Column K: Status                (Contacted / Confirmed / Paid / Delivered / Revision)
Column L: Payment_Confirmed_Date (When payment verified)
Column M: Portfolio_Delivered_Date (When portfolio delivered)
Column N: Revision_Count        (How many revisions used)
Column O: Admin_Notes           (Internal notes)
Column P: Next_Action           (What to do next)
Column Q: Next_Action_Date      (When to follow up)
```

#### Sheet 2: FORM_DATA (Detailed Customer Info)
```
Column A: Order_ID              (FK to ORDERS)
Column B: Universitas           (University name)
Column C: Jurusan               (Major/program)
Column D: Tahun_Angkatan       (Year of study/graduation)
Column E-Z: Dynamic per category
  - For KESEHATAN: Gelar, STR, Rotasi Klinis, etc
  - For PERTANIAN: Fokus Bidang, Fieldwork, etc
  - For TEKNIK: Spesialisasi, Technical Skills, etc
  - For HUKUM: Bidang Keahlian, Pengalaman, etc
  - For EKONOMI: Core Competencies, Metrics, etc
Column AA: Notes_Internal       (Admin processing notes)
```

#### Sheet 3: PAYMENT_TRACKING
```
Column A: Order_ID              (FK to ORDERS)
Column B: Customer_Name         
Column C: Package_Price         
Column D: Payment_Method        (Bank Transfer / E-wallet / etc)
Column E: Payment_Expected_Date (Deadline for payment)
Column F: Payment_Confirmed_Date (Actual payment date)
Column G: Payment_Amount        (Amount received)
Column H: Payment_Proof         (Screenshot/receipt link)
Column I: Status                (Pending / Confirmed / Reconciled)
Column J: Notes                 (Discrepancies, issues)
```

#### Sheet 4: CHAT_HISTORY
```
Column A: Order_ID              (FK to ORDERS)
Column B: Customer_Name         
Column C: Phone                 (WhatsApp number)
Column D: First_Contact_Date    (When first contacted)
Column E: Status                (Contacted / Negotiating / Confirmed / On Hold / etc)
Column F: Last_Message_Date     (Last communication)
Column G: Next_Follow_Up_Date   (When to follow up)
Column H: Conversation_Summary  (Text area: what discussed)
Column I: Current_Action        (What's pending)
Column J: Is_Active             (Yes/No - still pursuing)
```

#### Sheet 5: TEMPLATE_ANALYTICS
```
Column A: Template_ID           
Column B: Template_Name         
Column C: Category              
Column D: Date                  (Daily tracking)
Column E: View_Count            (Daily views)
Column F: Preview_Clicks        (Daily preview button clicks)
Column G: Order_Submissions     (Daily form submissions)
Column H: Conversions           (Daily form submits → payments)
Column I: Cumulative_Views      (All-time)
Column J: Cumulative_Orders     (All-time)
```

### 9.2 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    USER ACTIONS                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. View Template                                       │
│     → Google Analytics event: "template_view"           │
│     → TEMPLATE_ANALYTICS update (daily)                 │
│                                                         │
│  2. Click Preview                                       │
│     → Google Analytics event: "preview_click"           │
│     → TEMPLATE_ANALYTICS update                         │
│                                                         │
│  3. Submit Order Form (Google Form)                     │
│     → Auto-save to Google Sheets (FORM_DATA)            │
│     → Google Analytics event: "form_submit"             │
│     → TEMPLATE_ANALYTICS update                         │
│     → ORDERS sheet new row                              │
│     → Status: "Submitted"                               │
│     → Redirect to Success page                          │
│                                                         │
│  4. Admin Follow-up (WhatsApp)                          │
│     → CHAT_HISTORY new row                              │
│     → Status: "Contacted"                               │
│     → Manual notes in CHAT_HISTORY                      │
│                                                         │
│  5. Customer Confirms & Pays (QRIS)                     │
│     → PAYMENT_TRACKING new row                          │
│     → Status: "Pending" → "Confirmed"                   │
│     → ORDERS.Status updated: "Paid"                     │
│     → Google Analytics event: "payment_confirmed"       │
│                                                         │
│  6. Admin Delivers Portfolio                            │
│     → ORDERS.Status: "Delivered"                        │
│     → ORDERS.Portfolio_Delivered_Date: today            │
│     → Send delivery link via WhatsApp                   │
│                                                         │
│  7. Customer Requests Revision                          │
│     → ORDERS.Revision_Count += 1                        │
│     → ORDERS.Status: "Revision"                         │
│     → Track in CHAT_HISTORY                             │
│     → Re-deliver after revision                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 9.3 Metrics Tracked (Analytics)

```javascript
// Page Level Events
- page_view (all pages)
- scroll_depth (landing page)

// Template Level Events
- template_view
- template_preview_click
- template_order_click

// Form Level Events
- form_start (user begins filling form)
- form_submit (successful submission)
- form_error (validation error)

// Payment Level Events
- payment_initiated
- payment_confirmed
- payment_failed

// Admin Level Events
- admin_login
- admin_dashboard_view
- order_status_changed
- template_edited

// Conversion Events
- add_to_cart equivalent (template order submission)
- purchase (payment confirmed)
```

---

## 10. API SPECIFICATIONS

### 10.1 External APIs Used

#### Google Forms API (Data Ingestion)
```
Endpoint: forms.googleapis.com/v1
Authentication: OAuth 2.0 (Service Account)

When form submitted:
- Automatic trigger → Google Sheets append
- No REST call needed (Forms handle it)
- Sheets API used to read responses

Queries:
- GET /spreadsheets/{sheetId}/values/{range}
  Read orders data from ORDERS sheet
  
- APPEND /spreadsheets/{sheetId}/values/{range}:append
  Append analytics data to TEMPLATE_ANALYTICS
```

#### Google Sheets API (Data Management)
```
Endpoint: sheets.googleapis.com/v4
Authentication: OAuth 2.0

Operations:
1. READ
   GET /spreadsheets/{sheetId}/values/{range}
   - Fetch orders
   - Fetch analytics
   - Fetch chat history
   
2. UPDATE
   PUT /spreadsheets/{sheetId}/values/{range}
   - Update order status
   - Update payment date
   - Update notes
   
3. APPEND
   POST /spreadsheets/{sheetId}/values/{range}:append
   - Add new analytics row
   - Log admin actions
   
4. BATCH UPDATE
   POST /spreadsheets/{sheetId}:batchUpdate
   - Update multiple cells at once
   - Format cells (colors, fonts)
```

#### Google Analytics 4 (Tracking)
```
Event tracking via gtag.js

Basic Events:
- page_view
- view_item (template view)
- view_item_list (catalog view)
- select_item (template select)
- begin_checkout (form start)
- add_payment_info (payment initiated)
- purchase (payment confirmed)

Custom Events:
- template_preview_clicked
- template_order_clicked
- form_submitted
- payment_qr_scanned

Parameters tracked:
- template_id
- category
- package
- price
- user_id (anonymous)
- session_id
```

#### Sentry (Error Tracking)
```
Endpoint: sentry.io
Authentication: DSN key

Captures:
- JavaScript errors
- React error boundaries
- Unhandled promise rejections
- Performance metrics
- User breadcrumbs

Integration:
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
    }),
  ],
});
```

#### UptimeRobot (Monitoring)
```
Endpoint: uptimerobot.com/api/v2/
Authentication: API key

Monitors:
- GET https://careerfolio.riyandimhmd.my.id/
- Check interval: 5 minutes
- Timeout: 30 seconds
- Alert on: 2 consecutive failures

Alert methods:
- Email notification
- Webhook (optional)
```

### 10.2 Internal API Endpoints (Future - Vercel Serverless)

For Phase 2, when we need to build admin features that can't be static:

```
POST /api/auth/login
- Input: {username, password}
- Output: {token, expiresIn}
- Security: Rate limit, HTTPS only

GET /api/orders
- Query: ?status=paid&date_from=2024-01-01
- Output: [{Order}]
- Auth: Admin token required

PUT /api/orders/{orderId}
- Input: {status, notes}
- Output: {Order}
- Auth: Admin token required

POST /api/webhooks/payment
- Input: Payment confirmation data
- Output: {status: "success"}
- Verification: Signature validation

GET /api/analytics
- Query: ?date_from=2024-01-01&date_to=2024-01-31
- Output: {metrics}
- Auth: Admin token required
```

---

## 11. UI/UX DESIGN SYSTEM

### 11.1 Design Tokens

#### Color Palette
```
Primary Colors (CTA, highlights):
- Brand Blue: #0066CC (buttons, links)
- Brand Orange: #FF6B35 (emphasis)

Category Colors:
- Kesehatan: #14B8A6 (Teal)
- Pertanian: #10B981 (Green)
- Teknik: #1F2937 (Slate)
- Hukum: #1E3A8A (Navy)
- Ekonomi: #DC2626 (Red)

Neutrals:
- White: #FFFFFF
- Gray 50: #F9FAFB
- Gray 100: #F3F4F6
- Gray 500: #6B7280
- Gray 900: #111827
- Black: #000000

Semantic:
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
- Info: #3B82F6
```

#### Typography
```
Font Stack:
- Primary: Inter, Roboto (sans-serif)
- Secondary: Playfair Display (headings - formal)
- Monospace: JetBrains Mono (code)

Sizes:
- H1: 48px / 56px (mobile)
- H2: 36px / 42px
- H3: 28px / 32px
- H4: 24px / 28px
- Body: 16px
- Small: 14px
- Caption: 12px

Weight:
- Light: 300
- Regular: 400
- Medium: 500
- Bold: 700

Line Height:
- Headings: 1.2
- Body: 1.6
- Dense: 1.4
```

#### Spacing Scale
```
Space scale (based on 4px):
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
```

#### Components & Patterns

**Buttons**
```
Variants:
- Primary (filled)
- Secondary (outline)
- Tertiary (ghost)
- Disabled

Sizes:
- Small (32px height)
- Medium (44px height) - default
- Large (48px height)

States:
- Default
- Hover
- Active
- Disabled
- Loading
```

**Cards**
```
Minimal padding: 16px-24px
Border radius: 8px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover: Slight lift effect (shadow increase)
```

**Forms**
```
Input height: 44px (touch-friendly)
Label: Above input, bold 14px
Placeholder: Gray 400 text
Error state: Red border + error message below
Focus: Blue outline 2px
Border radius: 6px
```

**Modals**
```
Z-index: 1000
Backdrop: rgba(0,0,0,0.5) semi-transparent
Modal bg: White
Border radius: 12px
Min width: 320px (mobile)
Max width: 600px
```

### 11.2 Responsive Design

```
Breakpoints (Tailwind standard):
- sm: 640px (small phones)
- md: 768px (tablets)
- lg: 1024px (desktops)
- xl: 1280px (large screens)
- 2xl: 1536px (ultra-wide)

Mobile-first approach:
- Design for 375px width first
- Add complexity at breakpoints

Grid:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Max container width: 1200px
```

### 11.3 Key Page Layouts

#### Landing Page Layout
```
┌──────────────────────────────┐
│      Header/Navigation       │
├──────────────────────────────┤
│                              │
│  Hero Section                │
│  (Text + CTA Button)         │
│                              │
├──────────────────────────────┤
│                              │
│  Problem-Solution Section    │
│  (3-4 problems with icons)   │
│                              │
├──────────────────────────────┤
│                              │
│  Features Grid               │
│  (6 features, 2-3 cols)      │
│                              │
├──────────────────────────────┤
│                              │
│  Category Cards              │
│  (5 categories grid)         │
│                              │
├──────────────────────────────┤
│                              │
│  Pricing Comparison          │
│  (4 tiers comparison table)  │
│                              │
├──────────────────────────────┤
│                              │
│  Social Proof (Testimonials) │
│  (Carousel or grid)          │
│                              │
├──────────────────────────────┤
│                              │
│  FAQ Accordion               │
│                              │
├──────────────────────────────┤
│                              │
│  Final CTA Section           │
│                              │
├──────────────────────────────┤
│          Footer              │
└──────────────────────────────┘
```

#### Catalog Layout
```
Left (Desktop) / Top (Mobile):
- Filter sidebar or modal
  - Categories
  - Sorting
  - Price range

Main area:
- Search bar
- Template grid (2-3 cols)
- Each card shows:
  - Thumbnail
  - Name
  - Category badge
  - Price
  - Preview + Order buttons
```

#### Preview Layout
```
┌─────────────────────┐
│  Sticky Nav Bar     │
│ ← Back  | Use This  │
├─────────────────────┤
│                     │
│  Template Content   │
│  (Full portfolio)   │
│                     │
│  (Long scrollable)  │
│                     │
└─────────────────────┘
```

---

## 12. PRICING MODEL

### 12.1 Pricing Tiers

| Paket | Harga | Durasi | Termasuk | Target |
|-------|-------|--------|-----------|--------|
| **Paket Mahasiswa** | Rp 299.000 | 1x bayar | 1x portofolio, 1x revisi gratis, 3 bulan support | Mahasiswa aktif semester akhir |
| **Paket Fresh Graduate** | Rp 499.000 | 1x bayar | 1x portofolio, 2x revisi gratis, 6 bulan support, chat konsultasi | Fresh graduate <1 tahun |
| **Paket Custom Domain** | Rp 799.000 | 1x bayar | 1x portofolio, 3x revisi gratis, 1 tahun support, custom domain setup, SSL cert | Professional, lulusan > 1 tahun |
| **Revisi Tambahan** | Rp 99.000 | Per revisi | Tambahan revisi setelah paket habis | Jika perlu lebih banyak revisi |

### 12.2 Add-ons (Future)
```
- Revisi Unlimited (1 tahun): Rp 499.000
- Hosting Custom Domain (1 tahun): Rp 199.000
- Premium Support (chat priority): Rp 149.000
- Portfolio Redesign (full): Rp 399.000
```

### 12.3 Revenue Model

```
Revenue Streams:
1. Direct Sales (primary)
   - Paket Mahasiswa: Rp 299k
   - Paket Fresh Graduate: Rp 499k
   - Paket Custom Domain: Rp 799k
   - Revisi tambahan: Rp 99k

2. Future Revenue Streams (Phase 2+):
   - Affiliate commission (domain registrars)
   - Premium features subscription
   - B2B licensing (untuk universitas)
   - Agency partnership (white-label)

Financial Projections (Year 1):
- Month 1-2: 10 orders/month → Rp 3-5 juta/month
- Month 3-6: 50 orders/month → Rp 15-25 juta/month
- Month 7-12: 100+ orders/month → Rp 30-50 juta/month
- Year 1 Total: Rp 150-200 juta (conservative)

Break-even Analysis:
- Monthly operating costs (estimate):
  - Domain: Rp 200k/year
  - Vercel: Rp 0-500k/month
  - Tools (Sentry, analytics): Rp 0-500k/month
  - Tools total: ~Rp 700-1juta/month
  
- Break-even point: ~3-4 orders/month of Paket Fresh Graduate
- Achieved from Month 1
```

### 12.4 Payment Terms

```
Payment Method:
- Bank transfer (BCA, Mandiri, BNI)
- E-wallet (Dana, OVO, GoPay)
- QRIS scan
- Via admin WhatsApp coordination

Payment Timing:
- DP (down payment) 100% untuk MVP
- Future Phase 2: bisa cicilan 2-3x

Refund Policy:
- 7 hari setelah pembayaran, jika tidak satisfied
- Uang kembali 100% minus biaya admin
- Portfolio files tidak dikembalikan (sudah delivered)
- Gratis revisi bisa digunakan untuk re-delivery

Terms & Conditions:
- Pembayaran non-refundable setelah 7 hari
- Support included selama durasi paket
- Custom domain perlu Anda miliki sendiri
```

---

## 13. ANALYTICS & METRICS DASHBOARD

### 13.1 Key Performance Indicators (KPIs)

#### Business Metrics
```
1. Total Revenue
   - Monthly revenue
   - YTD revenue
   - Per package breakdown
   - Target: Rp 150M year 1

2. Customer Metrics
   - Total customers
   - New customers (monthly)
   - Repeat customers
   - Customer acquisition cost (CAC)
   - Customer lifetime value (LTV)
   - Target: 500+ customers year 1

3. Order Metrics
   - Total orders
   - Pending orders (awaiting payment)
   - Delivered orders
   - Revision requests
   - Order fulfillment time (avg days)
   - Target: 500 orders year 1

4. Payment Metrics
   - Total payment received
   - Pending payments (amount & count)
   - Payment success rate
   - Average days to payment (after order)
   - Target: 90%+ payment success
```

#### Product Metrics
```
1. Template Performance
   - Views per template
   - Preview clicks per template
   - Conversion rate per template (view → order)
   - Orders per template
   - Most popular template
   - Target: 100+ views/template/month

2. Category Performance
   - Category breakdown (% of orders)
   - Most popular category
   - Least popular category
   - Conversion rate per category
   - Target: Even distribution across categories

3. Conversion Funnel
   - Landing page views
   - Catalog page views
   - Preview clicks
   - Form submissions
   - Payment confirmations
   - Conversion rate (view → order)
   - Conversion rate (order → payment)
   - Overall conversion rate
   - Target: 2-3% from view to payment
```

#### User Metrics
```
1. Traffic
   - Total page views
   - Unique users
   - Sessions
   - Bounce rate
   - Avg session duration
   - Pages per session
   - Target: 1000+ monthly unique users

2. Audience
   - Top referral sources
   - Direct vs organic
   - Device breakdown (mobile/desktop/tablet)
   - Geographic location (cities in ID)
   - User demographics (age, gender if available)

3. Engagement
   - Most viewed pages
   - Time on page
   - Scroll depth on landing
   - CTA click rate
   - Mobile vs desktop conversion
```

### 13.2 Analytics Dashboard Layout

```
┌─────────────────────────────────────────┐
│  CareerFolio Admin Dashboard            │
├─────────────────────────────────────────┤
│                                         │
│  Date Range Picker:  [←  2024-01-01 to 2024-01-31  →]
│  [Export CSV]                           │
│                                         │
├──────────┬──────────┬──────────┬────────┤
│ Orders   │ Revenue  │ Customers│ Pending│
│ 127      │ Rp 45.3M │ 89       │ Rp 5.2M│
├─────────────────────────────────────────┤
│                                         │
│  Revenue Trend (Last 30 Days)          │
│  [Line Chart showing daily revenue]    │
│                                         │
├─────────────────────────────────────────┤
│  Category Distribution    │ Template Top 5       │
│  [Pie Chart]             │ [Bar Chart]          │
│  - Kesehatan: 25%        │ 1. Health Prof: 28   │
│  - Pertanian: 15%        │ 2. Econ Finance: 24  │
│  - Teknik: 20%           │ 3. Law Academy: 20   │
│  - Hukum: 22%            │ 4. Tech Innov: 18    │
│  - Ekonomi: 18%          │ 5. Agro Field: 15    │
│                          │                      │
├─────────────────────────────────────────┤
│  Conversion Funnel                      │
│  Views: 2,847 (100%)                    │
│    ↓ Preview Clicks: 312 (11%)          │
│    ↓ Form Submits: 127 (41%)            │
│    ↓ Payments: 114 (90%)                │
│                                         │
├─────────────────────────────────────────┤
│  Recent Orders                          │
│  [Table with last 10 orders]            │
│                                         │
└─────────────────────────────────────────┘
```

---

## 14. CUSTOMER SUPPORT & FAQ

### 14.1 Support Channels

```
Primary Channel: WhatsApp
- Admin available 8am-10pm (business hours)
- Response time: < 2 hours during business hours
- For urgent: escalation via chat

Secondary Channels (Future):
- Email: support@riyandimhmd.my.id
- Live chat (Phase 2)
- Discord community (Phase 2)

FAQ & Knowledge Base:
- Self-service on website
- Common issues documented
- Video tutorials (future)
```

### 14.2 Frequently Asked Questions (FAQ)

#### About CareerFolio
```
Q1: Apa itu CareerFolio?
A: CareerFolio adalah platform pembuat portofolio profesional yang dirancang khusus untuk mahasiswa dan fresh graduate di Indonesia. Kami menyediakan template yang disesuaikan dengan jurusan Anda (Kesehatan, Pertanian, Teknik, Hukum, Ekonomi) sehingga Anda bisa membuat portofolio premium dalam sekali klik tanpa perlu skill coding.

Q2: Siapa target audience CareerFolio?
A: Mahasiswa aktif (terutama semester akhir) dan fresh graduate non-IT yang ingin membuat portofolio profesional untuk melamar kerja, internship, atau personal branding. Kami fokus di 5 jurusan utama: Kesehatan, Pertanian, Teknik, Hukum/Soshum, dan Ekonomi.

Q3: Apa keunggulan CareerFolio dibanding yang lain?
A: 
- Template spesifik per jurusan (bukan generic)
- Harga terjangkau (Rp 299rb-799rb)
- Proses pemesanan mudah (cukup isi form + pembayaran)
- Support responsif via WhatsApp
- Bisa custom domain untuk personal branding
```

#### Templates & Features
```
Q4: Template mana yang cocok untuk jurusan saya?
A: Kunjungi halaman Katalog (Browse Templates) untuk melihat semua template per kategori jurusan. Setiap template bisa Anda preview langsung sebelum membeli. Pilih yang paling sesuai dengan profil Anda.

Q5: Berapa banyak template yang tersedia?
A: MVP phase 1 kami memiliki 15 template (3 per kategori untuk 5 kategori). Di fase selanjutnya kami akan menambah template lebih banyak berdasarkan feedback.

Q6: Bisa lihat preview template sebelum beli?
A: Tentu! Setiap template memiliki "Live Preview" button yang menampilkan portfolio lengkap dengan mock data. Anda bisa lihat full design dan layout sebelum membayar.

Q7: Apa saja komponen/section di template?
A: Tergantung kategori jurusan Anda:
- KESEHATAN: Rotasi klinis, sertifikasi STR, case logbook, publikasi ilmiah
- PERTANIAN: Fieldwork documentation, analisis data, sertifikasi lingkungan
- TEKNIK: CAD gallery, project specifications, sertifikasi teknis
- HUKUM: Moot court experience, case analysis, legal publications
- EKONOMI: Business metrics, case studies, sertifikasi bisnis

Q8: Bisa customize template sesuai keinginan saya?
A: Template kami dirancang semi-custom. Anda bisa isi data Anda (nama, bio, achievement) melalui form di awal, dan template akan auto-populate. Untuk perubahan design/layout yang lebih besar, bisa request revisi (included dalam paket).

Q9: Apakah template responsive (mobile-friendly)?
A: Ya, semua template kami 100% responsive dan mobile-first. Portfolio Anda akan terlihat bagus di semua device (mobile, tablet, desktop).
```

#### Pricing & Payment
```
Q10: Berapa harga paket CareerFolio?
A:
- Paket Mahasiswa: Rp 299.000 (1x portofolio, 1x revisi, 3 bulan support)
- Paket Fresh Graduate: Rp 499.000 (1x portofolio, 2x revisi, 6 bulan support)
- Paket Custom Domain: Rp 799.000 (1x portofolio, 3x revisi, 1 tahun support, custom domain)
- Revisi tambahan: Rp 99.000/revisi (jika paket habis)

Q11: Ada diskon atau promo?
A: Untuk MVP phase 1, belum ada diskon. Tapi ikuti @careerfolio di socmed untuk update promo dan early bird discount.

Q12: Bagaimana cara pembayaran?
A: Pembayaran via:
- Bank transfer (BCA, Mandiri, BNI) + QR code
- E-wallet (Dana, OVO, GoPay)
- Scan QRIS di app banking Anda
Detail akan diberikan setelah Anda submit order form.

Q13: Apakah pembayaran aman?
A: Ya, pembayaran langsung ke rekening pribadi/bisnis. Semua transaksi via bank/e-wallet resmi, dan SSL encryption for data protection.

Q14: Berapa lama portofolio selesai setelah pembayaran?
A: Estimasi 3-5 hari kerja setelah payment confirmed. Admin akan setup portofolio Anda dan kirim link via WhatsApp.

Q15: Apakah ada biaya hidden/tambahan?
A: Tidak ada biaya hidden. Price yang tertera sudah final. Hanya ada biaya tambahan jika Anda request revisi lebih dari paket (Rp 99k per revisi).
```

#### Ordering & Delivery
```
Q16: Bagaimana proses pemesanan?
A: 
1. Klik "Pesan Sekarang" di template pilihan Anda
2. Isi form data (5-10 menit) sesuai kategori jurusan
3. Submit form → redirect ke halaman pembayaran
4. Hubungi admin via WhatsApp dengan order details
5. Kirim bukti transfer → admin verifikasi
6. Admin setup portofolio & kirim link
7. Portfolio live & siap dibagikan!

Q17: Data apa yang harus saya isiMenyalam form?
A: Tergantung kategori. Umumnya mencakup:
- Nama, email, no HP, universitas, jurusan
- Achievement spesifik (sertifikasi, pengalaman, publikasi)
- Bio singkat & foto profil
Detail pertanyaan akan clear saat Anda isi form.

Q18: Apakah form bisa disimpan dulu dan dilanjutkan nanti?
A: Google Form yang kami gunakan bisa di-save progress. Tapi jika keluar, harus start ulang. Recommend selesaikan dalam 1 session.

Q19: Berapa lama portfolio selesai?
A: Estimasi 3-5 hari kerja setelah payment confirmed. Waktu tergantung:
- Volume pesanan di antrian
- Kompleksitas data yang diisi
- Revisi yang diminta

Q20: Bisa request revisi? Berapa kali?
A: Tergantung paket:
- Paket Mahasiswa: 1x revisi gratis
- Paket Fresh Graduate: 2x revisi gratis
- Paket Custom Domain: 3x revisi gratis
- Revisi tambahan: Rp 99k per revisi

Revisi bisa untuk isi (data, foto, text) atau tata letak minor. Revisi besar (design overhaul) charge separately.

Q21: Bisa update portofolio setelah delivery?
A: Untuk MVP, update manual (Anda contact admin, admin update). Future phases akan ada self-service CMS. Estimasi 2-3 hari untuk update.
```

#### Technical & Features
```
Q22: Bisa pake domain sendiri?
A: Ya! Paket Custom Domain (Rp 799k) includes:
- Setup custom domain (1 tahun)
- SSL certificate
- Email support untuk setup
- Documentation lengkap

Anda sudah punya domain atau mau beli baru? Admin akan guide setup.

Q23: Berapa lama domain setup selesai?
A: Setelah domain Anda sudah registered:
- Admin guide Anda untuk add DNS records
- Propagasi DNS: 24-48 jam
- Portfolio live di custom domain Anda

Q24: Bisa share portfolio ke mana-mana?
A: Ya! Portfolio Anda bisa dibagikan ke:
- LinkedIn profile (direct link di CV)
- WhatsApp, Email, social media
- Portfolio link di signature email
- Rekomendasi ke recruiter

Q25: Apakah portfolio bisa didownload/diedit klien?
A: Portfolio Anda akan delivered sebagai URL (live di web). Untuk MVP, tidak bisa didownload sebagai file. Anda hanya bisa update via admin contact.

Future phase: Akan ada download as PDF feature.

Q26: Berapa lama portofolio aktif/tersimpan?
A: Portfolio Anda aktif selamanya (selama domain aktif). Kami menyimpan backup data Anda minimal 1 tahun.

Q27: Bagaimana dengan keamanan data saya?
A: Semua data Anda dienkripsi (HTTPS), disimpan secure di Google Sheets, dan hanya admin yang akses. Lihat Privacy Policy lengkap untuk detil.
```

#### Support & Issues
```
Q28: Apa jika saya tidak satisfied dengan portfolio?
A: Kami tawarkan solusi:
1. Gratis revisi (sesuai paket)
2. Adjustment data/foto
3. Jika masih tidak satisfied, full refund dalam 7 hari setelah delivery

Q29: Bagaimana cara hubungi customer support?
A: Hubungi admin via WhatsApp. Nomor akan diberikan di halaman pembayaran. Response time < 2 jam (jam kerja).

Q30: Ada garansi atau SLA?
A: Kami guarantee:
- Portfolio delivery dalam 5 hari kerja
- Gratis revisi sesuai paket
- Support 24/7 via WhatsApp
- Bisa refund dalam 7 hari jika tidak satisfied

Q31: Bagaimana refund process?
A: Jika within 7 hari dan tidak satisfied:
1. Email/WhatsApp ke admin dengan alasan
2. Admin review & proses refund
3. Refund dikembalikan ke rekening asli (3-5 hari)
4. Portfolio files tidak dikembalikan
```

#### Privacy & Terms
```
Q32: Bagaimana data saya dilindungi?
A: 
- Semua data encrypted (HTTPS)
- Disimpan di Google Sheets secured
- Hanya admin yang akses
- Data akan dihapus 1 tahun setelah project completion
Lihat Privacy Policy untuk detil lengkap.

Q33: Apakah portfolio saya dipublikasikan?
A: Tidak. Portfolio hanya bisa diakses oleh orang yang punya linknya. Kami tidak publish portfolio di gallery/showcase tanpa permission Anda.

Q34: Bagaimana dengan copyright/ownership?
A: Portfolio yang sudah delivered adalah milik Anda. Anda bisa publish, share, atau gunakan sesuka hati. Kami hanya penyedia platform.

Q35: Apakah ada Terms of Service yang harus saya setuju?
A: Ya, ada Terms & Privacy Policy yang harus Anda accept saat order. Bisa baca di website kami atau request detail.
```

#### Future & Roadmap
```
Q36: Apakah akan ada fitur baru?
A: Yes! Roadmap kami includes:
- Phase 1 (MVP): Template + order + payment (current)
- Phase 2: Self-service admin dashboard, CMS, API
- Phase 3: Company/UMKM templates, affiliate program
- Phase 4: AI-powered portfolio suggestions, mobile app

Q37: Apakah harga akan naik?
A: Mungkin. Current pricing adalah MVP pricing. Seiring pertumbuhan, harga bisa naik. Existing customers akan grandfathered dengan price lama.

Q38: Bagaimana cara stay updated dengan news & promo?
A: Follow socials:
- Instagram: @careerfolio.id
- LinkedIn: CareerFolio
- Newsletter: subscribe di website
- WhatsApp: contact admin untuk add ke update group
```

---

## 15. PRIVACY POLICY & DATA COMPLIANCE

### 15.1 Privacy Policy (Simplified)

```
# CAREERFOLIA PRIVACY POLICY

Effective Date: January 2024

## 1. DATA COLLECTION
Kami mengumpulkan data berikut:
- Personal Information: nama, email, no HP, universitas, jurusan
- Academic Information: sertifikasi, pengalaman, achievement
- Visual Information: foto profil
- Usage Information: template viewed, pages visited
- Technical Information: IP address, device, browser

## 2. DATA USAGE
Data Anda digunakan untuk:
- Setup portofolio sesuai data yang Anda isi
- Communication via WhatsApp/email
- Delivery portfolio
- Analytics & improvement
- Payment processing

Kami TIDAK akan:
- Jual data ke pihak ketiga
- Gunakan data untuk marketing tanpa permission
- Publish portofolio tanpa permission
- Share data ke pihak lain

## 3. DATA STORAGE & RETENTION
- Data disimpan di Google Sheets (Google cloud)
- Enkripsi via HTTPS
- Retention period: 1 tahun setelah project delivery
- Setelah 1 tahun: data dihapus secara permanent
- Backup: disimpan 90 hari, kemudian dihapus

## 4. DATA SECURITY
- All connections HTTPS encrypted
- Admin password protected
- No sharing ke public
- Regular security updates
- Sentry error tracking (no sensitive data logged)

## 5. YOUR RIGHTS
Anda berhak untuk:
- Access data kami simpan tentang Anda
- Request revisi/update data
- Request delete data
- Request export data (CSV format)
- Opt-out dari analytics tracking

## 6. THIRD-PARTY SERVICES
Kami menggunakan:
- Google Forms/Sheets (data storage)
- Google Analytics (traffic tracking)
- Sentry (error tracking)
- Vercel (hosting)
- WhatsApp (communication)

Setiap service punya privacy policy sendiri.

## 7. CONTACT
Jika ada pertanyaan data privacy:
Email: privacy@riyandimhmd.my.id
WhatsApp: [Admin Number]

## 8. CHANGES
Privacy Policy bisa berubah. Akan notify via email jika ada perubahan significant.
```

### 15.2 Terms of Service (Summary)

```
# CAREERFOLIA TERMS OF SERVICE

## 1. ACCEPTANCE
By ordering, Anda setuju dengan terms ini.

## 2. SERVICE DESCRIPTION
CareerFolio menyediakan portfolio template customized sesuai jurusan Anda.

## 3. PAYMENT
- Payment final setelah confirmed transfer
- Non-refundable setelah 7 hari delivery
- Revisi included sesuai paket

## 4. DELIVERY
- Estimated 3-5 hari kerja setelah payment
- Tidak guarantee exact timing
- Delays possible due to volume

## 5. LIABILITY
- We provide "as is" tanpa guarantee
- Max liability: amount Anda bayar
- Kami tidak liable untuk indirect damages
- Anda liable untuk content Anda input

## 6. INTELLECTUAL PROPERTY
- Template design milik CareerFolio
- Portfolio content milik Anda
- Anda bisa share/publish portfolio
- Tidak boleh resell/redistribute template

## 7. USER CONDUCT
Anda tidak boleh:
- Use for illegal purposes
- Plagiarism atau claim false credentials
- Violate 3rd party rights
- Attack/hack website
- Scrape content

## 8. DISCLAIMERS
- Portfolio tidak guarantee job/interview
- Kami tidak liable atas career outcomes
- Anda bertanggung jawab untuk accuracy of data

## 9. CHANGES TO TERMS
CareerFolio bisa update terms. Notify via email jika changes.

## 10. GOVERNING LAW
Terms governed by Indonesian law.

## 11. CONTACT
Jika ada dispute: contact@riyandimhmd.my.id
```

---

## 16. MOCK DATA SAMPLES

### 16.1 KESEHATAN - Template Sample

**Mock Profile Data:**
```json
{
  "nama": "Dr. Sinta Ramadhani, S.Ked",
  "deskripsi": "Dokter umum dengan fokus di medical education dan patient care. Berpengalaman dalam rotasi klinis di berbagai departemen RS terkemuka.",
  "gelar": "Dokter (Dr.), S.Ked",
  "nomor_str": "0001234567890",
  "universitas": "Universitas Indonesia",
  "jurusan": "Pendidikan Dokter",
  "tahun_lulus": "2023",
  
  "rotasi_klinis": [
    {
      "tempat": "RS Cipto Mangunkusumo, Jakarta",
      "departemen": "Bagian Penyakit Dalam",
      "durasi": "3 bulan",
      "supervisor": "Dr. Bambang Sutrisna",
      "achievement": "Menangani 50+ pasien rawat inap, presentasi case study"
    },
    {
      "tempat": "RS Cipto Mangunkusumo, Jakarta",
      "departemen": "Bagian Bedah",
      "durasi": "2 bulan",
      "supervisor": "Dr. Slamet Riyanto",
      "achievement": "Assist 15+ surgical procedures, basic surgical skills"
    },
    {
      "tempat": "PUSKESMAS Senayan, Jakarta",
      "departemen": "Rawat Jalan & Preventif",
      "durasi": "1 bulan",
      "supervisor": "Ns. Lidia Kristina",
      "achievement": "Pelayanan 100+ pasien, health education"
    }
  ],
  
  "sertifikasi": [
    "STR (Surat Tanda Registrasi) No. 0001234567890",
    "BLS (Basic Life Support) - Indonesian Red Cross, valid until 2026",
    "ACLS (Advanced Cardiac Life Support) - American Heart Association",
    "Pelatihan IPA (Imunisasi Pada Anak) - Kemenkes RI"
  ],
  
  "publikasi_ilmiah": [
    {
      "judul": "Faktor-Faktor yang Mempengaruhi Keberhasilan Manajemen Hipertensi di Puskesmas Jakarta",
      "jenis": "Skripsi",
      "tahun": "2023",
      "url": "#"
    }
  ],
  
  "pengalaman_organisasi": [
    {
      "posisi": "Ketua, Ikatan Mahasiswa Kedokteran Indonesia (IMKI)",
      "organisasi": "FK Universitas Indonesia",
      "periode": "2021-2022",
      "deskripsi": "Lead 50+ members, organize 10+ medical seminars"
    },
    {
      "posisi": "Volunteer, Tim Kesehatan Mobile",
      "organisasi": "Rumah Sakit Universitas Indonesia",
      "periode": "2022-2023",
      "deskripsi": "Medical check-up untuk 500+ masyarakat kurang mampu"
    }
  ],
  
  "foto_profil": "https://via.placeholder.com/400x400?text=Dr.+Sinta",
  "bio": "Dokter muda yang passionate tentang patient care excellence dan medical education. Committed untuk continuous learning dan memberikan service terbaik kepada pasien."
}
```

### 16.2 PERTANIAN - Template Sample

**Mock Profile Data:**
```json
{
  "nama": "Budi Hermawan, S.P",
  "deskripsi": "Agroteknologi specialist dengan expertise di sustainable farming dan soil analysis. 2+ tahun pengalaman fieldwork dan research.",
  "gelar": "Sarjana Pertanian (S.P)",
  "universitas": "Institut Pertanian Bogor",
  "jurusan": "Agroteknologi",
  "tahun_lulus": "2022",
  
  "fokus_bidang": "Soil Science & Sustainable Farming",
  
  "fieldwork_experience": [
    {
      "judul": "Analisis Kandungan Hara Tanah untuk Optimalisasi Hasil Panen Padi",
      "lokasi": "Cirebon, Jawa Barat",
      "durasi": "3 bulan",
      "tahun": "2022",
      "deskripsi": "Soil testing, nutrient analysis, yield prediction. Hasil: peningkatan hasil 20%",
      "deliverables": "Report 50 halaman, rekomendasi fertilizer optimization"
    },
    {
      "judul": "Studi Organik Farming untuk Tanaman Hortikultura",
      "lokasi": "Bandung, Jawa Barat",
      "durasi": "2 bulan",
      "tahun": "2022",
      "deskripsi": "Documentation organic farming practices, pest management, cost analysis",
      "deliverables": "Video documentation, best practice guide"
    },
    {
      "judul": "Pengabdian Masyarakat - Pelatihan Pertanian Berkelanjutan",
      "lokasi": "Sukabumi, Jawa Barat",
      "durasi": "1 bulan",
      "tahun": "2023",
      "deskripsi": "Training 50 farmers pada sustainable practices, water management",
      "deliverables": "Training module, farmer feedback"
    }
  ],
  
  "sertifikasi": [
    "Sertifikat Organic Farming - Lembaga Sertifikasi Organik Independen",
    "GIS Training - ESRI Official Partner",
    "Soil Testing Technician - Balai Penelitian Tanah"
  ],
  
  "publikasi": [
    {
      "judul": "Pengaruh Jenis Pupuk Organik Terhadap Produktivitas Lahan Marginal",
      "jenis": "Skripsi",
      "tahun": 2022,
      "link": "#"
    },
    {
      "judul": "Potensi Teknologi Drone untuk Monitoring Pertanian Presisi",
      "jenis": "Jurnal Lokal",
      "tahun": 2023,
      "link": "#"
    }
  ],
  
  "tools_dikuasai": [
    "QGIS (GIS Analysis)",
    "Soil Testing Equipment",
    "Drone Photography",
    "Basic Data Analysis (Excel, R)"
  ],
  
  "pengalaman_organisasi": [
    {
      "posisi": "Coordinator, Student Farming Club",
      "organisasi": "IPB",
      "periode": "2021-2022",
      "deskripsi": "Manage 1 hektar demo farm, organize field trips dan seminars"
    }
  ],
  
  "foto_profil": "https://via.placeholder.com/400x400?text=Budi+Hermawan",
  "bio": "Young agronomist passionate tentang sustainable farming dan food security di Indonesia. Committed untuk bridge gap antara traditional farming dan modern technology."
}
```

### 16.3 TEKNIK - Template Sample

**Mock Profile Data:**
```json
{
  "nama": "Ari Pratama, S.T",
  "deskripsi": "Teknik Sipil graduate dengan expertise dalam structural design dan construction management. Portfolio includes 5+ civil engineering projects.",
  "gelar": "Sarjana Teknik (S.T)",
  "universitas": "Institut Teknologi Bandung",
  "jurusan": "Teknik Sipil",
  "tahun_lulus": "2023",
  
  "spesialisasi": "Structural Design & Construction",
  
  "project_portfolio": [
    {
      "nama": "Residential Building Design - 8 Storey Apartment",
      "lokasi": "Bandung, Jawa Barat",
      "tahun": "2023",
      "peran": "Structural Engineer & Design Lead",
      "deskripsi": "Design apartment 8 lantai, 60 unit. Termasuk structural calculation, SAP2000 analysis, foundation design.",
      "tools": "AutoCAD, SAP2000, ETABS",
      "file_cad": "blueprint_apartment_bandung.dwg",
      "render_3d": "3d_render_apartment.obj",
      "rencana_anggaran": "RAB: Rp 24 miliar",
      "achievement": "Approved oleh Dinas Perizinan, reduced cost 15% through optimization"
    },
    {
      "nama": "Bridge Design - Pedestrian Bridge",
      "lokasi": "Majalaya, Bandung",
      "tahun": "2022",
      "peran": "Bridge Engineer (Intern)",
      "deskripsi": "Design pedestrian bridge span 50m. Load analysis, fatigue design, material selection.",
      "tools": "STAAD Pro, AutoCAD",
      "beban_desain": "Live load 5 kN/m2, seismic category 3",
      "achievement": "Passed peer review, budget Rp 1.2 miliar"
    }
  ],
  
  "sertifikasi_teknis": [
    "MATLAB - Certified User",
    "AutoCAD - Professional Level",
    "K3 (Kesehatan dan Keselamatan Kerja) - BNSP",
    "BIM (Building Information Modeling) - Intermediate"
  ],
  
  "soft_skills": [
    "Project Management",
    "Team Leadership",
    "Technical Presentation",
    "Problem Solving"
  ],
  
  "penelitian": [
    {
      "judul": "Analisis Performa Struktur Beton Bertulang Terhadap Beban Gempa di Jakarta",
      "tahun": 2023,
      "status": "Skripsi - PASSED"
    }
  ],
  
  "pengalaman_magang": [
    {
      "perusahaan": "PT Wika Beton (Konstruksi)",
      "posisi": "Structural Engineer Intern",
      "durasi": "3 bulan",
      "tahun": "2022",
      "deskripsi": "Site supervision, quality control, structural analysis",
      "project": "Shopping mall construction - 5 lantai"
    }
  ],
  
  "foto_profil": "https://via.placeholder.com/400x400?text=Ari+Pratama",
  "bio": "Civil engineer dengan passion untuk structural design excellence dan sustainable construction. Committed untuk safe, economical, dan durable structures."
}
```

### 16.4 HUKUM - Template Sample

**Mock Profile Data:**
```json
{
  "nama": "Ella Kusuma, S.H., M.H",
  "deskripsi": "Hukum Perdata specialist dengan 2+ tahun pengalaman di corporate law dan litigation. Berpengalaman dalam contract drafting dan legal research.",
  "gelar": "Sarjana Hukum (S.H.), Magister Hukum (M.H)",
  "universitas": "Universitas Gadjah Mada",
  "jurusan": "Ilmu Hukum",
  "tahun_lulus": "2021 (S.H), 2023 (M.H)",
  
  "bidang_keahlian": "Corporate Law & Litigation",
  
  "pengalaman_profesional": [
    {
      "posisi": "Lawyer Associate",
      "firma": "Assegaf Hamzah & Partners",
      "periode": "2021-2023",
      "deskripsi": "Corporate law, M&A, contract negotiation. Handled 15+ cases.",
      "klien": "PT Telkom Indonesia, PT Pertamina, dll"
    },
    {
      "posisi": "Legal Intern",
      "organisasi": "Human Rights Watch (Indonesia Office)",
      "periode": "2020",
      "deskripsi": "Legal research, case advocacy, documentation"
    }
  ],
  
  "moot_court_experience": [
    {
      "kompetisi": "National Moot Court Competition",
      "tahun": 2021,
      "peran": "Prosecutor & Oral Advocate",
      "capaian": "Top 4 Finalis",
      "deskripsi": "Composes memorandum, oral argument di court"
    },
    {
      "kompetisi": "Willem C. Vis International Commercial Arbitration Moot",
      "tahun": 2022,
      "peran": "Team Member",
      "capaian": "Participated (international level)",
      "deskripsi": "International commercial arbitration case"
    }
  ],
  
  "publikasi": [
    {
      "judul": "Analisis Legalitas Klausul Batasan Tanggung Jawab dalam Kontrak B2B",
      "jenis": "Jurnal Hukum",
      "tahun": 2023,
      "link": "#"
    },
    {
      "judul": "Perlindungan Hak Asasi Manusia dalam Era Digital",
      "jenis": "Tesis Master",
      "tahun": 2023,
      "link": "#"
    }
  ],
  
  "sertifikasi": [
    "Praktik Hukum (Sertifikat dari Mahkamah Agung)",
    "Advanced Legal Research - Indonesian Legal Research Institute",
    "Contract Drafting Specialist"
  ],
  
  "award_recognition": [
    "Best Legal Writer - Jurnal Hukum Indonesia (2022)",
    "Young Lawyer Award - Indonesian Bar Association (2023)"
  ],
  
  "foto_profil": "https://via.placeholder.com/400x400?text=Ella+Kusuma",
  "bio": "Lawyer muda dengan passion di corporate law dan human rights advocacy. Committed untuk access to justice dan rule of law di Indonesia."
}
```

### 16.5 EKONOMI - Template Sample

**Mock Profile Data:**
```json
{
  "nama": "Muhammad Rizki, S.E., MBA",
  "deskripsi": "Finance & Strategy specialist dengan expertise dalam financial analysis, business development, dan digital transformation. 3+ tahun experience di corporate finance.",
  "gelar": "Sarjana Ekonomi (S.E.), MBA",
  "universitas": "Universitas Kencana / Institut Bisnis Indonesia",
  "jurusan": "Akuntansi / Manajemen",
  "tahun_lulus": "2021 (S.E), 2023 (MBA)",
  
  "core_competencies": [
    "Financial Analysis & Modeling",
    "Business Strategy",
    "Investor Relations",
    "Data Analytics"
  ],
  
  "business_experience": [
    {
      "perusahaan": "PT Fintech Indonesia",
      "posisi": "Finance Manager",
      "durasi": "2021-2023",
      "deskripsi": "Lead finance function, budgeting, financial planning, investor reporting. Manage team 4 people.",
      "achievement": "Increased operational efficiency 25%, cost reduction Rp 500jt"
    },
    {
      "perusahaan": "PT Consulting Bisnis",
      "posisi": "Business Analyst (Intern)",
      "durasi": "2020",
      "deskripsi": "Market research, business model analysis, strategy recommendation untuk 5 SME clients"
    }
  ],
  
  "metrics_achievement": {
    "budget_managed": "Rp 50 miliar (2022-2023)",
    "cost_reduction": "25% operational efficiency improvement",
    "roi_projects": "Avg ROI 18% (portfolio investasi)",
    "revenue_growth": "Led product launch → Rp 2miliar revenue dalam 6 bulan"
  },
  
  "case_studies": [
    {
      "judul": "Transformasi Digital Retailer Tradisional ke Omnichannel",
      "deskripsi": "Strategy development untuk retailer tradisional go digital. Result: online channel menjadi 30% of revenue dalam 1 tahun.",
      "client": "PT Retail Indonesia",
      "status": "Completed"
    },
    {
      "judul": "Financial Planning untuk SME Growth Stage",
      "deskripsi": "5-year financial model, fundraising strategy, valuation analysis. Helped SME raise Rp 10miliar funding.",
      "client": "PT Tech Startup XYZ",
      "status": "Completed"
    }
  ],
  
  "sertifikasi": [
    "Sertifikat Brevet Pajak A & B",
    "Google Analytics Certified",
    "CFA Level 1",
    "Project Management Professional (PMP) - in progress"
  ],
  
  "keahlian_tools": [
    "Advanced Excel & VBA",
    "Financial Modeling (DCF, Valuation)",
    "Business Intelligence Tools (Tableau, Power BI)",
    "Statistical Analysis (Python, R)",
    "Database Management (SQL)"
  ],
  
  "penghargaan": [
    "Best Young Entrepreneur - Kompas 100 (2023)",
    "Finance Excellence Award - PT Fintech Indonesia (2023)",
    "Top Performer - Investment Committee (2022)"
  ],
  
  "foto_profil": "https://via.placeholder.com/400x400?text=Muhammad+Rizki",
  "bio": "Finance & business strategist dengan passion dalam value creation dan sustainable growth. Driven untuk combine financial rigor dengan business innovation."
}
```

---

## 17. DEPLOYMENT & INFRASTRUCTURE

### 17.1 Hosting Architecture

```
Frontend Hosting: Vercel
├─ Primary Domain: careerfolio.riyandimhmd.my.id
├─ CDN: Vercel Edge Network (Global)
├─ Automatic HTTPS: Let's Encrypt (renewed auto)
├─ Performance: < 100ms response from user
├─ Uptime SLA: 99.95%
├─ Automatic scaling: based on traffic
└─ CI/CD: GitHub → Vercel auto-deploy

DNS Provider: Current registrar (riyandimhmd.my.id registrar)
├─ A Record: careerfolio.riyandimhmd.my.id → Vercel nameservers
├─ CNAME: Optional subdomain routing
└─ MX Records: If email needed

Database/Data Storage:
├─ Primary: Google Sheets (via Forms/Sheets API)
├─ Backup: GitHub repository (code + occasional data exports)
├─ Analytics: Google Analytics 4
└─ Monitoring: Sentry + UptimeRobot

User-facing domains (future):
├─ Client portfolios: subdomain.careerfolio.riyandimhmd.my.id
│  (or custom domain if Paket Custom Domain)
└─ Admin dashboard: /admin/careerfolio.riyandimhmd.my.id
```

### 17.2 Deployment Process

#### Development Workflow
```
1. Local Development
   - Clone repo dari GitHub
   - npm install
   - npm run dev (localhost:5173)
   - Make changes & test locally
   
2. Commit & Push
   - git add .
   - git commit -m "Feature: xyz"
   - git push origin main
   
3. GitHub Actions (future)
   - Automated testing runs
   - Build output checked
   - Performance metrics
   
4. Auto Deploy to Vercel
   - Detect push to main
   - Build production
   - Deploy to careerfolio.riyandimhmd.my.id
   - DNS resolves automatically
   - Automatic rollback jika error
   
5. Staging Preview (future)
   - Every PR mendapat unique URL
   - staging-careerfolio.riyandimhmd.my.id
   - Review sebelum merge
```

#### Manual Deployment
```
If need manual deploy:
1. Vercel CLI install: npm i -g vercel
2. Login: vercel login
3. Deploy: vercel --prod
4. Wait for build completion
5. Check deployment URL
```

### 17.3 Environment Variables

**Development (.env.local)**
```bash
# API Keys
REACT_APP_GOOGLE_FORMS_API_KEY=xxx
REACT_APP_GOOGLE_SHEETS_API_KEY=xxx
REACT_APP_SENTRY_DSN=xxx
REACT_APP_GTAG_ID=G-XXXXXXXX

# Admin Config
REACT_APP_ADMIN_PHONE=62XXXXXXXXXX
REACT_APP_ADMIN_EMAIL=admin@example.com

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_SENTRY=true
REACT_APP_ENABLE_ADMIN=true

# URLs
REACT_APP_GOOGLE_FORM_KESEHATAN=https://forms.gle/xxx
REACT_APP_GOOGLE_FORM_PERTANIAN=https://forms.gle/xxx
# etc...
```

**Production (.env.production)**
- Same as above, but with production API keys
- Should never be committed to git
- Stored in Vercel dashboard
- Vercel automatically injects during build

### 17.4 Monitoring & Alerts

#### Error Tracking (Sentry)
```
Setup:
1. Create Sentry account (sentry.io)
2. Create new project → React
3. Copy DSN → REACT_APP_SENTRY_DSN
4. Sentry.init() in main.jsx
5. All errors auto-report

Alerts configured:
- Critical errors → Email immediately
- Performance issues > 5s load time
- Release tracking
- User feedback collection
```

#### Uptime Monitoring (UptimeRobot)
```
Setup:
1. Create UptimeRobot account
2. Add monitor:
   - URL: https://careerfolio.riyandimhmd.my.id
   - Check interval: 5 minutes
   - Timeout: 30 seconds
   - Allowed status codes: 200-299
3. Alert method: Email
4. Escalation: SMS if critical

Dashboard:
- Real-time status
- Uptime percentage
- Response time graph
- Alert history
```

#### Performance Monitoring (Vercel Analytics + Core Web Vitals)
```
Metrics tracked:
- FCP (First Contentful Paint) - should be < 1.2s
- LCP (Largest Contentful Paint) - should be < 2.5s
- CLS (Cumulative Layout Shift) - should be < 0.1
- TTFB (Time to First Byte) - should be < 600ms

View in:
- Vercel dashboard (careerfolio.riyandimhmd.my.id analytics)
- Google Analytics
- Sentry performance monitoring
```

### 17.5 Backup & Disaster Recovery

#### Backup Strategy
```
Daily:
- Google Forms → auto-backup to Google Sheets
- Google Sheets → manual export to CSV (scheduled via Google Apps Script)
- CSV files → upload to GitHub /backups folder
- GitHub repo → cloud-backed by GitHub

Weekly:
- Full Sheets export → drive:// private storage
- Code review & tag release version in GitHub

Monthly:
- Comprehensive backup report
- Data integrity check
- Restore testing (verify backups work)

Retention:
- Daily backups: 7 days
- Weekly backups: 30 days
- Monthly backups: 1 year
```

#### Disaster Recovery Procedures
```
Scenario 1: Database (Google Sheets) Loss
- Restore from previous day's CSV backup
- Update orders & payment tracking
- Estimated recovery time: 2-4 hours
- Data loss: max 1 day

Scenario 2: Code/Repository Loss
- Restore from GitHub (all commits preserved)
- Redeploy from backup tag
- Recovery time: 1 hour
- Zero data loss

Scenario 3: Vercel Outage
- Manual re-deploy to alternate host
- Or use GitHub Pages static version
- Recovery time: 4-8 hours
- Backup domain ready

Scenario 4: Domain/DNS Issue
- Contact registrar for recovery
- Temporary IP access via /etc/hosts
- Recovery time: 1-24 hours depending on provider

Recovery Point Objective (RPO): 1 day max
Recovery Time Objective (RTO): 4-8 hours for critical services
```

---

## 18. TESTING STRATEGY

### 18.1 Testing Pyramid

```
                    △
                  End-to-End (10%)
                   Testing (Manual)
                 /              \
               /  Integration  \
             / Tests (30%) (API, \
           /  Forms, Analytics)  \
         /________________________\
        Unit Tests (60%)
        (Components, Utils, Hooks)
```

### 18.2 Unit Testing

**Framework**: Jest + React Testing Library

```javascript
// Example: components/__tests__/Button.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

**Coverage Goals**: > 80% for critical components

```
- Landing components: 90%
- Catalog components: 85%
- Form components: 95% (critical)
- Admin dashboard: 70%
- Utils/Hooks: 90%
```

### 18.3 Integration Testing

**Framework**: Cypress (E2E simulation) / Testing Library

```javascript
// Example: __tests__/ordering.integration.test.js
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Ordering Flow', () => {
  test('user can browse templates and click preview', async () => {
    render(<App />);
    
    // Navigate to catalog
    const catalogBtn = screen.getByText('Browse Templates');
    await userEvent.click(catalogBtn);
    
    // Select category
    const healthBtn = screen.getByText('Kesehatan');
    await userEvent.click(healthBtn);
    
    // Click preview
    const previewBtn = screen.getAllByText('Live Preview')[0];
    await userEvent.click(previewBtn);
    
    // Verify preview loads
    await waitFor(() => {
      expect(screen.getByText(/Dr\./)).toBeInTheDocument();
    });
  });

  test('user can submit order form and get success message', async () => {
    // Similar test for full ordering flow
  });
});
```

**Coverage**: Key user journeys

```
- Landing → Catalog → Preview → Order
- Category filtering
- Template search
- Admin login → Dashboard
- Order status tracking
```

### 18.4 E2E Testing

**Framework**: Cypress / Playwright

```javascript
// Example: cypress/e2e/ordering.cy.js
describe('CareerFolio E2E - Ordering Flow', () => {
  beforeEach(() => {
    cy.visit('https://careerfolio.riyandimhmd.my.id');
  });

  it('should complete full ordering flow', () => {
    // Landing page
    cy.get('h1').should('contain', 'CareerFolio');
    cy.get('[data-testid="browse-btn"]').click();
    
    // Catalog page
    cy.url().should('include', '/catalog');
    cy.get('[data-category="kesehatan"]').click();
    cy.get('[data-template-id]').first().within(() => {
      cy.get('[data-testid="preview-btn"]').click();
    });
    
    // Preview page
    cy.url().should('include', '/preview/');
    cy.get('[data-testid="use-template-btn"]').click();
    
    // Redirect to Google Form (can't test beyond this)
    cy.url().should('include', 'forms.google.com');
  });

  it('should show error on form validation', () => {
    cy.visit('https://careerfolio.riyandimhmd.my.id/order');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });
});
```

### 18.5 Performance Testing

**Tools**: Lighthouse, WebPageTest

```
Performance Budget:
- FCP (First Contentful Paint): < 1.2s
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- TTI (Time to Interactive): < 3.5s
- JavaScript size: < 150KB (gzipped)
- Total page size: < 500KB

CI/CD Check:
- Lighthouse score > 90
- Core Web Vitals pass
- Bundle size < 200KB
```

### 18.6 Testing Checklist (Before Production)

```
Unit Tests:
☐ All components have >80% coverage
☐ All utils functions tested
☐ All custom hooks tested
☐ Edge cases covered

Integration Tests:
☐ Full ordering flow works
☐ Form validation works
☐ WhatsApp link generation correct
☐ Google Analytics tracking fires
☐ Sentry error handling works

E2E Tests (Manual):
☐ Landing page responsive (mobile/tablet/desktop)
☐ Catalog page filtering works
☐ Preview page renders correctly
☐ Admin dashboard loads
☐ Mobile touch responsiveness
☐ Accessibility (keyboard nav, screen reader)

Performance:
☐ FCP < 1.2s
☐ LCP < 2.5s
☐ CLS < 0.1
☐ Lighthouse score > 90
☐ Bundle size optimal

Security:
☐ No console errors
☐ No hardcoded secrets
☐ API keys in env only
☐ Admin auth token secure
☐ HTTPS everywhere

Cross-browser:
☐ Chrome / Chromium
☐ Safari
☐ Firefox
☐ Edge

Devices:
☐ iPhone 12 / 14
☐ iPad Air
☐ Android (Samsung S21)
☐ Desktop (macOS, Windows)

Content:
☐ Typos checked
☐ Images optimized
☐ Videos playable
☐ Links working
☐ Forms functional
```

---

## 19. TIMELINE & MILESTONES

### 19.1 Project Phases

```
PHASE 1: MVP (4-6 weeks)
├─ Week 1: Project setup + Component library
├─ Week 2-3: Landing page + Catalog pages
├─ Week 4: Preview system + Order integration
├─ Week 5: Admin dashboard (basic)
├─ Week 6: Testing + Bug fixes + Launch
└─ Deliverable: Fully functional MVP at careerfolio.riyandimhmd.my.id

PHASE 2: Enhancement (Weeks 7-12)
├─ Admin CMS for template management
├─ Self-service customer dashboard
├─ Email notification system
├─ Advanced analytics & reporting
├─ Payment gateway integration (Midtrans)
└─ Deliverable: Production-ready with full admin features

PHASE 3: Scale (Weeks 13-24)
├─ Company/UMKM template category
├─ Affiliate/referral program
├─ Mobile app (React Native)
├─ API & developer docs
├─ B2B licensing
└─ Deliverable: Multi-sided platform

PHASE 4: Growth (Months 7+)
├─ White-label solution
├─ AI-powered portfolio suggestions
├─ International expansion (English)
├─ Premium subscription features
└─ Deliverable: Mature SaaS platform
```

### 19.2 Detailed MVP Timeline (Phase 1)

#### Week 1: Foundation
```
Days 1-2: Project Setup
- ✓ Git repository setup
- ✓ Vite + React configuration
- ✓ Tailwind CSS + component library setup
- ✓ Environment variables
- ✓ GitHub Actions CI/CD (basic)

Days 3-5: Component Library
- ✓ Design system tokens (colors, typography, spacing)
- ✓ Base components (Button, Card, Input, Modal, etc)
- ✓ Layout components (Header, Footer, Navigation)
- ✓ Storybook setup (component documentation)
- ✓ Unit tests for base components

Deliverable: Reusable component library
```

#### Week 2: Landing Page
```
Day 1: Landing Page Structure
- ✓ Hero section
- ✓ Problem-solution section
- ✓ Features showcase
- ✓ Category cards

Days 2-3: Catalog Pages
- ✓ Catalog page layout
- ✓ Template grid
- ✓ Category filtering
- ✓ Search functionality
- ✓ Sorting options

Days 4-5: SEO & Content
- ✓ Meta tags optimization
- ✓ Open Graph tags
- ✓ Content writing (landing page copy)
- ✓ FAQ content
- ✓ Image optimization

Deliverable: Fully functional landing + catalog pages
```

#### Week 3: Preview & Order System
```
Day 1: Preview Page
- ✓ Template preview layout
- ✓ Sticky navigation bar
- ✓ Render template with mock data
- ✓ Anti-copy paste measures
- ✓ Mobile responsiveness

Days 2-3: Order Integration
- ✓ Google Forms API setup
- ✓ Form field mapping per category
- ✓ Success page after form submission
- ✓ WhatsApp link generation

Days 4-5: Payment Integration
- ✓ Payment instruction page
- ✓ QR code display
- ✓ Payment terms & conditions
- ✓ Tracking spreadsheet setup

Deliverable: Complete customer journey (view → order → payment)
```

#### Week 4: Admin Dashboard
```
Day 1: Admin Auth
- ✓ Admin login page
- ✓ Session management
- ✓ Protected routes

Days 2-3: Orders Management
- ✓ Orders list view
- ✓ Order detail view
- ✓ Status update functionality
- ✓ Search & filter

Days 4-5: Analytics
- ✓ Basic metrics display
- ✓ Template popularity chart
- ✓ Revenue tracking
- ✓ Conversion funnel

Deliverable: Admin dashboard with order + analytics
```

#### Week 5: Testing & Polish
```
Day 1: Unit Tests
- ✓ Component tests (80%+ coverage)
- ✓ Utility function tests
- ✓ Hook tests

Days 2-3: Integration Tests
- ✓ Ordering flow test
- ✓ Form validation test
- ✓ Analytics tracking test

Day 4: Cross-browser Testing
- ✓ Chrome, Safari, Firefox, Edge
- ✓ Mobile browsers
- ✓ Responsive design check

Day 5: Bug Fixes & Performance
- ✓ Bundle size optimization
- ✓ Image optimization
- ✓ Code splitting
- ✓ Performance audit

Deliverable: Production-ready code with 80%+ test coverage
```

#### Week 6: Launch Preparation
```
Day 1: Deployment Setup
- ✓ Vercel configuration
- ✓ Domain setup (careerfolio.riyandimhmd.my.id)
- ✓ SSL certificate
- ✓ DNS configuration

Days 2-3: Monitoring Setup
- ✓ Sentry error tracking
- ✓ UptimeRobot monitoring
- ✓ Google Analytics 4
- ✓ Alert configuration

Day 4: Documentation
- ✓ README (installation, development)
- ✓ Deployment guide
- ✓ API documentation
- ✓ Admin guide

Day 5: Beta Testing & Launch
- ✓ Internal testing
- ✓ Early user testing (friends/colleagues)
- ✓ Production deploy
- ✓ Go-live monitoring

Deliverable: CareerFolio MVP Live! 🚀
```

### 19.3 Key Dates

```
Project Start: January 2024
MVP Launch Target: Mid February 2024

Milestones:
- Feb 15: MVP Launch
- Feb 28: First 50 users
- Mar 31: 200+ users
- Jun 30: 500+ users & Rp 150M revenue (year 1 target)
```

---

## 20. GO-TO-MARKET STRATEGY

### 20.1 Pre-Launch (Week 1-2)

```
Community Building:
- Create Instagram account: @careerfolio.id
- Create LinkedIn page: CareerFolio
- Create Twitter/X: @CareerFolioID
- Join relevant Discord/Telegram groups (student communities)
- Teaser content:
  - "Buat portfolio profesional dalam sekali klik"
  - Problem statement: "Mahasiswa kesulitan bikin portfolio"
  - Show template previews

Email Setup:
- Create support email: support@careerfolio.id
- Create privacy email: privacy@careerfolio.id
- Newsletter signup form on landing page

Influencer Outreach (optional):
- Reach out to career coaches
- Reach out to career bloggers
- Free template access for review
```

### 20.2 Launch Phase (Week 2-4)

```
Content Marketing:
- Blog post: "5 Tips Membuat Portfolio yang Menarik Recruiter"
- Blog post: "Template Portfolio Terbaik untuk Jurusan Kesehatan"
- Blog posts per category (5 total)
- Social media posts: 3x/week

Community Engagement:
- Post di komunitas mahasiswa (Reddit r/Indonesia, Twitter, Discord)
- Answer questions di grup Facebook kampus
- Engage dengan konten career-related
- Encourage early users to share

Paid Acquisition (optional if budget):
- Facebook/Instagram ads targeting students (18-25)
- Google Search ads (low volume, high intent)
- LinkedIn ads targeting fresh graduates

Partnership Outreach:
- Contact career centers di universitas besar
- Reach out to alumni groups
- Propose revenue share with campus influencers
- Partner dengan platform student job (Like Glints, Jenius, etc)
```

### 20.3 Growth Phase (Month 2-3)

```
Organic Growth:
- SEO optimization (target: portfolio mahasiswa, buat portfolio, dll)
- Backlink building (guest posts di blog career-related)
- YouTube videos (template walkthroughs, customer testimonials)
- TikTok content (short portfolio tips, before-after)

Referral Program:
- Incentive: Jika refer friend → Rp 50k discount both
- Landing page for referral sign-up
- Unique referral codes

Customer Advocacy:
- Testimonial video collection
- Case studies per category
- LinkedIn posts dari satisfied customers
- Alumni network activation

PR & Media:
- Press release di tech/startup media
- Interview requests dari founder
- Feature dalam educational platforms
- Podcast appearances

Email Marketing:
- Welcome series untuk new subscribers
- Newsletter with portfolio tips
- Case study sends
- Promotion email (new templates, features)
```

### 20.4 Retention & Expansion

```
Customer Success:
- Welcome call/message untuk first-time customers
- Follow-up after portfolio delivery
- Satisfaction surveys
- NPS tracking (Net Promoter Score target: >70)

Community Building:
- Discord server untuk CareerFolio users
- Monthly webinar: Portfolio tips & trends
- User-generated content showcase
- Ambassador program (top referrers)

Product Roadmap Communication:
- Share upcoming features publicly
- Ask users untuk feedback & feature requests
- Celebrate milestones dengan users
- Share success stories

Cross-selling:
- Resume review service (future)
- Interview prep coaching (future)
- LinkedIn optimization (future)
- Career counseling (future)
```

### 20.5 Marketing Budget (Rough Estimate)

```
Phase 1 (MVP - 6 weeks): Rp 0
- All organic/DIY
- Use free tools (Canva, Buffer, etc)

Phase 2 (Early Growth - 12 weeks): Rp 5-10M
- Paid ads: Rp 3-5M
- Content creation tools: Rp 1M
- Domain + tools: Rp 1-2M
- Influencer seeding: Rp 1M

Phase 3 (Scale - 12 weeks): Rp 15-30M
- Paid ads: Rp 10-15M
- Content production: Rp 3-5M
- Team hiring: Rp 2-5M
- PR & partnerships: Rp 1-3M

Total Year 1: Rp 20-50M budget
Expected ROI: 3-5x (from Rp 150M+ revenue)
```

---

## 21. RISK ASSESSMENT & MITIGATION

### 21.1 Market Risks

```
Risk 1: Low Market Demand
- Impact: High (could fail the business)
- Probability: Medium
- Mitigation:
  ✓ Validate with target users before launch
  ✓ Start with 1-2 categories first
  ✓ Get early adopter feedback
  ✓ Be ready to pivot

Risk 2: Strong Competition
- Impact: Medium (pricing pressure)
- Probability: High
- Mitigation:
  ✓ Focus on niche (academic-specific)
  ✓ Superior UX & support
  ✓ Build community & brand loyalty
  ✓ Continuous innovation

Risk 3: Changing Educational Trends
- Impact: Medium (portfolio importance)
- Probability: Low
- Mitigation:
  ✓ Stay connected with career centers
  ✓ Regular market research
  ✓ Adapt templates to new formats
```

### 21.2 Technical Risks

```
Risk 1: Google Forms API Changes
- Impact: Medium (data ingestion breaks)
- Probability: Low
- Mitigation:
  ✓ Have alternative: Tally.so (already identified)
  ✓ Keep documentation of API
  ✓ Monitor Google deprecations
  ✓ Plan migration 6 months ahead

Risk 2: Vercel Outage
- Impact: High (customers can't access)
- Probability: Very Low (<1%)
- Mitigation:
  ✓ Use Vercel's redundancy & SLA
  ✓ Have static backup site ready
  ✓ GitHub pages fallback
  ✓ Regular DNS monitoring

Risk 3: Security Breach / Data Leak
- Impact: Critical
- Probability: Low
- Mitigation:
  ✓ HTTPS encryption (auto)
  ✓ Regular security audits
  ✓ Privacy policy & data protection
  ✓ Cyber insurance (future)
  ✓ Incident response plan
```

### 21.3 Operational Risks

```
Risk 1: High Customer Support Volume
- Impact: Medium (operational overhead)
- Probability: High (if successful)
- Mitigation:
  ✓ Comprehensive FAQ
  ✓ Self-service knowledge base
  ✓ Automation (chatbot future)
  ✓ Hire support team when reach 100+ monthly orders

Risk 2: Portfolio Quality Issues
- Impact: High (reputation damage)
- Probability: Medium
- Mitigation:
  ✓ Quality assurance process
  ✓ Template testing before delivery
  ✓ Customer satisfaction surveys
  ✓ Revision process (included in packages)

Risk 3: Payment/Revenue Issues
- Impact: High
- Probability: Low
- Mitigation:
  ✓ Clear payment terms
  ✓ Multiple payment methods (QRIS, e-wallet, bank)
  ✓ Payment verification process
  ✓ Reconciliation tracking
  ✓ Plan payment gateway upgrade (Midtrans Phase 2)
```

### 21.4 Financial Risks

```
Risk 1: Lower Than Projected Revenue
- Impact: High
- Probability: Medium
- Mitigation:
  ✓ Conservative projections
  ✓ Multiple revenue streams (future: add-ons, subscriptions)
  ✓ Cost control from day 1
  ✓ Quick pivot if needed

Risk 2: Operating Costs Higher Than Expected
- Impact: Medium
- Probability: Low
- Mitigation:
  ✓ Use free/cheap tools (Vercel, Google, GitHub)
  ✓ Automate manual processes
  ✓ Scale team gradually
  ✓ Monitor costs weekly

Risk 3: Cash Flow Issues (paying before revenue)
- Impact: Medium
- Probability: Low
- Mitigation:
  ✓ Upfront payment from customers
  ✓ Monthly revenue tracking
  ✓ Emergency fund (3 months operating costs)
  ✓ Be bootstrapped (founder capital)
```

### 21.5 Risk Matrix

```
┌──────────────────────────────────────┐
│         RISK PROBABILITY              │
├──────────────────────────────────────┤
│ HIGH    │ Competition  Payment Issue  │
│         │ Support Load      [Monitor] │
│ MEDIUM  │ Low Demand  Data Loss Costs │
│         │             [Mitigate]      │
│ LOW     │ Vercel Out Security Breach │
│         │ API Changes [Plan Ahead]   │
└──────────────────────────────────────┘
           LOW     MEDIUM    HIGH
           Impact Level
```

---

## 22. SUCCESS METRICS & KPIs

### 22.1 Business Metrics (Monthly)

```
Primary KPIs:
1. Revenue
   - Target Month 1: Rp 5M
   - Target Month 6: Rp 25M
   - Target Year 1: Rp 150M
   
2. Customer Count
   - Target Month 1: 15 customers
   - Target Month 6: 200 customers
   - Target Year 1: 500+ customers
   
3. Order Count
   - Target Month 1: 15 orders
   - Target Month 6: 200 orders
   - Target Year 1: 500+ orders

Secondary KPIs:
4. Average Order Value (AOV)
   - Target: Rp 450k (blended across packages)
   - Paket Mahasiswa: 40% of orders
   - Paket Fresh Graduate: 45% of orders
   - Paket Custom Domain: 15% of orders

5. Customer Acquisition Cost (CAC)
   - Target: < Rp 100k per customer
   - Phase 1 (organic): Rp 0
   - Phase 2 (with ads): Rp 50-100k

6. Customer Lifetime Value (LTV)
   - Target: Rp 2-3M per customer
   - LTV:CAC ratio target: > 10x

7. Repeat Customer Rate
   - Target Month 12: 5-10% repeat orders (revisions, referrals)

8. Payment Success Rate
   - Target: 90%+ (of form submissions become paid orders)
```

### 22.2 Product Metrics (Monthly)

```
Traffic Metrics:
1. Website Traffic
   - Target Month 1: 500 unique visitors
   - Target Month 6: 5,000 unique visitors
   - Target Year 1: 20,000+ unique visitors

2. Page Views
   - Target: 2-3x unique visitors (avg 2.5 pages per session)

3. Landing Page Conversion
   - Target: 5-10% of visitors → catalog page

4. Catalog Conversion
   - Target: 10-15% of catalog visitors → preview click

5. Preview Conversion
   - Target: 30-40% of preview viewers → order form submit

6. Order Form Completion
   - Target: 90%+ of form starters → form submit
   - Form abandonment rate: < 10%

7. Payment Conversion (Form → Paid)
   - Target: 85-90% of form submissions → paid orders
   - Pending payments follow-up rate: 100%

Template Performance:
8. Template Views
   - Target: 100+ views per template per month
   - Top template: 300+ views/month
   - Bottom template: 50+ views/month

9. Template Orders
   - Target: 20+ orders per template per month
   - Balanced across categories (not concentrated)
   - Conversion rate: 10-20% (views → orders)

10. Category Breakdown
    - Target: Even distribution (15-25% each)
    - Monitor for overperforming/underperforming categories
```

### 22.3 Customer Metrics (Monthly)

```
Satisfaction:
1. Net Promoter Score (NPS)
   - Target: > 70 (excellent)
   - Survey: post-delivery feedback
   - Calculate: % Promoters - % Detractors

2. Customer Satisfaction Score (CSAT)
   - Target: > 90%
   - Question: "How satisfied are you with your portfolio?"
   - Scale: 1-5

3. Support Response Time
   - Target: < 2 hours (business hours)
   - First response time tracked

4. Refund/Complaint Rate
   - Target: < 5% of orders
   - Monitor reasons for complaints

Customer Retention:
5. Repeat Customer Rate
   - Target: 5-10% by year 1
   - Tracked: customers with multiple orders

6. Customer Support Requests
   - Target: < 1 request per 10 customers
   - Common requests tracked for product improvement

7. Churn Rate
   - Target: < 10% annual churn
   - Monitor: customers who request refund/delete
```

### 22.4 Operational Metrics (Daily/Weekly)

```
Performance:
1. Website Uptime
   - Target: 99.9% (< 50 min downtime/month)
   - Monitored by UptimeRobot

2. Page Load Speed
   - Target: FCP < 1.2s
   - Monitored by Vercel Analytics

3. Error Rate
   - Target: < 0.1% of requests
   - Monitored by Sentry

Operational:
4. Order Processing Time
   - Target: 3-5 days (from payment to delivery)
   - Tracked: order date → delivery date

5. Template Quality Issues
   - Target: < 2% of deliveries have issues
   - Tracked: revision requests per order

6. Data Backup Status
   - Target: 100% (daily)
   - Verified: weekly restore tests

7. Admin Time Spent Per Order
   - Target: 30-45 minutes per order
   - Includes: communication + setup + delivery

8. Chat Response Volume
   - Target: Respond within 2 hours
   - Tracked: response time per message
```

### 22.5 Dashboard Example

```
┌─────────────────────────────────────────────────┐
│  CareerFolio KPI Dashboard - [Month View]       │
├─────────────────────────────────────────────────┤
│                                                 │
│  Revenue Target: Rp 25M    Actual: Rp 18M  ▓▓  │
│  Orders Target: 50         Actual: 38      ▓▓  │
│  Customers Target: 50      Actual: 38      ▓▓  │
│  Website Traffic Target: 5k Unique Visitors    │
│                  Actual: 4.2k            ▓▓    │
│                                                 │
│  Metrics By Category:                           │
│  ├─ Kesehatan: 25% (10 orders)                 │
│  ├─ Pertanian: 18% (7 orders)                  │
│  ├─ Teknik: 24% (9 orders)                     │
│  ├─ Hukum: 20% (8 orders)                      │
│  └─ Ekonomi: 13% (5 orders)                    │
│                                                 │
│  Conversion Funnel:                             │
│  Views: 4,200 (100%)                            │
│    ↓ Preview Clicks: 630 (15%)                  │
│    ↓ Form Submits: 189 (30%)                    │
│    ↓ Paid Orders: 38 (20%)                      │
│                                                 │
│  Customer Metrics:                              │
│  ├─ NPS Score: 72 (Excellent)                  │
│  ├─ CSAT: 92% (Very Satisfied)                 │
│  ├─ Uptime: 99.95%                             │
│  ├─ Avg Order Value: Rp 420k                   │
│  └─ Support Requests: 2 (0.05% of orders)      │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 22.6 Success Definition

**CareerFolio MVP is successful when:**

```
✓ Minimum 300+ customers by end of Year 1
✓ Minimum Rp 150M+ annual revenue
✓ NPS score > 70 (Excellent)
✓ 90%+ payment success rate
✓ < 5% refund/complaint rate
✓ 99.9%+ uptime
✓ Average order processing < 5 days
✓ Support response < 2 hours
✓ Clear path to profitability
✓ Positive feedback from early adopters
✓ Organic growth rate > paid acquisition
✓ Strong brand recognition in target market
```

---

## 23. FUTURE ROADMAP (PHASE 2+)

### 23.1 Phase 2: Enhancement & Monetization

**Timeline**: Months 7-12

```
Features:
✓ Admin CMS Dashboard (template management)
✓ Customer self-service dashboard
✓ Email notification system
✓ Payment gateway integration (Midtrans / Stripe)
✓ Advanced analytics & reporting
✓ Portfolio download as PDF
✓ Customer data export
✓ Support ticketing system
✓ Knowledge base / Help documentation

Monetization:
✓ Payment gateway setup (accept all payment methods)
✓ Premium add-ons:
  - Unlimited revisions: Rp 499k/year
  - Portfolio redesign: Rp 399k
  - Priority support: Rp 149k/month
✓ Affiliate program (domain registrars, LinkedIn premium)
✓ B2B partnerships (university career centers)

Marketing:
✓ Content marketing (blog, YouTube, TikTok)
✓ Influencer partnerships
✓ PR & media coverage
✓ Community building (Discord, forum)
✓ Ambassador program

Operations:
✓ Hire first customer support person
✓ Formalize privacy & terms
✓ Set up business entity (if not already)
✓ Accounting & tax setup
```

### 23.2 Phase 3: Company & UMKM Templates

**Timeline**: Months 13-18

```
New Template Category:
✓ Company Portfolio Template
  - Perusahaan info, team showcase
  - Case studies, client logos
  - Service/product listing
  - Team member directories
  
✓ UMKM / Personal Business Portfolio
  - Product showcase
  - Business metrics
  - Customer testimonials
  - Contact & e-commerce integration

Target Audience:
✓ Startup founders
✓ UMKM owners
✓ Freelancers / Consultants
✓ Creative professionals

Pricing:
✓ Paket Bisnis: Rp 799k
✓ Paket Enterprise: Rp 1.5M
✓ Paket Premium Features: Rp 299k/month

Integrations:
✓ Shopify integration (e-commerce)
✓ Email capture (Mailchimp)
✓ Social media feeds integration
✓ Analytics dashboard (Google Analytics)
```

### 23.3 Phase 4: Platform Expansion

**Timeline**: Months 19-24

```
Features:
✓ Mobile App (iOS & Android)
✓ Headless CMS (Contentful / Strapi)
✓ API for developer ecosystem
✓ White-label solution
✓ Internationalization (English, etc)
✓ AI-powered portfolio recommendations
✓ Automated content suggestions
✓ Portfolio comparison tool

Ecosystem:
✓ Marketplace: freelancers, designers for custom work
✓ Training: portfolio optimization courses
✓ Partner network: career coaches, recruiters
✓ Corporate packages: university licenses

Monetization:
✓ SaaS subscription model
✓ Marketplace commissions
✓ Training revenue
✓ White-label licensing
✓ API usage fees

Geographic Expansion:
✓ Other SE Asian countries (Malaysia, Philippines)
✓ South Asian markets (India, Bangladesh)
✓ Target: 50k+ users across region
```

### 23.4 Long-term Vision (Year 2+)

```
CareerFolio becomes:
→ "The LinkedIn of personal portfolios"
→ Default platform untuk portfolio di Indonesia
→ Integrated with major job platforms (Glints, LinkedIn, Indeed)
→ Go-to solution for resume → portfolio conversion
→ IPO target: 5-10 tahun

Expansion:
→ 100k+ monthly active users
→ Rp 5B+ annual revenue
→ 50+ team members
→ International offices (Singapore, Malaysia)
→ Institutional investors (VC funding)

Features:
→ AI portfolio optimizer
→ Real-time recruiter matching
→ Portfolio-to-CV automation
→ Video portfolio generation
→ Virtual interview platform
→ Career development coaching
→ Job marketplace integration
```

---

## APPENDIX

### A. Glossary of Terms

```
MVP: Minimum Viable Product (basic version to test market)
PRD: Product Requirement Document
SRS: Software Requirement Specification
UI/UX: User Interface / User Experience
FCP: First Contentful Paint (web performance metric)
LCP: Largest Contentful Paint
CLS: Cumulative Layout Shift
TTI: Time to Interactive
JAMStack: JavaScript, APIs, Markup architecture
SEO: Search Engine Optimization
WCAG: Web Content Accessibility Guidelines
NPS: Net Promoter Score
CSAT: Customer Satisfaction Score
CAC: Customer Acquisition Cost
LTV: Customer Lifetime Value
ROI: Return on Investment
KPI: Key Performance Indicator
```

### B. External Resources & References

```
Design System:
- Tailwind CSS: https://tailwindcss.com/
- Shadcn/UI: https://ui.shadcn.com/
- Heroicons: https://heroicons.com/

React Libraries:
- React Router: https://reactrouter.com/
- Framer Motion: https://www.framer.com/motion/
- React Hook Form: https://react-hook-form.com/

Tools & Services:
- Vercel Docs: https://vercel.com/docs/
- Google Sheets API: https://developers.google.com/sheets
- Sentry: https://sentry.io/
- UptimeRobot: https://uptimerobot.com/
- Google Analytics: https://analytics.google.com/

Accessibility:
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Testing Tools: https://wave.webaim.org/

Performance:
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- WebPageTest: https://www.webpagetest.org/
- Core Web Vitals: https://web.dev/vitals/
```

### C. Additional Notes

```
Security:
- All API keys stored in .env.local (never committed)
- HTTPS enforced by Vercel
- Admin auth via password (upgrade to OAuth in Phase 2)
- Regular security audits (monthly)
- Data backup daily

Compliance:
- Privacy policy on website
- Terms of Service on website
- GDPR-ready (data export, deletion features)
- Indonesian data residency (Google Sheets Indonesia servers)

Maintenance:
- Monthly: Analytics review, backup verification
- Quarterly: Security audit, performance review, user feedback
- Bi-annually: Template updates, feature releases, strategy review
- Annually: Full platform audit, roadmap planning

Support Hours:
- Phase 1: 8am-10pm (WhatsApp only)
- Phase 2: 9am-6pm (WhatsApp, email, chat)
- Phase 3+: 24/7 (chatbot + team)
```

---

## DOCUMENT CHANGE HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 2024 | Riyandi Muhammad Rizki | Initial version - MVP Phase 1 |
| 1.1 | Jan 2024 | Team | Approved for development |

---

## APPROVAL SIGN-OFF

```
Product Manager: Riyandi Muhammad Rizki
Date: January 2024

This PRD + SRS document has been reviewed and approved.
It represents the complete specification for CareerFolio MVP.
Development team may proceed with implementation.
```

---

**END OF DOCUMENT**

Total Word Count: ~25,000 words
Last Updated: January 2024
Status: APPROVED FOR DEVELOPMENT ✅

