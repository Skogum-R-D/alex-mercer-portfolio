# Alex Mercer Portfolio

A personal portfolio website for Alex Mercer, a Senior Software Engineer. Built with Next.js 16.2, Tailwind CSS, and Framer Motion.

## Local Development

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/Skogum-R-D/alex-mercer-portfolio.git

# Navigate to the project directory
cd alex-mercer-portfolio

# Install dependencies
npm ci

# Start the Next.js development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## Deployment

- **Live URL**: [Alex Mercer Portfolio](https://alex-mercer-portfolio.vercel.app)
- **Auto-deployed** on push to `main` via [Vercel](https://vercel.com).
- **CI Checks**: [GitHub Actions](.github/workflows/ci.yml) (lint/build on PR).

## Project Structure

- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: Framer Motion 11.3.28
- **Icons**: Lucide React 0.468.0

## Notes

- **Animations**: Framer Motion requires client-side rendering. Ensure components using animations are marked with `use client`.
- **Button Imports**: Verify the import paths for the `Button` component in `components/hero.tsx` and `components/contact.tsx`.
- **Tailwind Config**: If a custom `tailwind.config.js` is added, run `npx tailwindcss -i input.css -o output.css` to generate the CSS file.

## License

This project is licensed under the MIT License.