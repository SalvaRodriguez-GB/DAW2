<?php

declare(strict_types=1);


    function crearLibro($idLibro,$titulo, $autor, $precio) :array {
        $libro["id"] = $idLibro;
        $libro["titulo"] = $titulo;
        $libro["autor"] = $autor;
        $libro["precio"] = $precio;
        return $libro;


    }
    function getId(array $libro):int {
        return $libro["id"];
}
function setId($array, $idLibro) {
        $libro["id"] = $idLibro;
}
function getTitulo(array $libro) {
        return $libro["titulo"];
    }

    function getAutor(array $libro) {
        return $libro["autor"];
    }

    function setAutor(array $libro, string $autor) {
        $libro["autor"] = $autor;
    }

    function getPrecio(array $libro) {
        return $libro["precio"];
    }
    function setPrecio(array $libro, string $precio) {
        $libro["precio"] = $precio;
    }
