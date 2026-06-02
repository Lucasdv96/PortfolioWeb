# LucasDelValle.dev — Portfolio Personal

Portfolio web personal de **Lucas Del Valle**, desarrollador Full Stack Jr. Desarrollado en React, Node.js, SQL y Kotlin.

**Live:** [lucasdv-developer.vercel.app](https://lucasdv-developer.vercel.app)

## Tecnologías

| Capa | Stack |
|------|-------|
| Frontend | React 19, TypeScript, Tailwind CSS 4 |
| Build | Vite 7 |
| Deploy | Vercel |
| Linting | ESLint + TypeScript ESLint |

## Estructura del proyecto

```
PortfolioWeb/
├── mi-portfolio/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx       # Navbar fija con detección de sección activa
│   │   │   ├── Hero.tsx         # Sección principal con animaciones de entrada
│   │   │   ├── Skills.tsx       # Grid de tecnologías con scroll reveal
│   │   │   ├── Projects.tsx     # Tarjetas de proyectos con hover effects
│   │   │   ├── About.tsx        # Sobre mí con stats animadas
│   │   │   ├── Contact.tsx      # Sección de contacto con scroll reveal
│   │   │   └── ThemeToggle.tsx  # [EN DESARROLLO] Botón day/night mode
│   │   ├── context/
│   │   │   └── ThemeContext.tsx  # [EN DESARROLLO] Estado global del tema
│   │   ├── hooks/
│   │   │   └── useInView.ts     # Hook para detectar elementos en viewport
│   │   ├── styles/
│   │   │   └── theme.css        # [EN DESARROLLO] Variables CSS dark/light mode
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── vercel.json                  # Configuración de deploy
```

## Secciones

- **Hero** — Presentación principal con badge "disponible para trabajar"
- **Skills** — Stack tecnológico: React, Node.js, SQL, Java, Kotlin, Git, Vercel, AI, React Native, Tailwind
- **Proyectos** — Trabajos realizados con links a demo y GitHub
- **Sobre mí** — Descripción personal + stats + descarga de CV
- **Contacto** — Email, LinkedIn y GitHub

## Features

- Navbar fija con indicador de sección activa al hacer scroll
- Menú hamburger para mobile
- Animaciones de scroll reveal en todas las secciones (Intersection Observer)
- Animaciones de entrada al cargar la página (Hero)
- Efectos hover mejorados en tarjetas de proyectos
- Diseño responsive (mobile-first)

> **En desarrollo:** Toggle dark/light mode con persistencia en localStorage (`feature/theme-toggle`)

## Ramas activas

| Rama | Estado | Descripción |
|------|--------|-------------|
| `main` | ✅ Producción | — |
| `feature/fix-navbar` | ✅ Listo para merge | Navbar mejorada + scroll reveal en contacto |
| `feature/interactivity` | ✅ Listo para merge | Animaciones en todas las secciones |
| `feature/theme-toggle` | 🚧 En desarrollo | Day/night mode toggle |

## Correr localmente

```bash
cd mi-portfolio
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Deploy

El proyecto se deploya automáticamente en **Vercel** al hacer push a `main`.

```bash
npm run build   # build de producción
npm run preview # preview local del build
```

## Contacto

- **Email:** lucas.delvalle1996@gmail.com
- **LinkedIn:** [lucas-del-valle-740277163](https://www.linkedin.com/in/lucas-del-valle-740277163/)
- **GitHub:** [Lucasdv96](https://github.com/Lucasdv96)
