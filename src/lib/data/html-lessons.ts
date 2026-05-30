export interface Lesson {
  topicId: string;
  title: string;
  sections: { heading: string; content: string }[];
}

export const htmlLessons: Lesson[] = [
  {
    topicId: 'html-fundamentals',
    title: 'Fundamentos y Estructura de HTML',
    sections: [
      { heading: 'Que es HTML?', content: 'HTML (HyperText Markup Language) es el lenguaje de marcado estandar para crear paginas web. Define la estructura y el contenido de una pagina mediante etiquetas que indican al navegador como mostrar la informacion. HTML no es un lenguaje de programacion, sino de marcado: organiza el contenido en texto, imagenes, enlaces, etc.' },
      { heading: 'Estructura basica de un documento', content: 'Todo documento HTML sigue esta estructura:\n\nEn tu archivo escribe: DOCTYPE html, luego la etiqueta html con lang="es", dentro de head con meta charset UTF-8, meta viewport, y title. Luego body con un h1 que diga Hola Mundo, y cierra html.\n\nExplicacion de cada parte:\n- **DOCTYPE html**: Declara que usamos HTML5.\n- **html**: Elemento raiz que contiene todo.\n- **head**: Metadatos (titulo, codificacion, estilos).\n- **body**: Contenido visible para el usuario.' },
      { heading: 'Etiquetas principales', content: 'Las etiquetas fundamentales son:\n\n- **html**: Raiz del documento.\n- **head**: Contiene metadatos.\n- **body**: Contenido visible.\n- **title**: Titulo en la pestana del navegador.\n- **meta**: Metadatos como charset y viewport.\n- **h1** a **h6**: Titulos jerarquicos.\n- **p**: Parrafos de texto.\n- **div**: Contenedor generico (bloque).\n- **span**: Contenedor generico (en linea).' },
      { heading: 'Atributos en las etiquetas', content: 'Las etiquetas pueden tener atributos que modifican su comportamiento:\n\nUn enlace se escribe: a href="https://example.com" con texto Enlace.\nUna imagen: img src="foto.jpg" alt="Descripcion".\nUn input: input type="text" placeholder="Escribe aqui".\n\nAtributos importantes:\n- **href**: URL de destino (enlaces).\n- **src**: Ruta del recurso (imagenes).\n- **alt**: Texto alternativo para accesibilidad.\n- **class**: Clase CSS para estilos.\n- **id**: Identificador unico.' },
      { heading: 'Anidamiento y sangria', content: 'Las etiquetas pueden contener otras etiquetas (anidamiento). Usa sangria para mantener el codigo legible:\n\nUn div que contenga un h1 con Titulo y un p con Un parrafo que a su vez contenga un strong con texto en negrita.\n\nRegla: siempre cierra las etiquetas en el orden correcto (el ultimo en abrir, primero en cerrar).' },
      { heading: 'Buenas practicas', content: '1. Usa minusculas en etiquetas: div no DIV.\n2. Siempre incluye alt en imagenes.\n3. Usa lang="es" en html para accesibilidad.\n4. Manten una indentacion consistente (2 o 4 espacios).\n5. Separa contenido (HTML) de presentacion (CSS) y comportamiento (JS).' },
    ]
  },
  {
    topicId: 'html-text-formatting',
    title: 'Texto y Formato en HTML',
    sections: [
      { heading: 'Parrafos y saltos', content: 'El parrafo se define con p:\n\nEscribe p con "Este es un parrafo de texto" y otro p con "Otro parrafo".\n\nPara forzar un salto de linea sin nuevo parrafo: usa la etiqueta br.\n\nPara una linea horizontal: usa la etiqueta hr.' },
      { heading: 'Titulos jerarquicos', content: 'HTML ofrece seis niveles de titulos:\n\nh1 es Titulo principal (mas importante), h2 es Subtitulo, h3 es Titulo de seccion, h4 es Titulo menor, h5 es Titulo pequeno, h6 es Titulo mas pequeno.\n\nh1 debe usarse una sola vez por pagina (SEO). Los demas son flexibles.' },
      { heading: 'Formato de texto en linea', content: 'Etiquetas para formato sin salto de linea:\n\n- **strong**: Negrita con enfasis semantico.\n- **em**: Cursiva con enfasis semantico.\n- **b**: Negrita visual sin semantica.\n- **i**: Cursiva visual sin semantica.\n- **u**: Subrayado.\n- **s**: Texto tachado.\n- **mark**: Texto resaltado.\n- **small**: Texto pequeno.\n- **sub**: Subindice.\n- **sup**: Superindice.\n\nUsa strong y em sobre b y i por accesibilidad.' },
      { heading: 'Listas', content: 'Listas ordenadas (numeradas):\n\nUsa ol con varios li dentro: li Primero, li Segundo.\n\nListas desordenadas (vinetas):\n\nUsa ul con li dentro: li Elemento A, li Elemento B.\n\nListas de definicion:\n\nUsa dl con dt HTML y dd Lenguaje de marcado.' },
      { heading: 'Citas y codigo', content: 'Cita en bloque:\n\nUsa blockquote con cite="https://ejemplo.com" y dentro un p con "Cita famosa aqui".\n\nCita en linea:\n\nUsa q con "Texto citado".\n\nCodigo:\n\nUsa code con "function hello() {}" para codigo en linea.\nUsa pre y code juntos para bloques de codigo con formato.\n\nAbreviatura:\n\nUsa abbr con title="HyperText Markup Language" y el texto HTML.' },
    ]
  },
  {
    topicId: 'html-links-images',
    title: 'Enlaces e Imagenes',
    sections: [
      { heading: 'Enlaces con a', content: 'El enlace se crea con la etiqueta a (anchor):\n\nEscribe: a href="https://google.com" con texto Ir a Google.\n\nAtributos importantes:\n- **href**: URL de destino.\n- **target="_blank"**: Abrir en nueva pestana.\n- **rel="noopener noreferrer"**: Seguridad al abrir en nueva pestana.\n- **title**: Tooltip al pasar el mouse.' },
      { heading: 'Enlaces relativos y absolutos', content: '**Absolutos** (URL completa):\nEscribe: a href="https://ejemplo.com/pagina" con texto Enlace.\n\n**Relativos** (dentro del sitio):\n- a href="/about" con texto Sobre nosotros (desde raiz).\n- a href="../index.html" con texto Inicio (subir un nivel).\n- a href="contacto.html" con texto Contacto (misma carpeta).\n\n**Enlaces internos** (misma pagina):\n- a href="#seccion2" con texto Ir a seccion 2.\n- h2 id="seccion2" con texto Seccion 2.' },
      { heading: 'Imagenes con img', content: 'La imagen se inserta con img (etiqueta vacia):\n\nEscribe: img src="foto.jpg" alt="Descripcion de la imagen" width="300" height="200".\n\nAtributos esenciales:\n- **src**: Ruta de la imagen.\n- **alt**: Texto alternativo (obligatorio para accesibilidad).\n- **width**/**height**: Dimensiones en pixeles.\n- **loading="lazy"**: Carga diferida para mejorar rendimiento.' },
      { heading: 'Imagenes responsivas', content: 'Para que las imagenes se adapten a diferentes pantallas:\n\nEscribe: img src="foto.jpg" alt="Foto" con style="max-width: 100%; height: auto;".\n\nO con la etiqueta picture para diferentes resoluciones:\n\nUsa picture con dos source (media min-width 800px con srcset foto-grande.jpg, media min-width 400px con srcset foto-mediana.jpg) y un img con src foto-pequena.jpg.' },
      { heading: 'Figure y Figcaption', content: 'Para agrupar imagenes con pies de foto:\n\nUsa figure que contenga un img src="diagrama.png" alt="Diagrama de flujo" y un figcaption con "Figura 1: Diagrama de flujo del proceso".\n\nfigure tambien sirve para codigo, videos o contenido embebido con descripcion.' },
    ]
  },
  {
    topicId: 'html-structure-semantics',
    title: 'Estructura Semantica',
    sections: [
      { heading: 'Que es HTML semantico?', content: 'HTML semantico usa etiquetas que describen el **significado** del contenido, no solo su apariencia. Mejora:\n\n- **Accesibilidad**: Lectores de pantalla entienden la estructura.\n- **SEO**: Los motores de busqueda indexan mejor.\n- **Mantenibilidad**: El codigo es mas legible.\n\nEjemplo: header es semantico, div class="header" no lo es.' },
      { heading: 'Etiquetas de estructura principal', content: 'Las etiquetas semanticas principales:\n\n- **header**: Cabecera de pagina o seccion.\n- **nav**: Navegacion principal.\n- **main**: Contenido principal (solo uno por pagina).\n- **article**: Contenido independiente (post, noticia).\n- **section**: Seccion tematica.\n- **aside**: Contenido complementario (sidebar).\n- **footer**: Pie de pagina o seccion.\n\nEjemplo de estructura:\nbody con header que contiene nav con texto Menu, luego main con article que tiene section Intro y section Contenido, y finalmente footer con texto Pie.' },
      { heading: 'Etiquetas de contenido', content: 'Etiquetas semanticas para contenido especifico:\n\n- **figure** + **figcaption**: Imagenes con descripcion.\n- **time**: Fechas y horas.\n- **address**: Informacion de contacto.\n- **mark**: Texto resaltado.\n- **details** + **summary**: Contenido desplegable.\n\nEjemplo de details:\nUsa details con un summary que diga "Ver mas informacion" y un p con "Aqui va el contenido oculto".' },
      { heading: 'Div vs etiquetas semanticas', content: 'Cuando usar cada uno:\n\n**Usa div cuando:**\n- Necesitas un contenedor para estilos CSS.\n- No hay una etiqueta semantica adecuada.\n- Es puro agrupamiento visual.\n\n**Usa semantica cuando:**\n- El contenido tiene un rol claro (navegacion, articulo, etc).\n- Quieres mejorar accesibilidad.\n- El contenido es independiente y reutilizable.\n\nRegla general: si puedes describir que es el contenido, usa la etiqueta semantica.' },
      { heading: 'Estructura completa de ejemplo', content: 'Pagina web completa con semantica:\n\nDOCTYPE html con lang="es", head con meta charset y viewport, title "Mi Blog". En body: header con h1 "Mi Blog" y nav con enlaces a Inicio, Posts, Sobre mi. Luego main con article que tiene h2 "Mi primer post", time con datetime 2025-01-15 y texto "15 de enero, 2025", y p con "Contenido del articulo...". Aside con h3 "Publicidad" y p con "Anuncio...". Finalmente footer con p "Copyright 2025 Mi Blog".' },
    ]
  },
  {
    topicId: 'html-forms',
    title: 'Formularios Interactivos',
    sections: [
      { heading: 'Estructura basica de un formulario', content: 'Los formularios capturan datos del usuario:\n\nUsa form con action="/enviar" method="POST", dentro un label for="nombre" con texto "Nombre:", un input type="text" id="nombre" name="nombre", y un button type="submit" con texto "Enviar".\n\n- **action**: URL donde se envian los datos.\n- **method**: HTTP method (GET o POST).\n- **name**: Clave del dato enviado.\n- **for**/**id**: Vinculan label con input (accesibilidad).' },
      { heading: 'Tipos de input', content: 'HTML ofrece muchos tipos de entrada:\n\n- **text**: Texto simple.\n- **password**: Contrasena (oculta).\n- **email**: Email con validacion.\n- **number**: Solo numeros.\n- **tel**: Telefono.\n- **url**: URL con validacion.\n- **date**: Selector de fecha.\n- **time**: Selector de hora.\n- **color**: Selector de color.\n- **range**: Slider.\n- **file**: Subir archivos.\n- **checkbox**: Casilla de verificacion.\n- **radio**: Boton de opcion (seleccionar uno de varios).\n\nEjemplo:\ninput type="email" name="correo" placeholder="tu@email.com" required.' },
      { heading: 'Select, Textarea y Botones', content: '**Select** (menu desplegable):\n\nUsa select name="pais" con option value="" "Selecciona...", option value="mx" "Mexico", y option value="co" "Colombia".\n\n**Textarea** (area de texto):\n\nUsa textarea name="mensaje" rows="5" cols="40" placeholder="Escribe aqui".\n\n**Botones:**\n\nbutton type="submit" "Enviar", button type="reset" "Limpiar", button type="button" "Accion".' },
      { heading: 'Validacion HTML', content: 'Validacion nativa sin JavaScript:\n\n- **required**: Campo obligatorio.\n- **minlength**/**maxlength**: Longitud minima/maxima.\n- **min**/**max**: Valor minimo/maximo (numeros).\n- **pattern**: Expresion regular.\n- **placeholder**: Texto de ejemplo.\n- **autofocus**: Focus automatico.\n\nEjemplo:\ninput type="text" name="usuario" required minlength="3" maxlength="20" pattern="[a-zA-Z]+" con un p que diga "Solo letras, entre 3 y 20 caracteres".\n\nEl navegador muestra errores automaticamente si la validacion falla.' },
      { heading: 'Accesibilidad en formularios', content: 'Buenas practicas para accesibilidad:\n\n1. **Siempre usa label**: Vincula cada input con su label usando for/id.\n2. **Agrupa con fieldset y legend**:\n\nUsa fieldset con legend "Datos personales", label for="nom" "Nombre:" e input type="text" id="nom" name="nom".\n\n3. **Muestra errores claros**: Usa aria-describedby para vincular mensajes de error.\n4. **Orden logico**: Tab debe seguir un orden intuitivo.' },
    ]
  },
  {
    topicId: 'html-media-other',
    title: 'Multimedia y Contenido Incrustado',
    sections: [
      { heading: 'Videos con video', content: 'Reproduce video directamente en el navegador:\n\nUsa video src="video.mp4" controls width="640" con texto alternativo "Tu navegador no soporta video".\n\nAtributos:\n- **controls**: Muestra controles de reproduccion.\n- **autoplay**: Reproduce automaticamente (bloqueado en la mayoria de navegadores).\n- **loop**: Repite en bucle.\n- **muted**: Sin sonido por defecto.\n- **poster**: Imagen previa al play.\n\nCon multiples fuentes:\nUsa video controls con dos source (video.mp4 type video/mp4 y video.webm type video/webm) y texto alternativo.' },
      { heading: 'Audio con audio', content: 'Reproduce audio:\n\nUsa audio src="cancion.mp3" controls.\n\nCon multiples fuentes:\nUsa audio controls con source src="audio.mp3" type audio/mpeg y source src="audio.ogg" type audio/ogg, con texto alternativo.\n\nMismos atributos que video: controls, autoplay, loop, muted.' },
      { heading: 'Iframes para contenido embebido', content: 'Los iframe incrustan contenido de otros sitios:\n\n**YouTube:**\nUsa iframe width="560" height="315" src="https://www.youtube.com/embed/ID_VIDEO" frameborder="0" allowfullscreen.\n\n**Google Maps:**\nUsa iframe src="https://www.google.com/maps/embed?..." width="600" height="450" allowfullscreen.\n\n**Seguridad**: Usa sandbox para restringir permisos:\niframe src="..." sandbox="allow-scripts allow-same-origin".' },
      { heading: 'SVG en linea', content: 'SVG (Scalable Vector Graphics) para graficos vectoriales:\n\n**En linea:**\nUsa svg width="100" height="100" viewBox="0 0 100 100" con un circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow".\n\n**Como imagen:**\nimg src="logo.svg" alt="Logo" width="200".\n\n**Como fondo CSS:**\nbackground-image: url(\'imagen.svg\');\n\nSVG es ideal para iconos, logos y graficos que deben escalarse sin perder calidad.' },
      { heading: 'Optimizacion de multimedia', content: 'Mejores practicas:\n\n1. **Imagenes**: Usa formatos modernos (WebP, AVIF) y loading="lazy".\n2. **Video**: Comprime y ofrece multiples formatos (MP4 + WebM).\n3. **Audio**: Usa MP3 con bitrate moderado (128-192 kbps).\n4. **Iframes**: Carga diferida con loading="lazy".\n5. **Siempre incluye fallback**: Texto alternativo o mensaje para navegadores antiguos.\n6. **Tamanos**: Define width/height para evitar layout shift.' },
    ]
  },
];
