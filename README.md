# Shalin Shah - Portfolio Website

A modern, professional portfolio website built with Next.js, showcasing my experience as a Full Stack Developer specializing in React, WordPress, and Android development.

## 🌐 Live Website

Visit: [https://sh4lin.me](https://sh4lin.me)

## ✨ Features

- **Next.js 15**: Built with the latest Next.js App Router and React 19
- **TypeScript**: Fully typed for better development experience
- **Static Site Generation**: Pre-rendered at build time for optimal performance
- **Automated Deployment**: GitHub Actions workflow automatically builds and deploys
- **Professional Design**: Clean, modern UI with elegant animations
- **JSON-Driven**: All content managed through JSON files for easy updates
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth scroll effects, particle background, and hover animations
- **Performance Optimized**: Fast loading with GPU-accelerated animations

## 🎨 Design Highlights

- **Color Scheme**: Professional indigo/purple palette with subtle gradients
- **Typography**: Clean, readable fonts (Poppins)
- **Animations**: Subtle, professional effects without being overwhelming
- **Layout**: Modern single-page design with smooth navigation

## 📁 Project Structure

```
sh4lin.me/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── app/
│   ├── components/         # React components
│   │   ├── ParticleCanvas.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── public/
│   ├── data/               # JSON data files
│   │   ├── profile.json    # Personal information
│   │   ├── experience.json # Work experience
│   │   ├── skills.json     # Technical skills
│   │   └── education.json  # Education background
│   └── CNAME               # Custom domain configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Technology Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Custom CSS with animations
- **Data Management**: JSON-based content
- **Build**: Static Site Generation (SSG)
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## 🚀 Deployment Workflow

This project uses an automated deployment workflow:

1. **Push to `main` branch** - Developer pushes code changes
2. **GitHub Actions triggered** - Workflow automatically starts
3. **Install dependencies** - `npm ci` installs all packages
4. **Build static site** - `npm run build` generates static files in `/out`
5. **Deploy to `main-build`** - Built files pushed to `main-build` branch
6. **GitHub Pages serves** - Site automatically updates from `main-build` branch

### GitHub Pages Configuration

Configure your repository to serve from the `main-build` branch:

1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `main-build`
4. Select folder: `/ (root)`
5. Save

The custom domain `sh4lin.me` is configured via the CNAME file.

## 💻 Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in ./out directory
```

## 📝 Current Position

**React & WordPress Developer at TeamUpdraft** (September 2024 - Present)

- Working on Burst Statistics - a privacy-friendly analytics tool
- Maintaining, adding features, and fixing bugs
- Focus on privacy-first analytics solutions

## 🚀 Updating Content

To update the website content, simply edit the JSON files in `public/data/`:

- **profile.json**: Update personal info, roles, contact details
- **experience.json**: Add/edit work experience
- **skills.json**: Update technical skills and proficiency levels
- **education.json**: Modify educational background

After editing:

```bash
git add public/data/
git commit -m "Update content"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your changes!

## 📱 Contact

- **Email**: shalinshh723@gmail.com
- **Phone**: +91 83202 24014
- **LinkedIn**: [linkedin.com/in/shalin-shah-838530190](https://in.linkedin.com/in/shalin-shah-838530190)
- **GitHub**: [github.com/SH4LIN](https://github.com/SH4LIN)

---

Built with 💙 by Shalin Shah
