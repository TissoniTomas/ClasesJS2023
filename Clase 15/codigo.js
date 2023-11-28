// // setTimeout(()=>{
// //     console.log("Proceso asincronico");
// // },3000)

// console.log("Inicio proceso");

// setTimeout(()=>{
//     console.log("Mitad de proceso");
// },2000);

// console.log("Fin proceso");

// // 1-Inicia proceso
// // 2-Encuentra un setTimeout, lo manda a una lista de espera
// // 3- Ejecuta el fin del proceso

// const btn = document.querySelector("#boton");
// const popup = document.querySelector("#popup-mensaje");

// btn.addEventListener("click", ()=>{
//     popup.classList.add("popup-active")

//     setTimeout(()=>{
//         popup.classList.remove("popup-active")
//     },2500)
// })

// setTimeout(()=>{
//         for (let letra of "hola"){
//         console.log(letra);

//     }
// },1000)

// for(let letra of "mundo"){
//     console.log(letra);
// }

// function multiply(x,y){
//     return x * y;
// }

// function printSquare (x){
//     let s = multiply(x,x);
//     console.log(s);
// }

// printSquare(5);

// setInterval(()=>{
//     console.log("TIC"); }
//     ,2000)

// let counter = 0;
// const interval = setInterval(()=>{
//     counter ++;
//     console.log("Counter:" + counter);
//     if(counter >= 5){
//         clearInterval(interval);
//         console.log("Se acabo el intervalo ");
//     }
// },2000)

// const eventoFuturo = (res)=>{
//     return new Promise((resolve,reject)=>{
//         if(res === true){
//             resolve("Promesa resuelta");
//         }else{
//             reject("Promesa rechazada")
//         }
//         // Cuerpo de la promesa
//     })
// }
// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));

// eventoFuturo(true)
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

// eventoFuturo(false)
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

const BD = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 2, nombre: "Producto 2", precio: 2500 },
  { id: 3, nombre: "Producto 3", precio: 3500 },
  { id: 4, nombre: "Producto 4", precio: 3500 },
];
const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 3000);
  });
};

const renderProductos = (arr)=>{

    const productosContainer = document.querySelector("#productosContainer");
    productosContainer.innerHTML = "";

    arr.forEach((producto) => {
        const productElement = document.createElement("div");
        productElement.classList.add("contenedores")
        productElement.textContent = `ID ${producto.id} Nombre: ${producto.nombre} Precio: ${producto.precio}`
        productosContainer.append(productElement)
    });

}
let productos = [];
pedirProductos()
.then((res)=>{
    productos = res;
    renderProductos(productos)
})