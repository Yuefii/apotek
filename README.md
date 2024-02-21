# APLIKASI APOTEK
Selamat datang di aplikasi Apotek Panduan ini akan membantu Anda memahami cara menggunakan fitur-fitur aplikasi kami untuk mengelola inventaris obat, pelanggan, dan laporan dengan lebih efisien.

## Fitur Utama Aplikasi

- Menambahkan Jenis Obat.
- Mengelola Stok Obat.
- Mengelola Pelanggan.
- Membuat Laporan.

## Tech Stack

- **Next JS Pages Router:** [docs](https://nextjs.org)
- **Tailwind CSS:** [docs](https://tailwindcss.com)
- **Prisma ORM:** [docs](https://www.prisma.io/)
- **Docker:** [docs](https://www.docker.com/)

# Documentation Project

Masih belom paham dengan struktur pada aplikasi? untuk lebih jelas kalian bisa membacanya [disini](/docs/readme.md)

# Setup

## Setup Enviroment

Buat file .env yang isinya seperti ini dan sesuai kan dengan environment kalian.
```
DATABASE_URL="mysql://nama_root:password@localhost:3306/nama_database?schema=public"

NEXT_PUBLIC_JWT_SECRET=***********
```

### Install dependencies

```bash
pnpm install
```

## Available scripts

### Running apps with DOCKER (OPTIONAL)

```bash
docker compose up -d
```

### Run apps

```bash
npm run dev
```
```bash
npm run build
```
```bash
npm run start
```