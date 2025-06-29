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
} from 'lucide-react';
import type { Flashcard } from './data/html-flashcards';
import { htmlFlashcards } from './data/html-flashcards';
import type { QuizQuestion } from './data/html-quiz';
import { htmlQuiz } from './data/html-quiz';
import type { PlaygroundExercise } from './data/html-playgrounds';
import { htmlPlaygrounds } from './data/html-playgrounds';


export type Topic = {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
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
    name: 'Fase 1: Fundamentos de HTML',
    phase: 1,
    Icon: FileCode2,
    description: 'Aprende a estructurar contenido con el lenguaje fundamental de la web, desde lo básico hasta multimedia y formularios.',
    topics: [
      { id: 'html-fundamentals', name: 'Fundamentos y Estructura', description: 'Estructura básica, etiquetas principales y semántica.', Icon: ToyBrick },
      { id: 'html-text-formatting', name: 'Texto y Formato', description: 'Títulos, párrafos, listas, y formato de texto.', Icon: Paintbrush },
      { id: 'html-links-images', name: 'Enlaces e Imágenes', description: 'Navegación, visualización de medios y accesibilidad.', Icon: Paintbrush },
      { id: 'html-structure-semantics', name: 'Estructura Semántica Avanzada', description: 'Layouts con <header>, <main>, <article>, etc.', Icon: Atom },
      { id: 'html-forms', name: 'Formularios Interactivos', description: 'Captura de datos de usuario con inputs, selects y botones.', Icon: TerminalSquare },
      { id: 'html-media-other', name: 'Multimedia y Contenido Incrustado', description: 'Integración de audio, video e iframes.', Icon: Atom },
    ],
  },
  {
    name: 'Fase 2: Next.js Básico',
    phase: 2,
    Icon: Rocket,
    description: 'Introducción al ecosistema de Next.js y sus características principales.',
    topics: [
      { id: 'next-structure', name: 'Estructura de carpetas y Pages Router', description: 'Organización de proyectos en Next.js.', Icon: ToyBrick },
      { id: 'next-rendering', name: 'Renderizado: SSR, CSR, SSG', description: 'Diferentes estrategias de renderizado y cuándo usarlas.', Icon: Atom },
      { id: 'next-routing', name: 'Routing', description: 'Navegación con `next/link` y `next/router`.', Icon: Paintbrush },
      { id: 'next-styling', name: 'Estilos', description: 'CSS Modules, Sass y Tailwind CSS.', Icon: Paintbrush },
    ],
  },
  {
    name: 'Fase 3: Nivel Intermedio',
    phase: 3,
    Icon: BrainCircuit,
    description: 'Profundizando en el manejo de datos y estado de la aplicación.',
    topics: [
      { id: 'next-data-fetching', name: 'Data Fetching', description: '`getStaticProps` y `getServerSideProps`.', Icon: Atom },
      { id: 'next-api-routes', name: 'API Routes', description: 'Creación de endpoints de backend dentro de Next.js.', Icon: TerminalSquare },
      { id: 'next-state-management', name: 'Manejo de estado', description: 'Context API y Zustand para estado global.', Icon: BrainCircuit },
      { id: 'next-seo', name: 'SEO y Metadatos', description: 'Optimización para motores de búsqueda con `next/head`.', Icon: ToyBrick },
    ],
  },
  {
    name: 'Fase 4: Nivel Avanzado',
    phase: 4,
    Icon: GraduationCap,
    description: 'Técnicas de optimización, autenticación y arquitecturas escalables.',
    topics: [
      { id: 'next-optimization', name: 'Optimización de rendimiento', description: '`next/image`, `next/font` y lazy loading.', Icon: Rocket },
      { id: 'next-auth', name: 'Autenticación', description: 'NextAuth.js y estrategias de sesión.', Icon: TerminalSquare },
      { id: 'next-middleware', name: 'Middleware', description: 'Interceptar peticiones para lógica personalizada.', Icon: BrainCircuit },
      { id: 'next-headless', name: 'Integraciones Headless', description: 'Conexión con Firebase, Sanity y Stripe.', Icon: Atom },
    ],
  },
  {
    name: 'Fase 5: Nivel Master (Next.js 13+)',
    phase: 5,
    Icon: Star,
    description: 'Dominando las últimas funcionalidades y el futuro de Next.js.',
    topics: [
      { id: 'next-app-router', name: 'App Router', description: 'Layouts, rutas anidadas y grupos de rutas.', Icon: ToyBrick },
      { id: 'next-server-components', name: 'Server y Client Components', description: 'El nuevo paradigma de React.', Icon: BrainCircuit },
      { id: 'next-server-actions', name: 'Server Actions', description: 'Mutaciones de datos desde el servidor.', Icon: TerminalSquare },
      { id: 'next-database', name: 'Base de datos', description: 'Integración con ORMs como Prisma o Drizzle.', Icon: Atom },
      { id: 'next-testing', name: 'Testing', description: 'Estrategias con Jest, RTL y Playwright/Cypress.', Icon: Rocket },
    ],
  },
];


// Combine all data sources
export const allFlashcards: Flashcard[] = [...htmlFlashcards];
export const allQuizQuestions: QuizQuestion[] = [...htmlQuiz];
export const allPlaygrounds: PlaygroundExercise[] = [...htmlPlaygrounds];
