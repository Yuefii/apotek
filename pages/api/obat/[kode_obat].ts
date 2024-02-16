import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { kode_obat }: any = req.query
  if (req.method === 'GET') {
    const obat = await prisma.obat.findUnique({
      where: { kode_obat: kode_obat },
    })
    // console.log(obat);

    if (obat) {
      res.json(obat)
    } else {
      res.status(404).json({ message: 'Obat tidak ditemukan' })
    }
  } else if (req.method === 'PATCH') {
    const { ...data } = req.body
    const updatedObat = await prisma.obat.update({
      where: { kode_obat: kode_obat },
      data: data,
    })
    // console.log(updatedObat);

    res.json({
      updated: updatedObat
    })
  } else if (req.method === 'DELETE') {
    await prisma.obat.delete({
      where: { kode_obat: kode_obat },
    })
    res.json("obat telah berhasil dihapus")
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
