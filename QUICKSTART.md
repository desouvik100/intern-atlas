# 🚀 Quick Start - Authentication Setup

Get your InternAtlas authentication up and running in 5 minutes!

## 📋 Prerequisites

- ✅ Node.js v18+ installed
- ✅ Database URL ready (already configured in `.env`)
- ✅ Terminal/PowerShell open

## ⚡ 3-Step Setup

### Step 1: Backend Setup (2 minutes)

```powershell
cd d:\intern-atlas2\intern-atlas\backend
npm install
npm run prisma:generate
npm run prisma:migrate
```

**What this does:**
- Installs dependencies (bcryptjs, prisma, pg, etc.)
- Generates Prisma client from schema
- Applies database migration (creates Student and AuthSession tables)

### Step 2: Frontend Setup (1 minute)

```powershell
cd d:\intern-atlas2\intern-atlas\frontend
npm install
```

**What this does:**
- Installs Next.js and React dependencies
- Links backend package

**⚠️ Important:** The `.env.local` file has already been created with the DATABASE_URL. If you see a "DATABASE_URL is not configured" error, restart the dev server.

### Step 3: Start Server (30 seconds)

```powershell
npm run dev
```

**What this does:**
- Starts Next.js dev server on port 3000

## ✨ You're Done!

Visit: **http://localhost:3000/signup**

## 🧪 Quick Test

### Create a Student Account
1. Go to http://localhost:3000/signup
2. Select **Student**
3. Enter:
   - Name: `Test Student`
   - Email: `student@test.com`
   - Password: `password123`
   - Confirm: `password123`
4. Click **Sign up**
5. ✅ You should see the student dashboard!

### Try Logout and Login
1. Click **Log out**
2. Go to http://localhost:3000/login
3. Enter same credentials
4. ✅ Should login successfully!

## 📚 More Info

- **Full Documentation**: See `AUTH_IMPLEMENTATION.md`
- **Detailed Setup**: See `SETUP_COMMANDS.md`
- **Summary**: See `IMPLEMENTATION_SUMMARY.md`

## ❌ Troubleshooting

**"DATABASE_URL is not configured" error?**
- The `.env.local` has been updated with DATABASE_URL
- Stop the dev server (Ctrl+C)
- Restart: `npm run dev`
- See `FIX_DATABASE_ERROR.md` for details

**"Module not found" error?**
```powershell
cd d:\intern-atlas2\intern-atlas\backend
npm run prisma:generate
```

**"Cannot connect to database"?**
- Check `backend/.env` has correct DATABASE_URL

**Still having issues?**
- See `SETUP_COMMANDS.md` for detailed troubleshooting

## 🎯 What You Get

- ✅ Student & Employer signup
- ✅ Secure login/logout
- ✅ Role-based dashboards
- ✅ Protected API endpoints
- ✅ Session management
- ✅ Password hashing
- ✅ Mobile-responsive UI

## 🔐 Security Features

- HttpOnly cookies
- bcrypt password hashing
- SHA-256 session tokens
- Role-based access control
- Server-side authorization
- Input validation

---

**Need help?** Check the documentation files or review terminal output for errors.

**Ready for more?** See `AUTH_IMPLEMENTATION.md` for advanced features and security details.
