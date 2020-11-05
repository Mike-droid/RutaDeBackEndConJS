async function hola(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 2000);
    })
}

async function hablar(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('bla bla bla bla bla...')
            resolve(nombre)
            //reject('Hay un error')
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Adios ${nombre}`)
            resolve(nombre)
        }, 1000);
    })
}

async function main(){
    let nombre = await hola('Miguel')
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('Termina el proceso')
}

console.log('Empezamos el proceso')
main()
console.log('Está será la segunda instrucción en ejecutarse')