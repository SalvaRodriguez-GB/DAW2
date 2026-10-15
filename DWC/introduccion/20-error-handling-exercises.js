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

try {
    if (!Number.isInteger(example2)) {
        throw new TypeError("The value is not an integer");
    }

    if (typeof example2 !== "boolean") {
        throw new SyntaxError("The value is not a boolean");
    }

    console.log(example.toUpperCase());

} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError:", error.message);
    } else if (error instanceof SyntaxError) {
        console.log("SyntaxError:", error.message);
    }
}





// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const values = ["3.14", "Salva", "8.5", true, "12"];

for (const value of values) {
    try {
        const result = parseFloat(value);

        if (Number.isNaN(result)) {
            throw new TypeError(`Cannot convert ${value} to a float`);
        }

        console.log(result);

    } catch (error) {
        console.log(error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropertyError extends Error {
    constructor(message) {
        super(message);
        this.name = "PropertyError";
    }
}

function checkProperty(object, property) {
    if (!Object.hasOwn(object, property)) {
        throw new PropertyError(`Property ${property} does not exist`);
    }

    return true;
}

try {
    console.log(checkProperty({ name: "Salva" }, "age"));
} catch (error) {
    console.log(error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(operation) {
    for (let attempt = 1; attempt <= 10; attempt++) {
        try {
            return operation();
        } catch (error) {
            console.log(`Attempt ${attempt}: ${error.message}`);
        }
    }

    throw new Error("Operation failed after 10 attempts");
}

function randomOperation() {
    if (Math.random() < 0.8) {
        throw new Error("Random failure");
    }

    return "Success!";
}

try {
    console.log(retryOperation(randomOperation));
} catch (error) {
    console.log(error.message);
}