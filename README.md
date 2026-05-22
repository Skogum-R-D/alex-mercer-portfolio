# Alex Mercer Portfolio

A personal portfolio website for Alex Mercer, a Senior Software Engineer. Built with Next.js 16.2, Tailwind CSS, and Framer Motion.

## Live Demo

👉 [View Live Portfolio](https://alex-mercer-portfolio.vercel.app)

## Features

- Hero section with name and title
- Short bio
- Skills grid (TypeScript, Python, Kubernetes, Rust, PostgreSQL)
- Timeline of past projects
- Contact section with mailto link
- Dark theme with Tailwind CSS
- Entrance animations with Framer Motion

## Tech Stack

| Tool               | Version   | Purpose                          |
|--------------------|-----------|----------------------------------|
| Next.js            | 16.2.0    | Framework                        |
| Tailwind CSS       | 3.4.0     | Styling                          |
| Framer Motion      | 11.3.28   | Animations                       |
| Lucide React       | 0.468.0   | Icons                            |

## Deployment Details

- **Provider**: [Vercel](https://vercel.com)
- **Branch**: Auto-deployed from `main` (manual deploy required for `feature/portfolio-page`)
- **Environment Variables**:
  - `NEXT_PUBLIC_ENV`: Set to `production` (default in Vercel)
- **Custom Domains**: None configured (deployed at [https://alex-mercer-portfolio.vercel.app](https://alex-mercer-portfolio.vercel.app))

## Project Structure

```
.
├── app/
│   ├── page.tsx          # Main portfolio page (Hero, Bio, Projects)
│   └── layout.tsx        # Root layout (metadata, Tailwind CSS)
├── components/
│   ├── hero.tsx          # Hero section (Framer Motion animations)
│   ├── bio.tsx           # Bio component (missing import in page.tsx)
│   └── contact.tsx       # Contact buttons (Lucide icons)
└── public/               # Static assets (favicon, images)
```

## Local Development

### Prerequisites

- Node.js v18+ (recommended: v20.12.2)
- npm v9+ (or yarn/pnpm)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Skogum-R-D/alex-mercer-portfolio.git
cd alex-mercer-portfolio
```

2. Install dependencies:

```bash
npm ci
```

> **Note**: Use `npm ci` instead of `npm install` for consistent dependency resolution.

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## CI/CD

GitHub Actions workflow is configured to:

- Run on pushes to `main` and `feature/portfolio-page` branches
- Cache `node_modules` and `.next/cache` for faster builds
- Install dependencies with `npm ci`
- Build the project with `npm run build`

## QA Notes

### Accessibility

- Validated with `axe-core` (score: 9/10)
- **Fix Required**: Add `alt` text to hero image

### Responsiveness

Tested on 320px–1920px. Breakpoints:

- **Mobile**: `< 768px` (stacked layout)
- **Tablet**: `768px–1023px` (adaptive grid)
- **Desktop**: `≥ 1024px` (side-by-side sections)

### Known Issues

1. **Inconsistent Import Paths**: Use `./` for local files (e.g., `./components/hero`)
2. **Missing Bio Import**: Add `import Bio from './components/bio'` to `app/page.tsx`
3. **Framer Motion Hydration**: Ensure `'use client'` directive is present in components using animations

## Animation Guidelines

All animated components must include the `'use client'` directive:

```tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

## Tailwind CSS

No custom `tailwind.config.js` is currently configured. If added later, run:

```bash
npx tailwindcss -i input.css -o output.css
```

## Contributing

1. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Commit your changes:

```bash
git commit -m "feat: add your feature"
```

3. Push to the branch:

```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request

## License

MIT

## Contact

For questions or feedback, please open an issue in this repository.
