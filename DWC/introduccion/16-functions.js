//Functios

//Simple

function myFunction(parametros) {
    console.log("Aquí iría la lógica que quiero que ejecute esta función")
}

myFunction();

// let funcion = myFunction();

// Con parámetros

function myFunctionWithParametres(numero, nombre) {
    console.log(`Hola qué tal ${nombre}, tienes ${numero} años?`)
}

myFunctionWithParametres(34, "Salva")


// Funciones anónimas

const myyFunction = function () {
    console.log("Función anónima")
}

myyFunction()



const functionAnonimaConParametros = function (nombre) {
    console.log(`Hola que tal ${nombre}`)
}

functionAnonimaConParametros("salva")

// Funciones flecha o arraow functions

const myFunc = (name) => {
    console.log(`hola brother te llamas ${name}?`)
}

myFunc("Salva")

const suma2 = (a = 0, b = 0) => a + b;

console.log("Ojo suma2" + suma2(1))

// Parámetros

function suma(a = 0, b = 0) {
    return a + b;
}

console.log(suma("salva"))

//Funciones anidadas

function externa() {
    console.log("Estamos en la función externa")
    function interna() {
        console.log("Estamos en la funcion interna")
    } interna();
}

externa();



// FUnciones de ornden superior

function functionOrdenSuperior(funcion, parametros) {
    funcion(parametros)
}

functionOrdenSuperior(suma)


// forEach

const myArray = [1, 2, 3, 4]

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach(value => console.log(value))

let conjunto = new Set()

conjunto.add(12).add(123123).add(1224).add(123)

conjunto.forEach(function(elemento) {
    console.log(`Elemento: ${elemento}`)
})



