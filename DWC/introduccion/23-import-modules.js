// Importación de módulos

import substract, { add, PI, name, Circle } from "./22-export-modules.js"

import defaultImport from "./22-export-modules.js";


console.log(PI.toFixed(2))
console.log(name)
console.log(add(3,4))

let circulo = new Circle(3)

console.log(circulo.area().toFixed(2))
console.log(circulo.perimeter().toFixed(2))


// Importación por defecto

console.log(substract(5,1))

