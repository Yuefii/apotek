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
            kode_pelanggan = 'TRPLG00001';
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

    } else if (req.method === 'GET') {
        const transactions = await prisma.transaksi_pelanggan.findMany({
            orderBy: { tanggal_transaksi: 'desc' },
            include: {
                obat: {
                    select: {
                        kode_obat: true,
                        nama_obat: true,
                        transaksi_pelanggan: { select: { jumlah: true } }
                    }
                }
            }
        });

        const groupedTransactions = new Map();
        transactions.forEach(transaction => {
            const key = `${transaction.kode_pelanggan}-${transaction.tanggal_transaksi.toISOString()}`;
            if (!groupedTransactions.has(key)) {
                groupedTransactions.set(key, {
                    kode_pelanggan: transaction.kode_pelanggan,
                    tanggal_transaksi: new Date(transaction.tanggal_transaksi).toLocaleDateString('id-ID'),
                    total_pembayaran: transaction.total_pembayaran,
                    obat: []
                });
            }
            transaction.obat.forEach(obat => {
                groupedTransactions.get(key).obat.push({
                    kode_obat: obat.kode_obat,
                    nama_obat: obat.nama_obat,
                });
            });
        });

        const responseData = Array.from(groupedTransactions.values());

        res.status(200).json({ data: responseData });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
