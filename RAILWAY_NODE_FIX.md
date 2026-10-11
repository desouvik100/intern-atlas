# Fix Railway Node.js Version Issue

## Problem
Railway is deploying with Node.js 18 despite `nixpacks.toml` specifying Node 20.

## Solution: Set Environment Variable in Railway Dashboard

1. Go to your Railway project dashboard
2. Click on your service
3. Go to **Variables** tab
4. Add this environment variable:
   ```
   NIXPACKS_NODE_VERSION=20
   ```

5. Click **Deploy** or **Redeploy** to trigger a new build

## Alternative: Use Railway CLI

If you have Railway CLI installed:

```bash
railway variables set NIXPACKS_NODE_VERSION=20
railway up
```

## Why This Works
Environment variables take precedence over config files in Railway's build system. The `NIXPACKS_NODE_VERSION` variable directly tells Nixpacks which Node version to use.

## After Setting Variable
Watch the build logs. You should see:
```
setup │ nodejs_20, npm-10_x
```

Instead of:
```
setup │ nodejs_18, npm-9_x
```

## Next Steps After Successful Deployment
1. Run database migration:
   ```bash
   cd backend
   $env:DATABASE_URL="postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"
   npx prisma migrate deploy
   ```

2. Test the live app at your Railway URL

## All Required Environment Variables
Make sure these are set in Railway:

```env
DATABASE_URL=postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://${{RAILWAY_PUBLIC_DOMAIN}}
NIXPACKS_NODE_VERSION=20
```

The `NEXT_PUBLIC_API_URL` will auto-resolve to your Railway domain.
