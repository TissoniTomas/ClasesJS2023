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

let valorPresupuesto = prompt("Ingrese el monto de su prespuesto");
if(valorPresupuesto <= "1000"){
    alert("El presupuesto es bajo");
} else if (valorPresupuesto >"1001" && valorPresupuesto <"3000"){
    alert("El presupuesto es medio");
}else{
    alert("El presupuesto es alto");
}
// // Ejercicio 10 Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
