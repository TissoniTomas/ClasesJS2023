// // Ejercicio 1 : Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o let en la declaración.

// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = 39;

// // Ejercicio 2 : Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

// const ciudad1 = "Buenos Aires";
// const ciudad2 = "Capital Federal";
// const ciudad3 = "Sao Paulo";
// const ciudad4 = "Berlin";
// const ciudad5 = "Roma";

// // Ejercicio 3 : Declarar variables para representar la información de un carnet de conducir. Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

// let nombreCarnet = "Tomas";
// let apellidoCarnet = "Tissoni";
// let fechaNacimientoCarnet = "17/03/1998";
// let fechaCarnet = "23/10/2023";
// let vencimientoCarnet = "23/10/2028";
// let paisCarnet = "Argentina";

// let carnet = "La informacion de su carnet es: Nombre : " + nombreCarnet +" Apellido : " +apellidoCarnet + " Fecha de nacimiento: " + fechaNacimientoCarnet + " Valido desde: " +fechaCarnet + " Valido hasta : " + vencimientoCarnet + " Pais: " + paisCarnet;

// console.log(carnet);

// // Ejercico 4 Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

// let persona1 = prompt("Ingrese el nombre del primer integrante");
// let persona2 = prompt("Ingrese el nombre del segundo integrante");
// let persona3 = prompt("Ingrese el nombre del tercer integrante");
// let persona4 = prompt("Ingrese el nombre del cuarto integrante");
// let persona5 = prompt("Ingrese el nombre del quinto integrante");

// let familia = "1er integrante: " + persona1 + " 2do integrante: " + persona2 + " 3er integrante " + persona3 + " 4to integrante " + persona4 + " 5to integrante: " + persona5;

// alert(familia)

// // Ejercicio 5 Solicitar al usuario uno o más precios. Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

// let precio1 = prompt("Ingrese el primer precio");
// let precio2 = prompt("Ingrese el segundo precio");

// let precio1Descuento = precio1 -(precio1 * 0.2) ;
// let precio2Descuento = precio2 - (precio2 * 0.3);

// alert("Los precios nuevos con descuentos aplicados del 20% al primero y 30% al segundo seran de " +precio1Descuento + " y " + precio2Descuento);

// // Ejercicio 6 Solicitar al usuario un (1) nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. Caso contrario, la salida será “Yo no fui”.

// let nombreUsuario = prompt("Ingrese un nombre");
// let nombreAlmacenado = "Tomas";

// if(nombreUsuario == nombreAlmacenado){
//     alert("Yo fui");
// }else{
//     alert("Yo no fui");
// }

// // Ejericio 7 Solicitar al usuario una (1) tecla. Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

// let presionarTecla = prompt("Ingrese una tecla al azar");
// if (presionarTecla == "y" || presionarTecla == "Y"){
//     alert("Correcto");
// }else{
//     alert("Incorrecto maquinola");
// }

// // Ejercicio 8 Solicitar al usuario un (1) número.Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: “Elegiste a Homero” si es 1.“Elegiste a Marge” si es 2.“Elegiste a Bart” si es 3.“Elegiste a Lisa” si es 4.

// let numeroUsuario = prompt("Ingrese un numero entre 1-4");
// if(numeroUsuario == "1"){
//     alert("Elegiste a Homero");
// }else if(numeroUsuario =="2"){
//     alert("Elegiste a Marge");
// }else if(numeroUsuario == "3"){
//     alert("Elegiste a Bart");
// }else if (numeroUsuario == "4"){
//     alert("Elegiste a Lisa");
// }else{
//     alert("Opcion incorrecta maquina del mal");
// }

// // Ejercicio 9 Solicitar al usuario un (1) número Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda:  “Presupuesto bajo” si está entre 0 y 1000. “Presupuesto medio” si está entre 1001 y 3000. “Presupuesto alto” si es  mayor que 3000

// let valorPresupuesto = prompt("Ingrese el monto de su prespuesto");
// if(valorPresupuesto <= "1000"){
//     alert("El presupuesto es bajo");
// } else if (valorPresupuesto >"1001" && valorPresupuesto <"3000"){
//     alert("El presupuesto es medio");
// }else{
//     alert("El presupuesto es alto");
// }

// // Ejercicio 10 Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

// let producto1 = prompt("Ingrese un producto de almacen");
// let producto2 = prompt("Ingrese un producto de almacen");
// let producto3 = prompt("Ingrese un producto de almacen");
// let producto4 = prompt("Ingrese un producto de almacen");

// if(producto1 !== "" && producto2 !== "" && producto3 !== "" && producto4 !== ""){

//     alert(`Los productos ingresados son ${producto1}, ${producto2}, ${producto3} y ${producto4
//     }` )
// }else{
//     alert("Error: Es necesario cargar todos los productos")
// }

// // Ejercicio 11 Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

// let numero = prompt("Ingrese un numero");
// let texto = prompt("Ingrese un texto a repetirse las veces que indico anteriormente");

// for (let i = 0; i < numero; i++){
//     alert(texto);
// }

// // Ejercicio 12 Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

// let numero = prompt("Ingrese un numero");
// for(let i=0;i<numero;i++){
//     if(numero > 4){
//         break;
//     }else{
//         alert("Lado")
//     }
// }

// // Ejercicio 13 Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva. Luego realizar un única salida por alerta, con el listado de alumnos registrados.
// let alumnos = ""
// for(let i = 0; i <= 10; i++){
//      alumnos += prompt("Ingrese el nombre del alumno")+" /n ";
// }

// alert(alumnos)

// // Ejercicio 14 Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”. Luego realizar un única salida por alerta, con todos los nombres ingresados.

// let nombres = prompt("Ingrese un nombre");

// let ingresados = "";

// while(nombres !== "Voldemort"){
//     ingresados += nombres + "\n";
//     nombres = prompt("Ingrese un nombre")
//     console.log(ingresados);
// }

// alert(ingresados);

// // Ejercicio 15 Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo: “Tomate” si es 1.“Papa” si es 2.“Carne” si es 3.“Pollo” si es 4.

// let numero = prompt("Ingrese un numero");

// while (numero !== "ESC") {
//   switch (numero) {
//     case "1": 
//       alert("Tomate");
//       break;
    
//     case "2": 
//       alert("Papa");
//       break;
    
//     case "3": 
//       alert("Carne");
//       break;
    
//     case "4": 
//       alert("Pollo");
//       break;
    
//     default: 
//       alert("Ingrese un valor entre 1 y 4");
    
//   }

//   numero = prompt("Ingrese un numero");
// }

// // Ejercicio 16 Codificar tres funciones:Una función entrada(), la cual solicite un valor al usuario y lo retorne.Una función procesamiento(valor), donde se transforme la entrada.Una función salida(valor), la cual mostrará el resultado por alerta.Luego, invocar las tres funciones.


// function entrada(){
//     let valor = prompt("Ingrese un valor");
//     return valor
// }

// function procesamiento(valor){
//     let proceso = "La entrada es " + valor;
//     return proceso
// }

// function salida(valor){
//     alert( valor);
// }

// salida(procesamiento(entrada()))

// // Ejercicio 17 Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round. Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

// function numero(decimal){

//     let numeroIngresado = decimal;
//     return Math.round(numeroIngresado)

// }

// for(let i = 0; i <5; i++){
//     let ingreso = numero(prompt("Ingrese un numero decimal"));
//     alert(ingreso);
// }

// // Ejercicio 18 Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado. Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

// function impuesto(precio,porcentaje){
//     return precio + ((precio * porcentaje)/100);
    
// }

// for(let i = 0; i <5; i++){
//     let precio = parseFloat(prompt("Ingrese un precio"))
//     let Porcentaje = parseFloat(prompt("Ingrese un porcentaje"))

//     let precioPorcentaje = impuesto(precio,Porcentaje)
//     alert(precioPorcentaje);
// }

// // Ejercicio 19 Codificar dos funciones: Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
// const dolarValor = 1000;
// function cotizarDolar(pesos){

//     return pesos / dolarValor;
// }

// function cotizarPesos(dolar){
//     return dolar * dolarValor;
// }

// let operación = prompt("Ingrese el numero de la operacion a realizar: 1-Cotizacion en Dolares/ 2-Cotizacion en pesos");
// switch(operación){
//     case "1":
//         let cantidadDolares = cotizarDolar(prompt("Ingrese el monto en pesos"))
//         alert(cantidadDolares)
//         break;
//     case "2":
//         let cantidadPesos = cotizarPesos(prompt("Ingrese el monto en dolares"));
//         alert(cantidadPesos)
//         break;
//     default:
//         alert("Ingrese una opcion valida");
// }

// // Ejercicio 20 Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

// const validacion = (cadena)=>{
//     return cadena !== ""
// }

// let cadenaValidar = prompt("Ingrese una cadena de texto");
// while(cadenaValidar !== "ESC"){
//     alert(validacion(cadenaValidar));
//     cadenaValidar = prompt("Ingrese una cadena de texto");
    
// }

// // Ejercicio 21 Declarar un clase Tienda que permita registrar: Nombre de la tienda.Dirección de la tienda.Propietario de la tienda.Rubro de la tienda.Luego invocar al menos tres (3) objetos usando esta clase.

class Tienda{
    constructor(nombre,direccion,dueño,rubro){
        this.nombre= nombre;
        this.direccion= direccion;
        this.dueño= dueño;
        this.rubro= rubro;
        
    }
    estaAbierto(hora){
        if((hora > 8 && hora < 12) || (hora > 15 && hora < 19)){
            return true;
        }else{
            return false;
        }
    }
}

// let tienda1 = new Tienda("mcdonalds","Av Libertador 220","Tomas Tissoni","Comida");

// let tienda2 = new Tienda("mcdonalds","Av Libertador 220","Tomas Tissoni","Comida");
// let tienda3 = new Tienda("mcdonalds","Av Libertador 220","Tomas Tissoni","Comida");
// console.log(tienda1,tienda2,tienda3);

// // Ejercicio 22 Solicitar al usuario el registro de cinco (5) tiendas. Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.
// let ingresados = ""
// for(let i = 0 ; i < 5; i++){
//     let tienda = new Tienda (prompt("Ingrese el nombre de la tienda"),prompt("Ingrese la direccion de la tienda"),prompt("Ingrese el dueño de la tienda"),prompt("Ingrese el rubro de la tienda"))

//     ingresados += "Tienda: " + tienda.nombre + "Direccion " + tienda.direccion + "Dueño " + tienda.dueño + "Rubro " + tienda.rubro;

// }

// alert(ingresados)

// // Ejercicio 23 Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false. Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.

const tienda4 = new Tienda("Nike","Unicenter","Nike SA", "Ropa");
for (let i= 0;i < 3; i++){
    let horario = prompt("Ingrese un horario");
    if(tienda4.estaAbierto(horario)){
        alert("La tienda esta abierta a las " + horario)
    }else{
        alert("La tienda esta cerrada a las " + horario)
    }
}