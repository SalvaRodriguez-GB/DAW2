// Ciudadanos de primera clase --> Significa que las funciones se tratan como cualquier valor. Tiene los mismos derechos que cualquier variable


function greet(name) {
    console.log(`Hola.. ${name}`)
}

greet("salva")

const greet3 = function greet2(name) {

    console.log(`Hola ${name}, que tal brother`)
}

greet3("yooo")

// Pasar función como parámetro (Callback)

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet3, "Salva")


// Pueden retornar otra function

function returnGreeting() {
    //Aquí no le pasamos los parámetros a la función, sino que deovlvemos la función completa
    return greet;
}

const greet6 = returnGreeting();

greet6("Salva");


// Arrow Functions - Avanzado

// Retorno implícito

const multiply = (a, b) => a * b
console.log(multiply(1, 2))


// this léxico

const handle = {
    name: "Salva",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handle.greeting();



// Cuidado con arrow ufunction, el ámbito cambia y no se puede acceder a las propiedades el objeto




//  IIFE - (Inmediatly Invoque Function Expression) Expresión de función invocada inmediatamente

(
    function () {
        console.log("yooo")
    }



        ());


(() => {
    console.log(`hola que tal Yoooo`)
})("hola que tal")


// Parámetros REST

function sum1(...numbers) {
    let suma = 0;
    for (let number of numbers) {
        suma += number
    }
    return suma;
}

console.log(sum1(1, 2, 3, 4, 5))

console.log(sum1([1, 2, 3, 4, 5]))


// Operador Spread (...)

const numbers = [1, 2, 3];

function sumWithSpread(a, b, c) {
    return a + b + c;
}

console.log(sumWithSpread(1, 2, 3))

console.log(sumWithSpread(...numbers))


// Combinamos REST y SPREAD en funciones

console.log(sum1(...numbers))


// Closures (Clausuras)

function createCounter() {
    let counter = 0;

    return function executeCounter() {
        counter++;
        console.log(`Contador: ${counter}`)
    }
    executeCounter();
}

const counter2 = createCounter();

counter2();
counter2();
counter2();