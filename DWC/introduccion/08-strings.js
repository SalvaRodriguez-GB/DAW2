//String (cadenas de texto

// Concatenación

let name = "Salva";

let surname = "Rodríguez";

let fullName = name + " " + surname;

console.log("Hello, " + fullName);

//Longitud

console.log(fullName.length);

//Métodos comunes

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0));
console.log(fullName.indexOf("a"));
console.log(fullName.lastIndexOf("a"));
console.log(fullName.includes("Rodríguez"));
console.log(fullName.startsWith("Salva"));
console.log(fullName.endsWith("Rodríguez"));
console.log(fullName.replace("Rodríguez", "García"));
console.log(fullName.toLowerCase().includes("salva rodríguez"));

//Métodos de extracción

console.log(fullName.slice(0, 5));
console.log(fullName.substring(0, 5));
console.log(fullName.substr(0, 5));




let message = "Hola me llamo Salva";

let message2 = `hola soy salva
y estoy aprendiendo JavaScript ${fullName}`;

console.log(message2);