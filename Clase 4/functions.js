// Definir funcion

// function pedirNombre(){
//     const nombre = prompt("Ingrese su nombre")
//     console.log("El nombre del usuario es " + nombre);
// }

// Declaramos la funcion

// pedirNombre();

// Importante en cuanto a orden declarar todas las funciones en la parte superior del codigo

// function mostrarNombre (nombre){
//     console.log("Su nombre es " + nombre);

// }
// mostrarNombre("Pedro");
// mostrarNombre("Sergio");
// mostrarNombre(prompt("Ingrese su nombre"));

// function sumar(numero1 , numero2){
//     let resultado = numero1 + numero2
//     console.log("La suma de estos es = " + resultado );

// }

// sumar(25,30);
// sumar(5,4);
// sumar(parseInt(prompt("Ingrese un primer valor")), parseInt(prompt("Ingrese un segundo valor")));

// Parametros y valores de retorno


// LAS VARIABLES CREADAS DENTRO DE LA FUNCION NO PUEDEN SER UTILIZADAS FUERA DE ESTAS

// function sumar(numero1 , numero2){
//     let resultado = numero1 + numero2
//     return resultado
//     // Return DEVUELVE el valor

// }

// const resultadoSuma = sumar(6,10);
// console.log("El resultado de la suma es " + resultadoSuma);

// function obtenerNombre(){
//     const nombre = prompt("Ingrese su nombre");
//     return nombre
//     // Return finaliza la funcion, por ende no debe haber nada abajo
// }

// const nombre = obtenerNombre();
// console.log("El nombre del usuario es " + nombre);

// SCOPE

// let numero = 10; // Variable global

// if(true){
//     console.log("El numero es " + numero);
// }

// console.log(numero);

// Variable local

// if(true){
//     let numero = 5;

//     numero += 10;

//     console.log(numero);
// }

// console.log(numero); // Variable fuera del Scope IF donde fue creada, dara error

// Variables locales y globales

// function suma(numero1, numero2){
//     let resultado = numero1 + numero2;
//     console.log(resultado);
// }

// function resta(numero1, numero2){
//     let resultado = numero1 - numero2;
//     console.log(resultado);
// }

// suma(5,10);
// resta(20,10);

// let resultado = 10;
// resultado += 20;
// console.log(resultado);

// Funciones anonimas
//  const mostrarNombre = function(nombre){
//     console.log("El nombre es " + nombre);
//  }

//  mostrarNombre("Sergio")

 // Ejemplo 2

//  function suma (numero1, numero2, accion){
//     const resultado = numero1 + numero2;

//     accion(resultado)

// }

// const mostrarNumero = function (numero){
//     console.log("El resultado es " + numero);
// }
//  suma(10,15,mostrarNumero);

//  // Parametro ACCION permite ingresar otra funcion que realize una determinada tarea

//  // Funcion Flecha

//  const showName = (nombre) => {
//     console.log("El nombre es " + nombre);
//  }

//  showName("Geronimo")

/**
 * EJEMPLO DE PROYECTO FINAL
 */

// Funciones
function solicitarMonto() {
    let monto = parseInt(prompt("Ingrese cantidad a transferir"));

    // Valido el monto ingresado
    while(monto <= 0) {
        monto = parseInt(prompt("Ingrese un monto válido a transferir"));
    }

    return monto;
}

function transferir() {
    let clienteATransferir = prompt("Ingrese el cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");

    // Mientras el cliente sea distinto de 0, estamos en el bucle
    while(clienteATransferir !== "0") {

        // Usuario ingrese monto a transferir
        let monto = solicitarMonto();

        /**
         * CONFIRMAR OPERACIÓN
         */

            // Forma 1
            // const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese SI para confirmar o cualquier cosa para abortar");
            //
            // if(confirmar !== "SI") {
            //     break;
            // }

            // Forma 2
        const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese NO para abortar, cualquier otra cosa para confirmar");

        if(confirmar === "NO") {
            alert("TRANSFERENCIA ABORTADA");
            break;
        }

        /**
         * FINALIZA CONFIRMAR OPERACIÓN
         */

        // Chequeamos el usuario a transferir
        switch(clienteATransferir) {
            case "1": // Manuel

                const saldoDeManuel = 1000 + monto;

                console.log("Le transferiste $" + monto + " a Manuel. El nuevo saldo que tiene Manuel es $" + saldoDeManuel);

                break;

            case "2": // Pepe

                const saldoDePepe = 2000 + monto;

                console.log("Le transferiste $" + monto + " a Pepe. El nuevo saldo que tiene Pepe es $" + saldoDePepe);

                break;

            case "3": // Pedro

                const saldoDePedro = 3000 + monto;

                console.log("Le transferiste $" + monto + " a Pedro. El nuevo saldo que tiene Pedro es $" + saldoDePedro);

                break;

            default:

                alert("EL CLIENTE NO EXISTE");

                break;
        }

        // Volvemos a pedir un usuario
        clienteATransferir = prompt("Ingrese un nuevo cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");
    }
}

function deposito() {
    console.log("Depositar");
    // ..
    // ..
}

function procesarOperacion(operacion) {

    // Mientras el usuario escriba algo distinto de SALIR, nos quedamos en el while
    while(operacion !== "0") {

        // Chequeamos que operación ingreso
        switch(operacion) {

            // Transferir
            case "1":

                transferir();
                break;

            case "2":

                deposito();
                break;

            default:

                alert("INGRESASTE UNA OPCIÓN INCORRECTA");
                break;
        }

        // Volver a pedirle una opción al usuario
        operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");
    }
}

// Inicio

// Pedimos la operación al usuario
let operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");

procesarOperacion(operacion);

// Finaliza la aplicación
console.log("Gracias por utilizar nuestros servicios");