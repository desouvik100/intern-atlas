# Fix: DATABASE_URL is not configured

## The Issue

You're seeing this error:
```
DATABASE_URL is not configured
```

## The Solution

The frontend needs the DATABASE_URL environment variable. Add it to your frontend `.env.local`:

### Step 1: Stop the dev server
Press `Ctrl+C` in the terminal where `npm run dev` is running.

### Step 2: Verify Frontend .env.local

The file `frontend/.env.local` should now contain:

```bash
NEXT_PUBLIC_API_URL="http://localhost:3000"
DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"
NODE_ENV="development"
```

I've already updated this file for you!

### Step 3: Restart the dev server

```powershell
cd d:\intern-atlas2\intern-atlas\frontend
npm run dev
```

### Step 4: Try signup again

Visit http://localhost:3000/signup and try creating an account again.

## Why This Happened

Next.js API routes (which our auth endpoints are) need access to environment variables. Since we're using the backend package from within Next.js API routes, the DATABASE_URL must be available in the Next.js environment, not just the backend package.

## ✅ Should Work Now!

After restarting the dev server with the updated `.env.local` file, the signup should work successfully!
