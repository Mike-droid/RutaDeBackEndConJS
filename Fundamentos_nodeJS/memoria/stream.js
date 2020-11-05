const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('utf8') //!Esto es mejor que poner el toString()
/* readableStream.on('data' , (chunk)=> {
    //console.log(chunk) //!Este es el archivo de texto que usamos hace un momento
    data += chunk
})

readableStream.on('end', () => {
    console.log(data)
}) */

/* process.stdout.write('Hola')//!Esto ya es un buffer de escritura
process.stdout.write('mucho')
process.stdout.write('gusto') */

const Transform = stream.Transform //!Puede leer y escribir

function mayus() {
    Transform.call(this)
}

util.inherits(mayus, Transform)

mayus.prototype.__transform() = (chunk, codif, cb) => {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let Mayus = new mayus()

readableStream
    .pipe(Mayus)
    .pipe(process.stdout)