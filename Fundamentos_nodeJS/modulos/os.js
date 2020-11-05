const os = require('os')

console.log(os.arch()) //!Arquitectura de tu S.O.
console.log(os.platform()) //!Plataforma en la que estás corriendo el código
console.table(os.cpus()) //!Núcleos de tu PC
console.log(os.cpus().length) //!La cantidad de procesos que puedes levantar

console.log(os.constants)

const SIZE = 1024
function kb(bytes) {return bytes/SIZE}
function mb(bytes) {return kb(bytes)/SIZE}
function gb(bytes) {return mb(bytes)/SIZE}
console.log(os.freemem()) //!Te dirá en bytes la memoria libre que tienes
console.log(kb(os.freemem))
console.log(mb(os.freemem))
console.log(gb(os.freemem))
console.log(gb(os.totalmem)) //!Memoria RAM disponible total

console.log(os.homedir())
console.log(os.tmpdir()) //!Archivos temporales

console.log(os.hostname())
console.table(os.networkInterfaces())