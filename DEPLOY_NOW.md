# 🚀 Deploy to Railway NOW - 5 Minutes

The fastest way to get your app live on Railway.

## Before You Start

You need:
- ✅ Railway account → https://railway.app (free tier is fine)
- ✅ GitHub account
- ✅ Your code committed

## Step-by-Step Deployment

### 1️⃣ Commit & Push (2 minutes)

```powershell
cd d:\intern-atlas2\intern-atlas

# Commit everything
git add -A
git commit -m "feat: Complete authentication system ready for deployment"

# Push to GitHub
git push origin feature/signup-login
```

**First time?** Create GitHub repo and push:
```powershell
# On GitHub: Create new repository "intern-atlas"
git remote add origin https://github.com/YOUR_USERNAME/intern-atlas.git
git push -u origin feature/signup-login
```

### 2️⃣ Create Railway Project (1 minute)

1. Go to **https://railway.app**
2. Click **"New Project"**
3. Choose **"Deploy from GitHub repo"**
4. Select **"intern-atlas"** repository
5. Railway will start deploying automatically

### 3️⃣ Add Environment Variables (1 minute)

In Railway dashboard, click on your project → **Variables** tab:

**Add these 3 variables:**

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | `postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require` |
| `NODE_ENV` | `production` |
| `NEXT_PUBLIC_API_URL` | `https://${{RAILWAY_PUBLIC_DOMAIN}}` |

Click **"Add"** after each one.

> **Note:** Railway will automatically replace `${{RAILWAY_PUBLIC_DOMAIN}}` with your actual URL!

### 4️⃣ Configure Build (30 seconds)

In Railway → Settings:

- **Root Directory**: Leave empty or set to `frontend`
- **Build Command**: (should auto-detect)
- **Start Command**: (should auto-detect)

Railway should detect these automatically from package.json!

### 5️⃣ Run Database Migration (1 minute)

**Option A - Quick (Recommended):**

Install Railway CLI and run migration:

```powershell
# Install CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Run migration
cd backend
railway run npx prisma migrate deploy
```

**Option B - Manual:**

```powershell
cd d:\intern-atlas2\intern-atlas\backend

# Set the DATABASE_URL temporarily
$env:DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Run migration
npx prisma migrate deploy
```

### 6️⃣ Deploy! (Railway does this automatically)

Railway will:
- ✅ Install dependencies
- ✅ Generate Prisma client
- ✅ Build your Next.js app
- ✅ Start the server
- ✅ Give you a URL like `intern-atlas.up.railway.app`

**Watch it happen:** Check the **"Deployments"** tab in Railway dashboard.

### 7️⃣ Test Your Live App! (30 seconds)

Click on your Railway URL (looks like `https://your-app.up.railway.app`)

**Test these:**
- ✅ Visit `/signup` 
- ✅ Create a student account
- ✅ Login
- ✅ Logout
- ✅ Create an employer account

## 🎉 You're Live!

Your app is now deployed with:
- ✅ HTTPS (automatic)
- ✅ Secure authentication
- ✅ Database connected
- ✅ Sessions working
- ✅ Auto-redeploy on Git push

## 🔧 What If Something Goes Wrong?

### Build Failed?

**Check Railway logs:**
- Go to your project
- Click "Deployments"
- Click the failed deployment
- View logs

**Common fixes:**
```powershell
# Make sure all files are committed
git status
git add -A
git commit -m "fix: Add missing files"
git push
```

### "DATABASE_URL not configured"?

**Fix:** Check environment variables in Railway dashboard:
1. Click your project
2. Go to "Variables" tab
3. Make sure `DATABASE_URL` is there
4. Click "Redeploy" if you just added it

### Authentication Not Working?

**Checklist:**
- [ ] `NODE_ENV=production` is set in Railway variables
- [ ] `NEXT_PUBLIC_API_URL` is set correctly
- [ ] Database migration was run
- [ ] Check Railway logs for errors

### Need to Restart?

**In Railway dashboard:**
- Go to your project
- Click the three dots (•••)
- Click "Restart"

## 📱 Monitor Your App

### View Real-time Logs
```powershell
railway logs --follow
```

### Check Deployment Status
```powershell
railway status
```

### Redeploy Manually
Just push to GitHub and Railway auto-deploys!

```powershell
git push origin feature/signup-login
```

## 🎯 Post-Deployment Tasks

### 1. Share Your URL
Your app is live! Share it with:
- Team members
- Testers
- Stakeholders

### 2. Set Up Custom Domain (Optional)

In Railway → Settings → Domains:
1. Click "Add Domain"
2. Enter `yoursite.com`
3. Update DNS records as shown
4. Update `NEXT_PUBLIC_API_URL` to your custom domain

### 3. Enable PR Previews (Optional)

Railway can create preview deployments for every PR:
1. Go to Settings
2. Enable "PR Deployments"
3. Every PR gets its own test URL!

## 💰 Railway Pricing

- **Free Tier**: $5 worth of usage/month (plenty for testing!)
- **Hobby Plan**: $5/month (unlimited usage)
- **Pro Plan**: $20/month (for production apps)

Your auth system should work fine on the free tier for development!

## 🆘 Get Help

**Railway Issues:**
- Check logs: `railway logs`
- Railway Discord: https://discord.gg/railway
- Railway Docs: https://docs.railway.app

**App Issues:**
- Check `DEPLOY_RAILWAY.md` for detailed troubleshooting
- Review Railway deployment logs
- Test locally first: `npm run dev`

## ✨ Pro Tips

1. **Auto-Deploy:** Every push to GitHub = automatic deployment
2. **Rollback:** Can rollback to any previous deployment in seconds
3. **Environments:** Create separate Railway projects for staging/production
4. **Monitoring:** Railway shows CPU, memory, and request metrics
5. **Logs:** Use `railway logs` to debug issues

## 📚 More Resources

- **Full Guide**: See `DEPLOY_RAILWAY.md`
- **Checklist**: See `DEPLOY_CHECKLIST.md`
- **Auth Docs**: See `AUTH_IMPLEMENTATION.md`

---

## 🎊 Success Checklist

After deployment, you should have:

- [x] App live on Railway URL
- [x] HTTPS working
- [x] Can signup as student
- [x] Can signup as employer
- [x] Login works
- [x] Sessions persist
- [x] Protected routes work
- [x] Employer dashboard accessible
- [x] Auto-deploy on Git push enabled

## 🚀 Next Steps

1. **Test thoroughly** on your Railway URL
2. **Share with team** for feedback
3. **Consider custom domain** for production
4. **Set up monitoring** (Railway has built-in metrics)
5. **Plan next features** (email verification, password reset, etc.)

---

**Deployment Time**: ~5 minutes  
**Status**: Ready to Deploy! 🚀

Need more details? Check `DEPLOY_RAILWAY.md` for the complete guide!
