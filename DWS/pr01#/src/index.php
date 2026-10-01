<?php
//Cómo inicializar un array en PHP

//Arrays clásicos de toda la vida
$lA =[];
$lB = [1,2,3,4,5];
$lC = array();
$lD= array(4,5,6,7,8,"España"); // Pueden tener valores de diferentes tipos


//Arrays asociativos:
//Son diccionarios o comúnmente conocidos en otros lenguajes como "maps"
$lE = [
    "España" => "Madrid",
    "Francia" => "París",
    "Alemania" => "Berlín"
];

// Creo una función para imprimir resultados o variables

function show($v) {
    echo "<br/>";
    print_r($v);
    echo"<br/>";
}
echo $lE['Alemania']; // Imprimir un valor a partir de una clave

//Me cargo un elemento del array:
unset($lB[2]);
show($lB);



echo $lE['Alemania'];
print_r($lE);
var_dump($lE);

//Qué pasa si tengo un array tipo asociativo y quiero añadirle un elemento nuevo

$lE["Portugal"] = 87;
show($lE);

echo "El elemento 'España' es {$lE["España"]}";


// Bucle for

for ($i =0; $i < count($lD); $i++) {
    show($lD[$i]);
}

// Bucle foreach
foreach ($lB as $key => $value) {
show($key);
show($value);
}

// Métodos o funciones para arrays
// array_unshift(array,valoreS)
echo array_unshift($lB,7,9); // Se ha introducido dentro del array POR EL PRINCIPIO, empujando todo lo que había anteriormente hacia el final del array
show($lB);

//array_shift()
show($lB);
array_shift($lB); // Expulsa el primer elemento del array y lo devuelve
show($lB);

//array_push()

$elemento = array_push($lB,99);
show($elemento);
show($lB);

//array_pop() no me ha dado tiempo, *buscar en internet*

// array_reverse()
show($lB);
$lV = array_reverse($lB);
show($lV);

//shuffle
$lZ = shuffle($lB);
show($lB);



?>