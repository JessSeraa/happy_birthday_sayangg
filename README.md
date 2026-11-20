# For Vania, With Love ♡

Website ulang tahun romantis untuk Vania dari Jess — dibuat dengan HTML, CSS, dan JavaScript murni.

## Menjalankan di VS Code
1. Ekstrak ZIP proyek ini.
2. Buka folder `for_vania_with_love` di Visual Studio Code.
3. (Disarankan) Pasang ekstensi **Live Server**.
4. Klik kanan `index.html` → **Open with Live Server**.
5. Website akan terbuka di browser.

Tanpa Live Server: klik dua kali `index.html` juga bisa, tetapi Live Server lebih nyaman untuk melihat perubahan saat mengedit.

## Memasukkan foto kalian
Salin foto ke folder `assets/photos/`, lalu ubah namanya persis:
- `foto-1.jpg`
- `foto-2.jpg`
- `foto-3.jpg`

Jika fotomu format PNG, ubah nama file di `index.html` dari `.jpg` menjadi `.png`.
Tips: gunakan foto landscape/portrait berkualitas baik. Website otomatis menyesuaikan crop foto.

## Menambahkan musik
1. Pilih file musik MP3 yang boleh kamu gunakan.
2. Masukkan ke folder `assets/audio/`.
3. Ubah namanya menjadi `lagu-kita.mp3`.

Browser biasanya tidak mengizinkan musik otomatis sebelum ada interaksi pengguna. Musik mulai dicoba setelah tombol pembuka ditekan; tombol musik di kanan atas juga bisa digunakan.

## Mengubah pesan surat
Buka `index.html`, cari bagian:
`<article class="letter-paper">`
Lalu edit paragraf-paragrafnya sesuai cerita dan perasaanmu sendiri.

## Mengubah tanggal
Tanggal tampilan ada di `index.html` pada teks `01 · 07 · 2027` dan footer `01.07.2027`.

## Struktur proyek
```text
for_vania_with_love/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photos/
    │   └── (masukkan foto-1.jpg, foto-2.jpg, foto-3.jpg)
    └── audio/
        └── (masukkan lagu-kita.mp3)
```

Semua fitur interaktif inti berjalan tanpa library eksternal. Koneksi internet hanya diperlukan untuk memuat Google Fonts.
