// 1. Exporta una función

export function sum(a, b) {
    return a + b;
}

// 2. Exporta una constante

    export const CONSTANTE = "Constante"

// 3. Exporta una clase

export class Clase {
    constructor(asignatura,alumnos) {
        this.asignatura = asignatura;
        this.alumnos = alumnos
    }

    greeting() {
        console.log(`Hola esta clase es de ${this.asignatura}`)
    }
}

// 4. Importa una función

import {sum} from "."


// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior