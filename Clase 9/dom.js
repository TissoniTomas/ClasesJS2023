// console.log(document);

// let tituloPrincipal =  document.getElementById("titulo-principal")
// console.log(tituloPrincipal);

// let paises = document.getElementsByClassName("paises");
// console.log(paises);
// console.log(paises[1].innerHTML);

// for(const pais of paises){
//     console.log(pais.innerHTML);
// }

// Inner Text
let titulo = document.getElementById("titulo2")
console.log(titulo.innerText);

// Inner HTML

let contenedor = document.getElementById("container");
contenedor.innerHTML = "<h2>Hola Mundo!</h2><p>Lorem ipsum perrito</p>";
// Practica poco usada.


console.log(contenedor);
// className

contenedor.className = "container row"

//Creacion de elementos

let parrafo = document.createElement("p");
parrafo.innerHTML="<h3>Hola Mundo h3</h3>";
document.body.append(parrafo);