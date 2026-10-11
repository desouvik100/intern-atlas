# 🚀 Run Database Migration - Manual Steps

The automated script has path issues, so let's run the migration manually. It's just 3 commands!

## Option 1: Using PowerShell (Recommended)

Open PowerShell and run these commands:

```powershell
# Navigate to backend directory
cd d:\intern-atlas2\intern-atlas\backend

# Set environment variable
$env:DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Run migration
npx prisma migrate deploy
```

## Option 2: Using Command Prompt (CMD)

Open Command Prompt and run:

```cmd
cd d:\intern-atlas2\intern-atlas\backend

set DATABASE_URL=postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require

npx prisma migrate deploy
```

## What You Should See

If successful, you'll see:

```
Prisma Migrate applied the following migration(s):

migrations/
  └─ 20261010000000_add_auth_models/
    └─ migration.sql

✔ Generated Prisma Client
```

## ✅ Success Indicators

Migration is successful when you see:
- ✅ "Applied migration" message
- ✅ "Generated Prisma Client" message
- ✅ No error messages

## 🎯 What This Does

This migration creates:
1. **Student** table - For student accounts
2. **AuthSession** table - For secure sessions
3. Updates **Employer** table - Adds session relation

## 🔍 Verify Migration

To check if migration worked, you can:

### Option A: Check Database (Neon Dashboard)
1. Go to https://console.neon.tech
2. Open your database
3. Check Tables section
4. You should see: `Student`, `AuthSession`, `Employer`, etc.

### Option B: Query from Backend
```powershell
cd d:\intern-atlas2\intern-atlas\backend
npx prisma studio
```
This opens a database browser at http://localhost:5555

## ❌ If You See Errors

### Error: "Can't reach database server"
- Check your internet connection
- Verify the DATABASE_URL is correct
- Database might be paused (wake it up in Neon dashboard)

### Error: "Migration has already been applied"
- This is fine! It means migration already ran successfully
- Skip to testing your app

### Error: "Column already exists"
- Migration might have partially run
- Check Neon dashboard to see what exists
- You may need to manually clean up

## 🎉 After Successful Migration

You can now:
1. Start the development server
2. Test signup/login
3. Deploy to Railway (migration is already applied!)

## 🚀 Next Steps

1. **Run Migration** (use commands above)
2. **Start Dev Server**:
   ```powershell
   cd d:\intern-atlas2\intern-atlas\frontend
   npm run dev
   ```
3. **Test Locally**: Visit http://localhost:3000/signup
4. **Push to GitHub**: Use `QUICK_PUSH.bat`
5. **Deploy to Railway**: Migration is already done!

---

**Quick Reference:**

```powershell
# All in one (PowerShell)
cd d:\intern-atlas2\intern-atlas\backend; $env:DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"; npx prisma migrate deploy
```

That's it! Just copy and paste into PowerShell! ⚡
