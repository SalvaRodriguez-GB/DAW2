// Crear una potencia con recursividad



console.time("Start")
function potencia(n, elevado) {
    if (elevado === 0) {
        return 1;
    }

    return n * potencia(n, elevado - 1);
}

console.log(potencia(2, 10));

console.timeEnd("Start")


// Sumar elementos de un array

const arr = [1, 2, 3, 4];

function sumarArray(array) {
    if (arr.length <= 0) {
        return 0;
    }

    return arr.pop() + sumarArray(arr)

}

console.log(sumarArray(arr))


//Invertir una cadena de texto


// 
