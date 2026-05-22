# Alex Mercer Portfolio

A personal portfolio website for Alex Mercer, a fictional senior software engineer. Built with Next.js 16.2, Tailwind CSS, and Framer Motion.

## Live Demo

👉 [View Live Portfolio](https://alex-mercer-portfolio.vercel.app)

## Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS v3.4.0
- **Animations**: Framer Motion v11.3.28
- **Deployment**: Vercel

## Project Structure

```bash
/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── skills.tsx          # Skills grid component
│   ├── projects.tsx        # Projects timeline component
│   └── ...
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file by copying from `.env.example`:

```bash
cp .env.example .env
```

| Variable            | Default Value       | Description               |
|---------------------|---------------------|---------------------------|
| NEXT_PUBLIC_ENV     | `development`       | Environment flag          |

## Local Development

### Prerequisites

- Node.js v20.12.2 (required for Framer Motion compatibility)
- npm or yarn

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

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Debugging

- **Reset cache**:

```bash
npm run build -- --no-cache
```

- **Analyze bundle**:

```bash
npm run build -- --analyze
```

## Deployment

### Vercel Configuration

The project is configured for automatic deployment on Vercel from the `main` branch.

| Setting          | Value               |
|------------------|---------------------|
| Node.js Version  | 20.x (default)      |
| Install Command  | `npm ci`            |
| Build Command    | `npm run build`     |
| Output Directory | `.next`             |

### Manual Deployment

To deploy the `feature/portfolio-page` branch manually:

1. Push your changes to the `feature/portfolio-page` branch.
2. Go to the [Vercel dashboard](https://vercel.com/dashboard).
3. Select the project and trigger a manual deployment from the `feature/portfolio-page` branch.

## CI/CD

GitHub Actions is configured to run on both `main` and `feature/portfolio-page` branches. It caches `node_modules` and `.next/cache` for faster builds.

## QA Notes

### Known Issues

1. **Accessibility**: Missing `alt` text for the hero image. This will be addressed in a future update.
2. **Import Paths**: Ensure consistent use of `./components/foo` instead of `@/` for imports.

### Responsiveness

The portfolio is fully responsive and tested on:

- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

## Contributing

1. Create a feature branch from `main`:

```bash
git checkout -b feature/your-feature
```

2. Commit your changes:

```bash
git commit -m "feat: add your feature"
```

3. Push to the branch:

```bash
git push origin feature/your-feature
```

4. Open a pull request.

## License

This project is licensed under the MIT License.