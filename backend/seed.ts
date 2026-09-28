import { PrismaClient } from './generated/prisma/client/index.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const sql = fs.readFileSync(path.join(process.cwd(), 'migrations/0001_initial_schema.sql'), 'utf-8');
  
  // Basic split by semicolon to execute queries one by one
  const queries = sql.split(';').map(s => s.trim()).filter(Boolean);
  
  for (const query of queries) {
    if (query) {
      // Prisma $executeRawUnsafe doesn't like multiple statements, so we split
      await prisma.$executeRawUnsafe(query);
    }
  }
  
  console.log("Database seeded successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
