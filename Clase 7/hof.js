// funciones de orden superior
// Funcion que retorna una funcion

function mayorQue(n) {
    return (m) => {
        return m > n;
    }

}

let mayorEdad = mayorQue(18);

console.log(mayorEdad(parseInt(prompt("Ingresa tu edad")))); // Retornara un booleano
