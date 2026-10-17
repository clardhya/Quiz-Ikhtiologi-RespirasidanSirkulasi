# Setup Instructions

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion

### 2. Run Development Server

After installation completes, start the development server:

```bash
npm run dev
```

### 3. Open in Browser

The application will be available at:
```
http://localhost:3000
```

### 4. Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Troubleshooting

### PowerShell Execution Policy Error

If you see an execution policy error, you can:

1. **Use Command Prompt (cmd) instead of PowerShell**
   ```cmd
   cd "d:\Project Coding\Quiz Ikhtiologi\Respirasi dan Sirkulasi\Quiz-Ikhtiologi-RespirasidanSirkulasi"
   npm install
   ```

2. **Or bypass PowerShell policy temporarily**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
   npm install
   ```

### npm Not Found

Ensure Node.js is properly installed:
1. Download from https://nodejs.org/ (LTS version recommended)
2. Install and restart your terminal
3. Verify: `node --version` and `npm --version`

### Module Not Found Errors

If you see module errors after installation:
```bash
rm -r node_modules package-lock.json
npm install
```

## Project Overview

This is a fully functional Next.js quiz application with:

- 📋 18 comprehensive ichthyology questions
- 🎨 Dark aquatic theme with modern UI
- 📊 Real-time progress tracking
- ✅ Detailed results and explanations
- 🔄 Easy retake functionality

For more information, see README.md
