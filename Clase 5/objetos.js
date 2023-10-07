// Objetos : Establecer empleados por Nombre, apellido, dni, etc

// objeto literal

const miAuto = {
  marca: "Peugeot",
  color: "Rojo",
  modelo: "307",
  kilometraje: 56000,
  precio: "$10000",
  vendido: false,
};
console.log(miAuto);

console.log(miAuto.color); // Mostrara la propiedad indicada en objeto.propiedad
//otra manera
console.log(miAuto["modelo"]);

// actualizo el precio
miAuto.precio = "$5000";

console.log(miAuto.precio);

//funcion constructora

function Computadora(tipo, marca, procesador, precio) {
  this.tipo = tipo;
  this.marca = marca;
  this.procesador = procesador;
  this.precio = precio;
  this.detallesCompu = function(){
    console.log(tipo + marca + procesador + precio);
  }
}

const Compu1 = new Computadora("notebook", "HP", "Pentium GOLD", "$500 USD");

console.log(Compu1);

const Compu2 = new Computadora("Escritorio", "Lenovo", "I7 7700k", "$1000 USD");
console.log(Compu2);

let tipoCompu = prompt("Ingrese el tipo de computadora");
let marcaCompu = prompt("Ingrese la marca de la computadora");
let procesadorCompu = prompt("Ingrese el procesador de la computadora");
let precioCompu = prompt("Ingrese el precio de la computadora");

const Compu3 = new Computadora(
  tipoCompu,
  marcaCompu,
  procesadorCompu,
  precioCompu
);
console.log(Compu3);

alert(
  "La computadora que solicito consta de una pc de tipo " +
    tipoCompu +
    " , de marca " +
    marcaCompu +
    ", con un procesador " +
    procesadorCompu +
    " , y de un valor final de" +
    precioCompu
);

let frase = "Quiero pegarme un tiro"

console.log(frase.length);
//String a mayusculas
console.log(frase.toUpperCase());
// String a minusculas
console.log(frase.toLocaleLowerCase());
// Siempre poner los parentesis al final


// Operadores IN & FOR IN
console.log("tipo" in Compu1);

// CLASES

class Empleado{
  constructor(nombre, apellido, documento, codigoTrabajador){
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.codigoTrabajador = codigoTrabajador;

  }
}
let nombreEmpleado = prompt("Ingrese su nombre");
let apellidoEmpleado = prompt("Ingrese su apellido");
let documentoEmpleado = prompt("Ingrese su documento");
let codigoEmpleado = prompt("Ingrese su clave de trabajador");


const empleado1 = new Empleado (nombreEmpleado, apellidoEmpleado, documentoEmpleado, codigoEmpleado)
console.log(empleado1);