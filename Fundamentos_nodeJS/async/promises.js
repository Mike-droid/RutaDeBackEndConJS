function hola(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 2000);
    })
}

function hablar(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('bla bla bla bla bla...')
            //resolve(nombre)
            reject('Hay un error')
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Adios ${nombre}`)
            resolve(nombre)
        }, 1000);
    })
}

//*-----------------------------------------

console.log('Iniciando el proceso...')
hola('Miguel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(()=>{
        console.log('Terminado el proceso')
    })
    .catch(error => {console.error(`Ha habido un error: ${error}`)})