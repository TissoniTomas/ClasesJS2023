/**
 * SPREAD DE ARRAYS
 */

// const nombres = [
//     "Matias",
//     "Gabriel",
//     "Camila",
//     "Pedro",
//     "GOnzalo",
// ];
//
// function mostrarNombres(nombre1, nombre2, nombre3, nombre4, nombre5) {
//
//     console.log(`Hola ${nombre1}`);
//     console.log(`Hola ${nombre2}`);
//     console.log(`Hola ${nombre3}`);
//     console.log(`Hola ${nombre4}`);
//     console.log(`Hola ${nombre5}`);
// }
//
// mostrarNombres(nombres[0], nombres[1], nombres[2], nombres[3]);
// mostrarNombres(...nombres);
//
// const numeros = [1, 2, 3, 4 ,5];
//
// console.log(Math.max(...numeros));

/**
 * SPREAD DE OBJETOS
 */

// const educacion = {
//     nombre: "Colegio 1",
//     carrera: "Matemática",
// }
//
// const persona = {
//     nombre: "Pedro",
//     apellido: "Rodriguez",
//     edad: 25,
//     sexo: "Masculino",
// };
//
// const persona2 = {
//     ...persona,
//     edad: 30,
// };
//
// const persona3 = {
//     ...persona,
//     ...educacion,
//     nombre: "Gabriel",
//     apellido: "Fernandez",
// }
//
// console.log(persona3);

/**
 * REST PARAMETERS
 */

// function mostrarNombres(saludo, saludo2, ...nombres) {
//
//     for(const nombre of nombres) {
//         console.log(`${saludo} ${saludo2} ${nombre}`);
//     }
// }
//
// mostrarNombres("Hola ", "que tal ", "Manuel", "Gonzalo", "Pedro", "Joaquin", "Camila", "Federico", "Hugo", "Braian", "German", "Agustin");

/** ************************************** */
/**
 * PROYECTO FINAL
 */
/** ************************************** */

// Clases

document.addEventListener("DOMContentLoaded", function(){

    class Asiento {
        constructor(id, precio = 20) {
            this.id = id;
            this.comprado = false;
        this.seleccionado = false;
        this.precio = precio;
    }
}

// Funciones
function setearTotalAsientosSeleccionados(asientosSeleccionados) {

    const totalAsientosSeleccionados = asientosSeleccionados.reduce( (acc, el) => {

        return acc + el.precio;

    }, 0);

    // Cambiamos el HTML
    spanTotalAsientosSeleccionados.innerText = `$${totalAsientosSeleccionados}`;
}

function comprarAsiento(asiento) {

    asiento.comprado = true;

    // Le ponemos al div del asiento la clase seleccionado
    const divAsiento = document.getElementById(`asiento-${asiento.id}`);
    divAsiento.classList.remove("seleccionado");
    divAsiento.classList.add("comprado");
}

function buscarAsientoEnLista(id) {

    let asientoEncontrado = null;

    for(const listaDeAsientos of asientos) {
        
        for(const asiento of listaDeAsientos) {
            
            if(asiento !== null && asiento.id === id) {
                asientoEncontrado = asiento;
            }
        }
    }
    
    return asientoEncontrado;
}

function obtenerAsientosComprados() {
    asientosComprados = JSON.parse(localStorage.getItem("asientosComprados")) || [];

    // Recorremos los asientos comprados
    for(const asientoComprado of asientosComprados) {
        
        // Buscamos el asiento en el listado de asientos
        const asiento = buscarAsientoEnLista(asientoComprado.id);
        
        if(asiento !== null) {
            
            asiento.comprado = true;
            
        }
        
    }
}

function comprarAsientos() {

    const asientosCompradosYSeleccionados = [
        ...asientosComprados,
        ...asientosSeleccionados,
    ];

    // Recorrer asientos seleccionados
    for(const asientoSeleccionado of asientosSeleccionados) {
        comprarAsiento(asientoSeleccionado);
    }
    
    // Limpiar lista de asientos seleccionados
    asientosSeleccionados = [];
    
    // Cargamos los asientos a localStorage
    localStorage.setItem("asientosComprados", JSON.stringify(asientosCompradosYSeleccionados));
    
    // Obtenemos los asientos comprados
    obtenerAsientosComprados();
    
    // Seteamos el total
    setearTotalAsientosSeleccionados(asientosSeleccionados);
}

function indiceAsientoSeleccionado(id) {
    return asientosSeleccionados.findIndex( (el) => {
        return el.id === id;
    });
}

function seleccionarAsiento(asiento) {
    
    if(asiento.comprado) {
        alert("ESTE ASIENTO NO SE PUEDE SELECCIONAR");
        return;
    }
    
    // Le ponemos al div del asiento la clase seleccionado
    const divAsiento = document.getElementById(`asiento-${asiento.id}`);
    
    // Agregamos el asiento a la lista
    const indexAsientoSeleccionado = indiceAsientoSeleccionado(asiento.id);
    if(indexAsientoSeleccionado !== -1) {
        
        // Seteamos el asiento a que no está seleccionado
        asiento.seleccionado = false;
        
        // Remover la clase
        divAsiento.classList.remove("seleccionado");
        
        // Sacar de la lista sientos seleccionados...
        asientosSeleccionados.splice(indexAsientoSeleccionado, 1);
        
    } else {
        
        // Seteamos el asiento a seleccionado
        asiento.seleccionado = true;
        
        // Agregamos el asiento a la lista de asientos seleccionados
        asientosSeleccionados.push(asiento);
        
        // Agregamos la clase
        divAsiento.classList.add("seleccionado");
    }

    // Seteamos el total de los asientos seleccionados
    setearTotalAsientosSeleccionados(asientosSeleccionados);
}

function obtenerAsientosJSON(){
    fetch('./asientos.json')
    .then((response)=>{
        return response.json();
        
    }).then((responseJSON)=>{
        for (const filaAsiento of responseJSON){
            const fila = [];

            for (const asiento of filaAsiento){
                if(asiento !== ""){

                    fila.push(new Asiento(asiento));
                }else{
                    fila.push("null");
                }
            }
            asientos.push(fila);
        }
        console.log(asientos);
    })
    
}
function renderizarAsientos(asientos) {

    // Limpio el contenedor
    const divAsientos = document.getElementById("asientos");
    divAsientos.innerHTML = "";
    
    // Recorrer los asientos
    for(const filaDeAsientos of asientos) {

        // Creamos el div para la fila de asientos
        const divFlex = document.createElement("div");
        divFlex.className = "d-flex align-items-center";
        
        for(const asiento of filaDeAsientos) {
            
            const divAsiento = document.createElement("div");
            divAsiento.className = "asiento";
            
            // Chequeo si es un asiento o un espacio vacío
            if(asiento !== null) {
                divAsiento.id = `asiento-${asiento.id}`;
                divAsiento.className += " seleccionable";
                
                // Chequear si está seleccionado o comprado
                if(asiento.comprado) {
                    divAsiento.className += " comprado";
                }

                if(asiento.seleccionado) {
                    divAsiento.className += " seleccionado";
                }
                
                // Evento de click
                divAsiento.addEventListener("click", () => {
                    
                    seleccionarAsiento(asiento);
                    
                });
            }
            
            // Agregamos el asiento al flex
            divFlex.append(divAsiento);
        }

        // Agregamos el flex al contenedor
        divAsientos.append(divFlex);
        
    }
    
}

// Inicio del programa
let asientosComprados = [];
let asientosSeleccionados = [];
const asientos =[]

const spanTotalAsientosSeleccionados = document.getElementById("totalAsientosSeleccionados");

const botonComprarAsientos = document.getElementById("comprarAsientos");
// botonComprarAsientos.addEventListener("click", comprarAsientos);

obtenerAsientosJSON()
obtenerAsientosComprados();

// Renderizar asientos
renderizarAsientos(asientos);
})