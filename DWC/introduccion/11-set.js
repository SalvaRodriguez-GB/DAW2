// Conjuntos

let conjunto = new Set(["Salva","Esperanza","Esperancita"]);
console.log(conjunto)

//Métodos comunes

//add y delete

conjunto.add("DAW");
console.log(conjunto)

conjunto.delete("Esperancita")
console.log(conjunto)

conjunto.add("DAM")
console.log(conjunto)
// añadir más de un elemento a la vez
conjunto.add("Ingeniería informática").add("Ingeniería en sistemas").add("Telecomunicaciones")

console.log(conjunto)

console.log("PRUEBA DELETE")
conjunto.delete("Telecomunicaciones", "DAM")
console.log(conjunto)

// has

console.log(conjunto.has("DAW"))
console.log(conjunto.has("Esperancita"))


// 


