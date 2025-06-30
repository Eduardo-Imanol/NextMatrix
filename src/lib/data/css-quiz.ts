// @/lib/data/css-quiz.ts

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  topicId: 'css-fundamentals' | 'css-selectors' | 'css-properties' | 'css-box-model' | 'css-layout' | 'css-responsive' | 'css-effects';
}

export const cssQuiz: QuizQuestion[] = [
  // Fundamentos de CSS (1–10)
  { question: '¿Qué significa CSS?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Styling System', 'Code Syntax Styles'], correctAnswer: 'Cascading Style Sheets', topicId: 'css-fundamentals' },
  { question: '¿Cuál es la forma correcta de aplicar un archivo CSS externo?', options: ['<style src="style.css">', '<link rel="stylesheet" href="style.css">', '<css src="style.css">', '<script href="style.css">'], correctAnswer: '<link rel="stylesheet" href="style.css">', topicId: 'css-fundamentals' },
  
  // Selectores CSS (11–20)
  { question: '¿Qué selector selecciona todos los elementos?', options: ['#', '*', '.', '%'], correctAnswer: '*', topicId: 'css-selectors' },
  { question: '¿Cómo seleccionas todos los elementos con clase “caja”?', options: ['#caja', 'caja', '.caja', '*caja'], correctAnswer: '.caja', topicId: 'css-selectors' },
  { question: '¿Qué hace #header h1?', options: ['Selecciona todos los h1 dentro de #header', 'Selecciona todos los elementos con id h1', 'Selecciona el id #header si tiene clase h1', 'Nada, el selector es inválido'], correctAnswer: 'Selecciona todos los h1 dentro de #header', topicId: 'css-selectors' },
  { question: '¿Qué selector elige solo los hijos directos?', options: ['padre hijo', 'padre > hijo', 'padre + hijo', 'padre ~ hijo'], correctAnswer: 'padre > hijo', topicId: 'css-selectors' },
  { question: '¿Qué hace a:hover?', options: ['Aplica estilo al hacer clic en el enlace', 'Aplica estilo mientras el cursor está sobre el enlace', 'Aplica estilo al presionar el enlace', 'Aplica estilo cuando el enlace está seleccionado'], correctAnswer: 'Aplica estilo mientras el cursor está sobre el enlace', topicId: 'css-selectors' },
  { question: '¿Qué significa input[type="text"]?', options: ['Aplica estilos a todos los inputs', 'Selecciona solo los inputs ocultos', 'Selecciona solo inputs tipo texto', 'Selecciona todos los elementos con atributo “text”'], correctAnswer: 'Selecciona solo inputs tipo texto', topicId: 'css-selectors' },
  { question: '¿Qué hace el selector .contenedor > p:first-child?', options: ['Selecciona todos los <p> en .contenedor', 'Selecciona el primer <p> dentro de .contenedor', 'Selecciona el primer hijo de .contenedor solo si es un <p>', 'Aplica a todos los primeros hijos'], correctAnswer: 'Selecciona el primer hijo de .contenedor solo si es un <p>', topicId: 'css-selectors' },
  { question: '¿Qué hace div + p?', options: ['Selecciona el primer <p> dentro de div', 'Selecciona todos los párrafos dentro de div', 'Selecciona el <p> que viene inmediatamente después de un div', 'No es válido'], correctAnswer: 'Selecciona el <p> que viene inmediatamente después de un div', topicId: 'css-selectors' },
  { question: '¿Cuál selector selecciona todos los elementos que tienen un atributo “title”?', options: ['(title)', 'title:', '[title]', 'attr(title)'], correctAnswer: '[title]', topicId: 'css-selectors' },
  { question: '¿Qué significa ::before?', options: ['Aplica estilo antes de cargar el sitio', 'Selecciona el primer hijo', 'Crea contenido antes del contenido real del elemento', 'Mueve el elemento hacia arriba'], correctAnswer: 'Crea contenido antes del contenido real del elemento', topicId: 'css-selectors' },
  
  // Propiedades y Estilos (21–30)
  { question: '¿Qué propiedad define el tipo de letra?', options: ['text-style', 'font-family', 'typeface', 'font-type'], correctAnswer: 'font-family', topicId: 'css-properties' },
  { question: '¿Qué propiedad cambia el tamaño del texto?', options: ['text-size', 'font-size', 'size', 'font'], correctAnswer: 'font-size', topicId: 'css-properties' },
  { question: '¿Qué propiedad cambia el color del texto?', options: ['text-color', 'color', 'font-color', 'fill'], correctAnswer: 'color', topicId: 'css-properties' },
  { question: '¿Qué propiedad alinea texto horizontalmente?', options: ['align', 'text-align', 'position-align', 'font-align'], correctAnswer: 'text-align', topicId: 'css-properties' },
  { question: '¿Qué hace text-decoration: underline?', options: ['Pone el texto en negrita', 'Crea una sombra', 'Lo subraya', 'Crea una línea encima'], correctAnswer: 'Lo subraya', topicId: 'css-properties' },
  { question: '¿Qué propiedad ajusta el espacio entre letras?', options: ['letter-spacing', 'spacing', 'text-spacing', 'font-space'], correctAnswer: 'letter-spacing', topicId: 'css-properties' },
  { question: '¿Qué hace opacity: 0.5?', options: ['Reduce el brillo', 'Hace el elemento más transparente', 'Lo oculta completamente', 'Aumenta el contraste'], correctAnswer: 'Hace el elemento más transparente', topicId: 'css-properties' },
  { question: '¿Qué valor de display oculta el elemento y elimina su espacio?', options: ['none', 'hidden', 'invisible', 'collapse'], correctAnswer: 'none', topicId: 'css-properties' },
  { question: '¿Qué propiedad controla si un contenido desbordado es visible?', options: ['overflow', 'hidden', 'content-overflow', 'scroll'], correctAnswer: 'overflow', topicId: 'css-properties' },
  { question: '¿Qué propiedad establece un borde redondeado?', options: ['corner-radius', 'round-border', 'border-radius', 'radius'], correctAnswer: 'border-radius', topicId: 'css-properties' },
  
  // Modelo de Caja y Posicionamiento (31–40)
  { question: '¿Qué propiedad crea espacio dentro del borde del elemento?', options: ['margin', 'border', 'padding', 'spacing'], correctAnswer: 'padding', topicId: 'css-box-model' },
  { question: '¿Qué propiedad crea espacio fuera del borde del elemento?', options: ['margin', 'padding', 'border-spacing', 'outer-space'], correctAnswer: 'margin', topicId: 'css-box-model' },
  { question: '¿Qué hace box-sizing: border-box?', options: ['Aumenta el tamaño del box', 'Incluye borde y padding dentro del ancho total', 'Excluye margen', 'Aplica sombra'], correctAnswer: 'Incluye borde y padding dentro del ancho total', topicId: 'css-box-model' },
  { question: '¿Qué propiedad aplica una sombra a un elemento?', options: ['text-shadow', 'box-shadow', 'shadow', 'element-shadow'], correctAnswer: 'box-shadow', topicId: 'css-box-model' },
  { question: '¿Qué valor de position mantiene un elemento fijo al hacer scroll?', options: ['absolute', 'relative', 'sticky', 'fixed'], correctAnswer: 'fixed', topicId: 'css-layout' },
  { question: '¿Qué hace z-index?', options: ['Cambia la altura del elemento', 'Controla la superposición de elementos', 'Rota el elemento', 'Controla la opacidad'], correctAnswer: 'Controla la superposición de elementos', topicId: 'css-layout' },
  { question: '¿Qué hace float: left?', options: ['Elimina el margen izquierdo', 'Coloca el elemento a la izquierda del contenedor', 'Mueve el texto a la izquierda', 'Hace que el texto flote sobre el fondo'], correctAnswer: 'Coloca el elemento a la izquierda del contenedor', topicId: 'css-layout' },
  { question: '¿Qué hace clear: both?', options: ['Limpia los márgenes', 'Elimina floats', 'Evita que el elemento flote junto a otros', 'Resetea los estilos'], correctAnswer: 'Evita que el elemento flote junto a otros', topicId: 'css-layout' },
  { question: '¿Qué valor de display activa Flexbox?', options: ['inline-block', 'grid', 'flex', 'box'], correctAnswer: 'flex', topicId: 'css-layout' },
  { question: '¿Qué propiedad alinea los hijos de un contenedor flex horizontalmente?', options: ['align-items', 'justify-content', 'text-align', 'flex-direction'], correctAnswer: 'justify-content', topicId: 'css-layout' },
  
  // Responsive, Animaciones y Misceláneo (41–50)
  { question: '¿Qué hace @media (max-width: 600px)?', options: ['Oculta el contenido si mide más de 600px', 'Aplica estilos solo si la pantalla mide 600px o menos', 'Elimina todo si la pantalla es grande', 'Desactiva CSS en móviles'], correctAnswer: 'Aplica estilos solo si la pantalla mide 600px o menos', topicId: 'css-responsive' },
  { question: '¿Qué unidad se adapta mejor a múltiples dispositivos?', options: ['px', 'in', 'rem', '%'], correctAnswer: '%', topicId: 'css-responsive' },
  { question: '¿Qué propiedad permite definir una animación suave al cambiar propiedades?', options: ['effect', 'transition', 'motion', 'animate'], correctAnswer: 'transition', topicId: 'css-effects' },
  { question: '¿Qué hace transform: rotate(45deg)?', options: ['Mueve el elemento 45px', 'Aplica una animación', 'Gira el elemento 45 grados', 'Cambia su transparencia'], correctAnswer: 'Gira el elemento 45 grados', topicId: 'css-effects' },
  { question: '¿Qué propiedad inicia una animación basada en keyframes?', options: ['animation', 'transition', '@keyframes', 'transform'], correctAnswer: 'animation', topicId: 'css-effects' },
  { question: '¿Qué hace cursor: pointer?', options: ['Cambia el puntero al pasar el mouse', 'Agranda el texto', 'Hace clic automáticamente', 'Activa una animación'], correctAnswer: 'Cambia el puntero al pasar el mouse', topicId: 'css-properties' },
  { question: '¿Qué hace filter: blur(5px)?', options: ['Aplica un fondo', 'Borra el texto', 'Aplica desenfoque', 'Hace zoom'], correctAnswer: 'Aplica desenfoque', topicId: 'css-effects' },
  { question: '¿Qué es la especificidad en CSS?', options: ['La claridad del código', 'Qué tan detallado es un estilo', 'La prioridad entre selectores', 'La cantidad de líneas CSS'], correctAnswer: 'La prioridad entre selectores', topicId: 'css-selectors' },
  { question: '¿Cuál propiedad muestra una imagen de fondo completa?', options: ['background-fit', 'background-size: cover', 'fit: cover', 'image-fill'], correctAnswer: 'background-size: cover', topicId: 'css-properties' },
  { question: '¿Qué herramienta permite inspeccionar y modificar estilos en el navegador?', options: ['VS Code', 'Chrome Inspector', 'Photoshop', 'GitHub'], correctAnswer: 'Chrome Inspector', topicId: 'css-fundamentals' },
];
