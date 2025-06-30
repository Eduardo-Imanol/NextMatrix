// @/lib/data/css-flashcards.ts

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  topicId: 'css-fundamentals' | 'css-selectors' | 'css-properties' | 'css-box-model' | 'css-layout' | 'css-responsive' | 'css-effects';
}

export const cssFlashcards: Flashcard[] = [
  // Sección 1: Fundamentos (1–15)
  { id: 101, question: '¿Qué significa CSS?', answer: 'Cascading Style Sheets.', topicId: 'css-fundamentals' },
  { id: 102, question: '¿Para qué sirve CSS?', answer: 'Para definir el estilo y presentación de un documento HTML.', topicId: 'css-fundamentals' },
  { id: 103, question: '¿Qué es una regla CSS?', answer: 'Una estructura que contiene un selector y un bloque de declaraciones de estilo.', topicId: 'css-fundamentals' },
  { id: 104, question: '¿Qué partes componen una regla CSS?', answer: 'Selector, propiedad y valor.', topicId: 'css-fundamentals' },
  { id: 105, question: '¿Cómo se inserta CSS en HTML?', answer: 'En línea (style), interno (<style>) o externo (<link>).', topicId: 'css-fundamentals' },
  
  // Sección 2: Selectores (16–30)
  { id: 106, question: '¿Qué es un selector CSS?', answer: 'Especifica a qué elementos HTML se aplicará una regla de estilo.', topicId: 'css-selectors' },
  { id: 107, question: '¿Qué hace el selector *?', answer: 'Selecciona todos los elementos.', topicId: 'css-selectors' },
  { id: 108, question: '¿Cómo seleccionas todos los párrafos <p>?', answer: 'p {}', topicId: 'css-selectors' },
  { id: 109, question: '¿Cómo seleccionas un elemento por clase?', answer: '.clase {}', topicId: 'css-selectors' },
  { id: 110, question: '¿Cómo seleccionas un elemento por ID?', answer: '#id {}', topicId: 'css-selectors' },
  { id: 111, question: '¿Qué hace el selector div p?', answer: 'Selecciona los <p> que están dentro de un <div>.', topicId: 'css-selectors' },
  { id: 112, question: '¿Qué hace div > p?', answer: 'Selecciona solo los <p> hijos directos de <div>.', topicId: 'css-selectors' },
  { id: 113, question: '¿Qué hace div + p?', answer: 'Selecciona el <p> inmediatamente después de un <div>.', topicId: 'css-selectors' },
  { id: 114, question: '¿Qué hace div ~ p?', answer: 'Selecciona todos los <p> hermanos posteriores a un <div>.', topicId: 'css-selectors' },
  { id: 115, question: '¿Qué hace [type="text"]?', answer: 'Selecciona inputs con type="text".', topicId: 'css-selectors' },
  { id: 116, question: '¿Qué hace :hover?', answer: 'Aplica estilos cuando el mouse pasa por encima.', topicId: 'css-selectors' },
  { id: 117, question: '¿Qué hace :nth-child(2)?', answer: 'Selecciona el segundo hijo de su padre.', topicId: 'css-selectors' },
  { id: 118, question: '¿Qué hace :first-child?', answer: 'Selecciona el primer hijo de su padre.', topicId: 'css-selectors' },
  { id: 119, question: '¿Qué hace ::before y ::after?', answer: 'Insertan contenido antes o después del contenido real.', topicId: 'css-selectors' },
  { id: 120, question: '¿Qué hace el selector [attr]?', answer: 'Selecciona elementos que tienen ese atributo.', topicId: 'css-selectors' },

  // Sección 3: Propiedades de Estilo (31–50)
  { id: 121, question: '¿Qué propiedad cambia el color del texto?', answer: 'color', topicId: 'css-properties' },
  { id: 122, question: '¿Qué propiedad cambia el color de fondo?', answer: 'background-color', topicId: 'css-properties' },
  { id: 123, question: '¿Qué hace font-size?', answer: 'Cambia el tamaño del texto.', topicId: 'css-properties' },
  { id: 124, question: '¿Qué hace font-family?', answer: 'Define la fuente tipográfica.', topicId: 'css-properties' },
  { id: 125, question: '¿Qué hace font-weight?', answer: 'Define el grosor de la fuente.', topicId: 'css-properties' },
  { id: 126, question: '¿Qué hace text-align?', answer: 'Alinea el texto (left, right, center, justify).', topicId: 'css-properties' },
  { id: 127, question: '¿Qué hace line-height?', answer: 'Establece el espaciado vertical entre líneas de texto.', topicId: 'css-properties' },
  { id: 128, question: '¿Qué hace text-decoration?', answer: 'Agrega decoración al texto (underline, line-through, etc).', topicId: 'css-properties' },
  { id: 129, question: '¿Qué hace letter-spacing?', answer: 'Controla el espacio entre letras.', topicId: 'css-properties' },
  { id: 130, question: '¿Qué hace word-spacing?', answer: 'Controla el espacio entre palabras.', topicId: 'css-properties' },
  { id: 131, question: '¿Qué hace background-image?', answer: 'Establece una imagen de fondo.', topicId: 'css-properties' },
  { id: 132, question: '¿Qué hace background-size: cover;?', answer: 'Hace que la imagen cubra todo el elemento.', topicId: 'css-properties' },
  { id: 133, question: '¿Qué hace opacity?', answer: 'Controla la transparencia de un elemento.', topicId: 'css-properties' },
  { id: 134, question: '¿Qué hace visibility: hidden?', answer: 'Oculta el elemento, pero ocupa espacio.', topicId: 'css-properties' },
  { id: 135, question: '¿Qué hace display: none?', answer: 'Oculta el elemento y no ocupa espacio.', topicId: 'css-properties' },
  { id: 136, question: '¿Qué hace overflow: hidden?', answer: 'Oculta el contenido que se desborda del contenedor.', topicId: 'css-properties' },
  { id: 137, question: '¿Qué hace cursor: pointer?', answer: 'Cambia el cursor al estilo de enlace.', topicId: 'css-properties' },
  { id: 138, question: '¿Qué hace z-index?', answer: 'Controla la superposición de elementos.', topicId: 'css-properties' },
  { id: 139, question: '¿Qué hace box-shadow?', answer: 'Agrega sombra alrededor de un elemento.', topicId: 'css-properties' },
  { id: 140, question: '¿Qué hace text-shadow?', answer: 'Agrega sombra al texto.', topicId: 'css-properties' },

  // Sección 4: Box Model (51–65)
  { id: 141, question: '¿Qué es el modelo de caja en CSS?', answer: 'Representación del tamaño de un elemento incluyendo margen, borde, padding y contenido.', topicId: 'css-box-model' },
  { id: 142, question: '¿Qué hace margin?', answer: 'Espacio exterior entre elementos.', topicId: 'css-box-model' },
  { id: 143, question: '¿Qué hace padding?', answer: 'Espacio interior entre el borde y el contenido.', topicId: 'css-box-model' },
  { id: 144, question: '¿Qué hace border?', answer: 'Dibuja un borde alrededor del elemento.', topicId: 'css-box-model' },
  { id: 145, question: '¿Qué hace box-sizing: border-box?', answer: 'Incluye padding y border dentro del ancho total.', topicId: 'css-box-model' },
  { id: 146, question: '¿Qué hace margin: 0 auto?', answer: 'Centra horizontalmente un bloque.', topicId: 'css-box-model' },
  { id: 147, question: '¿Cómo defines el margen superior de un elemento?', answer: 'margin-top', topicId: 'css-box-model' },
  { id: 148, question: '¿Qué significa padding: 10px 20px?', answer: '10px arriba y abajo, 20px izquierda y derecha.', topicId: 'css-box-model' },
  { id: 149, question: '¿Qué hace border-radius?', answer: 'Redondea las esquinas del borde.', topicId: 'css-box-model' },
  { id: 150, question: '¿Qué propiedad define el grosor del borde?', answer: 'border-width', topicId: 'css-box-model' },
  { id: 151, question: '¿Qué propiedad define el estilo del borde?', answer: 'border-style', topicId: 'css-box-model' },
  { id: 152, question: '¿Qué valor de border-style crea una línea punteada?', answer: 'dotted', topicId: 'css-box-model' },
  { id: 153, question: '¿Qué valor de border-style crea una línea discontinua?', answer: 'dashed', topicId: 'css-box-model' },
  { id: 154, question: '¿Qué valor elimina el borde?', answer: 'none', topicId: 'css-box-model' },
  { id: 155, question: '¿Qué valor de margin elimina todo el margen?', answer: '0', topicId: 'css-box-model' },

  // Sección 5: Layout y Posicionamiento (66–80)
  { id: 156, question: '¿Qué hace display: block?', answer: 'Hace que un elemento se comporte como bloque.', topicId: 'css-layout' },
  { id: 157, question: '¿Qué hace display: inline?', answer: 'Hace que el elemento se comporte como en línea.', topicId: 'css-layout' },
  { id: 158, question: '¿Qué hace display: flex?', answer: 'Activa un contenedor flexible para layout.', topicId: 'css-layout' },
  { id: 159, question: '¿Qué hace justify-content?', answer: 'Alinea los hijos en el eje horizontal.', topicId: 'css-layout' },
  { id: 160, question: '¿Qué hace align-items?', answer: 'Alinea los hijos en el eje vertical.', topicId: 'css-layout' },
  { id: 161, question: '¿Qué hace flex-direction: row-reverse?', answer: 'Invierte el orden horizontal de los elementos flexibles.', topicId: 'css-layout' },
  { id: 162, question: '¿Qué hace flex-wrap: wrap?', answer: 'Permite que los hijos se ajusten en múltiples líneas.', topicId: 'css-layout' },
  { id: 163, question: '¿Qué hace gap en un contenedor flex?', answer: 'Agrega espacio entre los elementos hijos.', topicId: 'css-layout' },
  { id: 164, question: '¿Qué hace position: relative?', answer: 'Posiciona el elemento respecto a su posición normal.', topicId: 'css-layout' },
  { id: 165, question: '¿Qué hace position: absolute?', answer: 'Posiciona el elemento respecto al contenedor más cercano con posición relativa.', topicId: 'css-layout' },
  { id: 166, question: '¿Qué hace position: fixed?', answer: 'Posiciona el elemento respecto a la ventana del navegador.', topicId: 'css-layout' },
  { id: 167, question: '¿Qué hace top, left, right, bottom?', answer: 'Mueve el elemento en el espacio según su posición.', topicId: 'css-layout' },
  { id: 168, question: '¿Qué hace float?', answer: 'Saca el elemento del flujo y lo coloca a la izquierda o derecha.', topicId: 'css-layout' },
  { id: 169, question: '¿Qué hace clear?', answer: 'Evita que elementos flotantes se coloquen junto a él.', topicId: 'css-layout' },
  { id: 170, question: '¿Qué hace display: grid?', answer: 'Crea un layout en cuadrícula.', topicId: 'css-layout' },

  // Sección 6: Responsive Design y Media Queries (81–90)
  { id: 171, question: '¿Qué es responsive design?', answer: 'Diseño que se adapta a diferentes tamaños de pantalla.', topicId: 'css-responsive' },
  { id: 172, question: '¿Qué hace @media?', answer: 'Define estilos condicionales según la pantalla o dispositivo.', topicId: 'css-responsive' },
  { id: 173, question: '¿Qué hace max-width: 600px en media queries?', answer: 'Aplica los estilos cuando la pantalla mide 600px o menos.', topicId: 'css-responsive' },
  { id: 174, question: '¿Qué unidad es más recomendada para diseño responsivo?', answer: 'em, rem, %', topicId: 'css-responsive' },
  { id: 175, question: '¿Qué propiedad controla si un elemento puede cambiar de tamaño?', answer: 'resize', topicId: 'css-responsive' },
  { id: 176, question: '¿Qué hace object-fit: cover en imágenes?', answer: 'Escala la imagen manteniendo su proporción.', topicId: 'css-responsive' },
  { id: 177, question: '¿Qué es viewport en HTML?', answer: 'La zona visible del sitio en el dispositivo.', topicId: 'css-responsive' },
  { id: 178, question: '¿Qué etiqueta se usa para controlar el viewport?', answer: '<meta name="viewport" ...>', topicId: 'css-responsive' },
  { id: 179, question: '¿Qué hace min-width en media queries?', answer: 'Aplica estilos si el ancho es igual o mayor.', topicId: 'css-responsive' },
  { id: 180, question: '¿Qué propiedad oculta un elemento en pantallas pequeñas?', answer: 'display: none dentro de un media query.', topicId: 'css-responsive' },

  // Sección 7: Efectos, Transiciones y Buenas Prácticas (91–100)
  { id: 181, question: '¿Qué hace transition?', answer: 'Aplica una animación suave al cambiar propiedades.', topicId: 'css-effects' },
  { id: 182, question: '¿Qué hace transform: scale(1.2)?', answer: 'Aumenta el tamaño del elemento en un 20%.', topicId: 'css-effects' },
  { id: 183, question: '¿Qué hace transform: rotate(45deg)?', answer: 'Gira el elemento 45 grados.', topicId: 'css-effects' },
  { id: 184, question: '¿Qué hace animation?', answer: 'Define una animación por keyframes.', topicId: 'css-effects' },
  { id: 185, question: '¿Qué hace @keyframes?', answer: 'Define los pasos de una animación personalizada.', topicId: 'css-effects' },
  { id: 186, question: '¿Qué hace transition-duration?', answer: 'Define cuánto tiempo toma una transición.', topicId: 'css-effects' },
  { id: 187, question: '¿Qué hace transition-delay?', answer: 'Retrasa el inicio de la transición.', topicId: 'css-effects' },
  { id: 188, question: '¿Qué hace filter: blur(5px)?', answer: 'Aplica desenfoque al elemento.', topicId: 'css-effects' },
  { id: 189, question: '¿Qué es la especificidad en CSS?', answer: 'El sistema que determina qué regla gana cuando hay conflicto.', topicId: 'css-effects' },
  { id: 190, question: '¿Qué herramienta ayuda a depurar estilos CSS?', answer: 'Las DevTools del navegador (Inspector).', topicId: 'css-effects' },
];
