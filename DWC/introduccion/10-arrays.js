// Arrays

let array = [];

let array2 = ["salva", "espe"];

let fruits = ["banana", "watermelon", "lemon", "orange", "peach"];

console.log(array2[1]);

array2.push("Esperancita");

console.log(array2);

array2.pop();
console.log(array2);

array2.toReversed();
console.log(array2);

console.log(array2[array2.length - 1]);

// Push y Pop

fruits.push("mango");

console.log(fruits);

fruits.pop();
console.log(fruits);

//Método Splice()

fruits.splice(0, 1);
console.log(fruits);


// Con splice podemos por ejemplo eliminar 3 elemenos y añadir 2 elementos


let array3 = ["Yo","Estudio","JavaScript","Java","React","Angular"]
array3.splice(2,3,"tu","estudias","MierdaScript")
console.log(array3)

// Podemos solamente añadir elementos en la posición que tu quieras

array3.splice(3,0,"YoOoOoO")
array3 = console.log(array3)



let orderedArray = array3.sort()
console.log(orderedArray)





