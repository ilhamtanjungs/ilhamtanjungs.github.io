export const profile = {
  name: { before: "Muhammad", highlight: "Ilham", after: "" },
  initials: "MI",
  logo: "ilham",
  promptPath: "PS C:\\Users\\ilham",
  email: "ilhammtjg@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-ilham-458a54269",
  linkedinLabel: "linkedin.com/in/muhammad-ilham",
  whatsapp: "https://wa.me/6282283809452",
  whatsappLabel: "+62 822-8380-9452",
  instagram: null,
  instagramLabel: null,
  location: "Pekanbaru, Riau",
  photo: "ilham.jpeg",
  photoTitle: "ilham.jpg — Photos",
  cv: "CV_Muhammad_Ilham.pdf",
};

export const nav = [
  { id: "about", label: { id: "Tentang", en: "About" } },
  { id: "projects", label: { id: "Proyek", en: "Projects" } },
  { id: "experience", label: { id: "Pengalaman", en: "Experience" } },
  { id: "skills", label: { id: "Keahlian", en: "Skills" } },
  { id: "education", label: { id: "Pendidikan", en: "Education" } },
  { id: "contact", label: { id: "Kontak", en: "Contact" } },
];

export const hero = {
  status: { id: "Terbuka untuk peluang karier", en: "Open to career opportunities" },
  roles: [".NET Desktop Developer", "VB.NET & C# Developer", "Software Developer", "Attendance System Admin"],
  lead: {
    id: "Lulusan Teknik Industri yang membangun dan memelihara aplikasi desktop Windows untuk operasional perusahaan dengan VB.NET, C#, dan VB6 di atas Microsoft SQL Server, mulai dari sistem penimbangan bahan baku dan aplikasi pembelian hingga sistem absensi biometrik.",
    en: "Industrial Engineering graduate building and maintaining Windows desktop applications for company operations with VB.NET, C#, and VB6 on Microsoft SQL Server, from raw material weighing and purchasing apps to biometric attendance systems.",
  },
  ctaProjects: { id: "Lihat Proyek", en: "View Projects" },
  ctaContact: { id: "Hubungi Saya", en: "Contact Me" },
  ctaCv: { id: "Unduh CV", en: "Download CV" },
  floatTop: "✓ Build succeeded",
  floatValue: "2+",
  floatLabel: { id: "tahun sebagai developer", en: "years as a developer" },
};

export const stats = [
  { value: "2+", label: { id: "Tahun sebagai developer", en: "Years as a developer" } },
  { value: "3", label: { id: "Aplikasi utama dikelola", en: "Core apps maintained" } },
  { value: "6", label: { id: "Bahasa & database", en: "Languages & databases" } },
  { value: { id: "3,33", en: "3.33" }, label: { id: "IPK S1", en: "Bachelor's GPA" } },
];

export const about = {
  eyebrow: { id: "tentang", en: "about" },
  title: {
    id: "Membangun aplikasi desktop yang dipakai setiap hari di lini operasional.",
    en: "Building desktop apps used every day in operations.",
  },
  paragraphs: [
    {
      id: "Saya lulusan S1 Teknik Industri Universitas Muhammadiyah Riau (2023) yang kini bekerja sebagai .NET Developer dan Attendance System Administrator di Pulau Burung, Riau.",
      en: "I am an Industrial Engineering graduate from Universitas Muhammadiyah Riau (2023), currently working as a .NET Developer and Attendance System Administrator in Pulau Burung, Riau.",
    },
    {
      id: "Saya mengembangkan dan memelihara aplikasi internal perusahaan, termasuk sistem penimbangan bahan baku kelapa dan nanas, aplikasi pembelian, serta aplikasi pelatihan online karyawan, dengan data yang tersimpan di Microsoft SQL Server.",
      en: "I develop and maintain internal company applications, including a coconut and pineapple raw material weighing system, a purchasing application, and an online employee training app, with data stored in Microsoft SQL Server.",
    },
    {
      id: "Latar belakang Teknik Industri dan pengalaman langsung di lantai produksi membuat saya memahami kebutuhan pengguna operasional, sehingga solusi yang saya bangun tidak hanya berjalan secara teknis, tetapi juga sesuai dengan alur kerja di lapangan.",
      en: "My Industrial Engineering background and hands-on experience on the production floor help me understand operational users, so the solutions I build not only work technically but also fit real workflows in the field.",
    },
  ],
  code: {
    comment: { id: "' ringkasan singkat", en: "' quick summary" },
    className: "Ilham",
    fields: [
      { key: "Role", value: ".NET Desktop Developer" },
      { key: "Location", value: "Pulau Burung, Riau" },
      { key: "Languages", list: ["VB.NET", "C#", "VB6", "PHP"] },
      { key: "Database", list: ["SQL Server", "PostgreSQL"] },
      { key: "Education", value: { id: "S1 Teknik Industri · IPK 3,33", en: "BSc Industrial Engineering · GPA 3.33" } },
      { key: "OpenToWork", bool: true },
    ],
  },
};

export const projectsSection = {
  eyebrow: { id: "proyek", en: "projects" },
  title: { id: "Aplikasi dan sistem yang saya bangun dan kelola.", en: "Applications and systems I build and maintain." },
  featured: { id: "unggulan", en: "featured" },
};

export const projects = [
  {
    featured: true,
    exe: "WeighingSystem.exe",
    category: "Desktop · VB.NET",
    title: { id: "Sistem Penimbangan Bahan Baku", en: "Raw Material Weighing System" },
    desc: {
      id: "Aplikasi desktop untuk transaksi penimbangan kelapa dan nanas dari supplier dan petani: perhitungan berat bersih, sortir reject, dan grading kualitas berbasis sampel. Seluruh transaksi tersimpan di Microsoft SQL Server.",
      en: "A desktop application for coconut and pineapple weighing transactions from suppliers and farmers: net weight calculation, reject sorting, and sample-based quality grading. All transactions are stored in Microsoft SQL Server.",
    },
    tags: ["VB.NET", "Microsoft SQL Server", "Desktop App"],
  },
  {
    featured: true,
    exe: "Purchasing.exe",
    category: "Desktop · VB6",
    title: { id: "Aplikasi Pembelian Bahan Baku", en: "Raw Material Purchasing App" },
    desc: {
      id: "Mengolah data transaksi timbang untuk menentukan harga beli bahan baku berdasarkan harga periode terbaru, lalu meneruskan data pembelian yang sudah divalidasi ke sistem Accounting dan Finance untuk proses pembayaran.",
      en: "Consumes weighing transaction data to determine raw material purchase prices based on the latest period pricing, then forwards validated purchasing records to the Accounting and Finance systems for payment.",
    },
    tags: ["VB6", "Microsoft SQL Server", "System Integration"],
  },
  {
    exe: "TrainingApp.exe",
    category: "Desktop · VB.NET",
    title: { id: "Aplikasi Pelatihan Online Karyawan", en: "Employee Online Training App" },
    desc: {
      id: "Aplikasi pelatihan berbasis VB.NET untuk meningkatkan pengetahuan dan keterampilan dasar karyawan di lingkungan perusahaan.",
      en: "A VB.NET-based training application designed to improve employees' fundamental knowledge and skills within the company.",
    },
    tags: ["VB.NET", "Microsoft SQL Server"],
  },
  {
    category: "System Administration",
    title: { id: "Sistem Absensi Biometrik", en: "Biometric Attendance System" },
    desc: {
      id: "Konfigurasi, perawatan, dan penyesuaian perangkat absensi fingerprint dan palm recognition, termasuk enrollment user dan sinkronisasi data absensi dengan Solution attendance software.",
      en: "Configuration, maintenance, and adjustment of fingerprint and palm recognition devices, including user enrollment and attendance synchronization with Solution attendance software.",
    },
    tags: ["Fingerprint", "Palm Recognition", "Solution Attendance"],
  },
  {
    category: "Troubleshooting · Data",
    title: { id: "Integritas Data Timbang–Pembelian", en: "Weighing-to-Purchasing Data Integrity" },
    desc: {
      id: "Menelusuri inkonsistensi data lintas aplikasi, memperbaiki bug kalkulasi dan logika UI, serta memvalidasi transaksi digital terhadap dokumen fisik untuk menjaga integritas data dari penimbangan hingga pembelian.",
      en: "Tracing cross-application data inconsistencies, fixing calculation and UI logic bugs, and validating digital transactions against physical source documents to protect data integrity across the weighing-to-purchasing pipeline.",
    },
    tags: ["Debugging", "SQL", "Data Validation"],
  },
  {
    category: "Web · Desktop",
    title: { id: "Aplikasi Internal Perusahaan", en: "Internal Company Applications" },
    desc: {
      id: "Pengembangan dan peningkatan aplikasi internal berbasis desktop dan web, termasuk dukungan manajemen database, pelaporan, dan integrasi antar sistem operasional.",
      en: "Development and improvement of desktop and web-based internal applications, including support for database management, reporting, and integration between operational systems.",
    },
    tags: ["C#", "PHP", "VB.NET", "Reporting"],
  },
];

export const experienceSection = {
  eyebrow: { id: "pengalaman", en: "experience" },
  title: { id: "Dari lantai produksi hingga pengembangan software.", en: "From the production floor to software development." },
};

export const experience = [
  {
    role: ".NET Developer / Software Developer",
    company: "Pulau Burung, Riau",
    period: { id: "Mei 2024 — Sekarang", en: "May 2024 — Present" },
    groups: [
      {
        title: { id: "Pengembangan Aplikasi", en: "Application Development" },
        items: [
          { id: "Mengembangkan dan mengelola aplikasi desktop VB.NET untuk transaksi penimbangan bahan baku kelapa dan nanas.", en: "Developed and managed a VB.NET desktop application for coconut and pineapple raw material weighing transactions." },
          { id: "Mengembangkan aplikasi pembelian berbasis VB6 yang meneruskan data pembelian tervalidasi ke Accounting dan Finance.", en: "Developed a VB6 purchasing application that forwards validated purchasing records to Accounting and Finance." },
          { id: "Mengelola aplikasi pelatihan online karyawan berbasis VB.NET.", en: "Maintained a VB.NET online employee training application." },
        ],
      },
      {
        title: { id: "Troubleshooting & Optimasi", en: "Troubleshooting & Optimization" },
        items: [
          { id: "Debugging dan optimasi sistem untuk menjaga stabilitas aplikasi dan efisiensi operasional.", en: "Debugged and optimized systems to keep applications stable and operations efficient." },
          { id: "Menelusuri inkonsistensi data lintas aplikasi dan memvalidasi transaksi digital terhadap dokumen fisik.", en: "Traced cross-application data inconsistencies and validated digital transactions against physical documents." },
        ],
      },
      {
        title: { id: "Database & Kolaborasi", en: "Database & Collaboration" },
        items: [
          { id: "Mendukung manajemen database, pelaporan, dan integrasi sistem operasional internal.", en: "Supported database management, reporting, and integration of internal operational systems." },
          { id: "Menganalisis kebutuhan pengguna bersama tim operasional dan menerapkan perbaikan sistem.", en: "Analyzed user requirements with operational teams and implemented system improvements." },
        ],
      },
    ],
  },
  {
    role: "Attendance System Administrator",
    company: "Pulau Burung, Riau",
    period: { id: "Agt 2025 — Sekarang", en: "Aug 2025 — Present" },
    items: [
      { id: "Konfigurasi, perawatan, dan penyesuaian perangkat absensi biometrik fingerprint dan palm recognition.", en: "Configured, maintained, and adjusted fingerprint and palm recognition biometric attendance devices." },
      { id: "Mengelola enrollment user dan sinkronisasi absensi menggunakan Solution attendance software.", en: "Managed user enrollment and attendance synchronization using Solution attendance software." },
      { id: "Monitoring dan perawatan sistem agar operasional absensi berjalan lancar.", en: "Monitored and maintained the system to keep attendance operations running smoothly." },
      { id: "Berkoordinasi dengan tim operasional untuk menyelesaikan kendala teknis sistem absensi.", en: "Coordinated with operational teams to resolve technical attendance system issues." },
    ],
  },
  {
    role: "Can Making Line Deputy Head of Shift",
    company: "Pulau Burung, Riau",
    period: { id: "Nov 2023 — Mei 2024", en: "Nov 2023 — May 2024" },
    items: [
      { id: "Menjaga kelancaran produksi lini kemasan santan kelapa dan nanas kaleng.", en: "Ensured smooth production on coconut milk and canned pineapple packaging lines." },
      { id: "Memantau ketersediaan bahan baku untuk proses produksi kaleng.", en: "Monitored raw material availability for can manufacturing." },
      { id: "Mengatur alokasi tenaga kerja dan jadwal kerja sesuai standar operasional dan nasional.", en: "Managed workforce allocation and work schedules in line with operational and national standards." },
      { id: "Memastikan jadwal preventive maintenance mesin berjalan sesuai standar Total Productive Maintenance (TPM).", en: "Ensured preventive maintenance schedules followed Total Productive Maintenance (TPM) standards." },
      { id: "Mengawasi aktivitas produksi harian untuk menjaga efisiensi, kualitas produk, dan target produksi.", en: "Supervised daily production to maintain efficiency, product quality, and production targets." },
    ],
  },
  {
    role: "Ground Handling Staff",
    company: "PT Gapura Angkasa (Scoot Pte Ltd) · Denpasar, Bali",
    period: { id: "2017 — 2019", en: "2017 — 2019" },
    items: [
      { id: "Membantu penumpang saat check-in dan penanganan bagasi untuk penerbangan internasional ke Singapura.", en: "Assisted passengers with check-in and baggage handling for international flights to Singapore." },
      { id: "Memvalidasi dokumen perjalanan, visa, dan tiket pulang sesuai regulasi imigrasi.", en: "Validated travel documents, visas, and return tickets according to immigration regulations." },
      { id: "Memastikan persiapan operasional sebelum penerbangan selesai dengan akurat dan efisien.", en: "Ensured pre-flight operational preparation was completed accurately and efficiently." },
      { id: "Berkoordinasi dengan staf operasional pusat untuk menyelesaikan masalah layanan penumpang.", en: "Coordinated with central operations to resolve post-flight and passenger service issues." },
    ],
  },
];

export const skillsSection = {
  eyebrow: { id: "keahlian", en: "skills" },
  title: { id: "Tools dan kompetensi yang saya gunakan.", en: "Tools and competencies I work with." },
};

export const skills = [
  { title: "programming", items: ["VB.NET", "C#", "VB6", "PHP", "Windows Desktop Apps"] },
  { title: "database", items: ["Microsoft SQL Server", "PostgreSQL", "Reporting", "Data Integration"] },
  { title: "system-administration", items: ["Biometric Attendance Systems", "Fingerprint & Palm Recognition", "Troubleshooting", "System Maintenance"] },
  { title: "manufacturing", items: ["Production Operations", "TPM", "Workforce Scheduling", "Supply Chain Management"] },
  { title: "tools", items: ["Microsoft Office", "Solution Attendance Software"] },
  {
    title: "soft-skills",
    items: [
      "Problem Solving", "Critical Thinking", "Communication", "Adaptability",
      { id: "Indonesia · Bahasa ibu", en: "Indonesian · Native" },
      { id: "Inggris · Menengah", en: "English · Intermediate" },
    ],
  },
];

export const educationSection = {
  eyebrow: { id: "pendidikan", en: "education" },
  title: { id: "Dasar teknik industri dari Universitas Muhammadiyah Riau.", en: "An industrial engineering foundation from Universitas Muhammadiyah Riau." },
};

export const education = {
  degree: { id: "Sarjana Teknik Industri", en: "Bachelor of Industrial Engineering" },
  school: { id: "Universitas Muhammadiyah Riau · Lulus 2023", en: "Universitas Muhammadiyah Riau · Graduated 2023" },
  gpa: { id: "3,33", en: "3.33" },
  gpaOf: { id: "/ 4,00 IPK", en: "/ 4.00 GPA" },
  activitiesLabel: { id: "Organisasi", en: "Organization" },
  activities: [
    { id: "Kepala Divisi Perlengkapan, Latihan Dasar Organisasi (2021): mengelola logistik, perlengkapan, dan transportasi kegiatan.", en: "Head of Equipment Division, Basic Organizational Training (2021): managed logistics, equipment, and transportation." },
    { id: "Mengoordinasikan anggota divisi serta menyusun laporan pengeluaran dan dokumentasi logistik.", en: "Coordinated division members and prepared expenditure reports and logistics documentation." },
  ],
  side: [
    {
      label: { id: "Sertifikasi", en: "Certification" },
      title: "Professional Certification – Supply Chain Management",
      sub: { id: "BNSP · Maret 2024", en: "BNSP · March 2024" },
      items: [
        { id: "Kompeten di bidang Supply Chain Management dengan spesialisasi Delivery Management.", en: "Certified competent in Supply Chain Management, specializing in Delivery Management." },
        { id: "Diterbitkan LSP Teknik Manajemen Industri di bawah BNSP.", en: "Issued by LSP Teknik Manajemen Industri under BNSP." },
        { id: "Cakupan: manajemen pengiriman, evaluasi penyedia transportasi, dan persiapan transportasi material.", en: "Scope: delivery management, transport provider evaluation, and material transport preparation." },
      ],
    },
  ],
};

export const contact = {
  eyebrow: { id: "kontak", en: "contact" },
  title: { id: "Mari berdiskusi tentang proyek dan peluang kerja sama.", en: "Let's talk about projects and collaboration." },
  sub: {
    id: "Saya terbuka untuk peran .NET developer, software developer, dan system administrator.",
    en: "I am open to .NET developer, software developer, and system administrator roles.",
  },
  ctaEmail: { id: "Kirim Email", en: "Send Email" },
  builtWith: { id: "dibuat dengan React + Vite", en: "built with React + Vite" },
};