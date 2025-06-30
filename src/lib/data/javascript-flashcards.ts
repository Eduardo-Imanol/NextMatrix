// @/lib/data/javascript-flashcards.ts

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  topicId: 'js-fundamentals' | 'js-operators' | 'js-functions' | 'js-objects-arrays' | 'js-dom-events' | 'js-async' | 'js-extras';
}

export const javascriptFlashcards: Flashcard[] = [
  // 1. Fundamentos y Sintaxis
  { id: 301, question: '¿Qué es JavaScript?', answer: 'Lenguaje de programación interpretado y orientado a objetos usado para crear páginas web interactivas.', topicId: 'js-fundamentals' },
  { id: 302, question: '¿JavaScript es lo mismo que Java?', answer: 'No, son lenguajes distintos con sintaxis diferente y propósitos distintos.', topicId: 'js-fundamentals' },
  { id: 303, question: '¿Cómo se declara una variable en JavaScript moderno?', answer: 'Con let, const o var.', topicId: 'js-fundamentals' },
  { id: 304, question: '¿Cuál es la diferencia entre let y const?', answer: 'let permite reasignar valores; const no permite reasignación.', topicId: 'js-fundamentals' },
  { id: 305, question: '¿Qué tipo de lenguaje es JavaScript?', answer: 'Dinámico, débilmente tipado y basado en prototipos.', topicId: 'js-fundamentals' },
  { id: 306, question: '¿Cómo se imprime un mensaje en consola?', answer: 'console.log("mensaje");', topicId: 'js-fundamentals' },
  { id: 307, question: '¿Qué hace el operador typeof?', answer: 'Devuelve el tipo de dato de una variable.', topicId: 'js-fundamentals' },
  { id: 308, question: '¿Qué devuelve typeof null?', answer: '"object" (es un error histórico de JavaScript).', topicId: 'js-fundamentals' },
  { id: 309, question: '¿Qué significa hoisting?', answer: 'Que las declaraciones se mueven al inicio del ámbito, pero no sus inicializaciones.', topicId: 'js-fundamentals' },
  { id: 310, question: '¿Qué tipos de datos primitivos existen en JS?', answer: 'String, Number, Boolean, Null, Undefined, Symbol, BigInt.', topicId: 'js-fundamentals' },
  { id: 311, question: '¿Qué es una expresión?', answer: 'Una unidad válida de código que produce un valor.', topicId: 'js-fundamentals' },
  { id: 312, question: '¿Qué valor devuelve una función sin return?', answer: 'undefined.', topicId: 'js-fundamentals' },
  { id: 313, question: '¿Qué hace parseInt("10.5")?', answer: 'Devuelve 10, porque solo toma la parte entera.', topicId: 'js-fundamentals' },
  { id: 314, question: '¿Qué hace isNaN("abc")?', answer: 'Devuelve true, porque no es un número válido.', topicId: 'js-fundamentals' },
  { id: 315, question: '¿Qué hace === en comparación con ==?', answer: '=== compara valor y tipo; == solo valor (con conversión implícita).', topicId: 'js-fundamentals' },

  // 2. Operadores y Control de Flujo
  { id: 316, question: '¿Qué hace el operador !?', answer: 'Niega una expresión booleana.', topicId: 'js-operators' },
  { id: 317, question: '¿Qué valor es falsy en JavaScript?', answer: 'false, 0, "", null, undefined, NaN.', topicId: 'js-operators' },
  { id: 318, question: '¿Cuál es la diferencia entre && y ||?', answer: '&& devuelve el primer falsy; || devuelve el primer truthy.', topicId: 'js-operators' },
  { id: 319, question: '¿Qué estructura se usa para decisiones condicionales?', answer: 'if, else if, else, y switch.', topicId: 'js-operators' },
  { id: 320, question: '¿Qué estructura se usa para repetir código?', answer: 'for, while, do...while, for...in, for...of.', topicId: 'js-operators' },
  { id: 321, question: '¿Qué hace break dentro de un bucle?', answer: 'Sale inmediatamente del bucle.', topicId: 'js-operators' },
  { id: 322, question: '¿Qué hace continue dentro de un bucle?', answer: 'Salta a la siguiente iteración del bucle.', topicId: 'js-operators' },
  { id: 323, question: '¿Qué hace switch?', answer: 'Evalúa una expresión y ejecuta el caso coincidente.', topicId: 'js-operators' },
  { id: 324, question: '¿Para qué sirve default en un switch?', answer: 'Código que se ejecuta si no hay coincidencias.', topicId: 'js-operators' },
  { id: 325, question: '¿Se pueden anidar estructuras if y switch?', answer: 'Sí, pero se recomienda claridad.', topicId: 'js-operators' },
  { id: 326, question: '¿Qué valor se obtiene con Boolean(0)?', answer: 'false.', topicId: 'js-operators' },
  { id: 327, question: '¿Qué hace el operador ternario ? :', answer: 'Reemplaza un if-else corto: condición ? true : false.', topicId: 'js-operators' },
  { id: 328, question: '¿Qué hace !!valor?', answer: 'Convierte cualquier valor a booleano.', topicId: 'js-operators' },
  { id: 329, question: '¿Qué resultado da null == undefined?', answer: 'true.', topicId: 'js-operators' },
  { id: 330, question: '¿Qué resultado da null === undefined?', answer: 'false.', topicId: 'js-operators' },

  // 3. Funciones
  { id: 331, question: '¿Cómo se declara una función tradicional?', answer: 'function nombre() { ... }', topicId: 'js-functions' },
  { id: 332, question: '¿Qué es una función anónima?', answer: 'Una función sin nombre asignada a una variable.', topicId: 'js-functions' },
  { id: 333, question: '¿Qué es una arrow function?', answer: 'Una función corta con sintaxis () => {}.', topicId: 'js-functions' },
  { id: 334, question: '¿Qué diferencia a una arrow function de una normal?', answer: 'No tiene su propio this ni arguments.', topicId: 'js-functions' },
  { id: 335, question: '¿Qué es una función de orden superior?', answer: 'Una que recibe o devuelve otra función.', topicId: 'js-functions' },
  { id: 336, question: '¿Qué es una función callback?', answer: 'Una función pasada como argumento a otra.', topicId: 'js-functions' },
  { id: 337, question: '¿Se pueden declarar funciones dentro de funciones?', answer: 'Sí, se llaman funciones anidadas.', topicId: 'js-functions' },
  { id: 338, question: '¿Qué pasa si llamas una función antes de declararla?', answer: 'Solo funciona si fue declarada con function, no con const o let.', topicId: 'js-functions' },
  { id: 339, question: '¿Qué hace return en una función?', answer: 'Detiene la ejecución y devuelve un valor.', topicId: 'js-functions' },
  { id: 340, question: '¿Qué hace arguments dentro de una función tradicional?', answer: 'Es un objeto que contiene todos los argumentos pasados.', topicId: 'js-functions' },
  { id: 341, question: '¿Cómo se puede hacer que una función reciba cualquier número de argumentos?', answer: 'Usando el operador ...rest.', topicId: 'js-functions' },
  { id: 342, question: '¿Qué hace setTimeout(fn, 1000)?', answer: 'Ejecuta fn luego de 1 segundo.', topicId: 'js-functions' },
  { id: 343, question: '¿Qué hace setInterval(fn, 1000)?', answer: 'Ejecuta fn cada segundo.', topicId: 'js-functions' },
  { id: 344, question: '¿Cómo se cancela un setInterval?', answer: 'Con clearInterval(id).', topicId: 'js-functions' },
  { id: 345, question: '¿Qué hace una función autoejecutable (IIFE)?', answer: 'Se ejecuta inmediatamente tras definirse: (() => {})().', topicId: 'js-functions' },

  // 4. Objetos, Arrays y Tipos Especiales
  { id: 346, question: '¿Cómo se define un objeto en JS?', answer: 'Con llaves: { clave: valor }.', topicId: 'js-objects-arrays' },
  { id: 347, question: '¿Cómo se accede a una propiedad de objeto?', answer: 'Con obj.prop o obj["prop"].', topicId: 'js-objects-arrays' },
  { id: 348, question: '¿Cómo se elimina una propiedad de objeto?', answer: 'delete obj.prop.', topicId: 'js-objects-arrays' },
  { id: 349, question: '¿Qué es un array?', answer: 'Una lista ordenada de elementos indexados.', topicId: 'js-objects-arrays' },
  { id: 350, question: '¿Cómo se accede a un elemento de array?', answer: 'Con corchetes: arr[0].', topicId: 'js-objects-arrays' },
  { id: 351, question: '¿Cómo se agrega un elemento al final de un array?', answer: 'arr.push(valor).', topicId: 'js-objects-arrays' },
  { id: 352, question: '¿Cómo se elimina el último elemento del array?', answer: 'arr.pop().', topicId: 'js-objects-arrays' },
  { id: 353, question: '¿Cómo se elimina el primer elemento del array?', answer: 'arr.shift().', topicId: 'js-objects-arrays' },
  { id: 354, question: '¿Cómo se agrega al inicio de un array?', answer: 'arr.unshift(valor).', topicId: 'js-objects-arrays' },
  { id: 355, question: '¿Qué hace arr.length?', answer: 'Devuelve la cantidad de elementos.', topicId: 'js-objects-arrays' },
  { id: 356, question: '¿Qué hace arr.indexOf("x")?', answer: 'Devuelve el índice de "x" o -1 si no existe.', topicId: 'js-objects-arrays' },
  { id: 357, question: '¿Qué hace arr.includes("x")?', answer: 'Retorna true si "x" está presente.', topicId: 'js-objects-arrays' },
  { id: 358, question: '¿Qué hace arr.slice(1, 3)?', answer: 'Crea un nuevo array del índice 1 al 2.', topicId: 'js-objects-arrays' },
  { id: 359, question: '¿Qué hace arr.splice(2, 1)?', answer: 'Elimina un elemento en la posición 2.', topicId: 'js-objects-arrays' },
  { id: 360, question: '¿Qué hace Array.isArray(x)?', answer: 'Retorna true si x es un array.', topicId: 'js-objects-arrays' },
  { id: 361, question: '¿Qué hace arr.join(", ")?', answer: 'Une los elementos con coma y espacio.', topicId: 'js-objects-arrays' },
  { id: 362, question: '¿Qué hace arr.reverse()?', answer: 'Invierte el orden del array.', topicId: 'js-objects-arrays' },
  { id: 363, question: '¿Qué hace arr.sort()?', answer: 'Ordena alfabéticamente por defecto.', topicId: 'js-objects-arrays' },
  { id: 364, question: '¿Qué es typeof []?', answer: '"object" (los arrays son objetos).', topicId: 'js-objects-arrays' },
  { id: 365, question: '¿Qué es un objeto literal?', answer: 'Un objeto creado directamente con {}.', topicId: 'js-objects-arrays' },

  // 5. DOM y Eventos
  { id: 366, question: '¿Qué es el DOM?', answer: 'Modelo de objetos del documento HTML.', topicId: 'js-dom-events' },
  { id: 367, question: '¿Cómo seleccionas un elemento por ID?', answer: 'document.getElementById("id").', topicId: 'js-dom-events' },
  { id: 368, question: '¿Cómo seleccionas por clase?', answer: 'document.querySelector(".clase").', topicId: 'js-dom-events' },
  { id: 369, question: '¿Qué hace document.querySelectorAll("p")?', answer: 'Selecciona todos los elementos <p>.', topicId: 'js-dom-events' },
  { id: 370, question: '¿Cómo cambias el texto de un elemento?', answer: 'element.textContent = "nuevo texto".', topicId: 'js-dom-events' },
  { id: 371, question: '¿Cómo cambias el HTML interno de un elemento?', answer: 'element.innerHTML = "<b>nuevo</b>".', topicId: 'js-dom-events' },
  { id: 372, question: '¿Cómo agregas una clase a un elemento?', answer: 'element.classList.add("nueva").', topicId: 'js-dom-events' },
  { id: 373, question: '¿Cómo eliminas una clase?', answer: 'element.classList.remove("clase").', topicId: 'js-dom-events' },
  { id: 374, question: '¿Cómo alternas una clase?', answer: 'element.classList.toggle("modo").', topicId: 'js-dom-events' },
  { id: 375, question: '¿Cómo se escucha un evento click?', answer: 'element.addEventListener("click", funcion).', topicId: 'js-dom-events' },
  { id: 376, question: '¿Qué hace e.preventDefault()?', answer: 'Previene el comportamiento por defecto (como enviar un formulario).', topicId: 'js-dom-events' },
  { id: 377, question: '¿Qué hace e.target?', answer: 'Devuelve el elemento que disparó el evento.', topicId: 'js-dom-events' },
  { id: 378, question: '¿Qué hace e.currentTarget?', answer: 'Elemento al que se asignó el listener.', topicId: 'js-dom-events' },
  { id: 379, question: '¿Qué es delegación de eventos?', answer: 'Escuchar eventos en un contenedor y filtrar con e.target.', topicId: 'js-dom-events' },
  { id: 380, question: '¿Qué hace document.createElement("div")?', answer: 'Crea un nuevo elemento <div> en memoria.', topicId: 'js-dom-events' },

  // 6. Asincronía y Fetch API
  { id: 381, question: '¿Qué es asincronía?', answer: 'Ejecución no bloqueante de tareas.', topicId: 'js-async' },
  { id: 382, question: '¿Qué es una promesa (Promise)?', answer: 'Un objeto que representa un valor futuro.', topicId: 'js-async' },
  { id: 383, question: '¿Qué hace .then()?', answer: 'Ejecuta código cuando la promesa se resuelve.', topicId: 'js-async' },
  { id: 384, question: '¿Qué hace .catch()?', answer: 'Captura errores de la promesa.', topicId: 'js-async' },
  { id: 385, question: '¿Qué hace .finally()?', answer: 'Ejecuta siempre al final, resuelva o falle la promesa.', topicId: 'js-async' },
  { id: 386, question: '¿Qué es async?', answer: 'Declara una función que devuelve una promesa.', topicId: 'js-async' },
  { id: 387, question: '¿Qué hace await?', answer: 'Espera a que una promesa se resuelva.', topicId: 'js-async' },
  { id: 388, question: '¿Qué hace fetch()?', answer: 'Realiza una solicitud HTTP asincrónica.', topicId: 'js-async' },
  { id: 389, question: '¿Qué devuelve fetch()?', answer: 'Una promesa que se resuelve con un Response.', topicId: 'js-async' },
  { id: 390, question: '¿Cómo se convierte la respuesta de fetch en JSON?', answer: 'response.json().', topicId: 'js-async' },

  // 7. Extras y Buenas Prácticas
  { id: 391, question: '¿Qué es NaN?', answer: '"Not a Number", un valor inválido numérico.', topicId: 'js-extras' },
  { id: 392, question: '¿NaN === NaN es true?', answer: 'No, siempre es false.', topicId: 'js-extras' },
  { id: 393, question: '¿Qué hace Object.keys(obj)?', answer: 'Devuelve un array con las claves del objeto.', topicId: 'js-extras' },
  { id: 394, question: '¿Qué hace Object.values(obj)?', answer: 'Devuelve un array con los valores.', topicId: 'js-extras' },
  { id: 395, question: '¿Qué es una función pura?', answer: 'Una que no tiene efectos secundarios.', topicId: 'js-extras' },
  { id: 396, question: '¿Qué es inmutabilidad?', answer: 'No modificar los datos originales.', topicId: 'js-extras' },
  { id: 397, question: '¿Qué es destructuración?', answer: 'Extraer propiedades de objetos/arrays en variables.', topicId: 'js-extras' },
  { id: 398, question: '¿Qué es spread operator (...) en objetos/arrays?', answer: 'Copia propiedades o elementos.', topicId: 'js-extras' },
  { id: 399, question: '¿Qué es JSON?', answer: 'Formato ligero de datos basado en texto, similar a objetos JS.', topicId: 'js-extras' },
  { id: 400, question: '¿Cómo se convierte un objeto a JSON?', answer: 'JSON.stringify(obj).', topicId: 'js-extras' },
];
