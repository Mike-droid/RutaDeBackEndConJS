console.time('todo')
let suma = 0
console.time('bucle')
for (let index = 0; index < 1000000000; index++) {
    suma++
}
console.timeEnd('bucle')

let suma2 = 0
console.time('bucle2')
for (let j = 0; j < 1000; j++) {
    suma2++
}
console.timeEnd('bucle2')

console.time('asincrona')
console.log('Empieza el proceso asíncrono')
asincrona()
    .then(()=>{
        console.timeEnd('asincrona')
    })

console.timeEnd('todo')

function asincrona() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Terminó la cosa asíncrona')
            resolve()
        }, 1000);
    })
}