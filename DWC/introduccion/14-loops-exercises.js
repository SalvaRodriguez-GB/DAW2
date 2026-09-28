// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los nnúmeros del 1 al 100 y muestre el resultado

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`El resultado de la suma es ${suma}`)

//3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//4. Dado un array de nopmbres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Salva", "Esperanza", "Falillo"]

for (let nombre of nombres) {
    console.log(nombre)
}



//5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocales = ["a", "e", "i", "o", "u"]
let texto = "Hola que tal, me llamo Salva"
let contador = 0;
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contador++;
    }
}

console.log(contador)

//6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5, 6]
let resultado = 1;
for (let numero of numeros) {
    resultado *= numero
}
console.log(resultado)



// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = "Hola soy Salva"
let cadenaNueva = ''
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaNueva += cadena[i]
}
console.log(cadenaNueva)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
//0, 1, 1, 2, 3, 5, 8, 13, 21 y 34
function fibonacci(cantidad) {
    let sucesion = [0, 1];
    for (let i = 1; i <= cantidad - 2; i++) {

        sucesion.push(sucesion[i] + sucesion[i - 1])

    }
    console.log(sucesion)
}

fibonacci(10)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solos los mayores a 10

let arrayNumerico = [12, 1, 3, 14, 20, 4, 5, 69]

function genArray(array) {
    let i = 0;
    let newArray = [];

    while (i < array.length) {
        if (array[i] > 10)
            newArray.push(array[i]);
        i++;
    }
    return newArray;
}
let arrayGen = genArray(arrayNumerico);
console.log(arrayGen)