# 🚂 Deploy InternAtlas to Railway

Complete guide to deploying your authenticated InternAtlas app to Railway.

## 📋 Prerequisites

- ✅ Railway account (sign up at https://railway.app)
- ✅ GitHub account
- ✅ Your code committed to Git
- ✅ Database already set up (you have the Neon PostgreSQL URL)

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub

First, commit all your authentication changes:

```powershell
cd d:\intern-atlas2\intern-atlas

# Stage all changes
git add -A

# Commit with a descriptive message
git commit -m "feat: Add complete authentication system for students and employers"

# Push to GitHub (make sure you have a remote set up)
git push origin feature/signup-login
```

**Don't have a GitHub remote yet?**
```powershell
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/intern-atlas.git
git push -u origin feature/signup-login
```

### Step 2: Create Railway Project

1. Go to https://railway.app
2. Click **"Start a New Project"**
3. Choose **"Deploy from GitHub repo"**
4. Select your `intern-atlas` repository
5. Choose the `feature/signup-login` branch

### Step 3: Configure Build Settings

Railway should auto-detect Next.js, but verify these settings:

#### Root Directory
- Set to: `frontend` (if Railway doesn't auto-detect)

#### Build Command
```bash
npm install && npm run build
```

#### Start Command
```bash
npm run start
```

### Step 4: Add Environment Variables

In Railway dashboard, go to your project → **Variables** tab and add:

#### Required Variables:

```bash
DATABASE_URL=postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require

NODE_ENV=production

NEXT_PUBLIC_API_URL=${{RAILWAY_PUBLIC_DOMAIN}}
```

**Important Notes:**
- Replace `${{RAILWAY_PUBLIC_DOMAIN}}` with your actual Railway URL after first deploy
- Or use Railway's variable reference: `https://${{RAILWAY_PUBLIC_DOMAIN}}`
- The `DATABASE_URL` is your existing Neon PostgreSQL database

### Step 5: Run Database Migration

Before your app works, you need to apply the database migration. You have two options:

#### Option A: Via Railway CLI (Recommended)

1. Install Railway CLI:
```powershell
npm install -g @railway/cli
```

2. Login:
```powershell
railway login
```

3. Link to your project:
```powershell
railway link
```

4. Run migration:
```powershell
cd d:\intern-atlas2\intern-atlas\backend
railway run npm run prisma:migrate
```

#### Option B: Via Local Machine

```powershell
cd d:\intern-atlas2\intern-atlas\backend

# Use your production DATABASE_URL
$env:DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"

npx prisma migrate deploy
```

### Step 6: Deploy!

Railway will automatically deploy when you push to GitHub. You can also trigger manual deployments from the dashboard.

**Deployment URL:** Railway will provide a URL like `your-app.up.railway.app`

### Step 7: Update NEXT_PUBLIC_API_URL

After first deploy:

1. Copy your Railway deployment URL
2. Go to Railway dashboard → Variables
3. Update `NEXT_PUBLIC_API_URL` to your Railway URL:
   ```
   NEXT_PUBLIC_API_URL=https://your-app.up.railway.app
   ```
4. Railway will automatically redeploy

### Step 8: Test Production Deployment

Visit your Railway URL and test:

- ✅ Visit `/signup` - Should load
- ✅ Create a student account
- ✅ Login should work
- ✅ Dashboard should display
- ✅ Logout should work
- ✅ Create employer account
- ✅ Employer dashboard should work

## 🎯 Post-Deployment Checklist

- [ ] Signup page loads
- [ ] Can create student accounts
- [ ] Can create employer accounts
- [ ] Login works for both roles
- [ ] Sessions persist (close browser, reopen)
- [ ] Logout works
- [ ] Protected routes redirect to login
- [ ] Employer can access profile page
- [ ] Public internship browsing works
- [ ] HTTPS is enabled (automatic with Railway)

## 🔧 Railway Configuration Files

### Optional: Add railway.json

Create `frontend/railway.json` for better control:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm run start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Optional: Add .railwayignore

Create `.railwayignore` to exclude unnecessary files:

```
node_modules
.git
.env
.env.local
*.md
backend/node_modules
*.log
.next
```

## 🐛 Troubleshooting

### "DATABASE_URL is not configured" in production

**Solution:** Make sure `DATABASE_URL` is set in Railway environment variables.

```bash
# Check variables in Railway dashboard
# Should see: DATABASE_URL, NODE_ENV, NEXT_PUBLIC_API_URL
```

### Build fails with "Module not found"

**Solution:** Ensure all dependencies are in package.json, not just devDependencies.

Check `frontend/package.json` has:
- `@internatlas/backend` in dependencies
- All required packages installed

### Prisma Client not generated

**Solution:** Add a build step to generate Prisma client.

Update `frontend/package.json`:
```json
{
  "scripts": {
    "build": "npm run prisma:generate && next build",
    "prisma:generate": "cd ../backend && npm run prisma:generate"
  }
}
```

Or add a separate build command in Railway:
```bash
cd ../backend && npm run prisma:generate && cd ../frontend && npm run build
```

### Authentication works locally but not in production

**Check:**
1. `NODE_ENV=production` is set
2. HTTPS is enabled (Railway does this automatically)
3. `NEXT_PUBLIC_API_URL` points to your Railway domain
4. Database migration has been applied
5. Check Railway logs for errors

### Sessions not persisting in production

**Check:**
1. Cookies are being set (check browser DevTools → Application → Cookies)
2. `Secure` flag is set (automatic when `NODE_ENV=production`)
3. `SameSite=Lax` allows cookies
4. No CORS issues (should be fine since frontend and API are same domain)

### 500 Internal Server Error

**Check Railway Logs:**
```powershell
railway logs
```

Common issues:
- Database connection failed
- Prisma client not generated
- Environment variables missing
- Migration not applied

## 📊 Monitoring

### View Logs
```powershell
railway logs --follow
```

### Check Deployment Status
```powershell
railway status
```

### View Environment Variables
```powershell
railway variables
```

## 🔒 Security Checklist for Production

- [x] `NODE_ENV=production` (enables Secure cookies)
- [x] HTTPS enabled (Railway does this automatically)
- [x] Database URL uses SSL (`?sslmode=require`)
- [x] HttpOnly cookies (already implemented)
- [x] SameSite=Lax cookies (already implemented)
- [x] Password hashing with bcrypt (already implemented)
- [x] Session tokens hashed (already implemented)
- [ ] Consider adding rate limiting (future enhancement)
- [ ] Set up monitoring/alerts
- [ ] Configure error tracking (Sentry, etc.)

## 💡 Pro Tips

### 1. Use Railway's PostgreSQL (Optional)

Instead of external Neon database, you can use Railway's PostgreSQL:

1. In Railway dashboard, click **"+ New"**
2. Select **"Database" → "PostgreSQL"**
3. Railway will automatically set `DATABASE_URL`
4. Run migration: `railway run npm run prisma:migrate`

### 2. Set Up Preview Environments

Railway automatically creates preview deployments for PRs:

1. Go to Settings → Deployments
2. Enable "PR Deployments"
3. Each PR gets its own URL for testing

### 3. Custom Domain

1. Go to Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `internatlas.com`)
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_API_URL` to your custom domain

### 4. Environment-specific Configs

For multiple environments (staging, production):

1. Create separate Railway projects
2. Use different branches
3. Set different environment variables per project

## 🎉 Success!

Your InternAtlas app with authentication should now be live on Railway!

**Next steps:**
1. Test all authentication flows in production
2. Share the URL with team members
3. Consider adding custom domain
4. Set up monitoring and error tracking
5. Plan for additional features (email verification, password reset)

## 📚 Additional Resources

- **Railway Docs**: https://docs.railway.app
- **Railway CLI**: https://docs.railway.app/develop/cli
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Prisma with Railway**: https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-railway

## 🆘 Need Help?

- **Railway Discord**: https://discord.gg/railway
- **Railway Status**: https://status.railway.app
- **Check logs**: `railway logs` for error details

---

**Deployment Guide Version**: 1.0  
**Last Updated**: October 10, 2026  
**Status**: ✅ Ready for Production
