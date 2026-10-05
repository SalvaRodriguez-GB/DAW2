// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person = new Person("Salva", 34, "Salvi")

console.log(person)

// Valores por defecto

class defaultPerson {
    constructor(name = "No Name", age = 0, alias = "sin alias") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person2 = new defaultPerson()

console.log(person2)

// Acceso a propiedades

console.log(person2.name)
console.log[person2.alias]

// Funciones en clases

class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }

    walk() {
        console.log(`${this.name} anda bastante`)
    }
}

let person7 = new PersonWithMethod("Salva",34,"Salvi")

person7.walk();