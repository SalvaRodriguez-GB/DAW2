<?php

class Empleado {
    public $id;

    public $nombre;

    public $apellido;

    public function getNombreCompleto() {
        return "$this->nombre $this->apellido";
    }
}

$alice = new Empleado();

$alice-> id = 1;
$alice -> nombre = "Alice";
$alice ->apellido = "Monroe";

$alice.getNombreCompleto();