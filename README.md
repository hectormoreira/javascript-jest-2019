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

- toEqual()
- not.toEqual()