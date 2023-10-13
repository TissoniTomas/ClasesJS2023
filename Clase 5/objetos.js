// Objetos : Establecer empleados por Nombre, apellido, dni, etc

// objeto literal

// Objetos

let nomhre ="Homero";
let edad = "39";
let calle = "Av Siempre Viva"

const persona1 = { nombre: "Homero", edad: "39", calle: "Av Siempre Viva",

}

console.log(persona1);

// Acceder al valor
console.log(persona1.nombre);
console.log(persona1.calle);
console.log(persona1.edad);

// Asignar valores

console.log(persona1["nombre"] = "Marge");
console.log(persona1.edad = 38);

// Agregar valores

console.log(persona1.comidaFav = "Donnuts");
console.log(persona1);

// Constructores

function Persona(nombre,edad,calle){
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;

  // Metodo
  this.hablar = function(){
    console.log("Hola soy " + this.nombre);
  }
  this.nombreYEdad  = function(separador){
    this.nombre + separador + this.edad
  }

}

const persona2 = new Persona("Lisa" , 8 , "Av SiempreViva");
console.log(persona2);

let auto = "ford"

console.log(auto.length);
console.log(auto.toLocaleUpperCase());