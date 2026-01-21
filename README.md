# PPLG Profile - Website Profil Jurusan

Website ini adalah profil untuk jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) di sebuah Sekolah Menengah Kejuruan (SMK). Proyek ini dibuat sebagai tugas mata kuliah.

Tujuan dari website ini adalah untuk menyediakan platform informatif dan modern yang memperkenalkan jurusan PPLG kepada calon siswa, orang tua, dan mitra industri.

## 🌟 Fitur Utama

### Halaman Publik
-   **Beranda & Hero Section:** Sambutan utama yang menarik.
-   **Tentang Jurusan:** Penjelasan mendalam mengenai kurikulum dan fokus jurusan PPLG.
-   **Tim Pengajar:** Menampilkan daftar guru yang mengajar di jurusan.
-   **Mitra Industri:** Menampilkan logo perusahaan yang bekerja sama.
-   **Desain Responsif:** Tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile.

### Panel Admin
-   **Login Aman:** Halaman login khusus untuk administrator.
-   **Dashboard Manajemen:**
    -   **Kelola Guru:** Tambah dan hapus data guru.
    -   **Kelola Mitra:** Tambah dan hapus data perusahaan mitra.
-   **Update Real-time:** Perubahan di panel admin akan langsung terlihat di halaman publik berkat integrasi dengan Firebase.

## 🛠️ Teknologi yang Digunakan

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animasi:** [Framer Motion](https://www.framer.com/motion/)
-   **Backend & Database:** [Firebase](https://firebase.google.com/) (Authentication & Firestore)
-   **Deployment:** (Belum ditentukan, bisa di Vercel, Netlify, dll.)

## 🚀 Panduan Instalasi dan Setup

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut.

### 1. Prasyarat
-   [Node.js](https://nodejs.org/en/) (v20.x atau lebih baru direkomendasikan)
-   NPM atau Yarn
-   Akun [Firebase](https://firebase.google.com/) untuk membuat proyek baru.

### 2. Kloning Repositori
```bash
git clone https://github.com/nama-user/nama-repo.git
cd nama-repo
```
*(Jangan lupa ganti `nama-user/nama-repo` dengan URL repositori Anda)*

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Konfigurasi Firebase
Proyek ini membutuhkan koneksi ke Firebase.

1.  Buat sebuah proyek baru di [Firebase Console](https://console.firebase.google.com/).
2.  Aktifkan **Firestore Database** dan **Authentication** (metode Email/Password).
3.  Di pengaturan proyek Anda (`Project Settings > General`), daftarkan aplikasi web baru.
4.  Salin konfigurasi Firebase (objek `firebaseConfig`).
5.  Buat file baru di root proyek dengan nama `.env.local`.
6.  Isi file `.env.local` dengan konfigurasi yang Anda salin. Gunakan format di bawah ini:

    ```env
    # Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

    > **Penting:** Nama variabel harus sama persis seperti di atas agar dibaca dengan benar oleh file `firebase.ts`.

### 5. Jalankan Aplikasi
Setelah semua konfigurasi selesai, jalankan server pengembangan:
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🗂️ Struktur Proyek

Berikut adalah gambaran singkat tentang struktur direktori utama:
```
/
├── app/                  # Halaman utama dan routing (App Router)
│   ├── admin/            # Dashboard admin (protected route)
│   ├── login/            # Halaman login
│   ├── components/       # Komponen React yang dapat digunakan kembali
│   ├── context/          # Konteks React (e.g., AuthContext)
│   └── page.tsx          # Halaman utama (landing page)
├── public/               # Aset statis seperti gambar dan ikon
├── firebase.ts           # Inisialisasi dan konfigurasi Firebase SDK
├── tailwind.config.mjs   # Konfigurasi Tailwind CSS
└── package.json          # Dependensi dan skrip proyek
```

## 🙏 Ucapan Terima Kasih

Proyek ini dibuat untuk menyelesaikan tugas yang diberikan oleh Pak Wahyudi. Terima kasih atas bimbingan dan ilmunya.
