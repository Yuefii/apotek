// pages/api/auth/login.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required.' });
        }

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.NEXT_PUBLIC_JWT_SECRET || "", {
            expiresIn: '12h',
        });

        return res.status(200).json({ token });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
