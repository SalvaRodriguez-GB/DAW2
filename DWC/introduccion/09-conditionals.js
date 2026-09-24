//if, else if, else

let age = 90;

if (age <= 40) {
  console.log("Eres todavía joven");
} else if (age == 41) {
  console.log("Estás en la mierda");
} else {
  console.log("Muerto");
}

switch (true) {
  case age > 89: {
    console.log("funciona este case");
    break;
  }
  case age < 89: {
    console.log("funciona bomba");
    break;
  }
  default: {
    console.log("Ninguno de los casos");
  }
}
