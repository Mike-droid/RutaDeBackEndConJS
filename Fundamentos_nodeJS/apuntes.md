#Fundamentos de NodeJS

##Event Queue:
Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

##Event Loop:
Un proceso con un bluque que gestiona, de forma asíncrona, todos los eventos de tu aplicación.
Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

##Thread Pool:
Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop verá si lo pasa a Event Queue o no.

##El peligro de que sea monohilo:
Si tiene un error, se parará por completo el proceso. Es MUY IMPORTANTE estar al pendiente de lo que sucede en
el código. Todo lo que pueda fallar, antes de que falle, hay que comprobarlo.

##Variables de entorno:
Podemos definir variables de entorno en la consola justo antes del comando de node.

##Herramientas muy valiosas para Node.js:
1. Nodemon: para usarlo en desarrollo
2. PM2: para usarlo en producción

##Funciones callback:
Es una función que es pasada como argumento a otra función, para ser llamada en otro momento.

##Callback hell:
Se dan cuando una función tiene a otra función como parametro y esta a su vez tiene otra función como parametro y así hasta n. Una estrategia para evitar esto es usar estructuras de control y funciones recursivas.

##Promesas:
Son una sintaxis más elegante y legible de realizar callbacks, creando así un código más escalable y entendible para todas las personas.
Empezamos con new Promise(resolve,reject)=>{code here....}
Para obtener los valores que retorona debemos usar "then" para los casos exitosos y "catch" para los errores.

##Async y Await:
Es una sintaxis especial para trabajar con funciones. Hacer esto solo requiere de escribir async al inicio de la función, esto quiere decir que regresará una promesa.
Await hará que se detenga el programa de JS hasta que se cumpla la promesa.

##Globales:
El objeto global contiene los métodos y propiedades básicas de Node.
*global* es un equivalente de *this* en el navegador.
En node *this* es una alias de *global*.
Si puedes *NO* usar variables globales, trata de no usarlas.

##File system:
Podemos crear, leer y eliminar archivos de texto (y seguramente de otros tipos) con node.js en nuestra computadora. Los métodos son:
- readFile() --- Para leer archivos
- write() --- Para escribir archivos
- unlink() --- Para borrar archivos

##Console
Con console podemos imprimir todo tipo de valores por
nuestra terminal.

- console.log: recibe cualquier tipo y lo muestra en el consola.
- console.info: es equivalente a log pero es usado para informar.
- console.error: es equivalente a log pero es usado para errores.
- console.warn: es equivalente a log pero es usado para warning.
- console.table: muestra una tabla a partir de un objeto.
- console.count: inicia un contador autoincremental.
- console.countReset: reinicia el contador a 0.
- console.time: inicia un cronometro en ms.
- console.timeEnd: Finaliza el cronometro.
- console.group: permite agrupar errores mediante identación.
- console.groupEnd: finaliza la agrupación.
- console.clear: Limpia la consola.

##Errores:
Los errores siempre van a ocurrir, para manejarlos hay que usar try/catch. En funciones asíncronas
la cosa no es tan simple como usarlo en la llamada a la función, sino dentro del código que puede tener el error. Esto es importante porque los errores estarían en otro hilo y no podrían ser tratados.

##procesos Hijos
El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

- Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa spawn cuando quieras recibir datos desde que el proceso arranca.
- Usa exec cuando solo quieras recibir datos al final de la ejecución.

##Módulos nativos de C++ en Node.js
Nos permite ejecutar archivos C++

##Módulos HTTP
Nos permite conectarnos a servidores y crear nuestro propio servidor.
Necesitamos usar *request* y *response*.

##OS
Con node podemos acceder a interfaces de bajo nivel usando *const os = require('os')*

##Process
Process viene dentro de los módulos globales. Esto sirve para escuchar eventos de Node.

##NPM
Para mayor información está el curso de NPM de Platzi, pero en resumen:
- Es una página de internet donde hay código abierto que puedes descargar para tus proyectos.
- Tú puedes crear tus propios paquetes y subirlos a npm.
- Ten cuidado con las dependencias.

##Require e import
Son instrucciones para incluir archivos o módulos en nuestros proyectos de node.

##Algunos módulos muy útiles:
- bcrypt : Permite encriptar contraseñas
- moment : Manejo de fechas de manera sencilla
- sharp : modificar achivos de imágenes

##RAM y almacenamiento
Ram es mucho más rápido que el disco duro.
RAM está hecha para leer y escribir archivos.
Disco duro están hechos para guardar información.

##Buffers
Un buffer es un montón de datos y un stream es un proceso donde pasan un montón de datos. Nos permite trabajar con los archivos en su forma más básica (hexadecimal).
- *Stream*
Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.

- *Buffer*
Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la reproducción se pararía instantáneamente. Pero sabemos que en realidad no es así, el video continúa reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer el cuál es un espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks), para luego ser consumido, y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de forma binaria, el proceso es mucho mas rápido de lo que se consume. Es por eso que cuando reproducimos un video en Youtube vemos que este se carga mas rápido. (dependiendo del ancho de banda claro está)

##Benchmark
Esta es una prueba de rendimiento.
Podemos usar console.time('cosa1') y console.timeEnd('cosa1') para saber cuánto tiempo tarda un proceso en ejecutarse.

##Error First Callbacks
Lanzar una excepcion con Throw dentro de un callback asincrono no va a funcionar… Solo nos va a funcionar en un bloque de codigo sincrono.

##Scrapping
Web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

##Automatización de procesos
Gulp nos puede servir para automatizar procesos en node.js

##Electron
Puedes usar node.js para crear apps de escritorio con electron.