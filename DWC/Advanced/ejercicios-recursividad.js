/*
1. Suma de dígitos recursiva

Crea una función recursiva llamada **`sumarDigitos(numero)`** que tome un número entero positivo y devuelva la suma de sus dígitos.

Ejemplo de uso:
sumarDigitos(123) // Debería devolver 6
sumarDigitos(901) // Debería devolver 10

*/

function sumarDigitos(numero) {
    let parseNum = numero.toString();

    if (parseNum.length <= 0) {
        return;
    }

    return Number.parseInt(parseNum.splice(1,1)) + sumarDigitos(Number.parseInt(parseNum))


}

console.log(sumarDigitos(123));