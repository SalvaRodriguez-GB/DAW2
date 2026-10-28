

// 1. Crea una función que retorne a otra función

function finalizar(name) {
    console.log(`Ejercicio finalizado por ${name}`)
}

function tarea(nombre) {

    return function () {
        finalizar(nombre);
    }
}

const resultado = tarea("Salva");
resultado();

// 2. Implementa una función currificada que multiplique 3 números

function multiplicar(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log(multiplicar(1)(2)(3))



// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia(base, exponente) {
    if (exponente <= 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1)
}

console.log(potencia(2, 10));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(valorInicial) {
    let valorActual = valorInicial;

    return {
        increment() {
            valorActual++;
            return valorActual;
        },

        decrement() {
            valorActual--;
            return valorActual;
        },
        getValue() {
            return valorActual;
        }
    }
}

const contador = createCounter(10);

console.log(contador.increment());
console.log(contador.decrement());
console.log(contador.getValue());


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    let suma = 0;
    for (let number of numbers) {
        suma += number;
    }
    return suma * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3, 4, 5));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function imprimir(numero) {
    console.log(`Número: ${numero}`)
}


function ejemplo(callback, ...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }

    callback(suma);

}

ejemplo(imprimir, 1, 2, 3, 4, 5, 6)

// 7. Desarrolla una función parcial

function multiplicar1(a, b) {
    return a * b;
}

function multiplicarPorDos(b) {
    return multiplicar1(2, b)
}

// 8. Implementa un ejemplo que haga uso de Spread

const nombres = ["Salva", "Esperanza"];
const edad = [34, 30];


const datos = [...nombres, ...edad];


// 9. Implementa un retorno implícito

const imprimirCosas = (cosas) => console.log(cosas);


// 10. Haz uso del this léxico

const persona = {
    name: "Salva",

    presentarse: function () { console.log(`Hola, soy ${this.name}`) }
}

persona.presentarse();