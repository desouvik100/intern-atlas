#!/usr/bin/env node

/**
 * Post-install script to generate Prisma client during Railway deployment
 * This ensures Prisma client is generated before building the Next.js app
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Running post-install script...');

const backendPath = path.join(__dirname, '..', 'backend');

// Check if backend directory exists
if (!fs.existsSync(backendPath)) {
  console.log('⚠️  Backend directory not found, skipping Prisma generation');
  process.exit(0);
}

try {
  console.log('📦 Installing backend dependencies...');
  execSync('npm install', {
    cwd: backendPath,
    stdio: 'inherit',
  });

  console.log('✨ Generating Prisma client...');
  execSync('npm run prisma:generate', {
    cwd: backendPath,
    stdio: 'inherit',
  });

  console.log('✅ Prisma client generated successfully!');
} catch (error) {
  console.error('❌ Error during post-install:', error.message);
  // Don't fail the build, just warn
  console.warn('⚠️  Continuing anyway...');
}
