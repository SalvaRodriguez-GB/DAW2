//Loops

for (let i = 0; i < 10; i++) {
    console.log(`Hola ${i} `)
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numbers.length; i++) {
    console.log(`${i}`)
}


// WHILE

let x = 0

while (x < 10) {
    console.log(x)
    x++;
}


//DO WHILE

let y = 0

do {
    console.log(y)
    y++;
} while (y < 20)


//FOR OF


const arraySample = [1, 2, 3]
for (let ejemplillo of arraySample) {
    console.log(ejemplillo)
}


console.log("Ejemplo iterando set")
const abcSet = new Set(arraySample)

for (let x of abcSet) {
    console.log(x)
}


//break y continue

for (let i = 0; i < 5; i++) {
    if (i == 4) {
        console.log("Quieto parao")
        break;
    }
}

