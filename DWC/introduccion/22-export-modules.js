// EXportación de módulos

// Propiedades

export const PI = 3.1416

export let name = "Salva"



// Funciones

export function add(a, b) {
    return a + b;
}

console.log(add(5, 4))


// Clases

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return (2 * Math.PI * this.radius)
    }

}



// Exportación por defecto ( Sólo puede haber una por programa)

export default function substract(a, b) {
    return a - b;
}