# ✅ Railway Deployment Checklist

Quick reference for deploying to Railway.

## Pre-Deployment

- [ ] All code committed to Git
- [ ] Pushed to GitHub
- [ ] Database migration tested locally
- [ ] Authentication tested locally

## Railway Setup

### 1. Create Project
- [ ] Sign in to https://railway.app
- [ ] Create new project from GitHub
- [ ] Select `intern-atlas` repo
- [ ] Select `feature/signup-login` branch
- [ ] Set root directory to `frontend`

### 2. Environment Variables

Add these in Railway dashboard → Variables:

```bash
DATABASE_URL=postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require

NODE_ENV=production

NEXT_PUBLIC_API_URL=https://YOUR-APP.up.railway.app
```

- [ ] `DATABASE_URL` added
- [ ] `NODE_ENV=production` added
- [ ] `NEXT_PUBLIC_API_URL` added (update after first deploy)

### 3. Configure Build

Verify Railway settings:

- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm run start`
- [ ] Root directory: `frontend`

### 4. Run Migration

**Option A - Railway CLI:**
```powershell
npm install -g @railway/cli
railway login
railway link
cd backend
railway run npm run prisma:migrate
```

**Option B - Local:**
```powershell
cd backend
$env:DATABASE_URL="your-neon-url"
npx prisma migrate deploy
```

- [ ] Migration command executed
- [ ] Tables created in database

### 5. Deploy & Test

- [ ] First deployment successful
- [ ] Update `NEXT_PUBLIC_API_URL` with actual Railway URL
- [ ] Redeploy after URL update
- [ ] Visit signup page
- [ ] Create test student account
- [ ] Login works
- [ ] Create test employer account
- [ ] Sessions persist

## Post-Deployment

- [ ] Test all auth flows in production
- [ ] Check logs for errors: `railway logs`
- [ ] Verify HTTPS is working
- [ ] Test on mobile devices
- [ ] Share URL with team

## Quick Commands

```powershell
# View logs
railway logs --follow

# Check status
railway status

# View variables
railway variables

# Run command in Railway environment
railway run <command>
```

## Common Issues

**Build fails?**
- Check Railway logs
- Verify all dependencies in package.json

**"DATABASE_URL not configured"?**
- Check environment variables in Railway dashboard
- Verify variable name is exact: `DATABASE_URL`

**Auth not working?**
- Check `NODE_ENV=production` is set
- Check `NEXT_PUBLIC_API_URL` matches Railway domain
- Verify migration was applied

**Need to rollback?**
- Railway dashboard → Deployments → Click previous deployment → "Rollback"

---

**Pro Tip:** Use `railway logs` to watch real-time logs during deployment and testing!
