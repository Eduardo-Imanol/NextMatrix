// @/lib/data/react-flashcards.ts

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  topicId: 'react-basics' | 'react-jsx' | 'react-functional-components' | 'react-props-state' | 'react-events-forms' | 'react-basic-hooks' | 'react-conditional-rendering' | 'react-lifecycle' | 'react-best-practices' | 'react-advanced-intro';
}

export const reactFlashcards: Flashcard[] = [
  // 1. React Básico
  { id: 401, question: '¿Qué es React?', answer: 'Una biblioteca de JavaScript para construir interfaces de usuario interactivas y declarativas.', topicId: 'react-basics' },
  { id: 402, question: '¿Quién creó React?', answer: 'Facebook (ahora Meta).', topicId: 'react-basics' },
  { id: 403, question: '¿React es un framework?', answer: 'No, es una biblioteca.', topicId: 'react-basics' },
  { id: 404, question: '¿Cuál es la unidad básica de construcción en React?', answer: 'El componente.', topicId: 'react-basics' },
  { id: 405, question: '¿Qué es el DOM virtual?', answer: 'Una representación en memoria del DOM real que React usa para mejorar el rendimiento.', topicId: 'react-basics' },
  { id: 406, question: '¿Qué comando se usa para crear un nuevo proyecto con Create React App?', answer: 'npx create-react-app nombre-proyecto', topicId: 'react-basics' },
  { id: 407, question: '¿Qué es el estado (state) en React?', answer: 'Una estructura que contiene datos que pueden cambiar con el tiempo y afectan lo que se renderiza.', topicId: 'react-basics' },
  { id: 408, question: '¿React trabaja de forma sincrónica o asincrónica?', answer: 'React realiza el renderizado de manera asincrónica usando el Virtual DOM.', topicId: 'react-basics' },
  { id: 409, question: '¿Qué hace react-dom?', answer: 'Permite renderizar componentes de React en el DOM real del navegador.', topicId: 'react-basics' },
  { id: 410, question: '¿Qué archivo contiene el punto de entrada de una app React?', answer: 'index.js o main.jsx (depende del setup).', topicId: 'react-basics' },
  { id: 411, question: '¿Qué hace ReactDOM.createRoot()?', answer: 'Inicializa la raíz del DOM para React 18 y versiones superiores (con concurrent rendering).', topicId: 'react-basics' },
  { id: 412, question: '¿Qué función se usa para mostrar un componente en pantalla?', answer: 'ReactDOM.render() (React < 18) o createRoot().render() (React 18+).', topicId: 'react-basics' },
  { id: 413, question: '¿Qué es JSX?', answer: 'Una extensión de JavaScript que permite escribir HTML dentro del código JS.', topicId: 'react-basics' },
  { id: 414, question: '¿Qué ventajas tiene React?', answer: 'Reutilización de componentes, Virtual DOM, comunidad grande, rendimiento, unidireccionalidad de datos.', topicId: 'react-basics' },
  { id: 415, question: '¿React puede usarse para apps móviles?', answer: 'Sí, con React Native.', topicId: 'react-basics' },

  // 2. JSX
  { id: 416, question: '¿Qué significa JSX?', answer: 'JavaScript XML.', topicId: 'react-jsx' },
  { id: 417, question: '¿JSX es obligatorio en React?', answer: 'No, pero es altamente recomendado.', topicId: 'react-jsx' },
  { id: 418, question: '¿Qué debe devolver un componente en JSX?', answer: 'Un solo nodo (elemento padre único).', topicId: 'react-jsx' },
  { id: 419, question: '¿Qué función traduce JSX a JavaScript?', answer: 'React.createElement().', topicId: 'react-jsx' },
  { id: 420, question: '¿Qué se necesita para usar JSX?', answer: 'Un compilador como Babel.', topicId: 'react-jsx' },
  { id: 421, question: '¿Cómo se insertan variables en JSX?', answer: 'Usando {} dentro del JSX.', topicId: 'react-jsx' },
  { id: 422, question: '¿Se puede usar if directamente en JSX?', answer: 'No, pero se puede usar operadores ternarios o funciones auxiliares.', topicId: 'react-jsx' },
  { id: 423, question: '¿Qué atributo se usa en JSX en lugar de class?', answer: 'className.', topicId: 'react-jsx' },
  { id: 424, question: '¿Qué atributo se usa para for en etiquetas JSX?', answer: 'htmlFor.', topicId: 'react-jsx' },
  { id: 425, question: '¿Qué tipos de expresiones se pueden usar en JSX?', answer: 'Variables, funciones, operadores ternarios, llamados a métodos.', topicId: 'react-jsx' },
  { id: 426, question: '¿Qué hace {true && <p>Hola</p>}?', answer: 'Renderiza <p>Hola</p> porque true && evalúa el segundo operando.', topicId: 'react-jsx' },
  { id: 427, question: '¿Puedes usar comentarios en JSX?', answer: 'Sí, con {/* comentario */}.', topicId: 'react-jsx' },
  { id: 428, question: '¿Qué pasa si devuelves múltiples etiquetas sin envolver?', answer: 'React lanza un error; se necesita envolver en un contenedor como <div> o <></>.', topicId: 'react-jsx' },
  { id: 429, question: '¿Qué es un fragmento (<> </>) en JSX?', answer: 'Una forma de envolver múltiples elementos sin añadir un nodo al DOM.', topicId: 'react-jsx' },
  { id: 430, question: '¿Qué hace dangerouslySetInnerHTML?', answer: 'Permite insertar HTML directamente (puede causar vulnerabilidades XSS si no se usa con cuidado).', topicId: 'react-jsx' },

  // 3. Componentes Funcionales
  { id: 431, question: '¿Qué es un componente en React?', answer: 'Una función o clase que devuelve JSX y puede tener lógica propia.', topicId: 'react-functional-components' },
  { id: 432, question: '¿Qué es un componente funcional?', answer: 'Una función JavaScript que devuelve JSX.', topicId: 'react-functional-components' },
  { id: 433, question: '¿Cuál es la sintaxis básica de un componente funcional?', answer: 'function MiComponente() {\n  return <h1>Hola</h1>;\n}', topicId: 'react-functional-components' },
  { id: 434, question: '¿Cómo se importa un componente en otro archivo?', answer: "import MiComponente from './MiComponente'", topicId: 'react-functional-components' },
  { id: 435, question: '¿Cuál es la convención de nombre para componentes?', answer: 'Comienzan con mayúscula.', topicId: 'react-functional-components' },
  { id: 436, question: '¿Un componente puede retornar más de un elemento?', answer: 'Sí, si están dentro de un contenedor (<div> o fragmento).', topicId: 'react-functional-components' },
  { id: 437, question: '¿Cuál es la diferencia entre componente funcional y de clase?', answer: 'Las funciones son más simples y usan hooks; las clases tienen métodos de ciclo de vida.', topicId: 'react-functional-components' },
  { id: 438, question: '¿Qué hook se usa para manejar el estado en componentes funcionales?', answer: 'useState.', topicId: 'react-functional-components' },
  { id: 439, question: '¿Qué hook se usa para manejar efectos secundarios?', answer: 'useEffect.', topicId: 'react-functional-components' },
  { id: 440, question: '¿Qué ventaja tienen los componentes funcionales frente a los de clase?', answer: 'Son más concisos, fáciles de testear y tienen menos boilerplate.', topicId: 'react-functional-components' },
  { id: 441, question: '¿React renderiza los componentes en cada cambio de estado?', answer: 'Sí, pero solo los que cambian.', topicId: 'react-functional-components' },
  { id: 442, question: '¿Se pueden anidar componentes?', answer: 'Sí, los componentes pueden renderizar otros componentes.', topicId: 'react-functional-components' },
  { id: 443, question: '¿Se pueden definir componentes dentro de otros?', answer: 'Sí, aunque no es lo más recomendable salvo casos específicos.', topicId: 'react-functional-components' },
  { id: 444, question: '¿Qué es una función pura en React?', answer: 'Una que devuelve siempre el mismo resultado con los mismos parámetros y no tiene efectos secundarios.', topicId: 'react-functional-components' },
  { id: 445, question: '¿Cómo se renderiza un componente dentro de otro?', answer: 'Incluyéndolo como una etiqueta: <MiComponente />.', topicId: 'react-functional-components' },

  // 4. Props y State
  { id: 446, question: '¿Qué son las props en React?', answer: 'Parámetros que se pasan a un componente desde su componente padre.', topicId: 'react-props-state' },
  { id: 447, question: '¿Las props son mutables?', answer: 'No, son inmutables.', topicId: 'react-props-state' },
  { id: 448, question: '¿Qué tipo de datos pueden pasar por props?', answer: 'Cualquier tipo: string, number, boolean, función, objetos, componentes, etc.', topicId: 'react-props-state' },
  { id: 449, question: '¿Qué es el state en React?', answer: 'Un objeto que almacena datos locales del componente que pueden cambiar.', topicId: 'react-props-state' },
  { id: 450, question: '¿Cómo se inicializa un state?', answer: 'Usando useState(valorInicial).', topicId: 'react-props-state' },
  { id: 451, question: '¿Cómo se actualiza el state?', answer: 'Llamando a la función que devuelve useState.', topicId: 'react-props-state' },
  { id: 452, question: '¿Actualizar el state reemplaza el valor anterior?', answer: 'Sí, reemplaza el valor entero (no hace merge).', topicId: 'react-props-state' },
  { id: 453, question: '¿Se puede pasar una función por props?', answer: 'Sí, es común pasar callbacks.', topicId: 'react-props-state' },
  { id: 454, question: '¿Qué es lifting state up?', answer: 'Mover el state a un componente común para compartirlo entre varios.', topicId: 'react-props-state' },
  { id: 455, question: '¿Qué es una prop children?', answer: 'Es el contenido que se coloca entre las etiquetas del componente.', topicId: 'react-props-state' },
  { id: 456, question: '¿Qué hace setState(prev => prev + 1)?', answer: 'Actualiza el valor del state basado en su valor anterior.', topicId: 'react-props-state' },
  { id: 457, question: '¿Qué pasa si se cambia el estado con el mismo valor?', answer: 'No se vuelve a renderizar el componente.', topicId: 'react-props-state' },
  { id: 458, question: '¿Dónde se debe usar state: en padres o hijos?', answer: 'Depende, pero preferiblemente en el nivel más alto común a los componentes que lo necesitan.', topicId: 'react-props-state' },
  { id: 459, question: '¿Props puede contener JSX?', answer: 'Sí, se puede pasar cualquier tipo de dato, incluyendo JSX o componentes.', topicId: 'react-props-state' },
  { id: 460, question: '¿Qué pasa si un componente no recibe una prop esperada?', answer: 'React no lanza error, pero puede comportarse de forma inesperada.', topicId: 'react-props-state' },
  
  // 5. Eventos y Formularios
  { id: 461, question: '¿Cómo se manejan eventos en React?', answer: 'Con funciones que se asignan a atributos como onClick, onChange.', topicId: 'react-events-forms' },
  { id: 462, question: '¿Cuál es la diferencia entre eventos de HTML y React?', answer: 'En React se usan en camelCase y se pasan funciones, no strings.', topicId: 'react-events-forms' },
  { id: 463, question: '¿Qué es un evento sintético?', answer: 'Una envoltura del evento nativo del navegador que funciona igual en todos los navegadores.', topicId: 'react-events-forms' },
  { id: 464, question: '¿Cómo se obtiene el valor de un input controlado?', answer: 'Usando onChange y actualizando el estado con e.target.value.', topicId: 'react-events-forms' },
  { id: 465, question: '¿Qué es un formulario controlado?', answer: 'Un formulario donde React gestiona el valor de los campos con useState.', topicId: 'react-events-forms' },
  { id: 466, question: '¿Qué hace preventDefault() en eventos?', answer: 'Previene el comportamiento por defecto del navegador (como enviar un formulario).', topicId: 'react-events-forms' },
  { id: 467, question: '¿Cómo se maneja un submit en React?', answer: 'Con onSubmit={handleSubmit} y un preventDefault() dentro de la función.', topicId: 'react-events-forms' },
  { id: 468, question: '¿Qué atributo se usa para inputs controlados?', answer: 'value={valor}.', topicId: 'react-events-forms' },
  { id: 469, question: '¿Se pueden manejar múltiples inputs con un solo handler?', answer: 'Sí, usando name en los inputs y accediendo por e.target.name.', topicId: 'react-events-forms' },
  { id: 470, question: '¿Cómo se accede al valor de un input sin controlarlo?', answer: 'Usando un ref con useRef.', topicId: 'react-events-forms' },
  { id: 471, question: '¿Qué evento se dispara al cambiar un checkbox?', answer: 'onChange.', topicId: 'react-events-forms' },
  { id: 472, question: '¿Qué tipo de inputs pueden controlarse?', answer: 'Todos: texto, radio, checkbox, select, etc.', topicId: 'react-events-forms' },
  { id: 473, question: '¿Qué es una forma controlada vs no controlada?', answer: 'La controlada usa useState, la no controlada usa refs.', topicId: 'react-events-forms' },
  { id: 474, question: '¿Qué hook permite controlar focus u otras interacciones con elementos DOM?', answer: 'useRef.', topicId: 'react-events-forms' },
  { id: 475, question: '¿Qué hook permite ejecutar lógica al montar o actualizar un input?', answer: 'useEffect.', topicId: 'react-events-forms' },
  
  // 6. Hooks Básicos: useState, useEffect
  { id: 476, question: '¿Qué es un hook en React?', answer: 'Una función especial que permite usar características de React como state y efectos en componentes funcionales.', topicId: 'react-basic-hooks' },
  { id: 477, question: '¿Qué hook se usa para crear estado?', answer: 'useState.', topicId: 'react-basic-hooks' },
  { id: 478, question: '¿Qué retorna useState(valorInicial)?', answer: 'Un array con el valor actual del estado y una función para actualizarlo.', topicId: 'react-basic-hooks' },
  { id: 479, question: '¿Qué pasa si modificas directamente el state sin usar setState?', answer: 'El componente no se vuelve a renderizar.', topicId: 'react-basic-hooks' },
  { id: 480, question: '¿Qué hook se usa para ejecutar efectos secundarios?', answer: 'useEffect.', topicId: 'react-basic-hooks' },
  { id: 481, question: '¿Cuándo se ejecuta useEffect sin segundo parámetro?', answer: 'Después de cada renderización.', topicId: 'react-basic-hooks' },
  { id: 482, question: '¿Qué hace useEffect(..., [])?', answer: 'Ejecuta el efecto solo una vez, al montar el componente.', topicId: 'react-basic-hooks' },
  { id: 483, question: '¿Qué hace useEffect(..., [estado])?', answer: 'Ejecuta el efecto cuando estado cambie.', topicId: 'react-basic-hooks' },
  { id: 484, question: '¿Para qué se usa la función de limpieza (return) en useEffect?', answer: 'Para limpiar recursos o suscripciones (como al desmontar).', topicId: 'react-basic-hooks' },
  { id: 485, question: '¿Se pueden tener múltiples useEffect en un componente?', answer: 'Sí, y se recomienda para separar responsabilidades.', topicId: 'react-basic-hooks' },
  { id: 486, question: '¿Qué pasa si no usas correctamente las dependencias en useEffect?', answer: 'Pueden generarse efectos infinitos o errores de sincronización.', topicId: 'react-basic-hooks' },
  { id: 487, question: '¿Qué hook se usa para acceder a un elemento del DOM directamente?', answer: 'useRef.', topicId: 'react-basic-hooks' },
  { id: 488, question: '¿Qué hook se usa para manejar lógica derivada del state?', answer: 'useMemo.', topicId: 'react-basic-hooks' },
  { id: 489, question: '¿Qué hook se usa para memorizar funciones y evitar recrearlas?', answer: 'useCallback.', topicId: 'react-basic-hooks' },
  { id: 490, question: '¿Dónde pueden usarse los hooks?', answer: 'Solo dentro de componentes funcionales o custom hooks, nunca en condicionales.', topicId: 'react-basic-hooks' },

  // 7. Renderizado Condicional y Listas
  { id: 491, question: '¿Qué es el renderizado condicional?', answer: 'Mostrar diferentes elementos en función del estado o props.', topicId: 'react-conditional-rendering' },
  { id: 492, question: '¿Qué operador se usa frecuentemente para renderizar condicionalmente?', answer: 'El operador ternario: condición ? a : b.', topicId: 'react-conditional-rendering' },
  { id: 493, question: '¿Se puede usar if para renderizar en JSX?', answer: 'No directamente, pero se puede fuera del return.', topicId: 'react-conditional-rendering' },
  { id: 494, question: '¿Cómo se renderiza un array de datos en JSX?', answer: 'Usando map().', topicId: 'react-conditional-rendering' },
  { id: 495, question: '¿Por qué es necesario usar key al renderizar listas?', answer: 'Para que React identifique cada elemento y optimice el renderizado.', topicId: 'react-conditional-rendering' },
  { id: 496, question: '¿Qué pasa si usas el índice como key en una lista dinámica?', answer: 'Puede causar problemas de rendimiento o bugs en reordenamientos.', topicId: 'react-conditional-rendering' },
  { id: 497, question: '¿Qué función permite condicionar sin else?', answer: '&& lógico: condición && <Elemento />.', topicId: 'react-conditional-rendering' },
  { id: 498, question: '¿Puedes retornar null desde un componente?', answer: 'Sí, si no deseas renderizar nada.', topicId: 'react-conditional-rendering' },
  { id: 499, question: '¿Qué pasa si se omite el key en una lista?', answer: 'React lanza una advertencia y puede haber problemas de rendimiento.', topicId: 'react-conditional-rendering' },
  { id: 500, question: '¿Puedes combinar lógica JS dentro de map()?', answer: 'Sí, por ejemplo: lista.map(item => item.visible ? <div>...</div> : null).', topicId: 'react-conditional-rendering' },
  { id: 501, question: '¿Qué es el spread operator ... en props?', answer: 'Permite pasar múltiples props de un objeto de forma automática.', topicId: 'react-conditional-rendering' },
  { id: 502, question: '¿Qué hook puedes usar para filtrar una lista visible sin afectar el estado original?', answer: 'useMemo.', topicId: 'react-conditional-rendering' },
  { id: 503, question: '¿Cómo evitas renderizados innecesarios en listas grandes?', answer: 'Usando React.memo o técnicas como virtualización.', topicId: 'react-conditional-rendering' },
  { id: 504, question: '¿Puedes usar múltiples condiciones para renderizar distintos componentes?', answer: 'Sí, combinando if, else, switch, ternarios o funciones auxiliares.', topicId: 'react-conditional-rendering' },
  { id: 505, question: '¿Se puede renderizar JSX desde una función dentro del componente?', answer: 'Sí, mientras devuelva elementos válidos.', topicId: 'react-conditional-rendering' },

  // 8. Ciclo de Vida con Hooks
  { id: 506, question: '¿Qué reemplaza a componentDidMount en funciones?', answer: 'useEffect(..., [])', topicId: 'react-lifecycle' },
  { id: 507, question: '¿Qué reemplaza a componentDidUpdate?', answer: 'useEffect(..., [dep])', topicId: 'react-lifecycle' },
  { id: 508, question: '¿Qué reemplaza a componentWillUnmount?', answer: 'La función de limpieza return dentro de useEffect.', topicId: 'react-lifecycle' },
  { id: 509, question: '¿Por qué es importante limpiar efectos secundarios?', answer: 'Para evitar fugas de memoria, errores y comportamientos inesperados.', topicId: 'react-lifecycle' },
  { id: 510, question: '¿Cómo se simula un ciclo completo (mount → update → unmount)?', answer: 'Combinando varios useEffect con dependencias y funciones de limpieza.', topicId: 'react-lifecycle' },

  // 9. Errores Comunes y Buenas Prácticas
  { id: 511, question: '¿Qué pasa si usas hooks fuera del orden en cada render?', answer: 'React lanza un error, ya que los hooks deben tener el mismo orden siempre.', topicId: 'react-best-practices' },
  { id: 512, question: '¿Cuál es una mala práctica al usar el estado?', answer: 'Modificarlo directamente sin usar setState.', topicId: 'react-best-practices' },
  { id: 513, question: '¿Qué problema puede causar un key incorrecto en listas?', answer: 'Comportamiento incorrecto o renders innecesarios.', topicId: 'react-best-practices' },
  { id: 514, question: '¿Por qué evitar lógica pesada directamente en el render?', answer: 'Porque se ejecuta en cada render y puede hacer lenta la app.', topicId: 'react-best-practices' },
  { id: 515, question: '¿Qué pasa si no incluyes todas las dependencias en useEffect?', answer: 'Los efectos podrían no actualizarse como se espera o generar bugs sutiles.', topicId: 'react-best-practices' },

  // 10. Conceptos Avanzados Introductorios
  { id: 516, question: '¿Qué es un Custom Hook?', answer: 'Una función que usa hooks de React para encapsular lógica reutilizable.', topicId: 'react-advanced-intro' },
  { id: 517, question: '¿Qué es React.memo?', answer: 'Una función que memoriza componentes para evitar renders innecesarios.', topicId: 'react-advanced-intro' },
  { id: 518, question: '¿Qué es Context en React?', answer: 'Una forma de compartir datos globales sin pasar props manualmente.', topicId: 'react-advanced-intro' },
  { id: 519, question: '¿Cómo se crea un contexto?', answer: 'Con React.createContext().', topicId: 'react-advanced-intro' },
  { id: 520, question: '¿Qué alternativa avanzada puedes usar en lugar de useState para manejar estado global?', answer: 'useReducer, Context API o librerías como Redux / Zustand / Jotai.', topicId: 'react-advanced-intro' },
];
