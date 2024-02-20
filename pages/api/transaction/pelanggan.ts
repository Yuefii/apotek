import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { tanggal_transaksi, total_pembayaran, transaksi } = req.body;

        const parsedDate = new Date(tanggal_transaksi);

        if (!Array.isArray(transaksi) || transaksi.length === 0 || transaksi.some(item => !item.kode_obat || !item.jumlah)) {
            return res.status(400).json({ message: 'Invalid transaction data. Please provide valid data.' });
        }

        const lastTransaction = await prisma.transaksi_pelanggan.findFirst({
            orderBy: { kode_pelanggan: 'desc' },
        });

        let kode_pelanggan;

        if (lastTransaction) {
            const lastId = parseInt(lastTransaction.kode_pelanggan.substring(5)) || 0;
            kode_pelanggan = 'TRPLG' + (lastId + 1).toString().padStart(5, '0');
        } else {
            kode_pelanggan = 'TRPLG00001'; // Jika tidak ada transaksi_pelanggan sebelumnya
        }

        const newTransactions = await Promise.all(transaksi.map(async (item) => {
            const { kode_obat, jumlah: itemJumlah } = item;

            const newTransaction = await prisma.transaksi_pelanggan.create({
                data: {
                    kode_pelanggan,
                    jumlah: itemJumlah,
                    tanggal_transaksi: parsedDate,
                    total_pembayaran: parseInt(total_pembayaran),
                    obat: {
                        connect: { kode_obat }
                    },
                },
            });

            await prisma.obat.update({
                where: { kode_obat },
                data: {
                    stok: {
                        decrement: itemJumlah
                    }
                }
            });

            return newTransaction;
        }));

        res.status(201).json({ message: 'Transaction successful', transactions: newTransactions });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
