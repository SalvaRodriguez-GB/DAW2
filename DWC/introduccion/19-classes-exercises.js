// 1. Crea una clase que reciba dos propiedades

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        
    }
}

// 2. Añade un método a la clase que utilice las propiedades

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }
    greeting() {
        console.log(`Hola ${this.name}, tienes ${this.age} años`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la funcion

let persona = new Person2("salva",34)

persona.greeting()

console.log(persona.name,persona.age)