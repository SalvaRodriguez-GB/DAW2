<?php

//Uso de trait

trait A
{
    public function sayHello()
    {
        echo "Hola desde A\n";
    }
}
    trait B {
        public function sayHello() {
            echo "Hola desde B\n";
        }

}

class Cuenta {
    use A;


    public function __construct(public float $saldo = 0) {
        $this->saldo = $saldo;
    }

    /*
     * Podría  hacerlo así tambien
     * public function __construct(public $saldo = 0) {
     * $this->saldo = $saldo
     * }
     *
     */
    //se puede añadir readonly a una propiedad para que solamente sea de lectura y no se pueda modificar de ninguna manera

    public function ingresar($cantidad = 0): object {
        $this->saldo += $cantidad;
        return $this;
    }

    static $n = 0;
}


$cuenta = new Cuenta(25);

$cuenta -> ingresar(100)
    -> ingresar(50)
    -> ingresar(1000)
    -> ingresar(25);

echo $cuenta->saldo;
$cuenta->sayHello();

?>