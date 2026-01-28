# Portfolio Web - Juan Carlos Martínez Fernández

Portfolio profesional desarrollado con Next.js 16, mostrando mi experiencia como desarrollador Full Stack, Ingeniero de Datos y especialista en Machine Learning.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Características

- **Diseño Responsive**: Completamente adaptable a dispositivos móviles, tablets y desktop
- **Modales Interactivos**: 
  - Proyectos con detalles expandibles
  - Descarga de CV en español e inglés
  - Modal de contacto con múltiples canales
- **Navegación Fluida**: 
  - Menú hamburguesa en mobile
  - Scroll suave entre secciones
  - Header fijo con backdrop blur
- **Secciones Principales**:
  - Hero con foto de perfil y CTA
  - Timeline de experiencia profesional
  - Galería de proyectos destacados
  - Showcase de tecnologías con iconos
  - Footer con enlaces sociales

## 🛠️ Tecnologías

- **Framework**: Next.js 16.1.4 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: CSS Modules con diseño glassmorphism
- **Optimización**: 
  - Next.js Image para imágenes optimizadas
  - Turbopack para builds ultrarrápidos
  - Font optimization con Google Fonts
- **Package Manager**: Yarn

## 📁 Estructura del Proyecto

```
my-website/
├── src/
│   ├── app/
│   │   ├── globals.css        # Estilos globales y variables CSS
│   │   ├── layout.js          # Layout raíz con metadata y fonts
│   │   └── page.js            # Página principal con todos los componentes
│   ├── components/
│   │   ├── Header.js          # Navegación responsive con hamburger menu
│   │   ├── Hero.js            # Sección hero con foto y CTA
│   │   ├── Experience.js      # Timeline de experiencia profesional
│   │   ├── ProjectCard.js     # Tarjetas de proyectos
│   │   ├── ProjectModal.js    # Modal para detalles de proyectos
│   │   ├── Technologies.js    # Grid de tecnologías con iconos
│   │   ├── CVModal.js         # Modal para descarga de CV bilingüe
│   │   ├── ContactModal.js    # Modal con información de contacto
│   │   └── Footer.js          # Footer con enlaces sociales
│   └── data/                  # 📊 Datos centralizados en JSON
│       ├── projects.json      # Lista de proyectos destacados
│       ├── experiences.json   # Historial de experiencia laboral
│       └── technologies.json  # Stack tecnológico categorizado
├── public/
│   ├── favicon.ico            # Favicon del sitio
│   ├── fotojcmf.jpg          # Foto de perfil
│   ├── iconos/               # Iconos de tecnologías
│   └── proyectos/            # 🖼️ Imágenes y PDFs de proyectos
└── package.json
```

## 🎨 Componentes Principales

### Header
- Logo clickeable que scroll al top
- Navegación a secciones (Experiencia, Proyectos, Tecnologías)
- Botón "Hablemos" para abrir modal de contacto
- Menú hamburguesa responsive en mobile

### Hero
- Foto de perfil circular con border animado
- Título y descripción profesional
- Botón para descargar CV (abre modal de idiomas)

### Experience
- Timeline vertical con experiencias ordenadas cronológicamente
- Últimas experiencias arriba, primeras experiencias abajo
- Información detallada de cada rol
- **Datos**: `src/data/experiences.json`

### Technologies
- Grid responsive de tecnologías
- Categorías: Lenguajes, Frameworks, Herramientas, En aprendizaje
- Iconos optimizados con Next.js Image
- Niveles de experiencia por tecnología
- **Datos**: `src/data/technologies.json`

### Projects
- Tarjetas clickeables con hover effects
- Variantes de diseño (default/alt)
- Modal expandible con detalles completos
- **Datos**: `src/data/projects.json`

### Modales
Todos los modales incluyen:
- Animaciones de entrada (fadeIn + scaleIn)
- Backdrop blur
- Cierre al hacer click fuera
- Diseño glassmorphism
- Totalmente responsive

## 📝 Gestión de Contenido

### ¿Cómo agregar un nuevo proyecto?

Edita `src/data/projects.json`:

```json
{
  "id": 3,
  "title": "Nombre del proyecto",
  "description": "Descripción corta para la tarjeta",
  "longDescription": "Descripción completa que aparece en el modal",
  "image": "/proyectos/proyecto3.jpg",
  "pdfUrl": "/proyectos/proyecto3.pdf",
  "highlights": [
    "Punto destacado 1",
    "Punto destacado 2",
    "Punto destacado 3"
  ],
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "variant": "default"  // o "alt" para diseño alternativo
}
```

**Campos obligatorios:**
- `id`: Identificador único del proyecto
- `title`: Título del proyecto
- `description`: Descripción corta (aparece en la tarjeta)

**Campos opcionales:**
- `longDescription`: Descripción extendida (aparece en el modal)
- `image`: Ruta de la imagen del proyecto (colócala en `public/proyectos/`)
- `pdfUrl`: Ruta del PDF con documentación (colócalo en `public/proyectos/`)
- `highlights`: Array de puntos destacados
- `technologies`: Array de tecnologías utilizadas
- `variant`: `"default"` o `"alt"` para estilos diferentes

**Nota sobre imágenes y PDFs:**
1. Coloca las imágenes en `public/proyectos/` (formato: JPG, PNG, WebP)
2. Coloca los PDFs en `public/proyectos/`
3. La ruta en el JSON debe comenzar con `/proyectos/`
4. Tamaño recomendado de imágenes: 800x600px o similar
```

### ¿Cómo actualizar experiencia laboral?

Edita `src/data/experiences.json`:

```json
{
  "id": 7,
  "date": "2026 | Enero - Actualidad",
  "role": "Cargo/Posición",
  "company": "Nombre de la empresa",
  "description": "Descripción de responsabilidades y logros"
}
```

Las experiencias se ordenan automáticamente de más reciente (arriba) a más antigua (abajo).

### ¿Cómo agregar nuevas tecnologías?

Edita `src/data/technologies.json`:

```json
{
  "programming": [...],
  "frameworks": [
    {
      "name": "Nueva Tecnología",
      "level": "Intermedio",  // Basico, Intermedio, Avanzado
      "icon": "/iconos/nombre-icono.png"
    }
  ],
  "tools": [...],
  "learning": [...]  // No requiere nivel
}
```

**Nota**: Coloca el icono en `public/iconos/` antes de agregarlo al JSON.

## 🚦 Inicio Rápido

### Requisitos Previos

- Node.js 18+ 
- Yarn (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JuanMartinezF/portfoliwebpage.git

# Navegar al directorio
cd my-website

# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
yarn dev          # Inicia el servidor de desarrollo con Turbopack
yarn build        # Genera build de producción
yarn start        # Inicia servidor de producción
yarn lint         # Ejecuta ESLint para verificar código
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1025px+

Media queries en `@media (max-width: 768px)` para ajustes mobile.

## 🎯 Roadmap

- [ ] Sistema de internacionalización (ES/EN)
- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Animaciones avanzadas con Framer Motion
- [ ] Modo accesibilidad mejorado
- [ ] PWA support

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**Juan Carlos Martínez Fernández**

- GitHub: [@JuanMartinezF](https://github.com/JuanMartinezF)
- LinkedIn: [Juan Martínez](https://www.linkedin.com/in/juan-mart%C3%ADnez-f/)
- Portfolio: [Tu dominio]

## 🤝 Contribuciones

Las contribuciones, issues y feature requests son bienvenidos.

---

⭐️ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
