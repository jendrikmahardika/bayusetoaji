// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

// Buat caching Prisma supaya ga bikin multiple instances di dev
declare global {
  var prisma: PrismaClient | undefined;
}

export const db =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // optional, bisa dihapus kalau ga mau log query
  });

// Hanya assign ke global di development supaya hot reload aman
if (process.env.NODE_ENV !== 'production') global.prisma = db;
