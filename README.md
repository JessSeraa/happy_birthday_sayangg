# For Vania, With Love ♡

Website ulang tahun romantis untuk Vania dari Jess — dibuat dengan HTML, CSS, dan JavaScript murni.

## Menjalankan di VS Code
1. Ekstrak ZIP proyek ini.
2. Buka folder `for_vania_with_love` di Visual Studio Code.
3. (Disarankan) Pasang ekstensi **Live Server**.
4. Klik kanan `index.html` → **Open with Live Server**.
5. Website akan terbuka di browser.

Tanpa Live Server: klik dua kali `index.html` juga bisa, tetapi Live Server lebih nyaman untuk melihat perubahan saat mengedit.

## Foto kenangan
Galeri menggunakan foto yang sudah ada. Pertahankan nama dan lokasi file berikut:
- `assets/photos/foto-1.jpeg`
- `assets/photos/foto-2.jpeg`
- `assets/photos/foto-3.jpeg`

Klik atau tekan Enter pada foto untuk melihatnya lebih besar. Tutup tampilan foto dengan tombol × atau tombol Escape.

## Menambahkan musik
Musik yang digunakan adalah `assets/audio/lagu-kita.mp3`. Pertahankan nama dan lokasinya.

Musik hanya mulai diputar setelah pengunjung berinteraksi dengan tombol pembuka atau tombol musik di kanan atas. Equalizer bergerak saat musik diputar.

## Fitur interaktif
- Tekan **Buka Hadiahmu** untuk membuka rangkaian kejutan.
- Klik setiap lilin pada kue, atau gunakan tombol **Tiup semua lilin**.
- Surat cinta mulai diketik saat dibuka.
- Tekan **One Last Surprise** untuk membuka pesan dan animasi perayaan.
- Tombol **Ulangi dari awal** mengatur ulang lilin dan kejutan terakhir.

Animasi menghormati pengaturan *reduce motion* perangkat.

## Mengubah pesan surat
Buka `index.html`, cari bagian:
`<article class="letter-paper">`
Lalu edit paragraf-paragrafnya sesuai cerita dan perasaanmu sendiri.

## Mengubah tanggal
Tanggal tampilan ada di `index.html` pada teks `01 · 06 · 2006` dan footer `01.06.2006`.

## Struktur proyek
```text
for_vania_with_love/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photos/
    │   ├── foto-1.jpeg
    │   ├── foto-2.jpeg
    │   └── foto-3.jpeg
    └── audio/
        └── lagu-kita.mp3
```

Semua fitur interaktif inti berjalan tanpa library eksternal. Koneksi internet hanya diperlukan untuk memuat Google Fonts.
