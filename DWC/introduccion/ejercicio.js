// Crea una función que le entre como parámetro un string y devuelva el número de vocales


const vocales = function cuantasVocales(string) {
    let nVocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (nVocales.includes(string[i])) {
            contador++;
        }
    }
    return contador;
}

let texto = "hola que tal"

console.log(vocales(texto));
