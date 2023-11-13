// console.log(document);

// let tituloPrincipal =  document.getElementById("titulo-principal")
// console.log(tituloPrincipal);

// let paises = document.getElementsByClassName("paises");
// console.log(paises);
// console.log(paises[1].innerHTML);

// for(const pais of paises){
//     console.log(pais.innerHTML);
// }

// // Inner Text
// let titulo = document.getElementById("titulo2")
// console.log(titulo.innerText);

// // Inner HTML

// let contenedor = document.getElementById("container");
// contenedor.innerHTML = "<h2>Hola Mundo!</h2><p>Lorem ipsum perrito</p>";
// // Practica poco usada.

// console.log(contenedor);
// // className

// contenedor.className = "container row"
// contenedor.classname += " nuevaClase"

//Creacion de elementos

// let parrafo = document.createElement("p");
// parrafo.innerHTML="<h3>Hola Mundo h3</h3>";
// document.body.append(parrafo);

// let parrafo2 = document.createElement("li");
// parrafo2.innerHTML = "CL";
// let listaPaises = document.getElementById("listaPaises");
// listaPaises.append(parrafo2);
// console.log(listaPaises.innerText);

// // Eliminar elementos

// let parrafo3 = document.getElementById("parrafoEliminar");
// parrafo3.remove();

// let paises = document.getElementsByClassName("paises");
// paises[0].remove();

// // Obtener datos desde inputs o agregarselos

// document.getElementById("nombre").value = "HOMERO";

// let nombre = document.getElementById("nombre").value = "HOMERO";

// document.getElementById("edad").value = "39";

// // Ejemplo Aplicado: Creando opciones desde un array.

// let padre = document.getElementById("personas");
// let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];

// for(const persona of personas){
//     let li = document.createElement("li");
//     li.innerHTML = persona;
//     padre.appendChild(li);
// }

// // Plantillas literales

// let producto = {
//     id: 1, nombre: "Arroz", precio: 125,
// };
// let conctaenado = "ID: " + producto.id + " - Producto: " + producto.nombre + "- $: " + producto.precio;

// let plantilla = `ID: ${producto.id} - Producto ${producto.nombre} - Precio: ${producto.precio}`
// console.log(plantilla);

// // Plantillas literales e InnerHTML

// let producto = {
//   id: 1,
//   nombre: "Arroz",
//   precio: 125,
// };
// let contenedor = document.createElement("div");

// contenedor.innerHTML = `<h3> ID: ${producto.id}</h3> <p> Producto: ${producto.nombre}</p> <b> $: ${producto.precio}</b> `;

// document.body.appendChild(contenedor);

// // Ejemplo Aplicado: Creando elementos desde objetos

// const productos =[
//     {id: 1, nombre:"Arroz", precio: 125},
//     {id: 2, nombre:"Fideos", precio: 70},
//     {id: 3, nombre: "Pan", precio: 50},
//     {id: 4, nombre: "Flan", precio: 100},
// ];

// for (const producto of productos){
//     let contenedor = document.createElement("div");
//     contenedor.innerHTML = `<h3> ID: ${producto.id}</h3> <p> Producto: ${producto.nombre}</p> <b> $: ${producto.precio}</b>`

//     document.body.appendChild(contenedor);

// }

// // QuerySelector

let parrafo = document.querySelector("#contenedor p");
let contenedor = document.querySelector("#contenedor");
let parrafos = document.querySelectorAll("#contenedor");

console.log(parrafos);
console.log(parrafo.innerHTML);