// Función currificada

function multiplicar(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

const cuentas = multiplicar(1)(2)(3);
console.log(cuentas)




function createCounter(valorInicial) {
    let valorActual = valorInicial;

    return {
        increment() {
            valorActual++;
            return valorActual;
        },

        decrement() {
            valorActual--;
            return valorActual;
        },
        getValue() {
            return valorActual;
        }
    }
}

const cuenta = createCounter(10);
const cuenta2 = createCounter(0);

console.log(cuenta.increment());
console.log(cuenta2.increment());
console.log(cuenta.decrement());
console.log(cuenta2.decrement());
console.log(cuenta.getValue());
console.log(cuenta2.getValue());


