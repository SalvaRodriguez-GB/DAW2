// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let array = [undefined, 2, 3, 4, 5, 6]

let [numero1, numero2] = array;

console.log(numero1, numero2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [numero4 = 0, numero5 = 0] = array;

console.log(numero4, numero5)


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "salva",
    age: 34,
    alias: "salvi"
}

let { name, age, alias } = person

console.log(name,age,alias)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
// a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación