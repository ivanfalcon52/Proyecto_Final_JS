alert("Bienvenido al programa para calcular el valor de las cuotas a abonar de su producto");

let producto = prompt ("ingrese el producto: ");

if (producto === "playstation 5") {
    producto = 580000;
} else if (producto === "playstation 4") {
    producto = 200000;
} else if (producto === "xbox one") {
    producto = 250000;
} else if (producto === "pc gamer") {
    producto = 300000;
} else {
    alert ("el valor ingresado no es valido")
    producto = prompt ("ingrese el producto")
}

const DoceSinInteres = x => x / 12;

let valorCuota= DoceSinInteres (producto);
alert (`El valor de cada cuota del producto es: ${valorCuota}`);












