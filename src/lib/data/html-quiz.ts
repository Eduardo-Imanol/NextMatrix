// @/lib/data/html-quiz.ts

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  topicId: 'html-fundamentals' | 'html-text-formatting' | 'html-links-images' | 'html-structure-semantics' | 'html-forms' | 'html-media-other';
}

export const htmlQuiz: QuizQuestion[] = [
  // Fundamentos (1-10)
  { question: '¿Cuál es la estructura correcta de un documento HTML?', options: ['<html><body><head></head></body></html>', '<!DOCTYPE><html><head></head><body></body></html>', '<!DOCTYPE html><html><head></head><body></body></html>', '<html><head><title></title><body></body></head></html>'], correctAnswer: '<!DOCTYPE html><html><head></head><body></body></html>', topicId: 'html-fundamentals' },
  { question: '¿Cuál es el propósito de <!DOCTYPE html>?', options: ['Iniciar un comentario', 'Definir un estilo global', 'Declarar la versión de CSS', 'Indicar que se usa HTML5'], correctAnswer: 'Indicar que se usa HTML5', topicId: 'html-fundamentals' },
  { question: '¿Qué etiqueta se usa para insertar un comentario?', options: ['<comment>', '<!-- comentario -->', '/* comentario */', '// comentario'], correctAnswer: '<!-- comentario -->', topicId: 'html-fundamentals' },
  { question: '¿Qué etiqueta contiene la información visible al usuario?', options: ['<html>', '<body>', '<head>', '<title>'], correctAnswer: '<body>', topicId: 'html-fundamentals' },
  { question: '¿Cuál es el propósito del atributo lang en <html>?', options: ['Establecer el lenguaje de estilos', 'Indicar el idioma del documento', 'Traducir automáticamente el contenido', 'Cambiar la codificación'], correctAnswer: 'Indicar el idioma del documento', topicId: 'html-fundamentals' },
  { question: '¿Qué etiqueta define el título en la pestaña del navegador?', options: ['<header>', '<meta>', '<title>', '<caption>'], correctAnswer: '<title>', topicId: 'html-fundamentals' },
  { question: '¿Dónde se debe colocar la etiqueta <meta charset="UTF-8">?', options: ['Dentro de <body>', 'Fuera de <html>', 'Dentro de <head>', 'Después del cierre del documento'], correctAnswer: 'Dentro de <head>', topicId: 'html-fundamentals' },
  { question: '¿Cuál es la función principal del lenguaje HTML?', options: ['Crear interactividad', 'Dar estilo', 'Estructurar contenido web', 'Procesar datos en servidor'], correctAnswer: 'Estructurar contenido web', topicId: 'html-fundamentals' },
  { question: '¿Cuál de estas etiquetas no es semántica?', options: ['<section>', '<main>', '<div>', '<article>'], correctAnswer: '<div>', topicId: 'html-fundamentals' },
  { question: '¿Qué significa que HTML sea un lenguaje de “marcado”?', options: ['Que contiene funciones', 'Que tiene lógica condicional', 'Que estructura el contenido mediante etiquetas', 'Que compila en el navegador'], correctAnswer: 'Que estructura el contenido mediante etiquetas', topicId: 'html-fundamentals' },
  
  // Texto y Formato (11-20)
  { question: '¿Cuál es la etiqueta para un párrafo?', options: ['<text>', '<p>', '<para>', '<line>'], correctAnswer: '<p>', topicId: 'html-text-formatting' },
  { question: '¿Cuál es la etiqueta correcta para un subtítulo nivel 3?', options: ['<h3>', '<h2>', '<subtitle>', '<heading3>'], correctAnswer: '<h3>', topicId: 'html-text-formatting' },
  { question: '¿Qué etiqueta se usa para resaltar texto con énfasis semántico?', options: ['<b>', '<em>', '<strong>', '<i>'], correctAnswer: '<em>', topicId: 'html-text-formatting' },
  { question: '¿Cuál de las siguientes etiquetas conserva los saltos de línea y espacios?', options: ['<pre>', '<span>', '<code>', '<kbd>'], correctAnswer: '<pre>', topicId: 'html-text-formatting' },
  { question: '¿Cómo se crea una línea horizontal?', options: ['<line>', '<hr>', '<separator>', '<br/>'], correctAnswer: '<hr>', topicId: 'html-text-formatting' },
  { question: '¿Qué hace <abbr>?', options: ['Abrevia texto con efecto visual', 'Define una abreviatura con significado', 'Muestra texto en negrita', 'Inserta una tabla'], correctAnswer: 'Define una abreviatura con significado', topicId: 'html-text-formatting' },
  { question: '¿Cuál de las siguientes etiquetas es de formato en línea?', options: ['<div>', '<section>', '<em>', '<article>'], correctAnswer: '<em>', topicId: 'html-text-formatting' },
  { question: '¿Qué hace <q>?', options: ['Inserta código', 'Muestra una imagen', 'Representa una cita corta', 'Define un botón'], correctAnswer: 'Representa una cita corta', topicId: 'html-text-formatting' },
  { question: '¿Cuál es la diferencia entre <strong> y <b>?', options: ['No hay ninguna', '<strong> tiene valor semántico, <b> solo visual', '<b> es más potente', '<b> no existe en HTML5'], correctAnswer: '<strong> tiene valor semántico, <b> solo visual', topicId: 'html-text-formatting' },
  { question: '¿Qué etiqueta se usa para listas ordenadas?', options: ['<ul>', '<ol>', '<li>', '<list>'], correctAnswer: '<ol>', topicId: 'html-text-formatting' },
  
  // Enlaces e Imágenes (21-30)
  { question: '¿Qué atributo define la dirección de un enlace?', options: ['src', 'action', 'href', 'link'], correctAnswer: 'href', topicId: 'html-links-images' },
  { question: '¿Qué atributo abre un enlace en otra pestaña?', options: ['href="_new"', 'target="_blank"', 'target="newtab"', 'link="_blank"'], correctAnswer: 'target="_blank"', topicId: 'html-links-images' },
  { question: '¿Qué etiqueta se usa para insertar una imagen?', options: ['<src>', '<img>', '<image>', '<figure>'], correctAnswer: '<img>', topicId: 'html-links-images' },
  { question: '¿Cuál es el atributo obligatorio en <img> para accesibilidad?', options: ['src', 'width', 'alt', 'href'], correctAnswer: 'alt', topicId: 'html-links-images' },
  { question: '¿Cómo defines una imagen con texto explicativo?', options: ['<div><img><text></text></div>', '<image><p></p></image>', '<figure><img><figcaption></figcaption></figure>', '<img title="texto">'], correctAnswer: '<figure><img><figcaption></figcaption></figure>', topicId: 'html-links-images' },
  { question: '¿Qué etiqueta crea enlaces de navegación principales?', options: ['<menu>', '<nav>', '<header>', '<aside>'], correctAnswer: '<nav>', topicId: 'html-links-images' },
  { question: '¿Qué es loading="lazy" en una imagen?', options: ['No carga la imagen', 'La carga inmediatamente', 'La carga solo si va a verse', 'La carga en modo offline'], correctAnswer: 'La carga solo si va a verse', topicId: 'html-links-images' },
  { question: '¿Qué atributo muestra un texto emergente al pasar el mouse?', options: ['tooltip', 'hover', 'title', 'info'], correctAnswer: 'title', topicId: 'html-links-images' },
  { question: '¿Qué hace un <map> en HTML?', options: ['Muestra coordenadas GPS', 'Define un área geográfica', 'Crea un mapa interactivo en imágenes', 'Carga mapas de Google'], correctAnswer: 'Crea un mapa interactivo en imágenes', topicId: 'html-links-images' },
  { question: '¿Qué etiqueta permite incrustar otro sitio web?', options: ['<iframe>', '<object>', '<link>', '<embed>'], correctAnswer: '<iframe>', topicId: 'html-links-images' },
  
  // Estructura y Semántica (31-40)
  { question: '¿Cuál etiqueta se usa para contenido principal?', options: ['<main>', '<center>', '<middle>', '<container>'], correctAnswer: '<main>', topicId: 'html-structure-semantics' },
  { question: '¿Qué etiqueta agrupa contenido complementario?', options: ['<aside>', '<extra>', '<footer>', '<complement>'], correctAnswer: '<aside>', topicId: 'html-structure-semantics' },
  { question: '¿Qué define un bloque independiente de contenido?', options: ['<div>', '<article>', '<p>', '<aside>'], correctAnswer: '<article>', topicId: 'html-structure-semantics' },
  { question: '¿Qué etiqueta representa la cabecera de una sección?', options: ['<start>', '<title>', '<header>', '<top>'], correctAnswer: '<header>', topicId: 'html-structure-semantics' },
  { question: '¿Qué elemento es un contenedor genérico sin semántica?', options: ['<main>', '<section>', '<div>', '<span>'], correctAnswer: '<div>', topicId: 'html-structure-semantics' },
  { question: '¿Qué atributo se usa para describir un rol accesible?', options: ['aria-role', 'role', 'alt-role', 'function'], correctAnswer: 'role', topicId: 'html-structure-semantics' },
  { question: '¿Qué es ARIA?', options: ['Lenguaje de estilos', 'API para audio', 'Atributos para accesibilidad', 'Sistema de navegación'], correctAnswer: 'Atributos para accesibilidad', topicId: 'html-structure-semantics' },
  { question: '¿Qué etiqueta se usa para definir un contenido destacado en un artículo?', options: ['<highlight>', '<mark>', '<quote>', '<note>'], correctAnswer: '<mark>', topicId: 'html-structure-semantics' },
  { question: '¿Qué etiqueta contiene contenido común al final de una página?', options: ['<bottom>', '<end>', '<footer>', '<closing>'], correctAnswer: '<footer>', topicId: 'html-structure-semantics' },
  { question: '¿Cuál de estas etiquetas no es semántica?', options: ['<nav>', '<section>', '<div>', '<article>'], correctAnswer: '<div>', topicId: 'html-structure-semantics' },

  // Formularios y Multimedia (41-50)
  { question: '¿Qué hace required en un input?', options: ['Elimina el input', 'Muestra texto de ayuda', 'Marca el campo como obligatorio', 'Lo oculta'], correctAnswer: 'Marca el campo como obligatorio', topicId: 'html-forms' },
  { question: '¿Qué input crea una contraseña oculta?', options: ['<input type="secret">', '<input type="password">', '<input hidden>', '<password>'], correctAnswer: '<input type="password">', topicId: 'html-forms' },
  { question: '¿Qué etiqueta agrupa campos de formulario?', options: ['<fieldset>', '<group>', '<wrapper>', '<div>'], correctAnswer: '<fieldset>', topicId: 'html-forms' },
  { question: '¿Qué hace el atributo placeholder?', options: ['Pone texto por defecto', 'Pone fondo al input', 'Indica un ejemplo de entrada', 'Evita que se escriba'], correctAnswer: 'Indica un ejemplo de entrada', topicId: 'html-forms' },
  { question: '¿Qué etiqueta crea una lista desplegable?', options: ['<options>', '<select>', '<dropdown>', '<list>'], correctAnswer: '<select>', topicId: 'html-forms' },
  { question: '¿Qué tipo de input permite múltiples líneas?', options: ['<input type="text">', '<textarea>', '<input multiline>', '<text>'], correctAnswer: '<textarea>', topicId: 'html-forms' },
  { question: '¿Qué etiqueta se usa para botones?', options: ['<btn>', '<click>', '<button>', '<submit>'], correctAnswer: '<button>', topicId: 'html-forms' },
  { question: '¿Qué hace el atributo autoplay en <video>?', options: ['Reproduce al hacer clic', 'Muestra una imagen previa', 'Reproduce automáticamente al cargar', 'Lo detiene al cargar'], correctAnswer: 'Reproduce automáticamente al cargar', topicId: 'html-media-other' },
  { question: '¿Cuál etiqueta muestra un archivo de audio?', options: ['<sound>', '<audio>', '<mp3>', '<media>'], correctAnswer: '<audio>', topicId: 'html-media-other' },
  { question: '¿Qué atributo en <script> difiere su carga?', options: ['defer', 'delay', 'hold', 'async'], correctAnswer: 'defer', topicId: 'html-media-other' }
];
