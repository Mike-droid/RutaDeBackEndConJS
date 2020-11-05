const moment = require('moment')

let ahora = moment() //*Fecha de hoy

console.log(ahora)
console.log(ahora.toString()) //*Esta es más amigable
console.log(ahora.toDate())
console.log(ahora.format('YYYY/MM/DD - HH:mm'))