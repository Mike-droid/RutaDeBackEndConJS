/* const fs = require('fs') //*Viene directamente en el core de node

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data)=>{
        cb(data.toString())
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta,contenido, (error) => {
        if (error) {
            console.error(`No he podido escribirlo. ${error}`)
        }else{
            console.log('Se ha escrito correctamente.')
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
} */

//leer(__dirname + '/archivo2.txt', console.log)

//escribir(__dirname + '/archivo2.txt' , 'Soy otro archivo de texto ;D', console.log)

//borrar(__dirname + '/archivo2.txt', console.log)

const fs = require('fs').promises

const readFile = async () => {
    const file = await fs.readFile('./hola.txt', {encoding: 'utf-8'})
    console.log(file)
}

readFile()