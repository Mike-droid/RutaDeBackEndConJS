const { exec , spawn } = require('child_process')
const { stdout } = require('process')

/* exec('node modulos/consola.js', (error, stdout, sterr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
}) */

let proceso = spawn('ls',['-la'])

console.log(proceso.pid) //!pid = process ID
console.log(proceso.connected)

proceso.stdout.on('data', (dato)=>{
    console.log('¿Está muerto?')
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', ()=>{
    console.log('El proceso terminó')
    console.log(proceso.killed)
})