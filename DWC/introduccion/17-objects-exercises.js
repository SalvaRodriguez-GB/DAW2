//// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Salva",
    age: 34,
    email: "salva@gmail.com"
}

// 2. Accede y muestra su valor
console.log(person.name)
console.log(person)

// 3. Agrega una nueva propiedad

person.weight = 90;
console.log(person)

// 4. Elimina una de las 3 primeras propiedades

delete person.email
console.log(person)

// 5. Agrega una función e invócala

person.accion = () => console.log("Esta persona existe")

person.accion();

// 6. Itera las propiedades del objeto

for (let properties in person) {
    console.log(`${properties}: ${person[properties]}`)
}

// 7. Crea un objeto anidado

let person2 = {
    name: "Salvador",
    age: 30,
    email: "salva@gmail.com",
    mascota: {
        name: "Denver",
        age: 6
    }
}



// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person2)
console.log(person2.mascota)

// 9. Comprueba si los dos objetos creados son iguales

console.log(person === person2)
console.log(person == person2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name == person["this.email"])