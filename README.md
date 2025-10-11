# Matchero

A modern web application built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── Layout.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   └── About.tsx
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🎨 Implementing Your Figma Design

This project is set up with a clean foundation. To implement your Figma design:

1. **Export Assets**: Export images, icons, and logos from Figma and place them in the `public/` directory
2. **Colors**: Update the color palette in `tailwind.config.js` to match your design system
3. **Typography**: Update fonts in `index.html` and `tailwind.config.js`
4. **Components**: Build out components based on your Figma designs in the `src/components/` directory
5. **Pages**: Update pages in `src/pages/` to match your design layouts

## 📝 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { ... }
    }
  }
}
```

### Fonts
Update the Google Fonts import in `index.html` and configure in `tailwind.config.js`.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.


