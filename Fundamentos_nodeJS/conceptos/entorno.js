let nombre = process.env.NOMBRE || 'Sin nombre' //!valor por defecto
let web = process.env.MI_WEB || 'No tengo web'

//*Por buenas practicas las variables de entorno VAN_EN_MAYUSCULAS

console.log(`Hola ${nombre}`)
console.log(`Mi web es ${web}`)