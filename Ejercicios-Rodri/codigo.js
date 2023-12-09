// // CONDICIONALES

// 1) Escriba un programa en donde el usuario ingrese 2 numeros e indique cual es el mayor
// let numero1 = prompt("Ingrese un numero");
// let numero2 = prompt("Ingrese otro numero");

// if(numero1 > numero2){
//     alert(numero1);
// }else{
//     alert(numero2);
// }

// 2) El costo del helado es de $5. Escriba un programa en donde se le pida al usuario ingresar la cantidad de helados que quiere y mostrar cuanto le saldria

// const heladoPrecio = 5;
// let heladoCantidad = prompt("Ingrese la cantidad de helados que desea");

// let costoTotal = heladoCantidad * heladoPrecio;
// alert(costoTotal);

// // 3) Escriba un programa en donde se solicite la edad del usuario y calcule su año de nacimiento, tomando en cuenta que el año actual 2022
// let anioActual = 2023;
// let edadUsuario = prompt("Ingrese su edad");
// let anioNacimiento = anioActual - edadUsuario;

// alert("Su año de nacimiento es " + anioNacimiento);

// // 4) Escriba un programa donde el usuario ingrese 3 notas, calcule el promedio y si es mayor o igual a 4 le indique que esta aprobado con un alert

// let notas = 0
// for(let i = 0;i < 3; i++){
//     let nota = parseFloat(prompt("Ingrese sus notas"));
//     notas += nota;

// }
// let promedioNotas = notas/3
// promedioNotas.toFixed(2)
// if(promedioNotas >= 4){

//     alert("El promedio de sus notas es: " + promedioNotas + " esta aprobado");
// }else{
//     alert("El curso no esta aprobado")
// }
//
// // 5) Escriba un programa dondes se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con formato : "Hola nombre apellido, tu edad actual es edad". Ejemplo: "Hola Rodrigo Rio, tu edad actual es 25" SOLO SOLICITAR EL NOMBRE APELLIDO SI ES MAYOR A 18

// let anioUsuario = prompt("Ingrese su año de nacimiento");
// let nombreUsuario = ""
// let edad = 2023 - anioUsuario

// anioUsuario < 2005 ? nombreApellido =  prompt("Ingrese su nombre y apellido") : alert("Error usted es menor de edad");

// alert(`Hola ${nombreApellido}, tu edad actual es ${edad} `);

// // 6) Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muestrele en pantalla un alert con su precio final.

// let precioProducto = prompt("Ingrese el precio del producto");
//  precioIVA = precioProducto * 1.21;

//  alert(`El precio del prducto actualizado con IVA es ${precioIVA}`)

// // 7) Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera viajar. Teniendo en cuenta estos valores: -Colombia : $40, Mexico: $50, Brasil $30, Uruguay $20, Chile $20, Ecuador $30, Peru $40, Estados Unidos $50. Mostrarle al usuario cual seria el costo de viajar al lugar que escrbio. NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el nombre del lugar

// let viaje = prompt("Ingrese el destino de su viaje").toLowerCase();

// switch (viaje) {
//   case "colombia":
//     alert("El valor de su viaje es de $40");
//     break;
//   case "mexico":
//     alert("El valor de su viaje es de $50");
//     break;
//   case "brasil":
//     alert("El vajor de su viaje es de $30");
//     break;
//   case "uruguay":
//     alert("El valor de su viaje es de $20");
//     break;
//   default:
//     alert("Destino no reconocido");
// }

// console.log(viaje);

// // 8) Escriba un programa en dónde se le solicite al usuario su nombre y edad, y según los siguientes casos muéstrele un mensaje de que tiene el acceso permitido: a) Si el nombre es “Pedro” o “pedro” y su edad es mayor de 18 b) Si el nombre es “Juan”, “JUAN” o “juan” y su edad es mayor a 21 c) Si el nombre es “paula” y su edad es mayor a 25

// let nombre = prompt("Ingrese su nombre");
// let edad = prompt("Ingrese su nombre");

// if (nombre == ("Pedro" || "pedro") && edad >= 18) {
//   alert("Acceso permitido");
// } else if (nombre == ("JUAN" || "juan" || "Juan") && edad >= 20) {
//   alert("Acceso permitido");
// } else if (nombre == "paula" && edad >= 25) {
//   alert("Acceso permitido");
// } else {
//   alert("Acceso denegado");
// }

// // 9) ) Escriba un programa en el cual se le pida el peso y altura al usuario, calcule su IMC y muestre si tiene bajo peso, peso normal, sobrepeso o es obeso
// let peso = prompt("Ingrese su peso en kg");
// let altura = prompt("Ingrese su altura en metros");

// let imc = peso/(altura*altura)
// console.log(imc);

// if(imc <= 18.5){
//     alert("Su peso es bajo");
// }else if(imc > 18.5 && imc < 24.9){
//     alert("Su peso es normal");
// }else if(imc >= 25 && imc <= 29.9){
//     alert("Su peso es de sobrepeso");
// }
// else{
//     alert("Su peso es de obeso")
// }


// // 10) 10) Escriba un programa en el cual se ingresen dos números y devuelva la diferenciaentre el mayor y el menor. Por ejemplo: Si se ingresan 10 y 8, tiene que mostrar 2 (Que es el resultado de 10 - 8).

// let numero1 = parseInt(prompt("Ingrese un numero"));
// let numero2 = parseInt(prompt("Ingrese otro numero"));

// if(numero1 >= numero2){
//     let resultado = numero1 - numero2;
//     console.log(resultado);
// }else{
//     resultado = numero2 - numero1;
//     console.log(resultado);
// }


// // OPERADORES LOGICOS

// // 1) Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no.

// let letra = prompt("Ingrese una letra").toLowerCase();

// if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
//     alert("Ingresaste una vocal")
// }else{
//     alert("Ingresaste una consonante")
// }

// // 3) Escriba un programa en donde se le pida un nombre y una edad al usuario. Muestre un mensaje en pantalla si: - El nombre es “Gabriel” y tiene más de 24 años - El nombre es “María” y tiene entre 28 y 35 años

// let nombre = prompt("Ingrese su nombre");
// let edad = prompt("Ingrese su edad");

// if((nombre == "Gabriel" && edad >= 24) || (nombre == "Maria" && (edad >= 28 && edad <= 35))){
//     alert("Usuario correcto")
    
// }else{
//     alert("Usuario incorrecto")
// }

// // 4) ) Escriba un programa en donde se le solicite al usuario que ingrese 2 números y lemuestre en pantalla un mensaje cuando su suma sea 10 y su división tenga como resto 0.

    // let numero1 = parseInt(prompt("Ingrese un numero"));
    // let numero2 = parseInt(prompt("Ingrese otro numero"));

    // let suman10 = numero1 + numero2;
    // let resto0 = numero1 % numero2;

    // console.log(suman10);
    // console.log(resto0);
    // if (suman10 == 10 && resto0 == 0){
    //     alert("La suma es 10 y el resto es 0");

    // }else{
    //     alert("La suma no es 10 y el resto no es 0")
    // }
// // CICLOS

// // 1) Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados separados por una coma (,).

// let textoArray = [];
// let texto = prompt("Ingrese un texto");
// while (texto !== "Salir"){
// textoArray.push(texto);
// texto = prompt("Ingrese un nuevo texto")
    
// }

// textoArray = textoArray.join(",");
// console.log(textoArray); 

// // Otra forma sin metodos de arrays

// let texto = prompt("Ingrese un texto");
// let textoConcat = ""

// while(texto !== "Salir"){
//     textoConcat += `${texto}, `
//     texto = prompt("Ingrese otro texto")

// }

// alert (textoConcat);

// // 2) Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el conteo hacia atrás hasta llegar a 0. NOTA: Tener en cuenta validar que es un número positivo el que ingresó.

// let numeroPositivo = prompt("Ingrese un numero positivo");

// if(numeroPositivo > 0){
//     for(let i = numeroPositivo; i >= 0 ; i--){
//         alert(i)
//     }
// }else{
//     alert("Su numero no es positivo")
// }

// // 3) ) Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar a 0 pero sólo mostrando los números que son pares


// let numero = prompt("Ingrese un numero");

// if(numero > 0){
//     for(let i = numero; i >= 0; i = i- 2){
//         alert(i)
//     }
// }

// // 4)