// @/lib/data/javascript-playgrounds.ts

export interface PlaygroundExercise {
  id: number;
  title: string;
  description: string;
  initialCode: string;
  topicId: 'js-fundamentals' | 'js-operators' | 'js-functions' | 'js-objects-arrays' | 'js-dom-events' | 'js-async' | 'js-extras';
}

export const javascriptPlaygrounds: PlaygroundExercise[] = [
    // 1. Fundamentos y Sintaxis
    {
      id: 29,
      title: '✨ Hola Mundo en consola',
      description: 'Crea un script que imprima "¡Hola JavaScript!" en la consola.',
      initialCode: `<script>
    console.log("¡Hola JavaScript!");
</script>
<p>Revisa la consola de desarrollador para ver el resultado (usualmente con F12).</p>`,
      topicId: 'js-fundamentals',
    },
    {
      id: 30,
      title: '🔍 Detecta el tipo de datos',
      description: 'Declara variables con distintos valores (string, number, boolean, null, undefined) y usa typeof para imprimir el tipo de cada una.',
      initialCode: `<script>
    let a = "Hola";
    let b = 123;
    let c = true;
    let d = null;
    let e;
    console.log('Tipo de "Hola":', typeof a);
    console.log('Tipo de 123:', typeof b);
    console.log('Tipo de true:', typeof c);
    console.log('Tipo de null:', typeof d);
    console.log('Tipo de variable sin inicializar:', typeof e);
</script>
<p>Revisa la consola para ver los tipos de datos.</p>`,
      topicId: 'js-fundamentals',
    },
    {
      id: 31,
      title: '🧮 Operaciones básicas',
      description: 'Declara dos variables numéricas y muestra su suma, resta, multiplicación y división en consola.',
      initialCode: `<script>
    let n1 = 10;
    let n2 = 5;
    console.log("Suma:", n1 + n2);
    console.log("Resta:", n1 - n2);
    console.log("Multiplicación:", n1 * n2);
    console.log("División:", n1 / n2);
</script>
<p>Revisa la consola para ver los resultados de las operaciones.</p>`,
      topicId: 'js-fundamentals',
    },
    
    // 3. Control de Flujo y Operadores
    {
      id: 32,
      title: '📅 Edad y clasificación',
      description: 'Usa condicionales (if/else) para determinar si una edad corresponde a "menor de edad", "adulto" o "senior".',
      initialCode: `<h3>Clasificador de Edad</h3>
<p>La edad actual es: <b id="edad">25</b></p>
<p>Clasificación: <span id="resultado"></span></p>

<script>
    const edad = 25;
    const resultadoEl = document.getElementById('resultado');

    if (edad < 18) {
        resultadoEl.textContent = "Menor de edad";
    } else if (edad >= 18 && edad < 65) {
        resultadoEl.textContent = "Adulto";
    } else {
        resultadoEl.textContent = "Senior";
    }
</script>`,
      topicId: 'js-operators',
    },
    {
      id: 33,
      title: '📈 Números pares del 1 al 20',
      description: 'Usa un bucle for para imprimir solo los números pares del 1 al 20.',
      initialCode: `<h3>Números Pares del 1 al 20</h3>
<ul id="lista-pares"></ul>
<script>
    const lista = document.getElementById('lista-pares');
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
            const li = document.createElement('li');
            li.textContent = i;
            lista.appendChild(li);
        }
    }
</script>`,
      topicId: 'js-operators',
    },

    // 4. Funciones
    {
      id: 34,
      title: '📦 Suma simple',
      description: 'Crea una función sumar(a, b) que retorne la suma de dos números y muestra el resultado.',
      initialCode: `<h3>Resultado de la suma:</h3>
<p id="resultado-suma"></p>
<script>
    function sumar(a, b) {
        return a + b;
    }
    const resultado = sumar(5, 10);
    document.getElementById('resultado-suma').textContent = resultado;
</script>`,
      topicId: 'js-functions',
    },
    {
      id: 35,
      title: '📏 Verificar si un número es par',
      description: 'Crea una función esPar(num) que devuelva true si es par y false si es impar.',
      initialCode: `<h3>Verificador de Números Pares</h3>
<p>¿Es 7 par? <span id="res1"></span></p>
<p>¿Es 10 par? <span id="res2"></span></p>
<script>
    const esPar = (num) => num % 2 === 0;

    document.getElementById('res1').textContent = esPar(7);
    document.getElementById('res2').textContent = esPar(10);
</script>`,
      topicId: 'js-functions',
    },

    // 5. Arrays y Objetos
    {
      id: 36,
      title: '📚 Lista de tareas',
      description: 'Crea un array de tareas e imprímelas en una lista HTML.',
      initialCode: `<h3>Mis Tareas</h3>
<ul id="task-list"></ul>
<script>
    const tareas = ["Estudiar HTML", "Practicar CSS", "Aprender JavaScript"];
    const lista = document.getElementById('task-list');

    for (const tarea of tareas) {
        const li = document.createElement('li');
        li.textContent = tarea;
        lista.appendChild(li);
    }
</script>`,
      topicId: 'js-objects-arrays',
    },
    {
      id: 37,
      title: '👤 Perfil de usuario',
      description: 'Crea un objeto con nombre, edad y ciudad. Accede e imprime cada propiedad en la página.',
      initialCode: `<h3>Perfil de Usuario</h3>
<div id="perfil"></div>
<script>
    const usuario = {
        nombre: "Alex",
        edad: 30,
        ciudad: "Tecnopolis"
    };

    const perfilDiv = document.getElementById('perfil');
    perfilDiv.innerHTML = \`
        <p><strong>Nombre:</strong> \${usuario.nombre}</p>
        <p><strong>Edad:</strong> \${usuario.edad}</p>
        <p><strong>Ciudad:</strong> \${usuario.ciudad}</p>
    \`;
</script>`,
      topicId: 'js-objects-arrays',
    },

    // 6. DOM y Eventos
    {
      id: 38,
      title: '📥 Mostrar mensaje en la página',
      description: 'Crea un botón y un div. Al hacer clic en el botón, muestra un mensaje dentro del div usando textContent.',
      initialCode: `<button id="miBoton">Haz Clic</button>
<div id="mensaje" style="margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
<script>
    const boton = document.getElementById('miBoton');
    const mensajeDiv = document.getElementById('mensaje');

    boton.addEventListener('click', () => {
        mensajeDiv.textContent = '¡Hola! Has hecho clic en el botón.';
    });
</script>`,
      topicId: 'js-dom-events',
    },
    {
      id: 39,
      title: '🎨 Cambiar color de fondo',
      description: 'Crea un botón que al hacer clic cambie el color de fondo del <body> a un color aleatorio.',
      initialCode: `<button id="colorButton">Cambiar Color</button>
<script>
    const colorButton = document.getElementById('colorButton');
    const body = document.body;

    const colores = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];

    colorButton.addEventListener('click', () => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        body.style.backgroundColor = colorAleatorio;
    });
</script>`,
      topicId: 'js-dom-events',
    },

    // 7. Asincronía
    {
      id: 40,
      title: '⏰ Temporizador',
      description: 'Usa setTimeout para mostrar “Tiempo terminado” en la página después de 3 segundos.',
      initialCode: `<p id="timer-status">Esperando 3 segundos...</p>
<script>
    const status = document.getElementById('timer-status');
    setTimeout(() => {
        status.textContent = '¡Tiempo terminado!';
        status.style.color = 'green';
        status.style.fontWeight = 'bold';
    }, 3000);
</script>`,
      topicId: 'js-async',
    },
    {
        id: 41,
        title: '🌍 Petición a una API',
        description: 'Usa fetch para obtener datos de una API pública (JSONPlaceholder) y muestra los títulos de los primeros 5 posts.',
        initialCode: `<h3>Posts de una API</h3>
<ul id="posts-list"><li>Cargando...</li></ul>
<script>
    const postsList = document.getElementById('posts-list');
    
    async function getPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const posts = await response.json();
            
            postsList.innerHTML = ''; // Limpiar "Cargando..."
            
            posts.forEach(post => {
                const li = document.createElement('li');
                li.textContent = post.title;
                postsList.appendChild(li);
            });
        } catch (error) {
            postsList.innerHTML = '<li>Error al cargar los posts.</li>';
            console.error('Error:', error);
        }
    }

    getPosts();
</script>`,
        topicId: 'js-async',
      },
];
