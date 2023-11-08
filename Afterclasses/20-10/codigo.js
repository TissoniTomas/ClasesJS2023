// function suma(numero1, numero2) {
//   return numero1 + numero2;
// }
// // Funcion anonima
// const sumaAnon = function (numero1, numero2) {
//   return numero1 + numero2;
// };
// const suma = (numero1, numero2) => {
//   return numero1 + numero2;
// }; // funcion flecha que genera return implicito para operaciones sencillas
/**
 * 3) Dados los siguientes arrays
 * a) [1, 3, 5, 6, 7, 9]
 * b) [1, 2, 3, 4, 7, 8]
 * Generar un nuevo array con la interseccion de los elementos
 */

// const array1 = [1, 3, 5, 6, 7, 9];
// // Interseccion = [1, 3, 7]
// const array2 = [1, 2, 3, 4, 7, 8];
// const interseccion = [];

// for(const numeros of array1){
//     if(array2.includes(numeros)){
//         interseccion.push(numeros)
//     }
// }
// console.log(interseccion);

/**
 * 4) Idem ejercicio anterior pero en vez de la interseccion, generar un nuevo array con la union de los elementos ( sin repeticion)
 */
// Array union = [1,3,5,6,7,9,2,4,8]

// Forma 1 CONCAT

const array1 = [1, 3, 5, 6, 7, 9];
// Interseccion = [1, 3, 7]
const array2 = [1, 2, 3, 4, 7, 8];
const union = [];

const concatenacion = array1.concat(array2);

for (const elemento of concatenacion) {
  if (!union.includes(elemento)) {
    union.push(elemento);
  }
}
console.log(union);

/**
 *
 *  FUNCIONES DE ORDEN SUPERIOR
 *
 */

// Funciones
function calcularEnvioLegumbres(precio) {
  return 100 + precio * 0.05;
}
function calcularEnvioLacteos(precio) {
  let costo = 50;
  if (precio > 100) {
    costo += 10;
  } else {
    costo += 5;
  }
  return costo;
}

function calcularEnvioVerduras(precio) {
  return precio * 0.3;
}

// function calcularEnvio(producto) {
//   let costo = 0;
//   if (producto.categoria === "Legumbres") {
//     costo = calcularEnvioLegumbres(producto.precio);
//   } else if (producto.categoria === "Lacteos") {
//     costo = calcularEnvioLacteos(producto.precio);
//   } else if (producto.categoria === "Verduras") {
//     costo = calcularEnvioVerduras(producto.precio);
//   }

//   return costo;
// }

function calcularEnvio(producto, funcionQueCalculaElEnvio) {}

class Producto {
  constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}

const producto1 = new Producto("Lentejas", "Legumbres", 200);
const producto2 = new Producto("Yogurt", "Lacteos", 300);
const producto3 = new Producto("Zanahoria", "Verduras", 100);

// const costoLentejas = calcularEnvio(producto1);
// const costoYogurt = calcularEnvio(producto2);
// const costoZanahoria = calcularEnvio(producto3);

const costoLentejas = calcularEnvio(producto1, calcularEnvioLegumbres);
const costoYogurt = calcularEnvio(producto2, calcularEnvioLacteos);
const costoZanahoria = calcularEnvio(producto3, calcularEnvioVerduras);

const numeros = [1, 2, 3, 4];

// forEach

numeros.forEach((el) => {
  console.log(el * 2);
});

// numeros.forEach((elemento) =>{
//   console.log("Tu mama se pone en " + elemento);
// })

// Reduce

const carrito = [
  {
   nombre: "Pepino",
  precio: 200,
},
  {
    nombre:"Yogurt",
precio:100,
},
{
  nombre:"Lechuga",
  precio:300,
}


];

// Forma sin reduce
// let total =0;
// carrito.forEach((producto)=>{
//   total +=producto.precio;
// });

// console.log(total);

const total = carrito.reduce((acc,producto)=>{
  acc += producto.precio
  return acc;

}, 0)

console.log(total);

// Agregar campo con reduce
const carritoConCostoDeEnvio = carrito.reduce((acc, producto) =>{
  producto.costoDeEnvio= (producto.precio * 0.35);
  acc.push(producto);
  return acc;
}, []);
