# ARCODE × LENS — The Digital Journal

Portofolio pribadi satu halaman (developer + fotografer). Berisi Hero, About, Developer/Projects, Photography (film strip), Connection, Experience, CV, dan Contact. Semua konten pribadi masih berupa **placeholder** yang jelas ditandai `[TBD]`.

## Struktur folder

```
CODE-X-LENS/
├── index.html              Struktur halaman (markup saja)
├── css/
│   └── style.css           Seluruh styling desain (CSS kustom, sudah terpakai)
├── js/
│   └── script.js           CONFIG konten + render, interaksi, animasi
├── src/
│   └── tailwind.input.css  Sumber Tailwind v4 (opsional, lihat di bawah)
├── assets/
│   ├── projects/           Screenshot proyek
│   ├── photos/             Foto fotografi
│   └── portrait-cutout.png (opsional, letakkan sendiri)
├── package.json            Script build Tailwind (opsional)
└── README.md
```

## Membuka website secara lokal

Cara paling sederhana: klik dua kali `index.html`. Tidak perlu build apa pun.
Alternatif: di VS Code pasang ekstensi **Live Server**, lalu klik kanan `index.html` > *Open with Live Server*.
Font (Space Grotesk, DM Serif Display, Inter) dimuat dari Google Fonts, jadi perlu internet; tanpa internet tampil dengan font cadangan.

## Mengubah konten (semua di `CONFIG`, awal `js/script.js`)

| Yang ingin diubah | Field |
|---|---|
| Nama | `name` |
| Bio dan fakta About | `about`, `facts` |
| Skill | `stack` |
| Proyek (judul, tahun, deskripsi, tag, link) | `projects` |
| Foto + metadata | `photos` |
| Pendidikan dan pengalaman | `timeline` |
| Kontak | `contact.email`, `contact.github`, `contact.linkedin` |
| File CV | `cv.path` |

- **Foto profil:** simpan PNG transparan sebagai `assets/portrait-cutout.png`, lalu isi `assets.portrait: "assets/portrait-cutout.png"`.
- **Foto fotografi:** simpan di `assets/photos/`, lalu isi `src: "assets/photos/nama.jpg"` pada item `photos`. Isi juga `title`, `desc`, `category`, `location`, `date`, `alt`, dan `ar` (rasio, mis. `"4/5"`). Jika `src` kosong, placeholder ilustrasi tetap tampil.
- **Screenshot proyek:** simpan di `assets/projects/`, lalu isi `preview: "assets/projects/nama.png"`. Mockup placeholder akan diganti di preview hover dan dialog detail. Isi `link` agar tombol *Open project* aktif.
- **CV dan kontak:** isi `cv.path` (mis. `"assets/cv.pdf"`, letakkan filenya di `assets/`) agar View CV / Download CV aktif. Isi `contact.*` agar tombol email, GitHub, dan LinkedIn aktif. Selama kosong, tombolnya otomatis nonaktif dengan keterangan.
- Foto kedua di bagian About dan halaman CV masih berupa ilustrasi placeholder yang dibuat di kode; belum ada field `CONFIG` untuk menggantinya.

## Tailwind CSS (opsional)

Versi yang disiapkan: **Tailwind CSS v4** dengan `@tailwindcss/cli`.

Desain asli ditulis dengan CSS kustom (layout editorial, parallax, film strip, objek 3D, ilustrasi SVG), dan semuanya dipertahankan di `css/style.css`. Karena itu `index.html` **belum memakai class utility Tailwind**, dan website berjalan penuh tanpa build.

Jika ingin memakai utility Tailwind pada markup baru:

1. Pasang Node.js, lalu di folder proyek jalankan `npm install`.
2. Jalankan `npm run build:css` (atau `npm run watch:css` saat mengedit). Hasilnya `css/tailwind.css`.
3. Tambahkan di `<head>` pada `index.html`, setelah `style.css`: `<link rel="stylesheet" href="css/tailwind.css">`.
4. Warna dan font tersedia sebagai `bg-forest`, `text-terracotta`, `font-display`, `font-serif`, dan sebagainya (lihat `@theme` di `src/tailwind.input.css`).

Preflight Tailwind sengaja tidak diimpor agar tampilan yang ada tidak berubah. Alternatif Tailwind CDN lebih cepat untuk mencoba, tetapi memuat compiler di browser, butuh internet, dan tidak cocok untuk produksi.
