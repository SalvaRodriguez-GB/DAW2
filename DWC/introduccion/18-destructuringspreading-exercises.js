// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let array = [undefined, 2, 3, 4, 5, 6]

let [numero1, numero2] = array;

console.log(numero1, numero2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [numero4 = 0, numero5 = 0] = array;

console.log(numero4, numero5)


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "Yooo",
    age: 34,
    alias: "salvi",
    trabajo: "técnico"
}

let { name, age, alias } = person

console.log(name, age, alias)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
// a nuevas variables con nombres diferentes

let { name: name1, age: age1 = 0 } = person
console.log(name1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let personAnidada = {

    name: "salva",

    age: 34,

    alias: "salvi",

    tareas: {
        principal: "vibe-coding",
        secundaria: "creador"
    }

}

let { tareas: { principal, secundaria } } = personAnidada;
console.log(principal, secundaria)



// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]

let spreadedArray = [...array1, ...array2]

console.log(spreadedArray)

// 7. Usa propagación para crear una copia de un array

let newArray = [...spreadedArray]
console.log(newArray)
console.log(newArray == spreadedArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let newObject = {...person,...personAnidada}
console.log(newObject)



// 9. Usa propagación para crear una copia de un objeto

let copyObject = {...newObject}
console.log(copyObject)

// 10. Combina desestructuración y propagación

let {name:name4,...personAnidada} = person