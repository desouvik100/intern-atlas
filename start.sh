#!/bin/bash
set -e

echo "Installing backend dependencies..."
cd backend
npm install

echo "Generating Prisma client..."
npm run generate

echo "Installing frontend dependencies..."
cd ../frontend
npm install

echo "Building Next.js application..."
npm run build

echo "Starting Next.js server..."
npm start
