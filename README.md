# Portfolio Jean Michel

Repository ini berisi dua bagian:

| Folder | Isi | Cara menjalankan |
|---|---|---|
| `html/` | Website portofolio statis (HTML + CSS): beranda, tentang, portofolio, kontak | Buka `html/index.html` di browser |
| `tailwind/` | Proyek Vite + TypeScript + Tailwind CSS v4 | `cd tailwind && npm install && npm run dev` |

## Menjalankan proyek Tailwind

```bash
cd tailwind
npm install
npm run dev      # mode pengembangan
npm run build    # build produksi (hasil di tailwind/dist)
```

## Catatan

- `node_modules/` tidak ikut di-upload (di-ignore lewat `.gitignore`); jalankan `npm install` untuk membuatnya kembali.
- `html/tentang.html` memakai video `video-aktivitas.MOV` (sekitar 86 MiB).
