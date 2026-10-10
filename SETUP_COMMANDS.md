# Setup Commands - Run These Manually

Since the automated setup script has path issues, please run these commands manually in order:

## 1. Backend Setup

Open PowerShell or Command Prompt and run:

```powershell
cd d:\intern-atlas2\intern-atlas\backend
npm install
npm install --save-dev @types/bcryptjs
npm run prisma:generate
npm run prisma:migrate
```

Expected output:
- npm install should complete without errors
- prisma:generate should create client files in `backend/generated/`
- prisma:migrate should apply the migration to your database

## 2. Frontend Setup

```powershell
cd d:\intern-atlas2\intern-atlas\frontend
npm install
```

## 3. Start Development Server

```powershell
cd d:\intern-atlas2\intern-atlas\frontend
npm run dev
```

Then visit: http://localhost:3000

## 4. Test the Authentication

### Test Student Signup:
1. Visit http://localhost:3000/signup
2. Select "Student"
3. Enter:
   - Name: Test Student
   - Email: student@test.com
   - Password: password123
   - Confirm Password: password123
4. Click "Sign up"
5. Should redirect to `/student/dashboard`

### Test Employer Signup:
1. Visit http://localhost:3000/signup  
2. Select "Employer"
3. Enter credentials
4. Should redirect to `/employer/dashboard`

### Test Login:
1. Click "Log out" from dashboard
2. Visit http://localhost:3000/login
3. Enter your credentials
4. Should redirect to appropriate dashboard

## Troubleshooting

### If Prisma Generate Fails:
```powershell
cd d:\intern-atlas2\intern-atlas\backend
npx prisma generate
```

### If Migration Fails:
Check that:
1. DATABASE_URL in `backend/.env` is correct
2. Database is accessible
3. You have permission to create tables

Try manual migration:
```powershell
cd d:\intern-atlas2\intern-atlas\backend
npx prisma migrate deploy
```

### If You See TypeScript Errors:
The Prisma client needs to be generated first. Make sure step 1 completed successfully.

### If "Module not found" errors:
```powershell
# Clean install
cd d:\intern-atlas2\intern-atlas\backend
rm -r node_modules
rm package-lock.json
npm install

cd ..\frontend
rm -r node_modules  
rm package-lock.json
npm install
```

## Verification Checklist

- [ ] Backend dependencies installed
- [ ] @types/bcryptjs installed
- [ ] Prisma client generated (check `backend/generated/prisma/` exists)
- [ ] Database migration applied (check database has `Student` and `AuthSession` tables)
- [ ] Frontend dependencies installed
- [ ] Dev server starts without errors
- [ ] Can access http://localhost:3000
- [ ] Signup page loads
- [ ] Login page loads
- [ ] Can create student account
- [ ] Can create employer account
- [ ] Can login
- [ ] Dashboard displays user info
- [ ] Logout works

## Quick Test Script

After setup, you can test the API directly:

```powershell
# Test signup
curl -X POST http://localhost:3000/api/auth/signup `
  -H "Content-Type: application/json" `
  -d '{\"name\":\"Test User\",\"email\":\"test@example.com\",\"password\":\"password123\",\"passwordConfirm\":\"password123\",\"role\":\"student\"}'

# Test login  
curl -X POST http://localhost:3000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"test@example.com\",\"password\":\"password123\",\"role\":\"student\"}'
```

## Files Created

### Backend:
- `backend/src/auth.ts` - Authentication logic
- `backend/src/auth-helpers.ts` - Authorization helpers
- `backend/.env` - Environment variables
- `backend/prisma/schema.prisma` - Updated with Student and AuthSession models
- `backend/prisma/migrations/20261010000000_add_auth_models/` - Database migration

### Frontend:
- `frontend/src/app/api/auth/signup/route.ts` - Signup API
- `frontend/src/app/api/auth/login/route.ts` - Login API
- `frontend/src/app/api/auth/logout/route.ts` - Logout API
- `frontend/src/app/api/auth/me/route.ts` - Get current user API
- `frontend/src/app/signup/page.tsx` - Signup page
- `frontend/src/app/login/page.tsx` - Login page
- `frontend/src/app/student/dashboard/page.tsx` - Student dashboard
- `frontend/src/app/employer/dashboard/page.tsx` - Employer dashboard
- `frontend/src/app/employer/profile/page.tsx` - Employer profile
- `frontend/.env.local` - Frontend environment variables

### Documentation:
- `AUTH_IMPLEMENTATION.md` - Complete implementation documentation
- `SETUP_COMMANDS.md` - This file
- `.env.example` - Environment variable template

## Next Steps After Setup

1. Test all authentication flows
2. Review `AUTH_IMPLEMENTATION.md` for detailed documentation
3. Check protected API endpoints work correctly
4. Verify role-based authorization
5. Test session persistence
6. Consider adding tests (see AUTH_IMPLEMENTATION.md for test ideas)

## Getting Help

If you encounter issues:
1. Check browser console for errors
2. Check terminal where `npm run dev` is running for server errors
3. Verify DATABASE_URL is correct in `backend/.env`
4. Ensure all dependencies installed successfully
5. Try clean install (see Troubleshooting section)
