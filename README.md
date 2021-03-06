# javascript-jest-2019
Notas y repo del [Curso de JavaScript Testing con Jest 2019](https://platzi.com/clases/js-jest-2019/) en Platzi


## Intro
Qué son las pruebas unitarias? Las pruebas unitarias lo que hacen es tomar todos tus proyectos o esos bloques de código y descomponerlo en pequeñas partes que vamos a probar. Así, todo lo que vamos pasando sabemos que esta funcionando correctamente y que no hay ningún inconveniente o bug.

Las pruebas unitarias comprueban lo que son casos estándares (suposición explícita) es decir, no son perfectas. Las características de las pruebas unitarias son:

- Automatizable: Deben correr sin ningún proceso manual.
- Total Cobertura: Debemos de pasar por cada bloque escrito.
- Reutilizables: Podemos usarlas para probar otros bloques.
- Independientes: No pueden depender de otra prueba para funcionar.
- Rápidas de crear: TIenen que ser algo conciso que prueben algo muy particular.
- Ventajas de las pruebas unitarias:

Proporciona un trabajo ágil.
- Calidad del código.
- Detectar errores rapido.
- Facilita los cambios y favorece la integración.
- Proporciona información.
- Reduce el coste.
- Durante el curso, añadiremos pruebas a proyectos con Vanilla, React, Vue e incluso Express.


## Herramientas
JavaScript es un lenguaje muy competitivo y curiosamente ha sido uno de los lenguajes con más frameworks de pruebas, pero con menos cultura en la comunidad.
Entre los más populares encontramos frameworks como Ava, Tape, Enzyme, Jasmine, Mocha y Jest.

## ¿Qué es Jest?
Jest es una herramienta creada y mantenida por la comunidad open source con apoyo de Facebook. Jest surgió con el objetivo de agregar pruebas unitarias a proyectos con react pero ha sido tan importante que cada vez se emplea en mas proyectos con otros frameworks.

Jest no requiere configuraciones adicionales demasiado complejas para añadir pruebas a cualquiera de nuestros proyectos.

- Feedback instantáneo.
- Snapshot Testing para saber qué ha cambiado.
- Zero configuracion adicional o compleja.
- Powerful mocking library.
- Funciona con TypeScript.
- Facebook, Twitter, Spotify, Instagram, Airbnb usan Jest.

## Instalación y configuración
Los comandos que usaremos en la consola son:

- `pwd` para saber donde estamos exactamente en el computador.
- `mkdir` para crear un directorio.
- `cd` para entrar a la carpeta creada.
- `npm init` para inicializar nuestro proyecto, esto nos creara un package.json.
- `npm install jest -D` para agregar jest como dependencia de desarollo a nuestro poryecto.
-  `npm install babel-jest @babel/core @babel/preset-env -D` para poder usar ES6 en nuestras pruebas unitarias.

**Recuerda:**
Siempre iniciar tu proyecto creando un repositorio en git para mantener tu código siempre actualizado usando Git init.

## Creando nuestra primera prueba unitaria
**Jest** es una librería open source promocionada por Facebook que nos permite crear pruebas unitarias con javascript en nuestros proyectos.

En esta clase, crearemos nuestra primera prueba unitaria. Para ello. Crearemos unas funciones en JavaScript para luego probarlas usando Jest.

En la consola, dentro de la ruta de nuestro proyecto, corremos jest para ejecutar las pruebas, También podemos crear un script en nuestro package.json.

Test es el nombre de la carpeta que Jest identifica como el lugar en el que se ubican las pruebas.

**Recuerda:**
- Test es el nombre de la carpeta que Jest identifica como el lugar en el que se ubican las pruebas.
- Exportar (export) las funciones para luego probarlas.

## Common Matchers / Comparadores Comunes
Los comparadores comunes nos permiten probar nuevas cosas dentro de nuestro codigo. En esta clase, Pasaremos las pruebas directamente en nuestro archivo de jest.

Las pruebas dan a entender la información de lo que estamos creando en nuestro proyecto, así que siempre recuerda documentarlas muy bien y siempre guardar los cambios en tu repositorio ya sea localmente o de forma remota.

Los comparadores pueden ser:

- `toEqual()`
- `not.toEqual()`

## Numbers
Se puede correr las pruebas sin necesidad de tener la funcion de describe, Aunque es una muy buena practica agregarla.

Los Métodos para numeros que nos provee jest son:

- `.toBeGreaterThan()`
- `.toBeGreaterThanOrEqual()`
- `.toBeLessThan()`
- `.toBeLessThanOrEqual()`
- `.toBeCloseTo()` para números flotantes

## Truthness / Verdadero
Probaremos funciones que nos retornan Boolean, Undefined o Null.

Crearemos un nuevo archivo, donde crearemos las funciones que nos retornaran estos valores.

Métodos de Jest usados en esta clase:

- `.toBeNull()`
- `.toBeTruthy()`
- `.toBeFalsy()`
- `.toBeUndefined()`
- `.not.toBeTruthy()`

## Arrays
Crearemos un archivo JavaScript donde crearemos nuestros arreglos.
Luego creamos las funciones para exportar los arrays.

Métodos:

- `.toContain()`
- `.toHaveLength()`

## Coverage
Con Coverage podemos saber si estamos "cubriendo" todo nuestro código en un archivo en particular.

Coverage de Jest es una opción que nos permite verificar el código de nuestra aplicación validando que porciones de código no han sido testeadas.

Para ello debemos agregar el flag `--coverage` en nuestro comando. Como output, nos dará un reporte.

## Strings
Ver si contiene o no una particularidad de texto que queremos comprobar asi como también la longitud.

Métodos:

- `.toMatch()`
- `.not.toMatch()`
- `.toHaveLength()`

## Monitoreo
rearemos un watcher para que escuche los cambios y realice las pruebas automáticamente. Para ello usamos el flag `--watch`, también podemos crear un script en nuestro package.json

## Setup de pruebas
Jest nos proporciona funciones auxiliares para mejorar el manejo de nuestras pruebas, esto significa que podremos correr funciones antes, durante o después de nuestras pruebas.

Esto nos permite setear ciertas configuraciones muy particulares que necesitemos antes que corra la prueba o después de esta.

- `.afterEach()` // Despues de cada prueba
- `.afterAll()` // Despues de todas las pruebas

- `.beforeEach()` // Antes de cada prueba
- `.beforeAll()` // Antes de todas las pruebas

## Callbacks
Jest nos provee una función que nos permite probar funciones asíncronas como callbacks, promesas, async await, esta es llamada `done`.

## Promesas
Axios para hacer una peticion http. La cual nos devuelve una promesa.
`npm install --save axios`
>  Axios siempre retorna una promesa

## Reject y resolve
En esta clase, vamos a probar las promesas cuando se resuelven o son rechazadas.

Los métodos son:

- `.resolves`
- `.rejects`

## Async/Await
Vamos a seguir utilizando nuestra petición a la API.

## Aplicaciones de testing para Async/Await
Que nuestra API cause un error para luego ver cómo manejaremos el error.

Trabajaremos varios ejercicios con async/await. En donde esperamos que las respuestas sean cumplidas para luego evaluar lo que queremos en las expectativas de nuestras pruebas.

## Snapshot Testing
Los snapshots nos garantizan que vamos a asegurar o que no vaya a pasar algún cambio inesperado en nuestra UI. Comprobamos lo que tenemos en este caso jest contra lo que estamos trayendo y que no deben de cambiar. Ya que esto lo usamos para casos en donde cierto datos en particulares rara vez deben de cambiar.

Ejemplo: Un icono que lo traigamos de alguna petición http. Entonces evaluaremos el cambio contra la prueba que tenemos en jest.

En caso de que queramos aceptar el cambio agregamos el flag `-u`.

## Excepciones Snapshot20/24
Existen datos que no siempre son estáticos, Al contrario. Están constantemente cambiando. Para ello necesitamos hacer ciertas excepciones.

## Preparar proyecto para trabajar con React JS
En la terminal ejecutamos:
```sh
git clone https://github.com/gndx/platzi-react-jest
cd platzi-react-jest
npm install
npm start
```

Create React App. Ya tiene incluido Jest pero obviamente para probar lo más mínimo. Nuestro trabajo es hacer pruebas a todo lo que vamos agregando a nuestro proyecto.

npm install --save-dev enzyme enzyme-adapter-react-16

## Beneficios de las Pruebas Unitarias
- Aprendimos a añadir pruebas unitarias a proyectos javascript usando vanilla.js.
- Hicimos pruebas a funciones asíncronas
- Creamos snapshots, Hasta llegar a proyectos más complejos usando React, Vue o Express.

**Recuerda:**
Hacer pruebas unitarias no solo te hace mejor desarrollador, también te ayuda a conocer mejor el proyecto y a detectar errores con mayor rapidez y efectividad

**Como consejo final. Nunca pares de aprender.**



