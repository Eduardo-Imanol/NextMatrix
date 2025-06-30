// @/lib/data/javascript-quiz.ts

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  topicId: 'js-fundamentals' | 'js-operators' | 'js-functions' | 'js-objects-arrays' | 'js-dom-events' | 'js-async' | 'js-extras';
}

export const javascriptQuiz: QuizQuestion[] = [
    // Fundamentos y Sintaxis
    { question: '¿Cuál de estos no es un tipo primitivo en JavaScript?', options: ['String', 'Number', 'Object', 'Boolean'], correctAnswer: 'Object', topicId: 'js-fundamentals' },
    { question: '¿Cuál es el resultado de typeof null?', options: ['"null"', '"object"', '"undefined"', '"function"'], correctAnswer: '"object"', topicId: 'js-fundamentals' },
    { question: '¿Qué operador se usa para estricta igualdad?', options: ['=', '==', '===', '!='], correctAnswer: '===', topicId: 'js-fundamentals' },
    { question: '¿Cuál es el valor por defecto de una variable no inicializada?', options: ['null', 'undefined', 'false', '0'], correctAnswer: 'undefined', topicId: 'js-fundamentals' },
    { question: '¿Qué hace typeof NaN?', options: ['"NaN"', '"object"', '"undefined"', '"number"'], correctAnswer: '"number"', topicId: 'js-fundamentals' },

    // Operadores y Control de Flujo
    { question: '¿Qué palabra clave se usa para salir de un bucle?', options: ['stop', 'exit', 'break', 'continue'], correctAnswer: 'break', topicId: 'js-operators' },
    { question: '¿Cuál de estos valores es considerado "falsy"?', options: ['"0"', '[]', '1', '0'], correctAnswer: '0', topicId: 'js-operators' },
    { question: '¿Qué devuelve la expresión: false || "Hola"?', options: ['false', 'true', '"Hola"', 'null'], correctAnswer: '"Hola"', topicId: 'js-operators' },
    { question: '¿Qué hace el operador ternario?', options: ['Declara tres variables', 'Es un atajo para un if/else', 'Crea un bucle', 'Compara tres valores'], correctAnswer: 'Es un atajo para un if/else', topicId: 'js-operators' },
    { question: '¿Qué hace `continue` en un bucle?', options: ['Termina el bucle', 'Salta a la siguiente iteración', 'Lanza un error', 'Reinicia el bucle'], correctAnswer: 'Salta a la siguiente iteración', topicId: 'js-operators' },

    // Funciones
    { question: '¿Qué es una "arrow function"?', options: ['Una función con flechas en su nombre', 'Una sintaxis más corta para escribir funciones', 'Una función que solo devuelve números', 'Una función que se ejecuta en otro hilo'], correctAnswer: 'Una sintaxis más corta para escribir funciones', topicId: 'js-functions' },
    { question: '¿Qué es una función "callback"?', options: ['Una función que se llama a sí misma', 'Una función que se pasa como argumento a otra función', 'Una función que devuelve un error', 'Una función que se ejecuta al final del script'], correctAnswer: 'Una función que se pasa como argumento a otra función', topicId: 'js-functions' },
    { question: '¿Qué devuelve una función que no tiene una sentencia `return`?', options: ['null', '0', 'false', 'undefined'], correctAnswer: 'undefined', topicId: 'js-functions' },
    { question: '¿Qué hace `setTimeout`?', options: ['Ejecuta una función repetidamente', 'Ejecuta una función después de un cierto tiempo', 'Detiene la ejecución del script', 'Mide el tiempo de ejecución'], correctAnswer: 'Ejecuta una función después de un cierto tiempo', topicId: 'js-functions' },
    { question: '¿Qué palabra clave se usa para recibir un número indefinido de argumentos como un array?', options: ['...args', '&args', '*args', 'arguments[]'], correctAnswer: '...args', topicId: 'js-functions' },

    // Objetos y Arrays
    { question: '¿Cómo se accede a la propiedad `nombre` de un objeto `user`?', options: ['user("nombre")', 'user.get("nombre")', 'user.nombre', 'user->nombre'], correctAnswer: 'user.nombre', topicId: 'js-objects-arrays' },
    { question: '¿Qué método agrega un elemento al final de un array?', options: ['add()', 'push()', 'append()', 'addToEnd()'], correctAnswer: 'push()', topicId: 'js-objects-arrays' },
    { question: '¿Qué método elimina el primer elemento de un array y lo devuelve?', options: ['pop()', 'removeFirst()', 'shift()', 'slice(0, 1)'], correctAnswer: 'shift()', topicId: 'js-objects-arrays' },
    { question: '¿Cuál es el resultado de `typeof []`?', options: ['"array"', '"list"', '"object"', '"iterable"'], correctAnswer: '"object"', topicId: 'js-objects-arrays' },
    { question: '¿Qué método crea una copia superficial de una parte de un array?', options: ['copy()', 'duplicate()', 'splice()', 'slice()'], correctAnswer: 'slice()', topicId: 'js-objects-arrays' },

    // DOM y Eventos
    { question: '¿Qué significa DOM?', options: ['Data Object Model', 'Document Order Model', 'Document Object Model', 'Dynamic Object Model'], correctAnswer: 'Document Object Model', topicId: 'js-dom-events' },
    { question: '¿Qué método se usa para seleccionar un único elemento con un selector CSS?', options: ['getElement()', 'querySelector()', 'find()', 'select()'], correctAnswer: 'querySelector()', topicId: 'js-dom-events' },
    { question: '¿Qué propiedad cambia el contenido de texto de un elemento?', options: ['text', 'content', 'value', 'textContent'], correctAnswer: 'textContent', topicId: 'js-dom-events' },
    { question: '¿Cómo se añade un "event listener" a un elemento?', options: ['element.listen("click", fn)', 'element.onEvent("click", fn)', 'element.addEventListener("click", fn)', 'element.attach("click", fn)'], correctAnswer: 'element.addEventListener("click", fn)', topicId: 'js-dom-events' },
    { question: '¿Qué hace `e.preventDefault()` en un manejador de eventos?', options: ['Detiene la propagación del evento', 'Previene la acción por defecto del navegador', 'Elimina el elemento del DOM', 'Ejecuta el evento de nuevo'], correctAnswer: 'Previene la acción por defecto del navegador', topicId: 'js-dom-events' },
    
    // Asincronía
    { question: '¿Qué es una `Promise` en JavaScript?', options: ['Un valor que siempre es verdadero', 'Una función que se ejecuta en el futuro', 'Un objeto que representa la eventual finalización (o falla) de una operación asíncrona', 'Un tipo de dato para números muy grandes'], correctAnswer: 'Un objeto que representa la eventual finalización (o falla) de una operación asíncrona', topicId: 'js-async' },
    { question: '¿Qué método se encadena a una promesa para manejar un resultado exitoso?', options: ['.then()', '.catch()', '.finally()', '.success()'], correctAnswer: '.then()', topicId: 'js-async' },
    { question: '¿Qué hace la palabra clave `async` antes de una función?', options: ['La ejecuta inmediatamente', 'Hace que la función se ejecute de forma síncrona', 'Hace que la función siempre devuelva una promesa', 'Evita que la función devuelva un valor'], correctAnswer: 'Hace que la función siempre devuelva una promesa', topicId: 'js-async' },
    { question: '¿Qué hace la palabra clave `await`?', options: ['Cancela una promesa', 'Pausa la ejecución de una función `async` hasta que una promesa se resuelva', 'Define un valor por defecto para una promesa', 'Lanza un error inmediatamente'], correctAnswer: 'Pausa la ejecución de una función `async` hasta que una promesa se resuelva', topicId: 'js-async' },
    { question: '¿Qué devuelve la API `fetch()`?', options: ['Un objeto JSON', 'Una cadena de texto HTML', 'Una Promesa', 'Un objeto de error'], correctAnswer: 'Una Promesa', topicId: 'js-async' },

    // Extras
    { question: '¿Cuál es el resultado de `NaN === NaN`?', options: ['true', 'false', 'undefined', 'Error'], correctAnswer: 'false', topicId: 'js-extras' },
    { question: '¿Qué hace `Object.keys(obj)`?', options: ['Devuelve un array con los valores del objeto', 'Devuelve un array con las claves (propiedades) del objeto', 'Devuelve el número de propiedades del objeto', 'Comprueba si un objeto tiene claves'], correctAnswer: 'Devuelve un array con las claves (propiedades) del objeto', topicId: 'js-extras' },
    { question: '¿Para qué se usa la desestructuración (destructuring)?', options: ['Para eliminar propiedades de un objeto', 'Para combinar dos objetos en uno', 'Para extraer datos de arrays u objetos en variables distintas', 'Para encriptar un objeto'], correctAnswer: 'Para extraer datos de arrays u objetos en variables distintas', topicId: 'js-extras' },
    { question: '¿Qué hace `JSON.stringify(obj)`?', options: ['Convierte un objeto JavaScript a una cadena de texto JSON', 'Convierte una cadena JSON a un objeto JavaScript', 'Muestra el objeto en la consola con formato', 'Crea una copia profunda del objeto'], correctAnswer: 'Convierte un objeto JavaScript a una cadena de texto JSON', topicId: 'js-extras' },
    { question: '¿Qué es el operador "spread" (`...`)?', options: ['Se usa para comentarios de varias líneas', 'Permite a una expresión ser expandida en lugares donde se esperan múltiples elementos/argumentos', 'Define argumentos opcionales en una función', 'Resta valores de un array'], correctAnswer: 'Permite a una expresión ser expandida en lugares donde se esperan múltiples elementos/argumentos', topicId: 'js-extras' },
];
