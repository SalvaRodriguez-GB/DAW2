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

let person7 = new PersonWithMethod("Salva", 34, "Salvi")

person7.walk();


//Variables privadas en cases

class PrivatePerson {
    #bank   //Se utiliza la almohadilla antes de utilizar la variable o declararla
    #saldo
    constructor(name, age, alias, bank, saldo) {
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
        this.#saldo = saldo;
    }
    // Getter para consultar el valor sin permitir alteración directa

    get saldoActual() {
        return this.#saldo;
    }

    set saldoActual(importe) {
        this.#saldo = importe;
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
    }

    pay() {
        this.#bank
    }
}

let personabanco = new PrivatePerson("Salva", 34, "Salvi", "IBAN ES 7897 4564 8797", 3000.00);

console.log("estamos aqui\n" + personabanco.saldoActual)

personabanco.saldoActual = 3999;

personabanco.depositar(1)

console.log(personabanco.saldoActual)


// Herencia

class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("El animal hace un sonido genérico")
    }
}

class Perro extends Animal {
    constructor(name,age) {
        super(name);
        this.age = age;
    }
    sound() {
        console.log("El perro hace GUAU")
    }
    action() {
        console.log("El perro muerde")
    }
}

class Fish extends Animal {
    constructor(name,kind) {
        super(name);
        this.kind = kind;
    }

    action() {
        console.log("El pescado chapotea")
    }
}

console.log("La herencia a partir de aqui")

let firulais = new Perro("firu",3)
let magikarp = new Fish("Magi","Agua")

firulais.action();
firulais.sound();
magikarp.action();
magikarp.sound();

console.log("La herencia hasta aquí")


// Métodos estáticos

class MathOperations {
    static sum(a, b) {
        return a + b;
    }
}

console.log(MathOperations.sum(4,5))