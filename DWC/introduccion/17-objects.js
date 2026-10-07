// Objetos

// Sintaxis

let person = {
    name: 'Salvador',
    age: 34,
    alias: 'Salva'
}

// Acceso a propiedades

// Notación punto
console.log(person.age)

// Notación corchetes

console.log(person["name"])
console["log"]("Aquí el texto que quieras")


// Modificación de propiedades

person.name = "Esperanza"

console.log(person.name)

console.log(typeof person.name)
console.log(typeof person.age)

//Eliminación de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.age = 34;

person.email = "salva@educaand.es"


console.log(person)


// Métodos (funciones dentro de objetos)

let person2 = {
    name: 'Salvador',
    age: 34,
    alias: 'Salva',
    walk: {
        name: "otro nombre",
        function() {
            console.log(`${person2.name} está andando`)
        },
        name1: `Yeegua`
    }
}
console.log(person2)


person2.walk
console.log(person2.walk.name1)




let viaje = {
    origen: "Granada",
    destino: "El Cairo",
    dias: 8,
    precio: 750,
    mostrar: function () {
        console.log(`${this.origen} es el sitio donde se sale hacia ${this.destino}`)
        console.log(`Durante ${this.dias} dias por ${this.precio}`)
    }
}

let oferta = viaje

viaje = null;

oferta.mostrar();



// Igualdad de objetos

let person23432 = {
    name: "Salva",
    age: 34,
    alias: "Salvi"
}

let person6 = {
    name: "Salva",
    age: "30",
    alias: "Salvador"
}



// Iteración

for (let key in person6) {
    console.log(key + ":" + person6["key"])
}


// Funciones como objetos

function Person10(name,age) {
    this.name = name;
    this.age = age;
}

let person10 = new Person10("Salva",34)



