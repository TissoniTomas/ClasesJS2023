// Metodo -> localStorage.setItem(clave,valor);
// Clave -> Nombre para identificar el elemento
// Valor -> Valor/Contenido del elemento

// let guardarLS = localStorage.setItem("BienvenidaCoder", "¡Hola Coder!");
// localStorage.setItem("Bienvenida", "Hola Coder2");
// localStorage.setItem("esValido", true);
// localStorage.setItem("unNumero", 20);

// let mensaje = localStorage.getItem("BienvenidaCoder");
// let bandera = localStorage.getItem("esValido");
// let numero = localStorage.getItem("unNumero");

// console.log(mensaje);
// console.log(bandera);
// console.log(numero);

// Sessionstorage

// sessionStorage.setItem("Seleccionados",[1,2,3]);
// sessionStorage.setItem("esValido", false);
// sessionStorage.setItem("email", "info@email.com");

// let lista = sessionStorage.getItem("Seleccionados").split(",");
// let bandera = (sessionStorage.getItem("esValido") == "true");
// let email = sessionStorage.getItem("email");

// console.log(typeof lista);
// console.log(typeof bandera);
// console.log(typeof email);

// for (let i = 0; i < sessionStorage.length; i ++){
//    let clave = localStorage. key(i);
//    console.log("Clave " + clave);
//    console.log("Valor " + localStorage.getItem(clave));
// }

// sessionStorage.clear(); //Borra el storage actual

// sessionStorage.removeItem("esValido"); // Borra solo el valor seleccionado
 
// const producto1 = {id: 2, producto: "Arroz"};
// localStorage.setItem("producto1",producto1);

// const producto1 = {id: 2 , producto:"Arroz"};
// const enJSON = JSON.stringify(producto1);

// console.log(enJSON);
// console.log(typeof producto1);
// console.log(typeof enJSON);

// localStorage.setItem("producto1", enJSON);

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto1.id);

// const productos = [{id: 1, producto: "Arroz", precio: 125,},
// {id: 2, producto: "Fideos", precio: 70,},
// {id: 3, producto: "Pan", precio: 50,},
// {id: 4, producto: "FlanArroz", precio: 100,},
// ];

// const guardarLocal = (clave,valor) =>{
//     localStorage.setItem(clave,valor)
//  }

// // Almacenar producto por producto
//  for(const producto of productos){
//     guardarLocal(producto.id, JSON.stringify(producto));

// }

// // O Almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

// class Producto {
//     constructor(obj){
//         this.nombre = obj.producto.toUpperCase();
//         this.precio = parseFloat(obj.precio);

//     }
//     sumaIva(){
//         this.precio = this.precio*1.21;
//     }
// }
// // Obtenemos el listado de productos almacenados
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// console.log(almacenados);

// const productos = [];
// // Iteramos almacenados con for of para transformar todos sus objetos a tipo producto
// for(const objeto of almacenados){
//     productos.push(new Producto(objeto));

// }
// // Ahora tenemos objetos productos y podemos usar sus metodos
// for (const producto of productos){
//     producto.sumaIva;
// }

// let usuario;
// let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"));

// Si habia algo almacenado lo recupero. Si no le pido un ingreso

// if(usuarioEnLS){
//     usuario = usuarioEnLS
// // } else{
//     usuario = prompt("Ingrese su nombre de usuario")
// }

// let carrito = [];
// let carritoEnLS = JSON.stringify(localStorage.getItem("carrito"));

// // Inicializo la app con carrito como array vacio o con el registro que haya quedado en LS

// if(carritoEnLS){
//     carrito = carritoEnLS;
// }

// // Funcion que renderiza el carrito
// renderCarrito(carrito);  

/**
 * 
 * DARK MODE
 * 
 */

let boton = document.querySelector("#boton");

boton.addEventListener("click", ()=>{
    if(localStorage.getItem("theme") == "dark"){
        lightMode();
        boton.innerHTML = "Light Mode"

    }else{
        darkMode();
        boton.innerHTML = "Dark Mode"
    }

   

})

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("theme") == "dark"){
        darkMode();

    }else{
       lightMode();
    }
})

const darkMode = () =>{
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";

    let titulo = document.querySelector("#titulo");
    titulo.style.color = "white"
    

    let parrafos = document.querySelector("#parrafo");
    parrafos.style.color = "white";

    

    localStorage.setItem("theme","dark")

}

const lightMode = () =>{
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";

    let titulo = document.querySelector("h1");
    titulo.style.color = "black"

    let parrafos = document.querySelector("#parrafo");
    parrafos.style.color = "black";

    localStorage.setItem("theme", "light");

}