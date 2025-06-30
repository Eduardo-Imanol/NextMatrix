import {
  FileCode2,
  BrainCircuit,
  GraduationCap,
  Star,
  Rocket,
  type LucideIcon,
  Atom,
  Paintbrush,
  TerminalSquare,
  ToyBrick,
  Pipette,
  MousePointerClick,
  Box,
  LayoutTemplate,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { Flashcard as HtmlFlashcard } from './data/html-flashcards';
import { htmlFlashcards } from './data/html-flashcards';
import type { QuizQuestion as HtmlQuizQuestion } from './data/html-quiz';
import { htmlQuiz } from './data/html-quiz';
import type { PlaygroundExercise as HtmlPlaygroundExercise } from './data/html-playgrounds';
import { htmlPlaygrounds } from './data/html-playgrounds';
import type { Flashcard as CssFlashcard } from './data/css-flashcards';
import { cssFlashcards } from './data/css-flashcards';
import type { QuizQuestion as CssQuizQuestion } from './data/css-quiz';
import { cssQuiz } from './data/css-quiz';
import type { PlaygroundExercise as CssPlaygroundExercise } from './data/css-playgrounds';
import { cssPlaygrounds } from './data/css-playgrounds';


export type Topic = {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
};

export type Module = {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
};

export type Phase = {
  name:string;
  phase: number;
  Icon: LucideIcon;
  description: string;
  modules: Module[];
};

export type Flashcard = HtmlFlashcard | CssFlashcard;
export type QuizQuestion = HtmlQuizQuestion | CssQuizQuestion;
export type PlaygroundExercise = HtmlPlaygroundExercise | CssPlaygroundExercise;

export const roadmapData: Phase[] = [
  {
    name: 'Fase 1: Fundamentos Web',
    phase: 1,
    Icon: FileCode2,
    description: 'Comienza tu viaje aprendiendo los pilares de la web: HTML para la estructura y CSS para el estilo.',
    modules: [
      {
        id: 'html-basics',
        name: 'HTML - Parte 1: Fundamentos y Texto',
        description: 'Aprende la estructura básica de HTML y cómo formatear texto.',
        topics: [
          { id: 'html-fundamentals', name: 'HTML: Fundamentos y Estructura', description: 'Estructura básica, etiquetas principales y semántica.', Icon: ToyBrick },
          { id: 'html-text-formatting', name: 'HTML: Texto y Formato', description: 'Títulos, párrafos, listas, y formato de texto.', Icon: Paintbrush },
        ]
      },
      {
        id: 'html-media',
        name: 'HTML - Parte 2: Enlaces, Imágenes y Estructura',
        description: 'Domina cómo enlazar páginas, mostrar imágenes y organizar tu contenido semánticamente.',
        topics: [
            { id: 'html-links-images', name: 'HTML: Enlaces e Imágenes', description: 'Navegación, visualización de medios y accesibilidad.', Icon: Paintbrush },
            { id: 'html-structure-semantics', name: 'HTML: Estructura Semántica Avanzada', description: 'Layouts con <header>, <main>, <article>, etc.', Icon: Atom },
        ]
      },
      {
        id: 'html-forms-advanced',
        name: 'HTML - Parte 3: Formularios y Multimedia',
        description: 'Aprende a crear formularios interactivos y a incrustar contenido multimedia.',
        topics: [
            { id: 'html-forms', name: 'HTML: Formularios Interactivos', description: 'Captura de datos de usuario con inputs, selects y botones.', Icon: TerminalSquare },
            { id: 'html-media-other', name: 'HTML: Multimedia y Contenido Incrustado', description: 'Integración de audio, video e iframes.', Icon: Atom },
        ]
      },
      {
        id: 'css-basics',
        name: 'CSS - Parte 1: Fundamentos y Selectores',
        description: 'Introduce estilos a tus páginas aprendiendo lo básico de CSS y cómo seleccionar elementos.',
        topics: [
            { id: 'css-fundamentals', name: 'CSS: Fundamentos y Sintaxis', description: 'Aprende cómo aplicar estilos a tus documentos HTML.', Icon: Pipette },
            { id: 'css-selectors', name: 'CSS: Selectores y Especificidad', description: 'Domina cómo seleccionar elementos para aplicarles estilos.', Icon: MousePointerClick },
        ]
      },
      {
        id: 'css-styling',
        name: 'CSS - Parte 2: Estilos, Box Model y Layout',
        description: 'Controla la apariencia, el espaciado y la organización de tu contenido.',
        topics: [
            { id: 'css-properties', name: 'CSS: Propiedades de Estilo y Texto', description: 'Controla colores, fuentes, fondos y más.', Icon: Paintbrush },
            { id: 'css-box-model', name: 'CSS: Modelo de Caja', description: 'Entiende el padding, margin y border.', Icon: Box },
            { id: 'css-layout', name: 'CSS: Layout y Posicionamiento', description: 'Organiza tu contenido con Flexbox, Grid y posicionamiento.', Icon: LayoutTemplate },
        ]
      },
      {
        id: 'css-advanced',
        name: 'CSS - Parte 3: Diseño Responsivo y Efectos',
        description: 'Adapta tus diseños a cualquier pantalla y añade animaciones para una experiencia dinámica.',
        topics: [
            { id: 'css-responsive', name: 'CSS: Diseño Responsivo', description: 'Adapta tu web a diferentes tamaños de pantalla con Media Queries.', Icon: Smartphone },
            { id: 'css-effects', name: 'CSS: Efectos y Transiciones', description: 'Añade vida a tu sitio con animaciones y filtros.', Icon: Sparkles },
        ]
      }
    ]
  },
  {
    name: 'Fase 2: Next.js Básico',
    phase: 2,
    Icon: Rocket,
    description: 'Introducción al ecosistema de Next.js y sus características principales.',
    modules: [{
      id: 'next-basics-module',
      name: 'Conceptos Fundamentales de Next.js',
      description: 'Cubre los pilares de Next.js, desde la estructura hasta el renderizado y enrutamiento.',
      topics: [
        { id: 'next-structure', name: 'Estructura de carpetas y Pages Router', description: 'Organización de proyectos en Next.js.', Icon: ToyBrick },
        { id: 'next-rendering', name: 'Renderizado: SSR, CSR, SSG', description: 'Diferentes estrategias de renderizado y cuándo usarlas.', Icon: Atom },
        { id: 'next-routing', name: 'Routing', description: 'Navegación con `next/link` y `next/router`.', Icon: Paintbrush },
        { id: 'next-styling', name: 'Estilos', description: 'CSS Modules, Sass y Tailwind CSS.', Icon: Paintbrush },
      ]
    }]
  },
  {
    name: 'Fase 3: Nivel Intermedio',
    phase: 3,
    Icon: BrainCircuit,
    description: 'Profundizando en el manejo de datos y estado de la aplicación.',
    modules: [{
      id: 'next-intermediate-module',
      name: 'Manejo de Datos y Estado',
      description: 'Aprende a obtener datos, crear APIs y gestionar el estado de tu aplicación.',
      topics: [
        { id: 'next-data-fetching', name: 'Data Fetching', description: '`getStaticProps` y `getServerSideProps`.', Icon: Atom },
        { id: 'next-api-routes', name: 'API Routes', description: 'Creación de endpoints de backend dentro de Next.js.', Icon: TerminalSquare },
        { id: 'next-state-management', name: 'Manejo de estado', description: 'Context API y Zustand para estado global.', Icon: BrainCircuit },
        { id: 'next-seo', name: 'SEO y Metadatos', description: 'Optimización para motores de búsqueda con `next/head`.', Icon: ToyBrick },
      ]
    }]
  },
  {
    name: 'Fase 4: Nivel Avanzado',
    phase: 4,
    Icon: GraduationCap,
    description: 'Técnicas de optimización, autenticación y arquitecturas escalables.',
    modules: [{
      id: 'next-advanced-module',
      name: 'Técnicas Avanzadas y Optimización',
      description: 'Lleva tus aplicaciones al siguiente nivel con optimización, autenticación y middleware.',
      topics: [
        { id: 'next-optimization', name: 'Optimización de rendimiento', description: '`next/image`, `next/font` y lazy loading.', Icon: Rocket },
        { id: 'next-auth', name: 'Autenticación', description: 'NextAuth.js y estrategias de sesión.', Icon: TerminalSquare },
        { id: 'next-middleware', name: 'Middleware', description: 'Interceptar peticiones para lógica personalizada.', Icon: BrainCircuit },
        { id: 'next-headless', name: 'Integraciones Headless', description: 'Conexión con Firebase, Sanity y Stripe.', Icon: Atom },
      ]
    }]
  },
  {
    name: 'Fase 5: Nivel Master (Next.js 13+)',
    phase: 5,
    Icon: Star,
    description: 'Dominando las últimas funcionalidades y el futuro de Next.js.',
    modules: [{
      id: 'next-master-module',
      name: 'Dominio de Next.js 13+',
      description: 'Explora el App Router, Server Components y las últimas innovaciones de Next.js.',
      topics: [
        { id: 'next-app-router', name: 'App Router', description: 'Layouts, rutas anidadas y grupos de rutas.', Icon: ToyBrick },
        { id: 'next-server-components', name: 'Server y Client Components', description: 'El nuevo paradigma de React.', Icon: BrainCircuit },
        { id: 'next-server-actions', name: 'Server Actions', description: 'Mutaciones de datos desde el servidor.', Icon: TerminalSquare },
        { id: 'next-database', name: 'Base de datos', description: 'Integración con ORMs como Prisma o Drizzle.', Icon: Atom },
        { id: 'next-testing', name: 'Testing', description: 'Estrategias con Jest, RTL y Playwright/Cypress.', Icon: Rocket },
      ]
    }]
  },
];


// Combine all data sources
export const allFlashcards: Flashcard[] = [...htmlFlashcards, ...cssFlashcards];
export const allQuizQuestions: QuizQuestion[] = [...htmlQuiz, ...cssQuiz];
export const allPlaygrounds: PlaygroundExercise[] = [...htmlPlaygrounds, ...cssPlaygrounds];

export { Badge } from '@/components/ui/badge';
