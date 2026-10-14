// 1. Captura una excepción utilizando try-catch
let persona
try {
    console.log(persona.edad)
} catch {
    console.log("Ha habido un error");
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(persona.edad)
} catch {
    console.log("Ha habido otro error")
} finally {
    console.log("Finalmente ha habido otro error mas grande y se ha ejecutado el bloque finally")
}

// 3. Lanza una excepción genérica

function throwGenericError() {
    throw new Error()
}


//throwGenericError();

// 4. Crea una excepción personalizada

class customException extends Error {
    constructor(message) {
        super(message);
    }
}

// 5. Lanza una excepción personalizada

let a = 11;

if (a <= 10) {
    throw new customException();
}


// 6. Lanza varias excepciones según una lógica definida

let variable = true;

if (typeof variable === "string") {
    throw new TypeError("No puede ser un string, brother")
} else if (typeof variable === "number") {
    throw new SyntaxError("Error de sintaxis, por la cara")
} else {
    console.log("Todo ok")
}

// 7. Captura varias excepciones en un mismo try-catch
let example = 0;
let example2 = "Salva";


    console.log(example2.toUpperCase())





// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10