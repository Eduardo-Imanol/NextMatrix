// @/lib/data/css-playgrounds.ts

export interface PlaygroundExercise {
  id: number;
  title: string;
  description: string;
  initialCode: string;
  topicId: 'css-fundamentals' | 'css-selectors' | 'css-properties' | 'css-box-model' | 'css-layout' | 'css-responsive' | 'css-effects';
}

export const cssPlaygrounds: PlaygroundExercise[] = [
  // 1. Fundamentos de CSS
  {
    id: 19,
    title: '🖼️ Aplicar estilos básicos a una biografía',
    description: 'Crea un archivo style.css y vincúlalo a un HTML con datos ficticios. Cambia colores de fondo, texto, márgenes y alineación de párrafos.',
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f0f8ff;
      font-family: Arial, sans-serif;
      color: #333;
    }
    .bio {
      margin: 2em;
      padding: 1em;
      border: 1px solid #ccc;
      background-color: #fff;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="bio">
    <h1>Biografía de un Pingüino Famoso</h1>
    <p>Tux fue un pingüino de renombre mundial, conocido por su amor por el código abierto.</p>
  </div>
</body>
</html>`,
    topicId: 'css-fundamentals',
  },
  {
    id: 20,
    title: '🌐 Simular una web con dark/light mode básico',
    description: 'Usa clases .dark-mode y .light-mode. Cambia el background-color, color, border, y haz un botón que con JS alterne entre los dos modos.',
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .light-mode { background-color: #fff; color: #000; }
    .dark-mode { background-color: #222; color: #fff; }
    button { padding: 10px; cursor: pointer; }
  </style>
</head>
<body class="light-mode">
  <h1>Modo Claro / Oscuro</h1>
  <button onclick="toggleMode()">Cambiar Modo</button>
  <script>
    function toggleMode() {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
    }
  </script>
</body>
</html>`,
    topicId: 'css-fundamentals',
  },
  {
    id: 21,
    title: '🎨 Tarjeta de presentación estática',
    description: 'Crea una tarjeta con nombre, ocupación y contacto. Usa estilos para fuentes, bordes, padding, box-shadow y border-radius.',
    initialCode: `<style>
  .card {
    width: 300px;
    padding: 20px;
    font-family: sans-serif;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  }
</style>
<div class="card">
  <h2>Ada Lovelace</h2>
  <p>Primera Programadora</p>
  <p>Email: ada@example.com</p>
</div>`,
    topicId: 'css-fundamentals',
  },
  // 2. Selectores y Especificidad
  {
    id: 22,
    title: '🧪 Laboratorio de selectores',
    description: 'Aplica estilos únicos usando selectores como .clase, #id, [type="text"], div > p, a:hover.',
    initialCode: `<style>
  #titulo { color: blue; }
  .importante { font-weight: bold; }
  div > p { background-color: yellow; }
  a:hover { color: red; }
  input[type="text"] { border: 2px solid green; }
</style>
<div>
  <h1 id="titulo">Título Principal</h1>
  <p class="importante">Este es un párrafo importante.</p>
  <p>Este es otro párrafo.</p>
  <a href="#">Pasa el mouse sobre mí</a><br><br>
  <input type="text" placeholder="Input de texto">
</div>`,
    topicId: 'css-selectors',
  },
  {
    id: 23,
    title: '🧱 Menú con pseudoclases',
    description: 'Diseña un menú de navegación. Estiliza los ítems con :hover, :active, :first-child, :nth-child.',
    initialCode: `<style>
  nav a { padding: 5px; text-decoration: none; }
  nav a:hover { background-color: lightgray; }
  nav a:active { color: red; }
  li:first-child { font-weight: bold; }
  li:nth-child(2) { color: green; }
</style>
<nav>
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Productos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>`,
    topicId: 'css-selectors',
  },
  // 3. Propiedades de Estilo y Texto
  {
    id: 24,
    title: '📰 Mini blog',
    description: 'Aplica font-family, font-size, line-height, text-align, text-transform, letter-spacing, word-spacing y colores de texto.',
    initialCode: `<style>
  .post {
    font-family: 'Georgia', serif;
    font-size: 16px;
    line-height: 1.6;
    color: #444;
  }
  .post h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .post p {
    text-align: justify;
    word-spacing: 5px;
  }
</style>
<div class="post">
  <h2>Mi Artículo</h2>
  <p>Este es un texto de ejemplo para ver las propiedades de fuente y texto en acción.</p>
</div>`,
    topicId: 'css-properties',
  },
  // 4. Box Model
  {
    id: 25,
    title: '📐 Diseña una tarjeta con padding y border',
    description: 'Crea un elemento con contenido, padding uniforme, border-radius, border: 2px solid, y box-shadow.',
    initialCode: `<style>
  .card {
    padding: 20px;
    border: 2px solid steelblue;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    width: 200px;
  }
</style>
<div class="card">
  Contenido de la tarjeta
</div>`,
    topicId: 'css-box-model',
  },
  // 5. Layout
  {
    id: 26,
    title: '🧮 Galería de imágenes con Flexbox',
    description: 'Crea una galería responsive con display: flex, flex-wrap, gap, justify-content y align-items.',
    initialCode: `<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  .gallery img {
    width: 150px;
    height: 100px;
    border: 1px solid #ccc;
    object-fit: cover;
  }
</style>
<div class="gallery">
  <img src="https://placehold.co/150x100.png?text=1" alt="1" data-ai-hint="nature">
  <img src="https://placehold.co/150x100.png?text=2" alt="2" data-ai-hint="city">
  <img src="https://placehold.co/150x100.png?text=3" alt="3" data-ai-hint="animals">
</div>`,
    topicId: 'css-layout',
  },
  // 6. Responsive Design
  {
    id: 27,
    title: '📱 Diseño móvil adaptable',
    description: 'Usa media queries para cambiar de columna a fila, ocultar o redimensionar elementos según el ancho de pantalla.',
    initialCode: `<style>
  .container { display: flex; }
  .sidebar { width: 200px; background: lightblue; }
  .content { flex-grow: 1; background: lightcoral; }

  @media (max-width: 600px) {
    .container { flex-direction: column; }
    .sidebar { display: none; }
  }
</style>
<div class="container">
  <div class="sidebar">Sidebar</div>
  <div class="content">Contenido Principal</div>
</div>`,
    topicId: 'css-responsive',
  },
  // 7. Animaciones
  {
    id: 28,
    title: '🧊 Botón con hover animado',
    description: 'Diseña un botón que al pasar el cursor cambie de color, escale ligeramente y haga una transición suave.',
    initialCode: `<style>
  button {
    background-color: dodgerblue;
    color: white;
    padding: 10px 20px;
    border: none;
    transition: background-color 0.3s, transform 0.3s;
  }
  button:hover {
    background-color: royalblue;
    transform: scale(1.1);
  }
</style>
<button>Pasa sobre mí</button>`,
    topicId: 'css-effects',
  },
];
