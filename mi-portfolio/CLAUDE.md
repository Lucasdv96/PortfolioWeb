# CLAUDE.md — Portfolio Lucas Del Valle

Archivo de contexto persistente para Claude Code. Leé esto antes de tocar cualquier archivo.

---

## Regla de trabajo obligatoria

**Antes de modificar cualquier archivo, mostrá el plan de cambios y esperá aprobación explícita.**
No ejecutes cambios en cadena. Cada archivo se presenta por separado y se espera un "sí" antes de continuar.

---

## Proyecto

Portfolio web personal de Lucas Del Valle, desarrollador Full Stack Jr.

- **Live:** https://lucasdv-developer.vercel.app
- **Repo:** `PortfolioWeb/`
- **App:** `PortfolioWeb/mi-portfolio/`

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + TypeScript |
| Estilos | Tailwind CSS 4 |
| Build | Vite 7 |
| Deploy | Vercel |
| Linting | ESLint + TypeScript ESLint |

---

## Estructura de archivos

```
PortfolioWeb/
├── mi-portfolio/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── hooks/
│   │   │   └── useInView.ts   ← ya existe, reutilizar siempre
│   │   ├── styles/
│   │   │   └── tokens.css     ← variables CSS de la paleta
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   └── package.json
└── vercel.json
```

**No tocar nunca:** `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `vercel.json`, `package.json`

---

## Paleta de colores — OBLIGATORIA

Diseñada por la diseñadora del proyecto. No inventar colores nuevos.

| Token | Hex | Uso |
|---|---|---|
| `--color-bg-primary` | `#002233` | Fondo principal de todas las secciones |
| `--color-bg-secondary` | `#11425D` | Fondos de cards y secciones alternadas |
| `--color-accent-primary` | `#DDFF55` | CTAs, highlights, partículas, números destacados |
| `--color-accent-secondary` | `#C0D6EA` | Textos secundarios, bordes, líneas |
| `--color-text-primary` | `#F6F2E8` | Texto principal |
| `--color-text-secondary` | `#C0D6EA` | Subtítulos, descripciones |
| `--color-text-muted` | `rgba(192,214,234,0.4)` | Texto apagado |
| `--color-grape` | `#C5C0C9` | Detalles decorativos puntuales |
| `--color-border` | `rgba(192,214,234,0.08)` | Bordes normales |
| `--color-border-hover` | `rgba(221,255,85,0.3)` | Bordes en hover |

### Colores PROHIBIDOS (del diseño anterior — eliminar si aparecen)

- `#080b10` → reemplazar por `#002233`
- `#00e5a0` → reemplazar por `#DDFF55`
- `#0066ff` → reemplazar por `#C0D6EA`
- `#111620` → reemplazar por `rgba(17,66,93,0.4)`
- `#161d2c` → reemplazar por `rgba(17,66,93,0.5)`

### Reglas de uso

- Botones CTA primarios: fondo `#DDFF55`, texto `#002233`
- Badge "disponible": fondo `rgba(221,255,85,0.07)`, borde `rgba(221,255,85,0.25)`, texto `#DDFF55`
- Partículas canvas: `rgba(221,255,85,0.55)`
- Líneas del canvas: `rgba(192,214,234,0.14)`
- Hover en links de nav: `#DDFF55`
- Números/stats: `#DDFF55`

---

## Tipografía — OBLIGATORIA

Google Fonts ya importadas en `index.html`:
- **`'Syne', sans-serif`** — display, headings, body, botones
- **`'JetBrains Mono', monospace`** — labels técnicos, badges, navbar links, código

### Reglas de uso

| Elemento | Fuente | Peso |
|---|---|---|
| Headings principales (nombres, títulos de sección) | Syne | 800 |
| Subtítulos | Syne | 700 |
| Body / descripciones | Syne | 400 |
| Labels `// 01 — Sección` | JetBrains Mono | 400 |
| Navbar links | JetBrains Mono | 400 |
| Badge "disponible" | JetBrains Mono | 400 |
| Typewriter rol en Hero | JetBrains Mono | 400 |
| Code snippet | JetBrains Mono | 400 |
| Botones CTA | Syne | 700 |

---

## Componentes — comportamiento esperado

### Hero
- Canvas con red de partículas animada (55 partículas, `#DDFF55`, líneas `#C0D6EA`)
- Typewriter que cicla: `'Full Stack Dev Jr.'` → `'React · Node.js · SQL'` → `'Kotlin · Android Dev'`
- Code snippet flotante a la derecha (solo visible en `lg:`)
- Stats bar al pie: `3+ Proyectos`, `10+ Tecnologías`, `∞ Ganas`
- Scroll hint animado abajo a la izquierda

### Skills
- Sin emojis — usar íconos SVG de Devicons CDN
- URL base: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/`
- Fallback CDN: `https://unpkg.com/devicon/icons/`
- Scroll reveal con `useInView` (ya existe el hook)
- Stagger de 40ms entre cards

### Projects
- Slot de media por proyecto: acepta `video`, `gif`, o `image`
- Si `media === null`: mostrar placeholder `"DEMO PRÓXIMAMENTE"`
- Los videos de OlaCheck y CreaPresupuestoPDF se agregarán en una segunda etapa

### Todas las secciones
- Scroll reveal usando el hook `useInView` existente en `src/hooks/useInView.ts`
- Animación: `opacity-0 translate-y-8` → `opacity-100 translate-y-0`, duración 700ms

---

## Convenciones de código

- TypeScript estricto — no usar `any`
- Estilos: preferir Tailwind para layout/spacing, `style={{}}` inline para colores de la paleta (para evitar purge de Tailwind con valores dinámicos)
- No crear componentes nuevos sin consultar primero
- El hook `useInView` recibe `options = { threshold: 0.1 }` — no modificarlo
- Imports relativos, no absolutos

---

## CSS global (`src/index.css`)

Debe contener:
```css
@import "tailwindcss";
@import "./styles/tokens.css";

body {
  font-family: 'Syne', sans-serif;
}

/* Typewriter cursor */
.tw-cursor {
  display: inline-block;
  width: 2px;
  height: 13px;
  background: #DDFF55;
  margin-left: 1px;
  vertical-align: middle;
  animation: tw-blink 1s step-end infinite;
}
@keyframes tw-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Badge pulse */
@keyframes badge-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Scroll line animada */
.scroll-line {
  width: 20px;
  height: 1px;
  background: rgba(192,214,234,0.12);
  position: relative;
  overflow: hidden;
}
.scroll-line::after {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: #DDFF55;
  animation: scroll-slide 2s ease-in-out infinite;
}
@keyframes scroll-slide {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

---

## Checklist antes de cada push

- [ ] Sin colores del diseño anterior (`#080b10`, `#00e5a0`, `#0066ff`, `#111620`)
- [ ] Fuentes Syne y JetBrains Mono usadas correctamente
- [ ] `npm run build` sin errores TypeScript
- [ ] Canvas de partículas no rompe en viewport 375px (mobile)
- [ ] Scroll reveal funcionando en todas las secciones
- [ ] `npm run lint` sin warnings

---

## Contexto del desarrollador

- **Nombre:** Lucas Del Valle
- **Universidad:** UADE — Licenciatura en Gestión de la Tecnología de la Información
- **Experiencia:** 6 años como preventista (vendedor de campo) + dev en formación
- **Proyectos principales:** OlaCheck (app Android playas), CreaPresupuestoPDF (app Android presupuestos), Mini Kanban (fullstack web)
- **Buscando:** primer rol junior en frontend, backend o full stack
