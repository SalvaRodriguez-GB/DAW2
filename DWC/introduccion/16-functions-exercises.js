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

let strings = ["salva","daw"]

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

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado