# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills display with progress bars
- 📧 Contact form
- 🌐 Social media links

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Customization

### Update Personal Information

Edit `src/models/data.ts` to customize:

- **Personal Info**: Name, title, bio, email, location
- **Social Links**: Add your GitHub, LinkedIn, Twitter, etc.
- **Skills**: Update your skills with proficiency levels
- **Projects**: Add your projects with descriptions, technologies, and links

### Styling

The project uses Tailwind CSS v4. You can customize:

- Colors: Edit the gradient classes in components (from-blue-600 to-purple-600)
- Layout: Modify component structures in `src/components/`
- Global styles: Update `src/styles/globals.css`

### Components

All components are located in `src/components/`:

- `Header.tsx` - Navigation header
- `Hero.tsx` - Hero section with introduction
- `About.tsx` - About me section
- `Skills.tsx` - Skills display
- `Projects.tsx` - Project showcase
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer with links
- `SocialIcon.tsx` - Social media icon component

## Project Structure

```
src/
├── components/     # React components
├── models/         # Data models
├── pages/          # Next.js pages
├── styles/         # Global styles
└── types/          # TypeScript types
```

## Technologies Used

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React](https://react.dev) - UI library

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

## License

MIT
