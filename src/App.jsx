import { useEffect, useState } from 'react';
import './App.css';

const dataMahasiswaAwal = [
  {
    nim: '2202001',
    nama: 'Nabila Rahmawati',
    noHp: '081200000101',
    email: 'nabila.rahmawati@example.com',
    alamat: 'Sidoarjo',
    prodi: 'Sistem Informasi',
    tahunMasuk: 2022,
  },
  {
    nim: '2202002',
    nama: 'Rizky Maulana',
    noHp: '081200000102',
    email: 'rizky.maulana@example.com',
    alamat: 'Gresik',
    prodi: 'Teknik Informatika',
    tahunMasuk: 2022,
  },
  {
    nim: '2302001',
    nama: 'Alya Maharani',
    noHp: '081200000103',
    email: 'alya.maharani@example.com',
    alamat: 'Mojokerto',
    prodi: 'Manajemen',
    tahunMasuk: 2023,
  },
  {
    nim: '2302002',
    nama: 'Farhan Ramadhan',
    noHp: '081200000104',
    email: 'farhan.ramadhan@example.com',
    alamat: 'Lamongan',
    prodi: 'Sistem Informasi',
    tahunMasuk: 2023,
  },
  {
    nim: '2302003',
    nama: 'Salsabila Nuraini',
    noHp: '081200000105',
    email: 'salsabila.nuraini@example.com',
    alamat: 'Pasuruan',
    prodi: 'Teknik Industri',
    tahunMasuk: 2023,
  },
  {
    nim: '2402001',
    nama: 'Fajar Hidayat',
    noHp: '081200000106',
    email: 'fajar.hidayat@example.com',
    alamat: 'Blitar',
    prodi: 'Informatika',
    tahunMasuk: 2024,
  },
  {
    nim: '2402002',
    nama: 'Keisha Anindya',
    noHp: '081200000107',
    email: 'keisha.anindya@example.com',
    alamat: 'Madiun',
    prodi: 'Akuntansi',
    tahunMasuk: 2024,
  },
  {
    nim: '2402003',
    nama: 'Dimas Arya',
    noHp: '081200000108',
    email: 'dimas.arya@example.com',
    alamat: 'Tuban',
    prodi: 'Desain Komunikasi Visual',
    tahunMasuk: 2024,
  },
  {
    nim: '2502001',
    nama: 'Zahra Azzahra',
    noHp: '081200000109',
    email: 'zahra.azzahra@example.com',
    alamat: 'Banyuwangi',
    prodi: 'Sistem Informasi',
    tahunMasuk: 2025,
  },
  {
    nim: '2502002',
    nama: 'Bagas Prakoso',
    noHp: '081200000110',
    email: 'bagas.prakoso@example.com',
    alamat: 'Nganjuk',
    prodi: 'Informatika',
    tahunMasuk: 2025,
  },
];

function App() {
  const [mahasiswa] = useState(dataMahasiswaAwal);
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const jamWIB = waktu.toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const tanggalWIB = waktu.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <div className="brand-icon" aria-hidden="true">SM</div>
          <div>
            <p className="brand-title">Student Management</p>
            <p className="brand-subtitle">Dashboard Akademik</p>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <section className="page-heading">
          <span className="eyebrow">DATA AKADEMIK</span>
          <h1>Daftar Data Mahasiswa</h1>
          <p>Informasi mahasiswa yang tersimpan pada aplikasi.</p>
        </section>

        <section className="summary-grid" aria-label="Ringkasan data mahasiswa">
          <article className="summary-card">
            <div className="summary-top">
              <span className="summary-label">Jumlah Mahasiswa</span>
              <span className="symbol-box purple" aria-hidden="true">👥</span>
            </div>
            <strong className="summary-value">{mahasiswa.length}</strong>
            <p className="summary-help">Mahasiswa terdaftar</p>
          </article>

          <article className="summary-card">
            <div className="summary-top">
              <span className="summary-label">Jam Digital (Live)</span>
              <span className="symbol-box cyan" aria-hidden="true">🕒</span>
            </div>
            <time className="clock-value" dateTime={waktu.toISOString()}>
              {jamWIB} <span>WIB</span>
            </time>
            <p className="summary-help">{tanggalWIB}</p>
          </article>
        </section>

        <section className="table-card" aria-labelledby="judul-tabel">
          <div className="table-heading">
            <div>
              <h2 id="judul-tabel">Data Mahasiswa</h2>
              <p>Daftar lengkap informasi setiap mahasiswa.</p>
            </div>
            <span className="count-pill">{mahasiswa.length} Data</span>
          </div>

          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">NIM</th>
                  <th scope="col">Nama Mahasiswa</th>
                  <th scope="col">No. Hp</th>
                  <th scope="col">Email</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Program Studi</th>
                  <th scope="col">Tahun Masuk</th>
                </tr>
              </thead>
              <tbody>
                {/* .map(): setiap objek mahasiswa menjadi satu baris tabel. */}
                {mahasiswa.map((item) => (
                  <tr key={item.nim}>
                    <td className="nim-cell">{item.nim}</td>
                    <td className="name-cell">{item.nama}</td>
                    <td>{item.noHp}</td>
                    <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                    <td>{item.alamat}</td>
                    <td><span className="prodi-pill">{item.prodi}</span></td>
                    <td>{item.tahunMasuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            Menampilkan {mahasiswa.length} dari {mahasiswa.length} mahasiswa
            <span>Data dummy untuk latihan ReactJS</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        Student Management · ReactJS · useState · useEffect · .map()
      </footer>
    </div>
  );
}

export default App;
