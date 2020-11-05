function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        miCallback(nombre)
    }, 2000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otroCallback()
    }, 1000);
}

console.log('Iniciando proceso')

hola('Miguel', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso')
    })
})

/* hola('Carlos' , () => {})
adios('José', () => {}) */
