# 🔧 Fix Railway Node.js Version Error

## The Problem

Railway is using Node.js 18, but your project needs Node.js 20+ because:
- Prisma 7.10 requires Node.js 20.19+, 22.12+, or 24.0+
- Next.js 16 requires Node.js 20.9.0+

## ✅ Solution: Add nixpacks.toml

I've created a `nixpacks.toml` file that tells Railway to use Node.js 20.

### Push the Fix

```powershell
cd d:\intern-atlas2\intern-atlas

# Stage the new file
git add nixpacks.toml

# Commit
git commit -m "fix: Configure Railway to use Node.js 20 for Prisma 7 compatibility"

# Push to GitHub
git push origin main
```

Railway will automatically detect the push and redeploy with Node.js 20!

## Alternative: Set in Railway Dashboard

If you prefer to configure in Railway:

1. Go to Railway Dashboard
2. Click on your service
3. Go to **Settings**
4. Under **Environment**, add:
   ```
   NIXPACKS_NODE_VERSION=20
   ```
5. Click **Deploy** to redeploy

## ✅ Verify the Fix

After redeployment, check the build logs. You should see:
```
setup │ nodejs_20
```

Instead of:
```
setup │ nodejs_18
```

## 🚀 What Happens Next

1. Push the `nixpacks.toml` file
2. Railway automatically redeploys
3. Uses Node.js 20
4. Prisma installs successfully
5. Build completes
6. Your app goes live!

## Expected Build Output

After the fix, you'll see:
```
✓ Prisma installed successfully
✓ Next.js build complete
✓ Deployment successful
```

---

**Quick Fix Command:**
```powershell
cd d:\intern-atlas2\intern-atlas && git add nixpacks.toml && git commit -m "fix: Use Node.js 20 for Railway" && git push origin main
```

Railway will auto-redeploy in ~30 seconds! 🚀
