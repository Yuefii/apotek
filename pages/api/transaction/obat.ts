import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { kode_obat, jumlah_tambah, tanggal_tambah } = req.body;
        const parsedDate = new Date(tanggal_tambah);

        const lastTransaction = await prisma.transaksi_obat.findFirst({
            orderBy: { kode_transaksi: 'desc' },
        });

        const lastId = lastTransaction ? parseInt(lastTransaction.kode_transaksi.substring(5)) : 0
        const nextId = lastId + 1
        const kode_transaksi = 'TROBT' + nextId.toString().padStart(5, '0')

        const newTransaksi = await prisma.transaksi_obat.create({
            data: {
                kode_transaksi,
                obat: {
                    connect: { kode_obat },
                },
                jumlah_tambah,
                tanggal_tambah: parsedDate,
            },
        });
        // console.log(newTransaksi);
        

        const obat = await prisma.obat.update({
            where: { kode_obat },
            data: {
                stok: {
                    increment: jumlah_tambah,
                },
            },
        });
        // console.log(obat);

        res.status(201).json({ newTransaksi, obat });
    } else {
        res.status(405).json(`Method Not Allowed`);
    }
}
