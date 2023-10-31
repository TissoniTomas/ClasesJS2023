// let total = 0;

// for (let i = 1 ; i <= 10; i ++){
//     total += i;
//     console.log(total);
// }

// function mayorQue(n){
//     return(m) => m > n;
// }

// let mayorQueDiez = mayorQue(10)
// let mayorQueVeinticinco = mayorQue(25);

// console.log(mayorQueDiez(12));
// console.log(mayorQueDiez(8));
// console.log(mayorQueVeinticinco(25));

// function asignarOperacion (op){
//     if ( op == "sumar"){
//         return (a,b) => a + b;  
//     } else if(op == "resta"){
//         return (a,b) => a - b;
//     }
// }

// let suma = asignarOperacion("sumar");
// let resta = asignarOperacion("resta");

// console.log(suma(4,10));
// console.log(resta(14,4));

// const numeros = [1,2,3,4];

// const porCadaUno = (array,funcion)=>{
//     for(const element of array){
//      funcion(element)
//     }
// }

// const consoleLog = (elementoArray) =>{
//     console.log(elementoArray);
// }

// porCadaUno(numeros,consoleLog);

// const multiplicar = (a,b) =>{
//     return a * b;
// }

// const calculo = (inicio, valores, funcion)=>{
//     let resultado = inicio;
//     for (const elemento of valores){
//         resultado = funcion(resultado,elemento)
//     }
//     return resultado
// }
// console.log(calculo(1,numeros,multiplicar));

// // FOR EACH : Recorrera el array y realizara la funcion que introduzcamos con esos elementos

const numeros = [1,2,3,4,5];

numeros.forEach((numeroArray =>{
    console.log(numeroArray);
}))

//  // FIND Recibe una comparacion por parametro. Encontrara el objeto que pasemos como condicion. Encontrara el primer elemnto que cumpla con la condicion.

const cursos = [
    {nombre: "Javascript", precio: 15000, },
    {nombre: "ReactJS", precio: 22000 },
    {nombre: "AngularJS", precio: 22000},
    {nombre: "Desarrollo Web", precio: 16000},

]

// const resultado1 = cursos.find((el) => el.nombre === "ReactJS")
// const resultado2 = cursos.find ((el) => el.nombre ==="DW");

// console.log(resultado1);
// console.log(resultado2);

// // // FILTER. Recibe mismo parametro que find pero este nos devolvera un nuevo array con todos los elementos que coincidan con la comparacion

// const resultado3 = cursos.filter((el) => el.nombre.includes("JS") && el.precio < 25000);
// const resultado4 = cursos.filter((el) => el.precio < 30000);

// console.log(resultado3);
// console.log(resultado4);

// // MAP
const nombres = cursos.map((el)=> el.nombre);
console.log(nombres);

const conIva = cursos.map((el)=>{
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25,
    }
})

console.log(conIva);

// REDUCE

const numeros2 = [40,10,20,40];

const total = numeros2.reduce((acumulador,elemento) => acumulador + elemento, 0) // Valor a inciar la sumatoria);

console.log(total);




