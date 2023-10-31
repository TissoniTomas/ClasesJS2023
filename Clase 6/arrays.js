// Arrays

// const nombresdeProductos = ["Arroz", "Leche", "Yogurt", "Fideos", "Zanahoria"];

// const preciosDeProductos = [100, 200, 300, 400];

// Acceder a los elementos individualmente
// console.log(nombresdeProductos[1]);
// console.log(preciosDeProductos[2]);

// Reccorer los nombres de los productos

// for (let i = 0; i < 4; i ++){
//     console.log(nombresdeProductos[i]);

// }

// Propiedad LENGHT
// for (let i = 0; i < nombresdeProductos.length; i ++){
//     console.log(nombresdeProductos[i]);
// }

// // Agregar elementos al array

// // Agregar al final
// nombresdeProductos.push("Azucar");
// nombresdeProductos.push("Cereales");
// console.log(nombresdeProductos);

// // Agregar al principio
// nombresdeProductos.unshift("Papa");
// console.log(nombresdeProductos);

// // Quitar los elementos

// nombresdeProductos.shift();

// console.log(nombresdeProductos);

// nombresdeProductos.pop();
// console.log(nombresdeProductos);

// Eliminar varios elementos

// const nombresDeProductos = [
//     "Arroz", "Zanahoria", "Papa", "Huevo", "Yogurt",
// ]

// nombresDeProductos.splice(0,3);
// console.log(nombresDeProductos);

// Mostrar elementos como string

// const listaDeProductos = nombresDeProductos.join(", ");

// console.log(listaDeProductos);

// // Metodo Concat - Combina dos arrays en un nuevo

// const listaDeProductos2 = [
//     "Cereales",
//     "Azucar",
// ]

//  const combinacionListaProductos = nombresDeProductos.concat(listaDeProductos2);

//  console.log(combinacionListaProductos);

// // Metodo Slice - Obtener copia del array

// const nombresDeProductos = [
//         "Arroz", "Zanahoria", "Papa", "Huevo", "Yogurt",
//     ]

//     const copiaProductos = nombresDeProductos.slice(1,4);

//     console.log(copiaProductos);

// // Obtener indice donde se encuentra el elemento

// const nombresDeProductos = [
//         "Arroz", "Zanahoria", "Papa", "Huevo", "Yogurt",
//     ]

//     const indiceDeHuevo = nombresDeProductos.indexOf("Huevo");

//     console.log(indiceDeHuevo);

// // Chequear si existe el elemento sin importar el indice de este
// const nombresDeProductos = [
//     "Arroz", "Zanahoria", "Papa", "Huevo", "Yogurt",
// ]

// if (nombresDeProductos.includes("Zanahoria")){
//     console.log(("Se encuentra Zanahoria"));
// }

// // Reverse

// const nombresDeProductos = [
//     "Arroz", "Albahaca", "Zanahoria", "Papa", "Huevo", "Yogurt",
// ]

// nombresDeProductos.reverse();
// console.log(nombresDeProductos);

// // FOR OF

//  const nombresDeProductos = [
//     "Arroz", "Albahaca", "Zanahoria", "Papa", "Huevo", "Yogurt",
// ]

// for (const nombreDeProducto of  nombresDeProductos){
//     console.log(nombreDeProducto);
// }

/** EJEMPLO COMPLETO
    
     */

// Objetos
class Producto {

    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

}

// Funciones

function obtenerProducto(nombreDeProducto) {

    let encontrado = false;

    for(const producto of listaDeProductos) {

        // Si la propiedad nombre del objeto, es igual al nombre que paso por parámetro
        if(producto.nombre === nombreDeProducto) {
            encontrado = producto;
            break;
        }

    }

    return encontrado;
}

function agregarUnProducto() {

    // Le pido el nombre del producto al usuario
    let productoAIngresar = prompt("Ingrese el nombre del producto que quiere agregar.");

    // Mientras no obtenga un producto con el nombre que ingresó el usuario, se lo vuelvo a pedir
    let producto = obtenerProducto(productoAIngresar);
    while (!producto) {
        productoAIngresar = prompt("Ingrese un nombre válido de un producto");
        producto = obtenerProducto(productoAIngresar);
    }

    // Pedirle el stock
    let stock = parseInt(prompt("Ingrese el stock que quiere agregar."));

    while (stock <= 0 || stock > producto.stock) {
        stock = parseInt(prompt("Ingrese un stock válido (Mayor a 0)"));
    }

    // Una vez que tenemos el nombre y el stock del producto a agregar, lo cargamos al carrito
    carrito.push({
        nombre: productoAIngresar,
        cantidad: stock,
    });

    alert("PRODUCTO AGREGADO CON ÉXITO :D");

}

function finalizarCompra() {

    let mensaje = "Los productos que agregó son: \n";

    for(const productoAgregadoAlCarrito of carrito) {

        mensaje += productoAgregadoAlCarrito.nombre + " - Cantidad: " + productoAgregadoAlCarrito.cantidad + "\n";
 
    }

    alert(mensaje);

}

// Inicio del programa
const listaDeProductos = [
    new Producto("Arroz", 50, 5),
    new Producto("Albahaca", 25, 10),
    new Producto("Huevo", 35, 2),
    new Producto("Papa", 20, 30),
    new Producto("Yogurt", 75, 2),
];
const carrito = [];

let operacion = prompt("Ingrese la operación que quiere realizar: 1- Agregar un producto / 2- Finalizar la compra / 0- Salir");

while (operacion !== "0") {

    // Chequeamos que operación ingresó
    switch(operacion) {

        case "1":

            agregarUnProducto();

            break;

        case "2":

            finalizarCompra();

            break;

        default:

            alert("OPCIÓN INCORRECTA");
            break;
    }

    // Volvemos a solicitar la operación
    operacion = prompt("Ingrese la operación que quiere realizar: 1- Agregar un producto / 2- Finalizar la compra / 0- Salir");
}