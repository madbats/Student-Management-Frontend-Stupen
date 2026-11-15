# Student Management – React UI Implementation Practice (Tema Merah)

Tema primary merah (`#DC2626`). Aplikasi ReactJS sederhana untuk menampilkan 10 data mahasiswa dummy baru dan jam digital yang diperbarui setiap 1 detik. Data dummy disimpan di `useState`, ditampilkan dengan `.map()`, dan jam menggunakan `useEffect` + `setInterval` + `clearInterval`.

## Persiapan

Pastikan Node.js versi 20.19+ atau 22.12+ dan npm terpasang.

## Cara menjalankan (VS Code Terminal)

1. Ekstrak ZIP dan buka folder `student-management-react-merah` di VS Code.
2. Klik **Terminal → New Terminal**.
3. Jalankan:

   ```bash
   npm.cmd install
   npm.cmd run dev
   ```

4. Buka alamat lokal yang muncul di Terminal (umumnya `http://localhost:5173/`).

**Catatan:** Data mahasiswa, alamat email `example.com`, dan nomor HP hanya contoh fiktif untuk latihan.

## Memahami kodenya

- `src/App.jsx`: komponen utama, data dummy, `useState`, `useEffect`, serta `.map()`.
- `src/App.css`: tampilan antarmuka menggunakan Vanilla CSS.
- `src/main.jsx`: memasang komponen React ke elemen root.
- `package.json`: dependensi React, Vite, dan perintah menjalankan aplikasi.

## Checklist ketentuan

- [x] Header Student Management
- [x] Subheader Daftar Data Mahasiswa
- [x] Jumlah mahasiswa
- [x] 10 mahasiswa dummy baru berupa array of objects dalam `useState`
- [x] 7 kolom sesuai instruksi (NIM, Nama Mahasiswa, No. Hp, Email, Alamat, Program Studi, Tahun Masuk)
- [x] `.map()` untuk baris tabel dan `key` unik dengan NIM
- [x] Jam digital melalui `useState` + `useEffect` + `setInterval` 1000 ms
- [x] Cleanup `clearInterval()`
- [x] Vanilla CSS
- [x] Tanpa backend/database

## Mengumpulkan tugas

Sesuai petunjuk tugas, unggah kode ke GitHub **public** atau unggah ZIP project ke Google Drive dengan akses tautan **siapa saja yang memiliki link dapat melihat**. Masukkan link tersebut ke form pengumpulan. Jangan mengunggah folder `node_modules`.

**Batas pengumpulan:** Senin, 16 November 2026 pukul 23.00 WIB.
