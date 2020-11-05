//let buffer = Buffer.alloc(5)
//let buffer = Buffer.from([1,6,7,4])
/* let buffer = Buffer.from('Hola')

console.log(buffer)
console.log(buffer.toString()) */

//-------------------------------------------------------------

let abc = Buffer.alloc(26)
console.log(abc)

for (let index = 0; index < 26; index++) {
    abc[index] = index + 97 //!97 es el valor de 'a'
}

console.log(abc.toString())