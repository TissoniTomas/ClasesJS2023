/**
 * 
 * GET
 * 
 */

// const urlBase = "https://rickandmortyapi.com/api/";

//  fetch( `${urlBase}character`)
// .then((response)=>{
//     console.log(response);
//     return response.json()
//     .then((responseJSON)=>{
//         const personajes = responseJSON.results;
//         for (const personaje of personajes){
//             console.log(personaje.name);
//         }
//     }
//     )
// })

/**
 * 
 * 
 * POST/PUT/DELETE
 * 
 */

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'NUEVO POST',
//         body:'BODY DEL NUEVO POST',
//         userId: 4,
//     }),

//     headers:{
//         'Content-type' : 'application/JSON',
//     },


// }).then((response=>{
//     return response.json();
// })).then((responseJson)=>{
//     console.log(responseJson);
// })

/**
 * 
 * 
 * RUTAS RELATIVAS
 * 
 */
async function obtenerProductos(){
    const response = await fetch('./mesas.json');
    const responseJson = await response.json();
// .then((response)=>{
//     return response.json();

// }).then((responseJSON)=>{
//     console.log(responseJSON);
// })
console.log(responseJson);
}

obtenerProductos();

console.log("asd");