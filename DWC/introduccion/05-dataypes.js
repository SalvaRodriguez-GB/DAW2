// Tipos de datos primitivos

//Cadenas de texto (string)
let cadena = "Hola, JavaScript";
console.log(cadena);
let cadena2 =`Hola, ${cadena}`;
console.log(cadena2);

// Números (number)
let numero = 5;
console.log(numero);

// Booleanos (boolean)
let esVerdadero = true;
let esFalso = false;
console.log(esVerdadero);
console.log(esFalso);

// Undefined
let indefinido;
console.log(indefinido);

// Null
let nulo = null;
console.log(nulo);

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt);
console.log(bigInt2);

// Symbol
let simbolo = Symbol("simbolo");
console.log(simbolo);

//Mostrando los tipos de datos con typeof
console.log(typeof cadena);
console.log(typeof numero);
console.log(typeof esVerdadero);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof bigInt);
console.log(typeof simbolo);    


