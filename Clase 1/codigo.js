// Comentarios de una linea en este formato
/*
Comentario en bloque
se escribe en este formato
*/
// Variables

let nombre = "Pedro";
let apellido = "Perez";
let edad = 20;
let sexo = "Masculino";

edad = 21;
nombre = "Juan";

// Cambiar la variable con su nombre = al nuevo valor
// Las variables no estan atado al tipo de dato que se le asignen, puede empezar como string y pasar a numerico
// Variables let pueden inicializarse sin valor y agregarlo despues

// Operaciones basicas

const numero1 = 15;
const numero2 = 30;

const resultadoSuma = numero1 + numero2;
const resultadoResta = numero1 - numero2;
const resultadoMultiplicacion = numero1 * numero2;
const resultadoDivision = numero1 / numero2;
// console.log(resultadoResta);
// Operaciones con texto

const string1 = "Hola";
const string2 = "Que tal";

const MensajeInicial = string1 +" "+ string2;
console.log(MensajeInicial);

// Valores al usuario

const nombreUsuario = prompt("Ingresa tu nombre maquina")
alert("Perfecto, tu nombre ingresado es" + nombreUsuario)

// Sentencia PROMPT siempre devolvera STRINGS, no realiza operaciones
 const numero1pedido = prompt("Ingrese un numero");
 const numero2pedido = prompt("Ingrese otro numero");

 const resultadoSumatoria = parseInt(numero1pedido) + parseInt(numero2pedido);

 console.log(resultadoSumatoria);
 // parseInt pasa el numero a ENTERO
 // parseFloat pasa el numero a DECIMAL