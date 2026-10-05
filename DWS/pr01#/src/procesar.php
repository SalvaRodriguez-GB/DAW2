<?php

$libro = [];

    $libro = [
    "identificador" => filter_input(INPUT_POST, 'identificador', FILTER_SANITIZE_SPECIAL_CHARS),
    "autor" => filter_input(INPUT_POST,'autor', FILTER_SANITIZE_SPECIAL_CHARS),
    "precio" => filter_input(INPUT_POST,'precio', FILTER_VALIDATE_FLOAT),
];

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Resultado</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            background-color: #f2f2f2;
        }

        .resultado {
            background-color: white;
            width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #FFFFFF;
        }
    </style>
</head>

<body>

<div class="resultado">
    <h2>Datos del libro</h2>

    <p>Identificador: <?= $libro["identificador"] ?></p>
    <p>Autor: <?= $libro["autor"] ?></p>
    <p>Precio: <?= $libro["precio"] ?> €</p>
</div>

</body>

</html>