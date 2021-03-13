# Curso de Node.js (Apuntes)

## HTTP

Es el protocolo de comunicación que permite las transferencias de información en la web.
¿Por qué es importante? Porque es el lenguaje común para todas las comunicaciones.

## ¿Cómo funciona una petición?

Cliente -> Internet -> Servidor
Cliente <- Internet <- Servidor

## Puntos clave

- Métodos : qué quieres hacer
- Estado : cómo ha ido la operación
- Cuerpo : lo que el servidor devuelve

## Algunos métodos

- Get Recoge información del servidor
- Put: Reemplaza información en el servidor
- Delete: Elimina información del servidor
- Post: Añade información al servidor
- Patch: Actualiza parte de la información (solo una parte pequeña)
- Options: Pide información sobre los métodos

## Cabeceras

Estas sirven para darnos información contextual de la petición (no se trata de lo que quiero hacer, sino de cómo hacerlo).
En la request, en los métodos de *post*, *put* y *patch* podemos tener cabeceras de:

- Autenticación
- Cache
- Indicaciones
- Condiciones
- CORS
- Cookies
- Etc...

## #Cookies

Sirven para compartir información entre peticiones.

## #CORS: Cross Origin Resource Sharing (Compartir recursos entre diferentes origines)

Podemos o no podemos manejar información desde fuera de nuestro servidor.

## #Accept

Define el contenido que acepta.

## #Autentiación

Asegúrate de que puedes pedir cosas al servidor. Esta es de las cabeceras más importantes.

## #Cache

Almacenamiento temporal: Gestionar durante cuánto tiempo la respuesta será la misma.

## Estados

Son el número que indica lo que ha pasado con la petición.

## #2xx

Todo ha ido bien :D.

## #3xx

La petición se ha *redirigido a otro sitio*.

## #4xx

Errores del cliente :/.

## #5xx

Ha habido un error al procesar la petición. Error del servidor :(.

## Cuerpo y query de la petición

## #Cuerpo

Es la información de la petición que queremos enviar o añadir o que el servidor nos dé.

## #Ejemplos de content-type

- text/html
- text/css
- application/javascript
- image/jpeg
- application/json
- application/xml

## Query

Te van a permitir añadir información extra a lo que quieres enviarle al servidor, por ejemplo:

- Orden en el que quieres que se devuelvan los datos.
- Parámetros que quieres medir.

También podemos usar las queries para compartir datos en el frontend. *OJO:* el usuario lo verá, cuidado con lo que compartes.

## #Estructura de una query

Añadir *?* al final de la URL, *nombre=valor* y separarlos con *&*

## Body parser

Es una extensión de Express para manejar el cuerpo HTML de una manera muy sencilla.
El body siempre lo vamos a encontrar en la request.

Node.js es buenísimo para servir cualquier tipo de petición porque no se bloquea

## IMPORTANTE

La información de los errores debe ser mostrada a detalle para el programador y con un mensaje sencillo para el cliente.

Cualquier aplicación va a tener tres puntos de responsabilidad, que deben responder a tres preguntas:

- ¿Cómo me comunico con ella?
- ¿Qué hace?
- ¿Dónde y cómo se guardan los resultados?

La respuesta a estos tres puntos, corresponden a las tres capas que vamos a generar:

- Capa de red (en inglés “network”)
- Capa controladora (en inglés, “controller”)
- Capa de almacenamiento (en inglés, “store”)

## Mock

Es "falsear" la BBDD o un servicio para validar que todo funciona correctamente.

## Web Sockets

Es un protocolo que se usa para canales de comunicación en tiempo real entre un servidor y un cliente y soporta múltiples clientes.
