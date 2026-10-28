// Arrays avanzados

// Métodos funcionales

// forEach
// El bucle tradicional recorre el array elemento por elemento y ejecuta una acción pero NO DEVUELVE NADA

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n * 2));

let ejemplo = numbers

// map (este sí devuelve cosas)

let doubled = numbers.map(element => element * 2);

console.log(doubled);



// filter
//Recorre el array y devuelve un nuevo array
// conservando solo los elementos que cumplen una condición

let impares = numbers.filter(element => element % 2 != 0)
console.log(impares);

// reduce
// Es un "acumulador" que recorre el array y lo procesa para llegar a un único valor final, o sea, solamente va a devolver un resultado


numbers.reduce((previo, actual) => previo + actual, 0)

console.log(numbers)
console.log(numbers.reduce((result, actual) => result + actual, 0));


// Ejercicio de práctica usa reduce para conseguir el número máximo de un  array

const prueba = numbers.reduce((result, actual) => actual >= result ? result = actual : result = result);


console.log(prueba)


// flat
// Aplanar un array

let nestedArray = [1, [2, [3, [4]]]]

let flatArray = nestedArray.flat(2)
console.log(nestedArray);
console.log(flatArray);


// flatMap
let phrases = ["Hola Mundo","Adios mundo"]

let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words)

