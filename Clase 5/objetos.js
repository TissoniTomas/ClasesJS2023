// Objetos : Establecer empleados por Nombre, apellido, dni, etc

// objeto literal

// Objetos

// let nombre ="Homero";
// let edad = "39";
// let calle = "Av Siempre Viva"

const persona1 = { nombre: "Homero", edad: "39", calle: "Av Siempre Viva",

}

console.log(persona1);

// Acceder al valor
console.log(persona1.nombre);
console.log(persona1.calle);
console.log(persona1.edad);

// let pedirDato = prompt("Ingrese la propiedad a solicitar");
// console.log(pedirDato);
// console.log(persona1.pedirDato);
// // En caso de que la persona solicite la propiedad del objeto correctamente, este se mostrara.

// Asignar valores

console.log(persona1["nombre"] = "Marge");
console.log(persona1.edad = 38);

// Agregar valores

console.log(persona1.comidaFav = "Donnuts");
console.log(persona1);

// Constructores (Empiezan con mayuscula por ser constructoras)

// function Persona(nombre,edad,calle){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;

//   // Metodo
//   this.hablar = function(){
//     console.log("Hola soy " + this.nombre);
//   }
//   this.nombreYEdad  = function(separador){
//     console.log(
//       this.nombre + separador + this.edad);
//     }

// }

// const persona2 = new Persona("Lisa" , 8 , "Av SiempreViva");
// console.log(persona2);

// let nombrePersona3 = prompt("Ingrese su nombre");
// let callePersona3 = prompt("Ingrese su calle");
// let edadPersona3 = prompt("Ingrese su edad");


// const persona3 = new Persona( nombrePersona3, callePersona3, edadPersona3);

// console.log(persona3);

// let auto = "Ford"

// console.log(auto.length);
// console.log(auto.toLocaleUpperCase());
// console.log(auto.toLocaleLowerCase());
  
// persona2.hablar() // Llamo al metodo del objeto constructor

// persona2.nombreYEdad(" ")

// // IN FOR IN

// console.log("nombre" in persona2);
// // console.log(("dni" in persona2));
// if(!("dni" in persona2)){
//   persona2.dni = "54.252.333"
// }

// for (const propiedad in persona2){
//   console.log(persona2[propiedad])
//     if(propiedad ==="calle")
//     break;
//   ;
// }

// CLASES CONSTRUCTORAS

class Auto{
  constructor(marca,modelo,anio,precio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.precio = precio
  }

    // Metodos en class
    sumarIva(){
      return this.precio = this.precio * 1.21
    }
}

const auto1 = new Auto();

auto1.marca = prompt("Ingrese la marca de su auto");
auto1.modelo = prompt("Ingrese el modelo de su auto");
auto1.anio = prompt("Ingrese el año de su auto");
auto1.precio = prompt("Ingrese el precio de su auto")

console.log("A continuacion vera los datos de su auto");

console.log(auto1);
console.log("El precio de su auto con el IVA es de " + auto1.sumarIva());
