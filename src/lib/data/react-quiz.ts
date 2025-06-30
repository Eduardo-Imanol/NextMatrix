// @/lib/data/react-quiz.ts

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  topicId: 'react-basics' | 'react-jsx' | 'react-functional-components' | 'react-props-state' | 'react-events-forms' | 'react-basic-hooks' | 'react-conditional-rendering' | 'react-lifecycle' | 'react-best-practices' | 'react-advanced-intro';
}


export const reactQuiz: QuizQuestion[] = [
  // React Básico
  { question: '¿Qué es React?', options: ['Un lenguaje de programación', 'Un compilador de JavaScript', 'Una biblioteca de UI basada en componentes', 'Un framework para servidores'], correctAnswer: 'Una biblioteca de UI basada en componentes', topicId: 'react-basics' },
  { question: '¿Quién creó React?', options: ['Google', 'Meta (Facebook)', 'Twitter', 'Microsoft'], correctAnswer: 'Meta (Facebook)', topicId: 'react-basics' },
  { question: '¿Qué hace el Virtual DOM?', options: ['Modifica el DOM real directamente', 'Crea componentes de servidor', 'Mejora el rendimiento renderizando cambios en memoria', 'Elimina nodos innecesarios'], correctAnswer: 'Mejora el rendimiento renderizando cambios en memoria', topicId: 'react-basics' },
  { question: '¿Qué comando crea una app con Create React App?', options: ['create-react', 'npm react-init', 'npx create-react-app', 'react start'], correctAnswer: 'npx create-react-app', topicId: 'react-basics' },
  { question: '¿Qué archivo inicializa el DOM en una app React creada con CRA?', options: ['App.js', 'index.html', 'index.js', 'main.js'], correctAnswer: 'index.js', topicId: 'react-basics' },
  { question: '¿React es un framework?', options: ['Sí', 'No', 'Solo en React Native', 'Depende del entorno'], correctAnswer: 'No', topicId: 'react-basics' },
  { question: '¿Qué extensión de archivo es común para componentes React?', options: ['.jsx', '.react', '.ts', '.jsv'], correctAnswer: '.jsx', topicId: 'react-basics' },
  { question: '¿Qué es un componente?', options: ['Una etiqueta HTML', 'Un nodo virtual', 'Una función o clase que devuelve UI', 'Un estilo CSS'], correctAnswer: 'Una función o clase que devuelve UI', topicId: 'react-basics' },
  { question: '¿Cuál es el objetivo principal de React?', options: ['Manejo de bases de datos', 'Crear animaciones', 'Construcción de interfaces de usuario', 'Compilar JavaScript'], correctAnswer: 'Construcción de interfaces de usuario', topicId: 'react-basics' },
  { question: '¿Qué hace ReactDOM.createRoot() en React 18+?', options: ['Inicia el servidor', 'Crea un nuevo archivo', 'Renderiza el árbol React en el DOM real', 'Borra el componente'], correctAnswer: 'Renderiza el árbol React en el DOM real', topicId: 'react-basics' },

  // JSX
  { question: '¿Qué es JSX?', options: ['Un lenguaje nuevo', 'HTML dentro de CSS', 'JavaScript con sintaxis similar a HTML', 'Un preprocesador'], correctAnswer: 'JavaScript con sintaxis similar a HTML', topicId: 'react-jsx' },
  { question: '¿Qué atributo se usa en JSX en lugar de class?', options: ['css', 'classname', 'className', 'class-type'], correctAnswer: 'className', topicId: 'react-jsx' },
  { question: '¿Qué operador se usa para insertar expresiones JS en JSX?', options: ['[]', '{}', '()', '<>'], correctAnswer: '{}', topicId: 'react-jsx' },
  { question: '¿Qué error lanza React si devuelves más de un elemento sin contenedor?', options: ['Error de sintaxis', 'Uncaught TypeError', 'Adjacent JSX elements must be wrapped', 'JSXWrapperError'], correctAnswer: 'Adjacent JSX elements must be wrapped', topicId: 'react-jsx' },
  { question: '¿Qué hace dangerouslySetInnerHTML?', options: ['Escapa HTML', 'Inyecta HTML directamente (sin sanitizar)', 'Renderiza SVG', 'Lanza un error'], correctAnswer: 'Inyecta HTML directamente (sin sanitizar)', topicId: 'react-jsx' },
  { question: '¿Cómo escribes un fragmento en JSX?', options: ['<Fragment>', '<React.Fragment>', '<> </>)', 'Cualquiera de las anteriores'], correctAnswer: 'Cualquiera de las anteriores', topicId: 'react-jsx' },
  { question: '¿Qué tipo de valor puedes insertar en JSX?', options: ['Solo strings', 'Solo números', 'Cualquier expresión JS válida', 'Solo booleanos'], correctAnswer: 'Cualquier expresión JS válida', topicId: 'react-jsx' },
  { question: '¿Qué herramienta transforma JSX a JS válido?', options: ['Webpack', 'ESLint', 'Babel', 'Node.js'], correctAnswer: 'Babel', topicId: 'react-jsx' },
  { question: '¿Cuál es el error más común con atributos HTML en JSX?', options: ['Usar for en lugar de htmlFor', 'Usar id', 'Usar onchange', 'Usar comillas simples'], correctAnswer: 'Usar for en lugar de htmlFor', topicId: 'react-jsx' },
  { question: '¿Puedes escribir comentarios en JSX?', options: ['No', 'Sí, con //', 'Sí, con {/* comentario */}', 'Solo en HTML externo'], correctAnswer: 'Sí, con {/* comentario */}', topicId: 'react-jsx' },

  // Componentes, Props/State & Hooks
  { question: '¿Cómo defines un componente funcional?', options: ['class Component {}', 'function MyComponent() { return <div />; }', 'const App = render()', 'JSX.component()'], correctAnswer: 'function MyComponent() { return <div />; }', topicId: 'react-functional-components' },
  { question: '¿Qué hook se usa para manejar estado en componentes funcionales?', options: ['useProp', 'useVar', 'useState', 'useEffect'], correctAnswer: 'useState', topicId: 'react-basic-hooks' },
  { question: '¿Qué retorna useState(0)?', options: ['Solo el estado', 'Una función', 'Un número', 'Un array con estado y setter'], correctAnswer: 'Un array con estado y setter', topicId: 'react-basic-hooks' },
  { question: '¿Qué son las props?', options: ['Métodos privados', 'Argumentos que recibe un componente', 'Variables globales', 'Funciones nativas de React'], correctAnswer: 'Argumentos que recibe un componente', topicId: 'react-props-state' },
  { question: '¿Son mutables las props?', options: ['Sí', 'Solo en funciones', 'No', 'Depende del componente'], correctAnswer: 'No', topicId: 'react-props-state' },
  { question: '¿Qué hace setState?', options: ['Crea un nuevo componente', 'Renderiza el componente', 'Actualiza el estado y re-renderiza', 'Cambia el archivo'], correctAnswer: 'Actualiza el estado y re-renderiza', topicId: 'react-props-state' },
  { question: '¿Qué hook permite ejecutar lógica al montar el componente?', options: ['useInit', 'useMount', 'useEffect', 'useStart'], correctAnswer: 'useEffect', topicId: 'react-lifecycle' },
  { question: '¿Dónde debes definir los hooks?', options: ['En cualquier función', 'Dentro de condicionales', 'En el cuerpo del componente', 'Fuera del return'], correctAnswer: 'En el cuerpo del componente', topicId: 'react-basic-hooks' },
  { question: '¿Cómo puedes pasar una función como prop?', options: ['No es posible', 'Usando <Componente prop="function()" />', 'Usando {} para pasar la referencia', 'Solo con bind()'], correctAnswer: 'Usando {} para pasar la referencia', topicId: 'react-props-state' },
  { question: '¿Qué hook permite ejecutar algo al cambiar un valor específico?', options: ['useCallback', 'useState', 'useEffect con dependencias', 'useRender'], correctAnswer: 'useEffect con dependencias', topicId: 'react-basic-hooks' },

  // Renderizado Condicional y Listas
  { question: '¿Cómo puedes renderizar condicionalmente en JSX?', options: ['if directamente en JSX', 'while', 'Operador ternario o &&', 'switch en return'], correctAnswer: 'Operador ternario o &&', topicId: 'react-conditional-rendering' },
  { question: '¿Qué se necesita al usar .map() en una lista de JSX?', options: ['El índice', 'Un id aleatorio', 'La prop key', 'No necesita nada'], correctAnswer: 'La prop key', topicId: 'react-conditional-rendering' },
  { question: '¿Qué pasa si no usas key en un array renderizado?', options: ['Error de compilación', 'Fallo en animaciones', 'Problemas de performance', 'El componente se rompe'], correctAnswer: 'Problemas de performance', topicId: 'react-conditional-rendering' },
  { question: '¿Qué hace null en un return?', options: ['Renderiza un div vacío', 'Lanza error', 'No renderiza nada', 'Muestra texto "null"'], correctAnswer: 'No renderiza nada', topicId: 'react-conditional-rendering' },
  { question: '¿Puedes usar switch en JSX?', options: ['Sí, dentro del return', 'No', 'Solo si usas eval()', 'Solo en clases'], correctAnswer: 'No', topicId: 'react-conditional-rendering' },
  { question: '¿Puedes anidar condiciones ternarias en JSX?', options: ['No', 'Sí, pero se desaconseja', 'Solo en arrays', 'Solo en funciones'], correctAnswer: 'Sí, pero se desaconseja', topicId: 'react-conditional-rendering' },
  { question: '¿Puedes pasar JSX como prop?', options: ['No', 'Solo strings', 'Sí', 'Solo si usas React.Children'], correctAnswer: 'Sí', topicId: 'react-conditional-rendering' },
  { question: '¿Qué operador se usa para evitar render si es falso?', options: ['!!', '??', '&&', '=>'], correctAnswer: '&&', topicId: 'react-conditional-rendering' },
  { question: '¿Puedes renderizar JSX dentro de una función dentro del componente?', options: ['No', 'Sí', 'Solo con hooks', 'Solo si es render()'], correctAnswer: 'Sí', topicId: 'react-conditional-rendering' },
  { question: '¿Qué hook puedes usar para filtrar y memorizar una lista renderizada?', options: ['useList', 'useMemo', 'useSort', 'useState'], correctAnswer: 'useMemo', topicId: 'react-conditional-rendering' },

  // Hooks, Formularios y Contexto
  { question: '¿Qué hook reemplaza componentWillUnmount?', options: ['useCleanup', 'useDestroy', 'Función de limpieza en useEffect', 'useKill'], correctAnswer: 'Función de limpieza en useEffect', topicId: 'react-lifecycle' },
  { question: '¿Cuál es la firma de useEffect más básica?', options: ['useEffect()', 'useEffect(() => {}, [])', 'useEffect([deps], () => {})', 'useEffect({})'], correctAnswer: 'useEffect(() => {}, [])', topicId: 'react-basic-hooks' },
  { question: '¿Qué hook sirve para acceder a un input no controlado?', options: ['useInput', 'useValue', 'useRef', 'useEffect'], correctAnswer: 'useRef', topicId: 'react-events-forms' },
  { question: '¿Qué hook se usa para evitar crear nuevas funciones en cada render?', options: ['useMemo', 'usePrevent', 'useCallback', 'useBind'], correctAnswer: 'useCallback', topicId: 'react-advanced-intro' },
  { question: '¿Qué hook se usa para reducers?', options: ['useAction', 'useReducer', 'useEffect', 'useDispatch'], correctAnswer: 'useReducer', topicId: 'react-advanced-intro' },
  { question: '¿Qué es Context en React?', options: ['Un archivo de configuración', 'Un sistema de estilos', 'Un mecanismo para compartir datos entre componentes', 'Una base de datos'], correctAnswer: 'Un mecanismo para compartir datos entre componentes', topicId: 'react-advanced-intro' },
  { question: '¿Qué se necesita para usar Context?', options: ['Context.create()', 'createContext() y useContext()', 'setContext()', 'React.memo()'], correctAnswer: 'createContext() y useContext()', topicId: 'react-advanced-intro' },
  { question: '¿Qué hook se usa para consumir un Contexto?', options: ['useContext', 'useState', 'useStore', 'useMemo'], correctAnswer: 'useContext', topicId: 'react-advanced-intro' },
  { question: '¿Qué hook encapsula lógica reusable con otros hooks?', options: ['useExport', 'useChain', 'Custom Hook', 'useLoop'], correctAnswer: 'Custom Hook', topicId: 'react-advanced-intro' },
  { question: '¿Qué permite React.memo?', options: ['Guardar props', 'Compartir estado', 'Memorizar componentes para evitar renders innecesarios', 'Usar reducers'], correctAnswer: 'Memorizar componentes para evitar renders innecesarios', topicId: 'react-advanced-intro' },
];
