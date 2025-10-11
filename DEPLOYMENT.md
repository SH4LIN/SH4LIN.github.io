# Deployment Guide

## 🚀 Setting up GitHub Pages

After the GitHub Actions workflow has run successfully and created the `main-build` branch, follow these steps to configure GitHub Pages:

### Step 1: Wait for First Workflow Run

1. Go to your repository on GitHub
2. Click on the **"Actions"** tab
3. You should see the "Deploy Next.js to GitHub Pages" workflow running
4. Wait for it to complete (usually takes 1-2 minutes)
5. Once complete, you'll see a new `main-build` branch in your repository

### Step 2: Configure GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to the **"Pages"** section in the left sidebar
3. Under **"Build and deployment"**:
    - Source: Select **"Deploy from a branch"**
    - Branch: Select **`main-build`**
    - Folder: Select **`/ (root)`**
4. Click **Save**

### Step 3: Verify Deployment

1. GitHub Pages will take a few minutes to deploy
2. You'll see a message like: "Your site is live at https://sh4lin.me"
3. Visit https://sh4lin.me to see your live website

## 🔄 How it Works

### Automatic Workflow

Every time you push to the `main` branch:

```
git push origin main
    ↓
GitHub Actions Triggered
    ↓
Install Dependencies (npm ci)
    ↓
Build Static Site (npm run build)
    ↓
Generate /out directory
    ↓
Deploy to main-build branch
    ↓
GitHub Pages Auto-Updates
    ↓
Your site is live! 🎉
```

### Branches

- **`main`** - Your source code (Next.js, TypeScript, React components)
- **`main-build`** - Auto-generated static files (HTML, CSS, JS)

⚠️ **Never manually edit the `main-build` branch** - it's automatically generated!

## 📝 Making Changes

### Update Content

1. Edit JSON files in `public/data/`
2. Commit and push:
    ```bash
    git add public/data/
    git commit -m "Update content"
    git push origin main
    ```
3. Workflow runs automatically
4. Site updates in 2-3 minutes

### Update Components

1. Edit files in `app/` directory
2. Test locally: `npm run dev`
3. Commit and push:
    ```bash
    git add app/
    git commit -m "Update components"
    git push origin main
    ```
4. Workflow builds and deploys automatically

### Update Styles

1. Edit `app/globals.css`
2. Test locally: `npm run dev`
3. Commit and push:
    ```bash
    git add app/globals.css
    git commit -m "Update styles"
    git push origin main
    ```
4. Workflow deploys changes automatically

## 🐛 Troubleshooting

### Workflow Failed?

1. Go to **Actions** tab
2. Click on the failed workflow
3. Check the error logs
4. Common issues:
    - **Build errors**: Check TypeScript/React syntax
    - **Dependencies**: Run `npm install` locally to verify
    - **Missing files**: Ensure all files are committed

### Site Not Updating?

1. Check if workflow completed successfully in Actions tab
2. Verify `main-build` branch has new commits
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. Wait a few minutes - GitHub Pages can take 2-5 minutes to update

### 404 Errors?

1. Verify GitHub Pages is configured to use `main-build` branch
2. Check if CNAME file exists in `public/` directory
3. Verify custom domain DNS settings (if using sh4lin.me)

## 🔐 Custom Domain (sh4lin.me)

Your custom domain is configured via the `public/CNAME` file. Ensure your DNS is set up:

### DNS Configuration

Add these records at your domain registrar:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: sh4lin.github.io
```

## 📊 Monitoring

### Check Workflow Status

```bash
# View workflow runs
https://github.com/SH4LIN/SH4LIN.github.io/actions

# Check deployment status
https://github.com/SH4LIN/SH4LIN.github.io/deployments
```

### Local Testing Before Deploy

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Test the build
npx serve out
```

## 🎉 Success!

Once configured, your site will automatically update whenever you push to `main`. No manual deployment needed!

**Current Setup:**

- ✅ Next.js 15 with TypeScript
- ✅ Automated GitHub Actions workflow
- ✅ Static site generation
- ✅ Custom domain (sh4lin.me)
- ✅ Automatic deployments on push

Happy coding! 🚀
