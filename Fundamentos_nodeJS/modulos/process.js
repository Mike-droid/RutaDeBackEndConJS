//const process = require('process')

process.on('beforeExit',()=>{
    console.log('El proceso va a terminar')
})

process.on('exit',()=>{
    console.log('El proceso acabó')
    setTimeout(() => {
        console.log('Esto no se va a ver nunca') //!Porque ya está desconectado
    }, 0);
})

setTimeout(() => {
    console.log('Esto sí se va a ver')
}, 0);

process.on('uncaughtException', (error,origin)=>{
    console.error('Vaya, se nos ha olvidado capturar un error')
    setTimeout(() => {
        console.log('Esto viene desde las excepciones')
    }, 0);
})

funcionQueNoExiste()

console.log('Esto no sale si el error no se recoge')
//process.on('uncaughtRejection')