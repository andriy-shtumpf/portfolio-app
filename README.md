# 🚀 Full-Stack Software Engineer Portfolio

A modern, responsive portfolio website showcasing the skills and projects of a full-stack software engineer. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and optimized performance.

![Portfolio Preview](./public/images/personal_photo.jpg)

## ✨ Features

### 🎨 **Modern Design & UX**

-   **Dark Mode First**: Dark theme as default with intelligent theme switching
-   **Responsive Design**: Mobile-first approach with Tailwind CSS
-   **Smooth Animations**: GSAP-powered scroll animations and micro-interactions
-   **Buttery Smooth Scrolling**: Lenis integration for premium scroll experience
-   **Interactive Elements**: Hover effects and dynamic content loading

### 🛠️ **Technical Excellence**

-   **Modern React 19**: Latest React features with functional components and hooks
-   **TypeScript Support**: Type-safe development environment
-   **Component Architecture**: Modular, reusable components for maintainability
-   **Performance Optimized**: Vite for lightning-fast builds and HMR
-   **SEO Ready**: Optimized meta tags and semantic HTML structure

### 🌟 **Professional Sections**

-   **Hero Section**: Eye-catching introduction with call-to-action
-   **About**: Professional background and expertise overview
-   **Skills**: Comprehensive technology stack visualization
-   **Projects**: Featured work with live demos and source code
-   **Contact**: Multiple ways to connect and collaborate

## 🛠️ Tech Stack

### **Frontend**

-   **React 19** - Latest React with concurrent features
-   **Vite 6** - Next-generation frontend tooling
-   **Tailwind CSS 4** - Utility-first CSS framework
-   **TypeScript** - Type-safe JavaScript development

### **Animations & Interactions**

-   **GSAP 3.13** - Professional-grade animation library
-   **Lenis 1.3** - Smooth scroll library
-   **ScrollTrigger** - Scroll-based animations

### **Development Tools**

-   **ESLint** - Code linting and formatting
-   **Vite Plugin React** - Fast refresh and optimizations
-   **Node 20** - Latest LTS Node.js runtime

### **Deployment & Performance**

-   **Vercel** - Optimized for modern web deployment
-   **Image Optimization** - Cached static assets
-   **Bundle Optimization** - Tree-shaking and code splitting

## 🚀 Quick Start

### Prerequisites

-   Node.js 20+
-   npm or yarn package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**

    ```bash
    npm run build
    ```

5. **Preview production build**
    ```bash
    npm run preview
    ```

## 📁 Project Structure

```
portfolio/
├── public/                     # Static assets
│   ├── images/                # Image assets
│   │   ├── skills/           # Technology icons
│   │   ├── projects/         # Project screenshots
│   │   └── custom/           # Custom graphics
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # React components
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact form & info
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── ThemeToggle.jsx  # Dark/light mode toggle
│   │   ├── contact/         # Contact components
│   │   ├── header/          # Header components
│   │   └── navbar/          # Navigation components
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── dummy_data/          # Sample/demo data
│   │   └── data.ts          # Navigation and content data
│   ├── utils/               # Utility functions
│   │   ├── navbarUtils.js   # Navigation helpers
│   │   └── projects.js      # Project data
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── dist/                    # Production build output
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel deployment config
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎯 Key Components

### **ThemeContext**

Intelligent theme management with:

-   Dark mode as default
-   System preference detection
-   Local storage persistence
-   Smooth theme transitions

### **GSAP Animations**

Professional animations including:

-   Scroll-triggered reveals
-   Smooth element transitions
-   Performance-optimized animations
-   Mobile-responsive effects

### **Responsive Design**

Mobile-first approach with:

-   Breakpoint-specific layouts
-   Touch-friendly interactions
-   Optimized images and assets
-   Cross-browser compatibility

## 📱 Responsive Breakpoints

-   **Mobile**: 320px - 768px
-   **Tablet**: 768px - 1024px
-   **Desktop**: 1024px - 1440px
-   **Large Desktop**: 1440px+

## 🎨 Customization

### **Theme Colors**

Modify theme colors in `src/index.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### **Content Updates**

-   **Personal Info**: Update `src/components/Hero.jsx` and `src/components/About.jsx`
-   **Projects**: Modify `src/utils/projects.js`
-   **Skills**: Update skill icons in `src/components/Skills.jsx`
-   **Navigation**: Edit `src/dummy_data/data.ts`

### **Styling**

-   **Global Styles**: `src/index.css`
-   **Component Styles**: Tailwind classes in individual components
-   **Custom Components**: Create new components in `src/components/`

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration needed

### **Manual Deployment**

1. Build the project: `npm run build`
2. Upload `dist/` folder to your hosting provider
3. Configure server to serve `index.html` for all routes

### **Environment Variables**

Create `.env.local` for sensitive data:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_URL=https://github.com/your-username
VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

## 📊 Performance Features

-   **Code Splitting**: Automatic route-based splitting
-   **Image Optimization**: Optimized image loading and caching
-   **Bundle Analysis**: Vite's built-in bundle analyzer
-   **Lazy Loading**: Components loaded on demand
-   **Caching Strategy**: Optimized cache headers for static assets

## 🔧 Available Scripts

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build optimized production bundle |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint for code quality       |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   **GSAP** for powerful animations
-   **Tailwind CSS** for utility-first styling
-   **Vite** for blazing fast development
-   **React** for component architecture
-   **Vercel** for seamless deployment

## 📞 Contact

-   **Portfolio**: [Your Live Portfolio URL]
-   **Email**: your-email@example.com
-   **LinkedIn**: [Your LinkedIn Profile]
-   **GitHub**: [Your GitHub Profile]

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by a Full-Stack Software Engineer
