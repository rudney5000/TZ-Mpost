// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// const prisma = new PrismaClient();

const prisma = require('../../lib/db');

// Define a schema for input validation

const userSchema = z.object({
  username: z.string().min(1, 'User is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid Email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 caracters'),
})

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { username, email, password } = userSchema.parse(req.body);

      const hashedPassword = await bcrypt.hash(password, 10);

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
      }

      // Créer un nouvel utilisateur
      const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
          },
      });

      res.status(200).json({
        message: 'Utilisateur créé avec succès',
        data: { username: newUser },
      });
    } else {
      res.status(405).json({
        message: 'Méthode non autorisée',
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

// localhost:3000/api/hello