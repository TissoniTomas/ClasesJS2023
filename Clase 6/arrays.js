const listaCompras = ["Fernet", "Coca Cola", "Hielo","Campari", "Papas", "Pan"]
console.log(listaCompras);

console.log(listaCompras[2]);

console.log(listaCompras[0] + " y " + listaCompras[1]);

// Recorriendo la lista

for(let i=0; i<listaCompras.length; i++){
    console.log("Producto: "+ listaCompras[i]);
}

// metodo push

listaCompras.push("Cigarrillos");
console.log(listaCompras);

let agregarProducto = prompt("Queres agregar productos nuevos a la lista?. Responder con SI / NO");
while (agregarProducto != "NO"){
    let nuevoProducto = prompt("Agregar el nuevo producto");
    listaCompras.push(nuevoProducto);
    agregarProducto = prompt("Queres agregar productos nuevos a la lista?. Responder con SI / NO");

}

console.log(listaCompras);

// Metodo unshift: Agregara el nuevo elemento del array al principio
listaCompras.unshift("Gaseosa Vichy");
console.log(listaCompras);

// .pop : Eliminara el ultimo elemento

listaCompras.pop();
console.log(listaCompras);

// .shift: Eliminara el primer elemento

listaCompras.shift();
console.log(listaCompras);

// Splice: Eliminara desde la posicion indicada como primer parametro, la cantidad de elementos desde ahi indicados en el segundo parametro

listaCompras.splice(2,2);
console.log(listaCompras);

// Concat
const perros = ["Pancho", "Ana"];
const gatos = ["Michi", "Juan"];
const mascotas = perros.concat(gatos);
console.log(mascotas);

 // IndexOF

const nombres = ["Juan", "Pedro", "Gabriel", "Tomas", "Julieta"];
let nombreAlumno = prompt("Ingrese su nombre");

let posicionAlumno = nombres.indexOf(nombreAlumno);
console.log(posicionAlumno);

 // Includes

console.log(nombres.includes("Pedro"));

 // ARRAY DE OBJETOS!!!
const listaHeroes = [];

class Heroe{
    constructor(id, nombre, energia){

        this.id = id;
        this.nombre = nombre;
        this.energia = energia;
    }
}

const heroe1 = new Heroe(1, "Pipo", 7000);
listaHeroes.push(heroe1);
const heroe2 = new Heroe(2,"Pepe", 8000);
listaHeroes.push(heroe2);
console.log(listaHeroes);
