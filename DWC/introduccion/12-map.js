//MAp

//Declaración





let myMap = new Map([
    ["name", "Salva"],
    ["age", "34"],
    ["location", "Alhaurín de la Torre"]

]);

console.log(myMap)

//Métodos y propiedades

myMap.set("salva","3")

console.log(myMap)


//get 
console.log(myMap.get("name"))

//delete
console.log(myMap.delete("name"))
console.log(myMap)

//keys and values

console.log(myMap.keys()) // Devuelve todas las claves
console.log(myMap.values()) // Devuelve todos los valores


// entries -> Devuelve un interable para las entradas [clave,valor] Se Usará por defecto en for of

// EJEMPLO:

let vegetables = new Map([
    ["Pepino", 5],
    ["Calabacino", 10],
    ["Zanahora", 2]
])
 for (let vegetable of vegetables) {
    console.log(vegetables.get(vegetable))
 }