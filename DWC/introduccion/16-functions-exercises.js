// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b = 0) {
    return a + b
}
console.log(suma(5, 6))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayor(array) {
    let mayor = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor;
}

let array = [123, 12, 34]

console.log(mayor(array))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function sumaLetras(frase) {
    let contador = 0;
    let vocales = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            contador++;
        }
    }
    return contador;

}

console.log(sumaLetras("Hola"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings = ["salva", "daw"]

function mayuscula(array) {
    let nuevoArray = []
    for (let palabra of strings) {
        nuevoArray.push(palabra.toUpperCase())
    }
    return nuevoArray
}

console.log(mayuscula(strings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false
        }

    }
    return true;
}

console.log(esPrimo(7))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function comunes(array1, array2) {
    let newArray = [];

    for (let i = 0; i <= array1.length; i++) {
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }
    if (!newArray) {
        console.log("No coincide ni uno, Hulio");
    } else {
        return newArray;
    }
}

let num1 = [14234323, 2, 3, 4423, 5, 6, 7, 824]
let num2 = [1, 4, 234, 6456, 743, 9, 8]

let arrayNuevo = comunes(num1, num2)

console.log(arrayNuevo)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(array) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            acumulador += array[i];
        }
    }
    return acumulador;
}

let prueba = [1, 2, 3, 4]
console.log(sumaPares(prueba))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function powSquare(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] ** 2)
    }
    return arr;
}

console.log(powSquare(prueba))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reves(texto) {
    let array = texto.split(" ");
    let newText = "";

    for (let i = array.length - 1; i >= 0; i--) {
        newText += array[i] + " ";
    }
    return newText;
}
let texto = "Hola que tal";

console.log(reves(texto))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero) {
    let resultado = 1;
    for (let i = numero; i >= 2; i--) {
        resultado *= i
    }
    return resultado;
}

console.log(factorial(5))