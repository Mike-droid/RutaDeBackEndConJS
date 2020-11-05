function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        miCallback(nombre)
    }, 2000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('bla bla bla bla bla...')
        callbackHablar()
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otroCallback()
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(()=>{
            conversacion(nombre, --veces, callback)
        })
    }else{
        adios(nombre,callback)
    }
}

//*---------------------------------------------------------------

console.log('Iniciando proceso')

hola('Carlos', (nombre) => {
    conversacion(nombre,3, ()=>{console.log('Proceso terminado')})
})

//! callback hell, evítalo!
/* hola('Miguel', (nombre) => {
    hablar(()=>{
        hablar(()=>{
            adios(nombre, () => {
                console.log('Terminando proceso')
            })
        })
    })
}) */