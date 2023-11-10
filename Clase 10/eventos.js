// const boton = document.getElementById("botonsito");
// Forma 1 
// const mostraMensaje = () =>{
//     console.log("Se hizo click en el botonsito");
// }
// boton.addEventListener("click", mostraMensaje);

// Forma 2

// boton.addEventListener("click", ()=>{
//     console.log("Click en el botonsito");
// })

// Forma 3

// const clickear = "click"
// boton.addEventListener(clickear, function(){
//         console.log("Click en el botonsito");
//     })

// Eventos de Mouse
// const cajita = document.querySelector(".cajita");

// cajita.addEventListener("mousedown", ()=>{
//     console.log("Apretaste el mouse en la caja");
// })

// cajita.addEventListener("mouseup", ()=>{
//     console.log("Levantaste el mouse en la caja");
// })

// cajita.addEventListener("mouseover", ()=>{
//     cajita.className = "cajita bg-success"
// })

// cajita.addEventListener("mouseout", ()=>{
//     cajita.className = "cajita "
// })

// cajita.addEventListener("mousemove" ,()=>{
//     console.log("moviste el puntero sobre el elemento");
// })


// Eventos del teclado
// const inputsito = document.querySelector("#inputsito");
// inputsito.addEventListener("keydown", (e)=>{
//     const vocales = ['A', 'E', 'I','O', 'U'];
//     if(vocales.includes(e.key.toUpperCase())){
//         e.preventDefault()
//     }
//     console.log(e);

// })

// inputsito.addEventListener("keyup", ()=>{
//     inputsito.className = " bg-danger"
// })

// inputsito.addEventListener("change", ()=>{
//     console.log("Se ejecuta Change");
// })

// // Evento SUBMIT

// const form = document.querySelector(".formsito");
// form.addEventListener("submit", (e)=>{
//     e.preventDefault(); // Corta el flujo normal de la pagina para verificar el console log o cualquier ciclo del evento.
//     console.log("Se hizo SUBMIT");
// })

/**
 * 
 * EJEMPLO COMPLETO
 * 
 */
// Clases
class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }
}
// Funciones
const renderizarProductos = (productos)=>{
    const contenedor = document.querySelector("#contenedor");
    for (const producto of productos){
       // Creamos elementos dinamicamente
        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-4 mb-2 border mt-4 p-5"

        const divCard = document.createElement("div");
        divCard.classname = "card";

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.classname = "card-title";
        cardTitle.innerText = producto.nombre;

        const parrafo = document.createElement("p");
        parrafo.className = "card-text";
        parrafo.innerHTML =`<strong> Precio: $ </strong>
        // ${producto.precio} - <strong>Stock: </strong> 
        // ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerText = `COMPRAR`;

        // Insertar elementos uno dentro del otro

        divCardBody.append(cardTitle,parrafo,button);
        divCard.append(divCardBody);
        divPadre.append(divCard);
        contenedor.append(divPadre);


    }
    
}

const listadoProductos = [
    new Producto("Lentejas",100,2),
    new Producto("Yogurt",200,5),
    new Producto("Remera",500,10),
    new Producto ("Buzo",1000,2),
]

renderizarProductos(listadoProductos);