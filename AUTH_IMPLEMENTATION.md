# InternAtlas Authentication Implementation

## Overview

This document describes the complete authentication system implemented for InternAtlas, supporting both **Students** and **Employers** with secure session management.

## Features Implemented

### ✅ Core Authentication
- Student and Employer signup with email/password
- Login with role-based authentication
- Secure logout with session revocation
- Server-side session management with database persistence
- Password hashing with bcrypt (12 rounds)
- Cryptographically secure session tokens (SHA-256 hashed)

### ✅ Security Features
- HttpOnly cookies for session storage
- SameSite=Lax cookie protection
- Secure flag in production
- 30-day session expiration
- Session revocation support
- CSRF protection via SameSite cookies
- No tokens in localStorage/sessionStorage
- Password validation (min 8 characters)
- Email normalization and validation
- Generic error messages (no information leakage)

### ✅ Authorization
- Role-based access control (Student/Employer)
- Protected API endpoints with ownership verification
- Server-side authentication checks
- Employer can only access their own resources
- Student/Employer dashboard separation

### ✅ UI Components
- Responsive signup page with role selector
- Responsive login page with role selector
- Password visibility toggle
- Client-side validation with server-side enforcement
- Loading and error states
- Accessible forms with proper labels
- Mobile-responsive design

### ✅ Protected Routes
- Student dashboard (`/student/dashboard`)
- Employer dashboard (`/employer/dashboard`)
- Employer profile page (`/employer/profile`)
- API authentication middleware

## Database Schema

### Student Model
```prisma
model Student {
  id           Int      @id @default(autoincrement())
  email        String   @unique
  passwordHash String
  name         String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  sessions     AuthSession[]
}
```

### AuthSession Model
```prisma
model AuthSession {
  id             String   @id @default(cuid())
  sessionToken   String   @unique
  role           String
  expiresAt      DateTime
  createdAt      DateTime @default(now())
  revokedAt      DateTime?
  studentId      Int?
  student        Student?  @relation(fields: [studentId], references: [id], onDelete: Cascade)
  employerId     Int?
  employer       Employer? @relation(fields: [employerId], references: [id], onDelete: Cascade)
}
```

### Employer Model (Updated)
- Added `sessions` relation to `AuthSession`
- Existing fields preserved

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account (student or employer)
- `POST /api/auth/login` - Login with email/password/role
- `POST /api/auth/logout` - Revoke session and clear cookie
- `GET /api/auth/me` - Get current authenticated user

### Protected Employer Endpoints
- `GET /api/employers/[id]` - Get employer profile (own only)
- `PATCH /api/employers/[id]` - Update employer profile (own only)
- `POST /api/internships` - Create internship (employer only)
- `PATCH /api/internships/[slug]` - Update internship (owner only)
- `DELETE /api/internships/[slug]` - Delete internship (owner only)
- `GET /api/internships/[slug]/applications` - List applications (owner only)
- `PATCH /api/applications/[id]/status` - Update application status (owner only)

### Public Endpoints
- `GET /api/internships` - List all active internships
- `GET /api/internships/[slug]` - Get single internship
- `POST /api/applications` - Submit application (public)

## File Structure

```
backend/
├── src/
│   ├── auth.ts                # Core authentication logic
│   ├── auth-helpers.ts        # Authorization helpers
│   ├── api.ts                 # API handlers (updated)
│   ├── internship-db.ts       # Database queries (updated)
│   └── types.ts               # TypeScript types (updated)
├── prisma/
│   ├── schema.prisma          # Database schema (updated)
│   └── migrations/
│       └── 20261010000000_add_auth_models/
│           └── migration.sql  # Auth tables migration
├── .env                       # Environment variables
└── package.json               # Scripts and dependencies (updated)

frontend/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── signup/route.ts
│   │   │       ├── login/route.ts
│   │   │       ├── logout/route.ts
│   │   │       └── me/route.ts
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── student/
│   │   │   └── dashboard/
│   │   │       └── page.tsx
│   │   └── employer/
│   │       ├── dashboard/
│   │       │   └── page.tsx
│   │       └── profile/
│   │           └── page.tsx
│   └── components/
│       └── layout/
│           └── Header.tsx         # Already has signup/login links
└── .env.local                     # Frontend environment variables
```

## Setup Instructions

### Prerequisites
- Node.js v18+ installed
- PostgreSQL database (Neon or local)
- npm or yarn package manager

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Configure Environment Variables

Backend `.env` file already created with:
```
DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"
NODE_ENV="development"
```

Frontend `.env.local` file already created with:
```
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 3. Run Database Migration

```bash
cd backend
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Apply migrations to database
```

Or manually:
```bash
cd backend
npx prisma generate
npx prisma migrate deploy
```

### 4. Start Development Server

```bash
cd frontend
npm run dev
```

Visit: http://localhost:3000

## Testing Instructions

### Manual Testing

#### Student Signup/Login
1. Visit http://localhost:3000/signup
2. Select "Student" role
3. Fill in: Name, Email, Password, Confirm Password
4. Click "Sign up"
5. Should redirect to `/student/dashboard`
6. Verify student name and email displayed
7. Click "Log out"
8. Visit `/login`, login as student
9. Should redirect to dashboard

#### Employer Signup/Login
1. Visit http://localhost:3000/signup
2. Select "Employer" role
3. Fill in credentials
4. Click "Sign up"
5. Should redirect to `/employer/dashboard`
6. Verify employer name, email, and pending status displayed
7. Visit `/employer/profile`
8. Verify profile information loads
9. Click "Log out"

#### Authorization Testing
1. Login as Student
2. Try to access `/employer/dashboard` (should redirect to student dashboard)
3. Try to POST to `/api/internships` (should get 401/403)
4. Logout, login as Employer
5. Try to access `/student/dashboard` (should redirect to employer dashboard)

#### Session Persistence
1. Login as any user
2. Close browser
3. Reopen and visit the site
4. Should still be logged in (session persists)

#### Error Handling
1. Try to signup with existing email (should show error)
2. Try to login with wrong password (should show "Invalid credentials")
3. Try to login with wrong role (should show "Invalid credentials")
4. Try short password (should show validation error)
5. Try mismatched passwords on signup (should show error)

### API Testing with curl

```bash
# Signup Student
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Student",
    "email": "student@test.com",
    "password": "password123",
    "passwordConfirm": "password123",
    "role": "student"
  }' -v

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@test.com",
    "password": "password123",
    "role": "student"
  }' -v

# Get current user (with cookie from login)
curl http://localhost:3000/api/auth/me \
  -H "Cookie: session=YOUR_SESSION_TOKEN"

# Logout
curl -X POST http://localhost:3000/api/auth/logout \
  -H "Cookie: session=YOUR_SESSION_TOKEN"
```

## Security Considerations

### Implemented
✅ Passwords hashed with bcrypt (12 rounds)
✅ Session tokens are SHA-256 hashed before storage
✅ HttpOnly cookies prevent XSS attacks
✅ SameSite cookies prevent CSRF attacks
✅ Secure flag enabled in production
✅ Session expiration (30 days)
✅ Session revocation on logout
✅ Email normalization (lowercase, trimmed)
✅ Password validation (min length, max length)
✅ Rate limiting via generic error messages
✅ No password hashes in API responses
✅ Server-side authorization checks
✅ Ownership verification for resources
✅ Role-based access control

### Not Implemented (Future Enhancements)
- Email verification
- Password reset flow
- Two-factor authentication (2FA)
- Account lockout after failed attempts
- IP-based rate limiting
- Session rotation after privilege changes
- Remember me functionality
- Account deletion
- Admin role and permissions

## Database Migration Details

Migration file: `backend/prisma/migrations/20261010000000_add_auth_models/migration.sql`

This migration:
1. Creates `Student` table with email uniqueness
2. Creates `AuthSession` table with token hashing
3. Adds foreign keys to Student and Employer
4. Adds indexes for performance
5. Enables cascade deletion of sessions

**Safe to run**: This is an additive migration. It does not:
- Drop any existing tables
- Modify existing columns
- Delete any data
- Break existing functionality

## Environment Variables Required

### Backend (`backend/.env`)
```bash
DATABASE_URL="postgresql://..."  # PostgreSQL connection string
NODE_ENV="development"           # or "production"
```

### Frontend (`frontend/.env.local`)
```bash
NEXT_PUBLIC_API_URL="http://localhost:3000"  # API base URL
```

## Known Limitations

1. **No email verification**: Accounts are active immediately upon signup
2. **No password reset**: Users cannot reset forgotten passwords
3. **No profile editing UI**: Employer profile page is read-only
4. **No student applications list**: Students cannot view their submitted applications
5. **Manual verification**: Employer verification status is not automated
6. **Session cleanup**: Expired sessions are not automatically deleted from database
7. **No refresh tokens**: Sessions cannot be renewed without re-login

## Next Steps

### Immediate (Required for Production)
1. Add email verification flow
2. Implement password reset functionality
3. Add proper error logging and monitoring
4. Implement rate limiting at infrastructure level
5. Set up session cleanup job (delete expired sessions)
6. Add comprehensive test suite

### Future Enhancements
1. Two-factor authentication (2FA)
2. OAuth integration (Google, LinkedIn)
3. Student application tracking dashboard
4. Employer profile editing interface
5. Account settings and preferences
6. Admin panel for user management
7. Audit logs for security events
8. Session management UI (view/revoke sessions)

## Deployment Considerations

### Cloudflare Workers (Vinext)
The authentication system is designed to work with Cloudflare Workers:

✅ Uses `@prisma/adapter-pg` for PostgreSQL connection pooling
✅ No Node-only APIs in critical paths
✅ Session tokens compatible with edge runtime
✅ Cookie handling works with Cloudflare

### Production Checklist
- [ ] Set `NODE_ENV=production` in environment
- [ ] Use HTTPS (enables Secure cookie flag)
- [ ] Configure proper DATABASE_URL with connection pooling
- [ ] Set up database backups
- [ ] Configure CORS if frontend on different domain
- [ ] Enable error tracking (Sentry, etc.)
- [ ] Set up monitoring and alerts
- [ ] Review and test all protected endpoints
- [ ] Perform security audit
- [ ] Load test authentication endpoints

## Troubleshooting

### "Unable to create account"
- Check DATABASE_URL is correct
- Verify database is accessible
- Check Prisma client is generated
- Look at server console for detailed errors

### "Invalid credentials" on login
- Verify role selection matches signup role
- Check email is exactly as entered during signup
- Passwords are case-sensitive

### Session not persisting
- Check browser allows cookies
- Verify HttpOnly cookies are enabled
- Check SameSite policy compatibility

### Cannot access protected routes
- Clear cookies and re-login
- Check session hasn't expired (30 days)
- Verify correct role for the route

## Support

For issues or questions:
1. Check this documentation
2. Review server console logs
3. Check browser console for client errors
4. Verify environment variables are set correctly
5. Ensure database migrations ran successfully

---

**Implementation Date**: October 10, 2026
**Branch**: `feature/signup-login`
**Status**: ✅ Complete - Ready for Testing
