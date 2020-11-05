function otraFuncion() {
    seRompe()
}

function seRompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z
        } catch (error) {
            cb(error)
        }
    }, 1000);
}

try {
    //otraFuncion()
    seRompeAsincrona((error)=>{
        console.error(`¡Hay error!: ${error}`)
    })
} catch (error) {
    console.error(`Vaya, algo se ha roto: ${error}`)
    console.log('Pero no pasa algo, lo hemos capturado')
}

console.log('Esto de aquí está al final')