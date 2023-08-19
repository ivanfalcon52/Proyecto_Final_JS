alert("Bienvenido al programa para calcular el valor de cada cuota a abonar del producto ofrecido en 12 cuotas sin interes");

const productos = [
    {nombre: "playstation 5", precio: 580000},
    {nombre: "playstation 4", precio: 200000},
    {nombre: "xbox one", precio: 250000},
    {nombre: "pc gamer", precio: 300000},
];

let nombre = prompt ("ingrese el producto: ");

while (nombre != "ESC") {
    const producto = productos.find((item) => item.nombre === nombre);

    if (producto) {
        let valorCuota = producto.precio/12;
        valorCuota = valorCuota.toFixed(2);
        alert (`El valor de cada cuota del producto es: ${valorCuota}`)
    } else {
            alert("producto no encontrado")
        }
        nombre = prompt ("ingrese el producto: "); 
}   

