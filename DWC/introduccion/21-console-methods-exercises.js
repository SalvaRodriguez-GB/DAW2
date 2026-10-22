// 1. Crea un función que utilice error correctamente

function showError(string) {
  console.error(string)
}

showError("Error de procesamiento")

// 2. Crea una función que utilice warn correctamente

function showWarn(string) {
  console.warn(string)
}

showWarn("No puedes hacer eso")

// 3. Crea una función que utilice info correctamente

function showInfo(string) {
  console.info(string)
}

showInfo("Para tu información estás jodido")

// 4. Utiliza table

let objeto = {
  "name": "Salva",
  "age": 34,
  "job": "fullstack developer"
};

let arr = [
  [1234, 5678],
  [4545423]
]

console.table(objeto)
console.table(arr)

// 5. Utiliza group

console.group("letra canción reggaeton");

console.log("hola que tal");
console.log("soy el chico de las poesias");
console.log("tu fiel admirador");
console.log("y aunque no me conocías");

console.groupEnd();
// 6. Utiliza time

console.time("tiempo de ejecución bucle");
suma = 0;
for (let i = 0; i <= 100; i++) {
  suma += i;
}

console.log(suma);

console.timeEnd("tiempo de ejecución bucle");

// 7. Valida con assert si un número es positivo

let example = 0;

console.assert(example > 0, "El número debe ser mayor que 0 para que sea positivo")

// 8. Utiliza count

console.count("1");
console.count("1");
console.count("2");
console.count("1");
console.countReset("1");
console.count("1");
console.count("2");
console.count("2");




// 9. Utiliza trace

function funcA() {
  funcB();
}

function funcB() {
  funcC();
}

function funcC() {
  funcA();
}

console.trace(funcC());

// 10. Utiliza clear

console.clear();