import {
  FileCode2,
  BrainCircuit,
  GraduationCap,
  Star,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

export type Topic = {
  name: string;
  description: string;
};

export type Phase = {
  name:string;
  phase: number;
  Icon: LucideIcon;
  description: string;
  topics: Topic[];
};

export const roadmapData: Phase[] = [
  {
    name: 'Fase 1: Fundamentos Web',
    phase: 1,
    Icon: FileCode2,
    description: 'Las bases para construir cualquier aplicación web moderna.',
    topics: [
      { name: 'HTML Semántico', description: 'Estructura y significado del contenido.' },
      { name: 'CSS y Layouts Modernos', description: 'Flexbox, Grid y diseño responsivo.' },
      { name: 'JavaScript Moderno (ES6+)', description: 'Variables, funciones, arrays, objetos y asincronía.' },
      { name: 'React Básico', description: 'JSX, Props, State, y Hooks básicos (useState, useEffect).' },
    ],
  },
  {
    name: 'Fase 2: Next.js Básico',
    phase: 2,
    Icon: Rocket,
    description: 'Introducción al ecosistema de Next.js y sus características principales.',
    topics: [
      { name: 'Estructura de carpetas y Pages Router', description: 'Organización de proyectos en Next.js.' },
      { name: 'Renderizado: SSR, CSR, SSG', description: 'Diferentes estrategias de renderizado y cuándo usarlas.' },
      { name: 'Routing', description: 'Navegación con `next/link` y `next/router`.' },
      { name: 'Estilos', description: 'CSS Modules, Sass y Tailwind CSS.' },
    ],
  },
  {
    name: 'Fase 3: Nivel Intermedio',
    phase: 3,
    Icon: BrainCircuit,
    description: 'Profundizando en el manejo de datos y estado de la aplicación.',
    topics: [
      { name: 'Data Fetching', description: '`getStaticProps` y `getServerSideProps`.' },
      { name: 'API Routes', description: 'Creación de endpoints de backend dentro de Next.js.' },
      { name: 'Manejo de estado', description: 'Context API y Zustand para estado global.' },
      { name: 'SEO y Metadatos', description: 'Optimización para motores de búsqueda con `next/head`.' },
    ],
  },
  {
    name: 'Fase 4: Nivel Avanzado',
    phase: 4,
    Icon: GraduationCap,
    description: 'Técnicas de optimización, autenticación y arquitecturas escalables.',
    topics: [
      { name: 'Optimización de rendimiento', description: '`next/image`, `next/font` y lazy loading.' },
      { name: 'Autenticación', description: 'NextAuth.js y estrategias de sesión.' },
      { name: 'Middleware', description: 'Interceptar peticiones para lógica personalizada.' },
      { name: 'Integraciones Headless', description: 'Conexión con Firebase, Sanity y Stripe.' },
    ],
  },
  {
    name: 'Fase 5: Nivel Master (Next.js 13+)',
    phase: 5,
    Icon: Star,
    description: 'Dominando las últimas funcionalidades y el futuro de Next.js.',
    topics: [
      { name: 'App Router', description: 'Layouts, rutas anidadas y grupos de rutas.' },
      { name: 'Server Components y Client Components', description: 'El nuevo paradigma de React.' },
      { name: 'Server Actions', description: 'Mutaciones de datos desde el servidor.' },
      { name: 'Base de datos', description: 'Integración con ORMs como Prisma o Drizzle.' },
      { name: 'Testing', description: 'Estrategias con Jest, RTL y Playwright/Cypress.' },
    ],
  },
];

export const flashcardsData = [
  {
    id: 1,
    question: '¿Qué es JSX?',
    answer: 'JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir una estructura similar a HTML en el código de React. Facilita la creación y visualización de componentes.',
    phase: 1,
  },
  {
    id: 2,
    question: '¿Qué diferencia hay entre `let`, `const` y `var`?',
    answer: '`var` tiene scope de función, mientras que `let` y `const` tienen scope de bloque. `const` no puede ser reasignada.',
    phase: 1,
  },
  {
    id: 3,
    question: '¿Qué es el Pages Router?',
    answer: 'Es el sistema de enrutamiento basado en ficheros de Next.js. Cada fichero en la carpeta `pages` se convierte en una ruta.',
    phase: 2,
  },
  {
    id: 4,
    question: '¿Para qué sirve `getStaticProps`?',
    answer: 'Es una función de Next.js que se ejecuta en tiempo de compilación para pre-renderizar una página con datos. Es ideal para contenido que no cambia con frecuencia, como un post de blog.',
    phase: 3,
  },
  {
    id: 5,
    question: '¿Qué es NextAuth.js?',
    answer: 'Es una librería completa de autenticación para aplicaciones Next.js. Soporta múltiples proveedores (Google, GitHub, etc.) y estrategias.',
    phase: 4,
  },
  {
    id: 6,
    question: '¿Qué son los Server Components?',
    answer: 'Son componentes de React que se renderizan exclusivamente en el servidor. No envían JavaScript al cliente, lo que reduce el tamaño del bundle y mejora el rendimiento. Introducidos en el App Router de Next.js 13.',
    phase: 5,
  }
];

export const quizData = [
    {
        question: "¿Qué hook de React se utiliza para manejar el estado local de un componente?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: "useState",
        phase: 1
    },
    {
        question: "En CSS, ¿qué propiedad convierte un contenedor en un contexto de Flexbox?",
        options: ["display: grid;", "display: flex;", "display: block;", "flex-direction: row;"],
        correctAnswer: "display: flex;",
        phase: 1
    },
    {
        question: "En Next.js, ¿qué método de renderizado genera el HTML en el servidor en cada petición?",
        options: ["Static Site Generation (SSG)", "Client-Side Rendering (CSR)", "Server-Side Rendering (SSR)", "Incremental Static Regeneration (ISR)"],
        correctAnswer: "Server-Side Rendering (SSR)",
        phase: 2
    },
    {
        question: "Para la navegación en Next.js, ¿qué componente se utiliza para enlaces del lado del cliente?",
        options: ["<a>", "<Link>", "<Route>", "<Navigate>"],
        correctAnswer: "<Link>",
        phase: 2
    },
     {
        question: "¿Qué función se utiliza para obtener datos en el lado del servidor para cada solicitud en el Pages Router?",
        options: ["getStaticProps", "getServerSideProps", "getInitialProps", "fetchData"],
        correctAnswer: "getServerSideProps",
        phase: 3
    },
    {
        question: "¿Qué son las API Routes en Next.js?",
        options: ["Una forma de definir rutas de React", "Endpoints de backend sin servidor que se pueden construir dentro de la app", "Un reemplazo para `fetch`", "Un archivo de configuración"],
        correctAnswer: "Endpoints de backend sin servidor que se pueden construir dentro de la app",
        phase: 3
    },
    {
        question: "¿Para qué sirve el componente `next/image`?",
        options: ["Para mostrar GIFs", "Para optimizar imágenes automáticamente (tamaño, formato, lazy loading)", "Para crear galerías de imágenes", "Para aplicar filtros CSS a las imágenes"],
        correctAnswer: "Para optimizar imágenes automáticamente (tamaño, formato, lazy loading)",
        phase: 4
    },
    {
        question: "¿Qué es el Middleware en Next.js?",
        options: ["Un componente de React", "Una función que se ejecuta antes de que se complete una solicitud", "Una librería de manejo de estado", "Un plugin de Babel"],
        correctAnswer: "Una función que se ejecuta antes de que se complete una solicitud",
        phase: 4
    },
    {
        question: "En el App Router, ¿cómo se crea un layout que se comparte entre varias rutas?",
        options: ["Creando un archivo `_layout.tsx`", "Creando un archivo `layout.tsx` en una carpeta", "Usando un HOC (Higher-Order Component)", "Configurándolo en `next.config.js`"],
        correctAnswer: "Creando un archivo `layout.tsx` en una carpeta",
        phase: 5
    },
    {
        question: "¿Qué son las Server Actions?",
        options: ["Funciones que solo se ejecutan en el cliente", "Funciones asíncronas que se ejecutan en el servidor, diseñadas para mutaciones de datos", "Eventos personalizados de React", "Una forma de escribir CSS en JS"],
        correctAnswer: "Funciones asíncronas que se ejecutan en el servidor, diseñadas para mutaciones de datos",
        phase: 5
    }
];
