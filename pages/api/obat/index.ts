import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nama_obat, harga_obat, satuan_obat } = req.body

        // Generate kode_obat
        const lastObat = await prisma.obat.findFirst({
            orderBy: {
                kode_obat: 'desc'
            }
        })
        const lastId = lastObat ? parseInt(lastObat.kode_obat.substring(5)) : 0
        const nextId = lastId + 1
        const kode_obat = 'KDOBT' + nextId.toString().padStart(5, '0')

        const newObat = await prisma.obat.create({
            data: {
                kode_obat,
                nama_obat,
                harga_obat,
                satuan_obat,
            },
        })
        res.json(newObat)
    } else if (req.method === 'GET') {
        const allObat = await prisma.obat.findMany()
        res.json({
            data: allObat
        })
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}