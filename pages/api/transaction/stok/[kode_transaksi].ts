import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { kode_transaksi }: any = req.query
    if (req.method === 'GET') {
        const transaksi_obat = await prisma.transaksi_obat.findUnique({
            where: { kode_transaksi: kode_transaksi },
        })
        // console.log(obat);

        if (transaksi_obat) {
            res.json({ data: transaksi_obat })
        } else {
            res.status(404).json({ message: 'Obat tidak ditemukan' })
        }
    } else {
        res.status(405).json({ message: 'Metode not allowed' });
    }
}