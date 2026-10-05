<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear</title>
    <style>
        body{
            text-align: center;
            display:flex;
            flex-direction: column;
            font-family: cursive;
            font-weight: 800;
            background-color: azure;
            color: black;
        }
    </style>
</head>

<body>
<div class="formulario">
    <form action="../procesar.php" method="post">

        <label for="identificador">Identificador:</label>
        <input type="text" id="identificador" name="identificador">

        <label for="autor">Autor:</label>
        <input type="text" id="autor" name="autor">

        <label for="precio">Precio:</label>
        <input type="number" id="autor" name="precio">

    <button type="submit">Enviar</button>

    </form>
</div>

</section>
</body>

</html>
