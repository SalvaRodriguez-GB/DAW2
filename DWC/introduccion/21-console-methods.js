// Console

// log

console.log("Â¡Hola, Javascript!")

// Es el mÃ©todo mÃ¡s utilizado para imprimir mensajes informativos generales
// o comprobar el valor de variables durante el desarrollo. No aplica ningÃºn filtro o color especial por defecto.


// error
// Se utiliza para notificar fallos o excepciones.


// Visualmente: En la consola del navegador se muestra resaltado en color rojo, 
// generalmente acompaÃ±ado de un icono de error (âŒ).

// Stack Trace: Si le pasas un objeto de tipo new Error(), 
// ademÃ¡s del mensaje mostrarÃ¡ la traza completa de llamadas (stack trace) para indicar exactamente en quÃ© archivo y 
// lÃ­nea ocurriÃ³ el problema.

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("ConexiÃ³n fallida."))

// warn

// Muestra avisos o advertencias sobre situaciones que no detienen la ejecuciÃ³n del programa, 
// pero que requieren atenciÃ³n (como el uso de librerÃ­as obsoletas o parÃ¡metros poco seguros).

// Visual: Se muestra en color amarillo o naranja con un icono de advertencia (âš ï¸).

console.warn("Este es un mensaje de advertencia")


// info
// Muestra mensajes de carÃ¡cter informativo.

// Diferencia con log: En la prÃ¡ctica es casi idÃ©ntico a console.log(), 
// pero en algunos entornos o navegadores incluye un icono de informaciÃ³n (â„¹ï¸) 
// o permite filtrar la consola especÃ­ficamente para ver solo los registros de tipo "Info".

console.info("Este es un mensaje de informaciÃ³n adicional")


// table

// Formatea y muestra datos estructurados (como arrays u objetos) en una tabla visual con filas y columnas.
//  Es mucho mÃ¡s cÃ³modo de leer que un console.log() tradicional.

// Con arrays bidimensionales (matriz):
// Usa los Ã­ndices numÃ©ricos como encabezados de columna (0, 1).


let data = [
    ["1DAW", 20],
    ["2DAW", 70]
]

console.table(data)

data = [
    { clase: "1DAW", alumnos: 20 },
    { clase: "2DAW", alumnos: 7 }
]

console.table(data);



// group

// Sirven para agrupar y organizar visualmente los mensajes en la consola de desarrollador 
// mediante sangrÃ­as y bloques desplegables.

console.group("1DAW")
// implementamos cÃ³digo y sigue agrupando
console.log("tiene 20 alumnos, algunos repetidores")
// implementamos cÃ³digo y sigue agrupando
console.log("la media de edad es de 19 aÃ±os")
console.groupEnd() // para terminar


// Otro ejemplo
console.group("2DAW")
console.log("tiene 7 alumnos, ningÃºn repetidor")
console.log("la media de edad es de 22 aÃ±os")
console.groupEnd()



// time

console.time("Tiempo de ejecuciÃ³n 1")

for (let i = 0; i < 1000000000; i++) {

}
console.timeEnd("Tiempo de ejecuciÃ³n 1")

console.time("Tiempo de ejecuciÃ³n 2")
for (let i = 0; i < 1000000000; i++) {

}

console.timeEnd("Tiempo de ejecuciÃ³n 2")


// assert

/*
AserciÃ³n viene de afirmaciÃ³n: es una declaraciÃ³n o 
condiciÃ³n que el programador asume que siempre es verdadera en un punto concreto del cÃ³digo.
console.assert() evalÃºa una condiciÃ³n lÃ³gica y muestra un mensaje de error Ãºnicamente si la condiciÃ³n es falsa. 
Si la condiciÃ³n es verdadera, no hace nada y el cÃ³digo continÃºa en silencio.

CaracterÃ­sticas clave de console.assert()
Solo actÃºa ante el fallo: Sirve para validar suposiciones en tu cÃ³digo. 
Es equivalente a escribir un if (!condicion) console.error(...).

No detiene la ejecuciÃ³n: A diferencia de las afirmaciones (assertions) en otros lenguajes de programaciÃ³n o 
entornos de pruebas, console.assert en JavaScript no interrumpe la ejecuciÃ³n del programa ni lanza una excepciÃ³n; 
solo imprime la alerta en la consola.

Uso principal: Se utiliza durante la etapa de desarrollo y depuraciÃ³n para comprobar rÃ¡pidamente que ciertas variables
 o estados del programa tengan los valores esperados.

*/


let age = 18

console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count


console.count("Click")
console.count("Clic")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

for (let i = 0; i < 10; i++) {
    console.count("Click")
}
console.countReset("Click")


// trace

// Muestra una traza de la pila de llamadas (stack trace).
// Revela la ruta exacta de funciones por las que ha pasado el programa

function funcA() {
    funcB()
}


function funcB() {
    funcC()
}

function funcC() {
    console.trace("Seguimos la ejecuciÃ³n")
}


funcA()


// clear


/*

Borra todos los mensajes e historial impresos previamente en la consola.

Detalles importantes sobre su comportamiento:
En el navegador: Limpia la pantalla dejando la consola vacÃ­a o mostrando un aviso informativo como
"Console was cleared" (La consola ha sido limpiada).

En Node.js / Terminal: Limpia la ventana de la terminal de comandos donde se estÃ© ejecutando el script.

Un detalle a tener en cuenta (Ajustes del navegador)
En las herramientas de desarrollo de navegadores como Chrome o Firefox, 
existe una opciÃ³n en la configuraciÃ³n de la consola llamada "Preserve log" (Conservar registro).

Si esa casilla estÃ¡ activada, el navegador ignorarÃ¡ la llamada a console.clear() 
para evitar que un script borre informaciÃ³n importante mientras depuras tu cÃ³digo.
*/


console.clear()

