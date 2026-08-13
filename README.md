# Website Portofolio Pribadi

Website portofolio statis (HTML, CSS, JS murni — tanpa framework/build tool),
siap diunggah ke GitHub dan langsung di-deploy ke Vercel.

## Struktur folder

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── proyek-1.jpg ... proyek-4.jpg # portofolio kerjaan/website
│   ├── mengajar-tembarak-1.jpg ...   # portofolio mengajar SMK N Tembarak
│   └── mengajar-temanggung-1.jpg ... # portofolio mengajar SMK N 2 Temanggung
└── README.md
```

Ada dua cara gambar ditampilkan di website ini:

1. **File lokal** (folder `images/`) — dipakai untuk Portofolio Kerjaan dan
   Portofolio Mengajar. Ganti isi file dengan nama yang sama persis, atau
   ganti namanya lalu sesuaikan juga di `index.html`.
2. **URL gambar** — dipakai untuk foto hero dan Portofolio Pertumbuhan
   Trafik SEO. Anda cukup ganti alamat URL langsung di `index.html`, tidak
   perlu upload file ke folder `images/`. Upload dulu gambar Anda ke layanan
   seperti Imgur, Cloudinary, atau raw.githubusercontent.com, lalu tempel
   URL-nya menggantikan URL placeholder (`https://placehold.co/...`).

## Isi yang masih perlu Anda ganti

Buka `index.html` dan cari teks berikut, lalu ganti dengan data Anda:

- URL foto di bagian hero (cari komentar `<!-- Ganti URL di bawah ini dengan link foto Anda -->`)
- Judul & deskripsi tiap kartu di **Portofolio Kerjaan** (`Nama Proyek Satu`, dst.) → ganti dengan nama proyek/klien asli beserta screenshot-nya di `images/proyek-1.jpg` s.d. `proyek-4.jpg`
- URL grafik dan angka pertumbuhan di **Portofolio Pertumbuhan Trafik** (`+120% Trafik Organik`, dst.) → ganti dengan data dan screenshot Search Console/GA4 asli Anda
- Foto kegiatan mengajar di `images/mengajar-tembarak-*.jpg` dan `images/mengajar-temanggung-*.jpg`
- Nomor WhatsApp di tombol "Chat via WhatsApp" (`6281234567890`)
- Alamat email di tombol "Kirim Email" (`nama@email.com`)

## Menjalankan di komputer sendiri

Tidak perlu instalasi apa pun. Cukup buka `index.html` langsung di browser,
atau jalankan server lokal sederhana:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Upload ke GitHub

```bash
git init
git add .
git commit -m "Website portofolio pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPO` sesuai akun GitHub Anda. Jika repo belum
dibuat, buat dulu repo baru (kosong, tanpa README) di github.com.

## Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login (bisa pakai akun GitHub).
2. Klik **Add New → Project**.
3. Pilih repository GitHub yang baru saja Anda push.
4. Karena ini website statis (bukan Next.js/React), pada bagian **Framework
   Preset** pilih **Other**. Biarkan *Build Command* dan *Output Directory*
   kosong — Vercel akan menyajikan file apa adanya.
5. Klik **Deploy**. Setelah selesai, Anda akan mendapat URL seperti
   `nama-repo.vercel.app`.

Setiap kali Anda `git push` perubahan baru ke branch `main`, Vercel akan
otomatis build ulang dan memperbarui website Anda.
