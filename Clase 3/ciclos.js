// FOR
// for(let i = 10; i < 20; i = i+1){

// console.log("Hola");
// }

// Pedir 10 nombres
// for(let i = 0; i < 10;  i = i + 1 ){
//     const nombreUsuario = prompt("Ingrese su nombre");
//     console.log(nombreUsuario);
// }

// // Numeros pares
//  for(let i = 0; i < 10; i = i+ 2){
//     if(i >= 5){
//         break;
//     }
//     console.log(i);
//  }

//  // Numeros impares
//  for(let i = 1; i < 10; i = i+ 2){
//     if(i >= 9){
//         break;
//     }
//     console.log(i);
//  }

// Sentencia continue muestra numeros imapres
// for(let i = 0; i < 10; i = i+ 1){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i);
//  }

 
// // Sentencia continue muestra numeros apres
// for(let i = 0; i < 10; i = i+ 1){
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i);
//  }

 /*
 WHILE
 */

//  let nombre = "";
// while(nombre !== "Salir"){
//     nombre = prompt("Ingrese su nombre o Salir ");
//     if(nombre !== "Salir"){

//         alert ("Su nombre es " + nombre)
//     }

// }

// Contar de 1 a 10 a traves de while
// let i = 0;
// while (i < 10){
//     console.log(i);

//     i= i + 1;
// }

// /*
// DO WHILE
// */

// let nombre = "";

// do {
//     nombre = prompt("Ingrese su nombre o Salir ");
//     if(nombre !== "Salir"){

//         alert ("Su nombre es " + nombre)
//     }

// } while(nombre !== "Salir")

// SWITCH

// // Pedimos la operación al usuario
// let operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");
//
// // Mientras el usuario escriba algo distinto de SALIR, nos quedamos en el while
// while(operacion !== "0") {
//
//     // Chequeamos que operación ingreso
//     switch(operacion) {
//
//         // Transferir
//         case "1":
//
//             let clienteATransferir = prompt("Ingrese el cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");
//
//             // Mientras el cliente sea distinto de 0, estamos en el bucle
//             while(clienteATransferir !== "0") {
//
//                 // Usuario ingrese monto a transferir
//                 let monto = parseInt(prompt("Ingrese cantidad a transferir"));
//
//                 // Valido el monto ingresado
//                 while(monto <= 0) {
//                     monto = parseInt(prompt("Ingrese un monto válido a transferir"));
//                 }
//
//                 /**
//                  * CONFIRMAR OPERACIÓN
//                  */
//
//                 // Forma 1
//                 // const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese SI para confirmar o cualquier cosa para abortar");
//                 //
//                 // if(confirmar !== "SI") {
//                 //     break;
//                 // }
//
//                 // Forma 2
//                 const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese NO para abortar, cualquier otra cosa para confirmar");
//
//                 if(confirmar === "NO") {
//                     alert("TRANSFERENCIA ABORTADA");
//                     break;
//                 }
//
//                 /**
//                  * FINALIZA CONFIRMAR OPERACIÓN
//                  */
//
//                 // Chequeamos el usuario a transferir
//                 switch(clienteATransferir) {
//                     case "1": // Manuel
//
//                         const saldoDeManuel = 1000 + monto;
//
//                         console.log("Le transferiste $" + monto + " a Manuel. El nuevo saldo que tiene Manuel es $" + saldoDeManuel);
//
//                         break;
//
//                     case "2": // Pepe
//
//                         const saldoDePepe = 2000 + monto;
//
//                         console.log("Le transferiste $" + monto + " a Pepe. El nuevo saldo que tiene Pepe es $" + saldoDePepe);
//
//                         break;
//
//                     case "3": // Pedro
//
//                         const saldoDePedro = 3000 + monto;
//
//                         console.log("Le transferiste $" + monto + " a Pedro. El nuevo saldo que tiene Pedro es $" + saldoDePedro);
//
//                         break;
//
//                     default:
//
//                         alert("EL CLIENTE NO EXISTE");
//
//                         break;
//                 }
//
//                 // Volvemos a pedir un usuario
//                 clienteATransferir = prompt("Ingrese un nuevo cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");
//             }
//
//         break;
//
//         case "2":
//
//             console.log("Depositar");
//             // ..
//             // ..
//
//             break;
//
//         default:
//
//             alert("INGRESASTE UNA OPCIÓN INCORRECTA");
//
//             break;
//     }
//
//     // Volver a pedirle una opción al usuario
//     operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");
// }
//
// // Finaliza la aplicación
// console.log("Gracias por utilizar nuestros servicios");

/**
 * EJERCICIO 10
 *
 * Escriba un programa en dónde se le solicite un número al usuario y determine si es
 * un número primo o no.
 */

let divisores = 0;
const numero = parseInt(prompt("Ingrese un número"));

for(let i = numero; i >= 1; i = i - 1) {

    if(numero % i === 0) {
        divisores = divisores + 1;
    }
}

if(divisores > 2) {
    console.log("El número ingresado NO es primo");
} else {
    console.log("El número ingresado es primo");
}