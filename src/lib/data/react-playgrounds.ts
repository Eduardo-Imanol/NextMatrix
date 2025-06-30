// @/lib/data/react-playgrounds.ts

export interface PlaygroundExercise {
  id: number;
  title: string;
  description: string;
  initialCode: string;
  topicId: 'react-basics' | 'react-jsx' | 'react-functional-components' | 'react-props-state' | 'react-events-forms' | 'react-basic-hooks' | 'react-conditional-rendering' | 'react-lifecycle' | 'react-best-practices' | 'react-advanced-intro';
}

export const reactPlaygrounds: PlaygroundExercise[] = [
  // 1. React Básico
  {
    id: 42,
    title: 'Hello React',
    description: 'Crea un componente que muestre en pantalla: ¡Bienvenido a React! 🎉',
    initialCode: `import React from 'react';

function App() {
  return (
    <h1>¡Bienvenido a React! 🎉</h1>
  );
}

export default App;`,
    topicId: 'react-basics',
  },
  {
    id: 43,
    title: 'Renderizar múltiples componentes',
    description: 'Crea dos componentes llamados <Saludo /> y <Despedida /> y renderízalos en la misma página.',
    initialCode: `import React from 'react';

function Saludo() {
  return <h2>¡Hola desde Saludo!</h2>;
}

function Despedida() {
  return <h2>¡Adiós desde Despedida!</h2>;
}

function App() {
  return (
    <>
      <Saludo />
      <Despedida />
    </>
  );
}

export default App;`,
    topicId: 'react-basics',
  },
  {
    id: 44,
    title: 'DOM virtual y cambios',
    description: 'Crea un componente que cambie su texto al hacer clic en un botón ("Haz clic para cambiar" → "Texto cambiado").',
    initialCode: `import React, { useState } from 'react';

function App() {
  const [texto, setTexto] = useState("Haz clic para cambiar");

  return (
    <button onClick={() => setTexto("Texto cambiado")}>
      {texto}
    </button>
  );
}

export default App;`,
    topicId: 'react-basics',
  },

  // 2. JSX
  {
    id: 45,
    title: 'JSX con variables',
    description: 'Crea una variable nombre = "React" y muéstrala dentro de un h1.',
    initialCode: `import React from 'react';

function App() {
  const nombre = "React";
  return <h1>Hola, {nombre}</h1>;
}

export default App;`,
    topicId: 'react-jsx',
  },
  {
    id: 46,
    title: 'Fragmentos y clases',
    description: 'Usa fragmentos (<> </>) para renderizar múltiples elementos. Añade clases CSS usando className.',
    initialCode: `import React from 'react';
/* Supone un archivo de estilos con:
.resaltado {
  color: blue;
  font-weight: bold;
}
*/

function App() {
  return (
    <>
      <p className="resaltado">Este es el primer elemento.</p>
      <p>Este es el segundo elemento.</p>
    </>
  );
}

export default App;`,
    topicId: 'react-jsx',
  },
  {
    id: 47,
    title: 'JSX condicional simple',
    description: 'Crea una variable isLogged = true y muestra "Bienvenido" o "Inicia sesión" según su valor.',
    initialCode: `import React from 'react';

function App() {
  const isLogged = true;

  return (
    <div>
      {isLogged ? <h1>Bienvenido</h1> : <h1>Inicia sesión</h1>}
    </div>
  );
}

export default App;`,
    topicId: 'react-jsx',
  },

  // 3. Componentes Funcionales
  {
    id: 48,
    title: 'Componente simple con props',
    description: 'Crea un componente <Usuario nombre="Juan" /> que imprima "Hola, Juan".',
    initialCode: `import React from 'react';

function Usuario(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

function App() {
  return <Usuario nombre="Juan" />;
}

export default App;`,
    topicId: 'react-functional-components',
  },
  {
    id: 49,
    title: 'Componente anidado',
    description: 'Crea un componente <Tarjeta /> que contenga un componente <Contenido /> dentro.',
    initialCode: `import React from 'react';

function Contenido() {
  return <p>Este es el contenido interno.</p>;
}

function Tarjeta() {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    width: '200px'
  };
  return (
    <div style={cardStyle}>
      <h2>Título de la Tarjeta</h2>
      <Contenido />
    </div>
  );
}

export default Tarjeta;`,
    topicId: 'react-functional-components',
  },
  {
    id: 50,
    title: 'Reutilización de componentes',
    description: 'Crea un componente <Boton /> que acepte props para personalizar el color y el texto.',
    initialCode: `import React from 'react';

function Boton({ color, texto }) {
  const estilo = { 
    backgroundColor: color, 
    color: 'white', 
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };
  return <button style={estilo}>{texto}</button>;
}

function App() {
  return (
    <div>
      <Boton color="blue" texto="Botón Azul" />
      <Boton color="red" texto="Botón Rojo" />
    </div>
  );
}

export default App;`,
    topicId: 'react-functional-components',
  },

  // 4. Props y State
  {
    id: 51,
    title: 'Contador con useState',
    description: 'Crea un botón que incremente un contador en pantalla con cada clic.',
    initialCode: `import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;`,
    topicId: 'react-props-state',
  },
  {
    id: 52,
    title: 'Mostrar/Ocultar contenido',
    description: 'Crea un toggle que muestre u oculte un mensaje haciendo clic.',
    initialCode: `import React, { useState } from 'react';

function ToggleMensaje() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
      {visible && <p>Este es el mensaje secreto.</p>}
    </div>
  );
}

export default ToggleMensaje;`,
    topicId: 'react-props-state',
  },
  {
    id: 53,
    title: 'Pasar funciones por props',
    description: 'Crea un componente hijo que active una función del padre al hacer clic.',
    initialCode: `import React from 'react';

function Hijo({ alHacerClic }) {
  return <button onClick={alHacerClic}>Activar Padre</button>;
}

function Padre() {
  const manejarClicHijo = () => {
    alert('Función del padre activada desde el hijo!');
  };

  return <Hijo alHacerClic={manejarClicHijo} />;
}

export default Padre;`,
    topicId: 'react-props-state',
  },

  // 5. Eventos y Formularios
  {
    id: 54,
    title: 'Formulario controlado',
    description: 'Crea un input que guarde su valor en el estado y lo muestre en tiempo real.',
    initialCode: `import React, { useState } from 'react';

function FormularioSimple() {
  const [valor, setValor] = useState('');

  return (
    <div>
      <input 
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Escribe algo..."
      />
      <p>Valor actual: {valor}</p>
    </div>
  );
}

export default FormularioSimple;`,
    topicId: 'react-events-forms',
  },
  {
    id: 55,
    title: 'Checkbox con estado',
    description: 'Crea un checkbox que diga "Acepto términos" y muestra un botón solo si está marcado.',
    initialCode: `import React, { useState } from 'react';

function TerminosCondiciones() {
  const [aceptado, setAceptado] = useState(false);

  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={aceptado}
          onChange={(e) => setAceptado(e.target.checked)}
        />
        Acepto los términos y condiciones
      </label>
      <br />
      {aceptado && <button>Continuar</button>}
    </div>
  );
}

export default TerminosCondiciones;`,
    topicId: 'react-events-forms',
  },
  {
    id: 56,
    title: 'Formulario de login',
    description: 'Crea un formulario con email y password que muestre los datos ingresados en consola al enviar.',
    initialCode: `import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert('Datos enviados a la consola.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" 
      /><br/>
      <input 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Contraseña"
      /><br/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default LoginForm;`,
    topicId: 'react-events-forms',
  },

  // 6. Hooks Básicos
  {
    id: 57,
    title: 'useEffect al montar',
    description: 'Muestra en consola "Componente montado" usando useEffect.',
    initialCode: `import React, { useEffect } from 'react';

function MensajeMontado() {
  useEffect(() => {
    console.log('Componente montado');
  }, []); // El array vacío asegura que se ejecute solo una vez

  return <p>Revisa la consola.</p>;
}

export default MensajeMontado;`,
    topicId: 'react-basic-hooks',
  },
  {
    id: 58,
    title: 'Temporizador',
    description: 'Crea un contador que se incrementa automáticamente cada segundo con setInterval dentro de useEffect.',
    initialCode: `import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    // Función de limpieza para detener el intervalo
    return () => clearInterval(intervalo);
  }, []);

  return <p>Han pasado {segundos} segundos.</p>;
}

export default Temporizador;`,
    topicId: 'react-basic-hooks',
  },
  {
    id: 59,
    title: 'useRef y enfoque',
    description: 'Crea un input y un botón que al hacer clic coloque el foco en el input.',
    initialCode: `import React, { useRef } from 'react';

function FocoInput() {
  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Haz clic en el botón" />
      <button onClick={enfocarInput}>Enfocar Input</button>
    </div>
  );
}

export default FocoInput;`,
    topicId: 'react-basic-hooks',
  },

  // 7. Renderizado Condicional y Listas
  {
    id: 60,
    title: 'Lista con map',
    description: 'Crea una lista de frutas y muéstrala en una lista HTML (ul).',
    initialCode: `import React from 'react';

function ListaFrutas() {
  const frutas = ['Manzana', 'Banana', 'Cereza'];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}

export default ListaFrutas;`,
    topicId: 'react-conditional-rendering',
  },
  {
    id: 61,
    title: 'Condicional con botón',
    description: 'Crea un botón que al hacer clic alterna entre mostrar dos componentes distintos.',
    initialCode: `import React, { useState } from 'react';

const ComponenteA = () => <div>Soy el Componente A</div>;
const ComponenteB = () => <div>Soy el Componente B</div>;

function Alternador() {
  const [mostrarA, setMostrarA] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrarA(!mostrarA)}>Alternar</button>
      {mostrarA ? <ComponenteA /> : <ComponenteB />}
    </div>
  );
}

export default Alternador;`,
    topicId: 'react-conditional-rendering',
  },
  {
    id: 62,
    title: 'Lista con botón de eliminar',
    description: 'Muestra una lista con botón "Eliminar" en cada ítem, que al presionar remueve ese ítem.',
    initialCode: `import React, { useState } from 'react';

function ListaEditable() {
  const [items, setItems] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);

  const eliminarItem = (indexAEliminar) => {
    setItems(items.filter((_, index) => index !== indexAEliminar));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} 
          <button onClick={() => eliminarItem(index)} style={{marginLeft: '10px'}}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaEditable;`,
    topicId: 'react-conditional-rendering',
  },

  // 8. Ciclo de vida con Hooks
  {
    id: 63,
    title: 'Simular montaje y desmontaje',
    description: 'Crea un componente que muestra "Estoy montado" al cargarse y "Desmontado" en consola al desaparecer (usa un botón para desmontar).',
    initialCode: `import React, { useState, useEffect } from 'react';

const ComponenteCicloVida = () => {
  useEffect(() => {
    console.log("Componente Montado");
    return () => {
      console.log("Componente Desmontado");
    };
  }, []);
  return <p>Estoy montado. Revisa la consola.</p>;
};

function App() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Desmontar' : 'Montar'}
      </button>
      {mostrar && <ComponenteCicloVida />}
    </div>
  );
}

export default App;`,
    topicId: 'react-lifecycle',
  },
  {
    id: 64,
    title: 'Actualizar efecto por dependencia',
    description: 'Crea un input que actualice su valor y muestra en consola cada vez que el valor cambie.',
    initialCode: `import React, { useState, useEffect } from 'react';

function RastreadorDeCambios() {
  const [valor, setValor] = useState('');

  useEffect(() => {
    if (valor) {
      console.log(\`El valor ha cambiado a: \${valor}\`);
    }
  }, [valor]);

  return (
    <input 
      type="text"
      value={valor}
      onChange={e => setValor(e.target.value)}
      placeholder="Escribe para ver la consola"
    />
  );
}

export default RastreadorDeCambios;`,
    topicId: 'react-lifecycle',
  },
  {
    id: 65,
    title: 'Contador con limpieza',
    description: 'Crea un setInterval en useEffect y límpialo correctamente con clearInterval.',
    initialCode: `import React, { useState, useEffect } from 'react';

function ContadorSeguro() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
      console.log('Intervalo corriendo...');
    }, 1000);

    // Limpieza al desmontar
    return () => {
      clearInterval(intervalId);
      console.log('Intervalo detenido.');
    };
  }, []);

  return <p>Contador: {count} (Revisa la consola al desmontar)</p>;
}

export default ContadorSeguro;`,
    topicId: 'react-lifecycle',
  },

  // 9. Ejercicios avanzados (Extras)
  {
    id: 66,
    title: 'Custom Hook básico',
    description: 'Crea un custom hook useContador que encapsule lógica de suma, resta y reset.',
    initialCode: `import React, { useState } from 'react';

// Custom Hook
const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(valorInicial);
  return { contador, incrementar, decrementar, resetear };
};

function App() {
  const { contador, incrementar, decrementar, resetear } = useContador(5);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={resetear}>Reset</button>
    </div>
  );
}

export default App;`,
    topicId: 'react-advanced-intro',
  },
  {
    id: 67,
    title: 'Lista con filtro',
    description: 'Crea un input que filtre en tiempo real una lista de elementos mostrados con map.',
    initialCode: `import React, { useState, useMemo } from 'react';

const listaCompleta = ['Manzana', 'Banana', 'Cereza', 'Dátil', 'Uva'];

function FiltroLista() {
  const [filtro, setFiltro] = useState('');

  const listaFiltrada = useMemo(() => 
    listaCompleta.filter(item => 
      item.toLowerCase().includes(filtro.toLowerCase())
    ), [filtro]);

  return (
    <div>
      <input 
        type="text"
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        placeholder="Filtrar frutas..."
      />
      <ul>
        {listaFiltrada.map(fruta => <li key={fruta}>{fruta}</li>)}
      </ul>
    </div>
  );
}

export default FiltroLista;`,
    topicId: 'react-advanced-intro',
  },
];
