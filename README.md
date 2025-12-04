# InkWorksPublishing - Modern Ebook Platform 📚

A beautiful, modern ebook website built with Next.js, featuring smooth GSAP scroll animations and an eye-catching orange color theme.

## ✨ Features

- 🎨 **Beautiful Orange Theme** - Vibrant gradient designs with a professional orange color palette
- 🎬 **GSAP Scroll Animations** - Smooth, engaging animations triggered on scroll
- ⚡ **Next.js 15** - Built with the latest Next.js App Router for optimal performance
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **TypeScript** - Type-safe code for better development experience
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Color Theme

The website uses a custom orange color palette:

- **Primary Orange**: `#f97316` (orange-500)
- **Dark Orange**: `#ea580c` (orange-600)
- **Light Orange**: `#fb923c` (orange-400)
- **Accent Gold**: `#fbbf24` (amber-300)

## 🏗️ Project Structure

```
ink/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with navigation
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navbar.tsx       # Navigation component
│       ├── Hero.tsx         # Hero section with animations
│       ├── FeaturedBooks.tsx # Book showcase
│       ├── Categories.tsx   # Category grid
│       ├── CallToAction.tsx # CTA section
│       └── Footer.tsx       # Footer component
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎭 Components

### Hero Section
- Eye-catching hero with animated book stack
- GSAP parallax scrolling effect
- Animated blob background

### Featured Books
- Card-based book showcase
- Staggered animation on scroll
- Hover effects with GSAP

### Categories
- Interactive category cards
- Bounce-in animations
- Scale and rotation effects

### Call to Action
- Stats section with counters
- Gradient background
- Animated on scroll

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **React Hooks** - State management

## 📦 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🎯 Key Features

1. **Smooth Scroll Animations**: GSAP ScrollTrigger powers all scroll-based animations
2. **Responsive Design**: Mobile-first approach with Tailwind CSS
3. **Performance Optimized**: Next.js App Router for fast page loads
4. **SEO Friendly**: Proper meta tags and semantic HTML
5. **Accessibility**: ARIA labels and keyboard navigation support

## 🌟 Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  primary: {
    // Add your custom colors here
  }
}
```

### Adding New Sections

Create a new component in `src/components/` and import it in `src/app/page.tsx`.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ for book lovers everywhere

---

**Happy Reading! 📖✨**
