// @/lib/data/html-playgrounds.ts

export interface PlaygroundExercise {
  id: number;
  title: string;
  description: string;
  initialCode: string;
  topicId: 'html-fundamentals' | 'html-text-formatting' | 'html-links-images' | 'html-structure-semantics' | 'html-forms' | 'html-media-other';
}

export const htmlPlaygrounds: PlaygroundExercise[] = [
  // Fundamentos
  {
    id: 1,
    title: '🏗️ Estructura base de una web personal',
    description: 'Crea un archivo index.html con la estructura completa:\n- DOCTYPE\n- <html lang="es">\n- <head> con <meta>, <title>\n- <body> con una breve presentación',
    initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Web Personal</title>
</head>
<body>
  <h1>¡Bienvenido a mi página!</h1>
  <p>Esta es mi presentación.</p>
</body>
</html>`,
    topicId: 'html-fundamentals',
  },
  {
    id: 2,
    title: '🗃️ Blog en blanco',
    description: 'Crea una plantilla básica para un blog con estructura semántica: <header>, <main>, <footer>. Añade contenido ficticio.',
    initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <title>Mi Blog</title>
</head>
<body>
  <header>
    <h1>El Blog de un Dev</h1>
    <nav>
      <a href="#">Inicio</a> | <a href="#">Sobre mí</a>
    </nav>
  </header>
  <main>
    <h2>Mi primer post</h2>
    <p>Este es el contenido...</p>
  </main>
  <footer>
    <p>Copyright 2024</p>
  </footer>
</body>
</html>`,
    topicId: 'html-fundamentals',
  },
  {
    id: 3,
    title: '🧾 Validación en línea',
    description: 'Practica los estándares de HTML5. Intenta escribir código con errores (ej. una etiqueta mal cerrada) y observa cómo se ve. El objetivo es aprender a identificar errores comunes. No hay una solución única, ¡experimenta!',
    initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <title>Página para validar</title>
</head>
<body>
  <h1>Título Principal
  <p>Este párrafo no está cerrado.
  <div>
    <p>Este sí.</p>
  <span>Y este span está fuera de lugar.</div>
</body>
</html>`,
    topicId: 'html-fundamentals',
  },
  // Texto y Formato
  {
    id: 4,
    title: '✍️ Página con biografía formateada',
    description: 'Incluye:\n- Títulos <h1>–<h3>\n- Párrafos <p>\n- Texto resaltado con <em>, <strong>, <mark>',
    initialCode: `<h1>Biografía de Ada Lovelace</h1>
<h2>La primera programadora</h2>
<h3>Orígenes</h3>
<p>
  Augusta Ada King, <strong>condesa de Lovelace</strong>, fue una matemática y escritora británica. 
  Es conocida principalmente por su trabajo sobre la <em>máquina analítica</em> de Charles Babbage.
  <mark>Sus notas sobre la máquina incluyen lo que se reconoce hoy como el primer algoritmo.</mark>
</p>`,
    topicId: 'html-text-formatting',
  },
  {
    id: 5,
    title: '📑 Artículo con citas y código',
    description: 'Escribe un artículo ficticio con:\n- Citas (<blockquote>, <q>)\n- Fragmentos de código (<code>, <pre>)\n- Lista de puntos destacados (<ul>)',
    initialCode: `<h2>¿Qué es una API?</h2>
<p>
  Como dijo alguien una vez, <q>las APIs son los camareros del mundo digital</q>.
</p>
<blockquote>
  Una Interfaz de Programación de Aplicaciones (API) es un conjunto de reglas que permite que diferentes aplicaciones se comuniquen entre sí.
</blockquote>
<p>Un ejemplo de código para llamar a una API con fetch:</p>
<pre><code>fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
</code></pre>
<ul>
  <li>Son reutilizables</li>
  <li>Abstraen la complejidad</li>
  <li>Permiten la integración</li>
</ul>`,
    topicId: 'html-text-formatting',
  },
  {
    id: 6,
    title: '📋 Currículum en HTML',
    description: 'Maqueta un CV con secciones de educación, experiencia y habilidades, usando listas ordenadas y no ordenadas.',
    initialCode: `<h1>CV de Alex Doe</h1>
<h2>Experiencia Laboral</h2>
<ol>
  <li>Desarrollador Web en Tech Corp (2020-Presente)</li>
  <li>Desarrollador Junior en Web Solutions (2018-2020)</li>
</ol>
<h2>Habilidades</h2>
<ul>
  <li>HTML, CSS, JavaScript</li>
  <li>React y Next.js</li>
  <li>Git y GitHub</li>
</ul>`,
    topicId: 'html-text-formatting',
  },
  // Enlaces e Imágenes
  {
    id: 7,
    title: '🌐 Menú de navegación',
    description: 'Crea un menú con enlaces a secciones internas usando anclas (#), y un enlace externo que se abra en una nueva pestaña.',
    initialCode: `<nav>
  <a href="#seccion1">Ir a Sección 1</a> |
  <a href="#seccion2">Ir a Sección 2</a> |
  <a href="https://google.com" target="_blank" rel="noopener noreferrer">Ir a Google</a>
</nav>

<h2 id="seccion1">Sección 1</h2>
<p>Contenido de la sección 1...</p>

<h2 id="seccion2">Sección 2</h2>
<p>Contenido de la sección 2...</p>`,
    topicId: 'html-links-images',
  },
  {
    id: 8,
    title: '🖼️ Galería de imágenes',
    description: 'Muestra 2 imágenes con <figure> y <figcaption>, usando atributos alt, title y loading="lazy".',
    initialCode: `<figure>
  <img 
    src="https://placehold.co/300x200.png" 
    alt="Paisaje montañoso" 
    title="Montañas al amanecer"
    loading="lazy"
    data-ai-hint="mountain sunrise"
    >
  <figcaption>Un hermoso paisaje de montañas.</figcaption>
</figure>

<figure>
  <img 
    src="https://placehold.co/300x200.png" 
    alt="Playa tropical"
    title="Arena blanca y palmeras"
    loading="lazy"
    data-ai-hint="tropical beach"
    >
  <figcaption>Una relajante playa tropical.</figcaption>
</figure>`,
    topicId: 'html-links-images',
  },
  {
    id: 9,
    title: '🧭 Mapa de imagen',
    description: 'Haz un mapa de imagen con <map> y <area> que dirija a distintos enlaces.',
    initialCode: `<img src="https://placehold.co/400x200.png" alt="Planetas" usemap="#planetmap" data-ai-hint="solar system">

<map name="planetmap">
  <area shape="rect" coords="0,0,100,200" href="https://es.wikipedia.org/wiki/Mercurio_(planeta)" alt="Mercurio" title="Mercurio">
  <area shape="rect" coords="100,0,200,200" href="https://es.wikipedia.org/wiki/Venus_(planeta)" alt="Venus" title="Venus">
  <area shape="rect"coords="200,0,400,200" href="https://es.wikipedia.org/wiki/Tierra" alt="Tierra" title="Tierra">
</map>`,
    topicId: 'html-links-images',
  },
  // Estructura Semántica
  {
    id: 10,
    title: '📚 Maqueta de blog',
    description: 'Usa etiquetas semánticas (<article>, <section>, <main>, <nav>, <aside>, <footer>) para maquetar un blog con 2 entradas ficticias.',
    initialCode: `<header>
  <h1>Mi Blog de Viajes</h1>
  <nav>...</nav>
</header>
<main>
  <article>
    <h2>Mi viaje a Japón</h2>
    <p>Texto del artículo...</p>
  </article>
  <article>
    <h2>Explorando Italia</h2>
    <p>Texto del artículo...</p>
  </article>
</main>
<aside>
  <h3>Publicidad</h3>
</aside>
<footer>
  <p>&copy; 2024</p>
</footer>`,
    topicId: 'html-structure-semantics',
  },
  {
    id: 11,
    title: '🧩 Página de contacto estructurada',
    description: 'Incluye <header>, un formulario en <main>, un mapa en <aside>, y <footer> con links legales.',
    initialCode: `<header><h1>Contacto</h1></header>
<main>
  <section>
    <h2>Envíanos un mensaje</h2>
    <form>...</form>
  </section>
</main>
<aside>
  <h3>Nuestra Ubicación</h3>
  <p>Mapa aquí</p>
</aside>
<footer><p>Política de privacidad</p></footer>`,
    topicId: 'html-structure-semantics',
  },
  {
    id: 12,
    title: '🧪 Página accesible con roles ARIA',
    description: 'Agrega atributos role, aria-label, y tabindex a una estructura sencilla para practicar accesibilidad.',
    initialCode: `<nav>
  <button role="button" aria-label="Cerrar" tabindex="1">X</button>
</nav>
<div role="search">
  <input type="search" aria-label="Buscar en el sitio" tabindex="2">
</div>`,
    topicId: 'html-structure-semantics',
  },
  // Formularios
  {
    id: 13,
    title: '📬 Formulario de contacto',
    description: 'Crea un formulario que incluya:\n- Nombre, email, mensaje\n- Validaciones con required, placeholder',
    initialCode: `<form>
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name" placeholder="Tu nombre" required>
  <br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="tu@email.com" required>
  <br><br>
  <label for="message">Mensaje:</label>
  <textarea id="message" name="message" required></textarea>
  <br><br>
  <button type="submit">Enviar</button>
</form>`,
    topicId: 'html-forms',
  },
  {
    id: 14,
    title: '🛒 Formulario de pedido',
    description: 'Simula un pedido de productos con <select>, <input type="number">, radio buttons y checkboxes.',
    initialCode: `<form>
  <label for="product">Producto:</label>
  <select id="product" name="product">
    <option value="a">Producto A</option>
    <option value="b">Producto B</option>
  </select>
  <br><br>
  <label for="quantity">Cantidad:</label>
  <input type="number" id="quantity" name="quantity" min="1" value="1">
  <br><br>
  <p>¿Para regalo?</p>
  <input type="radio" id="gift_yes" name="gift" value="yes">
  <label for="gift_yes">Sí</label>
  <input type="radio" id="gift_no" name="gift" value="no" checked>
  <label for="gift_no">No</label>
  <br><br>
  <input type="checkbox" id="terms" name="terms">
  <label for="terms">Acepto los términos</label>
</form>`,
    topicId: 'html-forms',
  },
  {
    id: 15,
    title: '🗂️ Agrupación semántica',
    description: 'Usa <fieldset> y <legend> para separar secciones como "Datos personales" y "Preferencias".',
    initialCode: `<form>
  <fieldset>
    <legend>Datos Personales</legend>
    <label>Nombre:</label>
    <input type="text">
    <label>Email:</label>
    <input type="email">
  </fieldset>
  <fieldset>
    <legend>Preferencias</legend>
    <label>Color favorito:</label>
    <input type="color">
  </fieldset>
</form>`,
    topicId: 'html-forms',
  },
  // Multimedia
  {
    id: 16,
    title: '🎵 Reproductor de audio y video',
    description: 'Agrega un <audio> y un <video> con controles, y múltiples <source>. Nota: Los placeholders no reproducirán audio/video real.',
    initialCode: `<h2>Audio</h2>
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento de audio.
</audio>

<h2>Video</h2>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Tu navegador no soporta el elemento de video.
</video>`,
    topicId: 'html-media-other',
  },
  {
    id: 17,
    title: '🌍 Integración de iframe',
    description: 'Incrusta:\n- Un video de YouTube\n- Un mapa de Google Maps',
    initialCode: `<h2>Video de YouTube</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Mapa de Google</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.577433!3d6.194420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299f0e8f0f3f%3A0x527c6a6a38af95f!2sParque%20El%20Poblado!5e0!3m2!1ses!2sco!4v1628185025191!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    topicId: 'html-media-other',
  },
  {
    id: 18,
    title: '🎮 Página de presentación interactiva',
    description: 'Combina texto, una imagen, y un video en una sola página de bienvenida o introducción a tu portafolio.',
    initialCode: `<h1>Bienvenido a mi Portafolio</h1>
<p>Soy un desarrollador web apasionado.</p>
<img src="https://placehold.co/400x150.png" alt="Banner" data-ai-hint="developer computer">
<h2>Mi trabajo</h2>
<p>Aquí un video de mi último proyecto:</p>
<iframe width="400" height="225" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0"></iframe>`,
    topicId: 'html-media-other',
  },
];
