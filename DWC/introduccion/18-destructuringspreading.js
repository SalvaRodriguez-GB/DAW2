// Desestructuración (Tenemos un objeto, array, conjuntos... etc... y queremos coger valores)
// Ejemplo:

let array = [1, 2, 3]




let myValue = array[1]
console.log(myValue)

//let myName = person.name;
//console.log(myName)

// Sintaxis para arrays

let [myValue0, myValue1, myValue2, myValue3 = 0] = array // myValue3 tiene valor por defecto 0 en caso de que no tenga ningún valor

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

// Ignorar elementos array

let [myvalue11, , , myvalue12 = 0] = array
console.log(myvalue11)
console.log(myvalue12)


// Sintaxis para objetos

let person = {
    name: "Salva",

    alias: "Salvi"
}

let { name, age, alias } = person

console.log(name)
console.log(age)

// Sintaxis de objetos con nuevos nombres de variable

let { name: name2, age: age2, alias: alias2 } = person;

console.log(name2)

// Sintaxis de objetos con valores predeterminados

let { name: name23 = "alfredo", age: age3 = 4, alias: alias25 = "salvorio" } = person;
console.log(name23)
console.log(age3)
console.log(alias25)

// Objetos anidados

let person2 = {
    name: 'Salvador',
    age: 34,
    alias: 'Salva',
    walk: {
        name: "otro nombre",
        function() {
            console.log(`${person2.name} está andando`)
        },
        name1: `Yeegua`,
        exp: "15 años"
    }
}

let { name: namePerson, walk: { name1: nameWalk } } = person2
let { walk: { exp: nameExperiencia } } = person2;


// Propagación (...)

//Sintaxis arrays
let myArray2 = [...array, 4, 5, 6]
console.log(myArray2)

// Copia de arrays

let myArray3 = [...array]
console.log(myArray3)

console.log(myArray3 === array)
console.log(myArray3 == array)

// Combinación de arrays

let myArray4 = [...myArray2,...myArray3]
console.log(myArray4)



// Sintaxis de propagación para objetos

let animal = {
    name: "Currito",
    age: 3,
    ciudad: "Churriana"
}



// Copia de objetos

let animal2 = {...animal}

console.log(animal2)
