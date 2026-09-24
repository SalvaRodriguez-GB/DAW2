// 1. Crea un array que almacene cinco animales

let animals = ["Vaca","Perro","Gato","Cocodrilo","Chimpancé"]

console.log(animals)
for (let animal of animals) {
    console.log(animal)
}


// 2. Añade dos más. Uno al principio y otro al final

animals.push("Ballena")
animals.splice(0,0,"Tigre")

console.log(animals)
// 3. Elimina el que se encuentra en tercera posición

animals.splice(2,1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["Titanic","El silencio de los corderos", "Padre rico padre pobre", "Los pilares de la Tierra","Don Quijote"])

console.log(libros)

// 5. Añade dos más. Uno de ellos repetido

libros.add("American Psycho")
libros.add("Titanic")

for(let libro of libros) {
    console.log(libro)
}

// 6. Elimina uno concreto a tu elección

libros.delete("Titanic")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    ["Enero", 1],
    ["Febrero",2],
    ["Marzo",3],
    ["Abril",4],
    ["Mayo",5],
    ["Junio",6],
    ["Julio",7],
    ["Agosto",8],
    ["Septiembre",9],
    ["Octubre",10],
    ["Noviembre",11],
    ["Diciembre",12],


])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map