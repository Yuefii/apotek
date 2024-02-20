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
                jumlah_tambah: parseInt(jumlah_tambah),
                tanggal_tambah: parsedDate,
            },
        });
        // console.log(newTransaksi);


        const obat = await prisma.obat.update({
            where: { kode_obat },
            data: {
                stok: {
                    increment: parseInt(jumlah_tambah),
                },
            },
        });
        // console.log(obat);

        res.status(201).json({ newTransaksi, obat });
    } else if (req.method === "GET") {
        const { kode_obat }: any = req.query;

        if (!kode_obat) {
            const allTransaksiObat = await prisma.transaksi_obat.findMany({
                include: {
                    obat: {
                        select: {
                            nama_obat: true,
                            satuan_obat: true
                        }
                    }
                }
            });

            const formattedData = allTransaksiObat.map(transaksiObat => ({
                kode_transaksi: transaksiObat.kode_transaksi,
                kode_obat: transaksiObat.kode_obat,
                jumlah_tambah: transaksiObat.jumlah_tambah,
                tanggal_tambah: new Date(transaksiObat.tanggal_tambah).toLocaleDateString('id-ID'),
                nama_obat: transaksiObat.obat.nama_obat,
                satuan_obat: transaksiObat.obat.satuan_obat
            }));

            res.json({
                data: formattedData
            });
        }

        if (kode_obat) {
            const obat = await prisma.obat.findUnique({
                where: { kode_obat: kode_obat },
            });

            const transaksiObatByKodeObat = await prisma.transaksi_obat.findMany({
                where: { kode_obat: kode_obat },
            });

            const response = {
                kode_obat: obat?.kode_obat,
                nama_obat: obat?.nama_obat,
                data: transaksiObatByKodeObat.map(transaksi => ({
                    kode_transaksi: transaksi.kode_transaksi,
                    jumlah_tambah: transaksi.jumlah_tambah,
                    tanggal_tambah: new Date(transaksi.tanggal_tambah).toLocaleDateString('id-ID'),
                }))
            };

            res.json(response);
        }
    } else {
        res.status(405).json(`Method Not Allowed`);
    }
}
