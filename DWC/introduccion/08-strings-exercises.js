// 1. Concatena dos cadenas de texto
let cadena1 = "Hola"
let cadena2 = "Salva qué tal estás"

let cadena3 = cadena1 + cadena2
console.log(cadena3)
// 2. Muestra la longitud de una cadena de texto

console.log(cadena3.length)

// 3. Muestra el primer y último carácter de un string

console.log(cadena3.charAt(0) + " Primer caracter")
console.log(cadena3.charAt(cadena3.length - 1) + " último caracter")

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadena3.toUpperCase())
console.log(cadena3.toLowerCase())


// 5. Crea una cadena de texto en varias líneas

let cadenaNueva = `Hola estoy escribiendo esto
en varias lineas
ok?`
console.log(cadenaNueva)



// 6. interpola el valor de una variable en un string

console.log(`${cadena2} ${cadenaNueva}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadenaNueva.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta 
cadenaNueva.toLowerCase().includes("lineas") ? console.log("Sí") : console.log("No")

// 9. Comprueba si dos strings son iguales

let frase = "Hola"
let frase2 = "Hola"

console.log(frase==frase2)

// 10. Comprueba si dos string tienen la misma longitud

console.log(frase.length == frase2.length)