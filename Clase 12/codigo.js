// const edadUsuario = parseInt(prompt("Ingrese su edad"));

// let esMayorEdad = null;

// if(edad >= 18){
//     esMayorEdad = true
// }else{
//     esMayorEdad = false;
// }

// // Operador ternario

// esMayorEdad = (edadUsuario >= 18) ? true : false;
// console.log(esMayorEdad);
// Operador Logico OR
// FORMA 1
// const productosLS = localStorage.getItem("productos");
// let productos =[];

// if(productosLS !== null){
//     productos = JSON.parse(productosLS)
// }

// // FORMA 2

// let productos = JSON.parse(localStorage.getItem("productos"));

// if(productos === null){
//     productos = [];
// }

// console.log(productos);

// // FORMA 3 OPERADOR OR
// localStorage.setItem(
//   "productos",
//   JSON.stringify([
//     {
//       nombre: "Producto 1",
//       precio: 40,
//     },
//     {
//       nombre: "Producto 2",
//       precio: 20,
//     },
//   ])
// );
// let productos = JSON.parse(localStorage.getItem("productos")) || [];

// console.log(productos);

// // ACCESO CONDICIONAL A UN OBJETO

// const producto1 = {
//   nombre: "Lechuga",
//   precio: 20,
//   categoria: {
//     nombre: "Verduras",
//   }
// };

// const producto2 = {
//     nombre: "Yogurt",
//     precio: 30,
//     categoria: {
//       nombre: "Lacteos",
//     },
//   };

//   const producto3 = {
//     nombre: "Lentejas",
//     precio: 40,
//     categoria: null,
//   };

//   console.log(`El nombre de la categoria es ${producto3.categoria?.nombre || "La categoria no existe"}`);

// // DESESTRUCTURACION

// const producto1 = {
//   nombre: "Lechuga",
//   precio: 20,
//   categoria: {
//     nombre: "Verduras",
//     color: "Verde",
//     deposito: {
//       nombre: "Deposito 2",
//       stock: 20,
//     },
//   },
// };
// // Desestructuracion tradicional
//   const categoria = producto1.categoria;
//   const deposito = categoria.deposito

//   console.log(deposito);

// // Desestructuracion en JS

// const {nombre,categoria} = producto1;

// console.log(nombre);
// console.log(categoria);

// // Subdesestructuracion

// const {
//     nombre, categoria:{color}, categoria:{deposito:{stock}}

// } = producto1

// console.log(nombre);
// console.log(color);
// console.log(stock);

// Alias

// const {
//   nombre: nombreProducto,
//   categoria: {
//     color: colorCategoria,
//     deposito: { stock: stockDeposito },
//   },
// } = producto1;

// console.log(nombreProducto);
// console.log(stockDeposito);

// function mostrarStock({
//   categoria: {
//     nombre,
//     deposito: { stock },
//   },
// }) {
//   // const {
//   //     categoria : {
//   //         nombre,
//   //         deposito : {
//   //             stock
//   //         }
//   //     }
//   // } = producto;
//   console.log(`El stock de la categoria ${nombre} es ${stock}`);
// }
// mostrarStock(producto1);

// const botonsito = document.getElementById("botonsito");
// botonsito.addEventListener("click", ({target})=>{

//     console.log(target);
// })

const personas = [
  { nombre: "Fernando", edad: 25 },
  {
    nombre: "Alejandro",
    edad: 30,
  },
  {
    nombre: "Camila",
    edad: 20,
  },
];

const [a, , b] = personas;
console.log(a);
console.log(b);

// // Ejemplo desestructuracion de arrays

function calcularAumentoPrecio(producto) {
  let porcentaje = 0;
  let nuevoPrecio = 0;

  if (producto.categoria === "Verduras") {
    porcentaje = 25;
    nuevoPrecio = producto.precio + (porcentaje * producto.precio) / 100;
  }

  return [porcentaje, nuevoPrecio];
}

const producto1 = {
  nombre: "Lechuga",
  categoria: "Verduras",
  precio: 50,
};

const [porcentaje,nuevoPrecio] = calcularAumentoPrecio(producto1)

console.log(nuevoPrecio);
