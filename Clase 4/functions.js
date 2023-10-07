function enviarBienvenida (){
    let nombre = prompt("Buenos dias usuario");
    alert ("Te damos la bienvenida compi")
}
 // Declaro la funcion pero no se ejecutara hasta que la solicite

// Invoco la funcion

enviarBienvenida();
enviarBienvenida();

function enviarDespedida (usuario){
    alert ("Gracias por participar, " +usuario);
}

enviarDespedida ("Tomasito");
// String entre parentesis declarado despues, sera el que se introduzca bajo el parametro declarado.

let usu = prompt("Ingrese su nombre de usuario")
// Al ingresar usu como prompt en la function y utilizando la variable como parametro de "usuario", puedo despedir al usuario cuando ingresa un valor 
enviarDespedida (usu);

function calcularIva (precio){
    let iva = precio * 0.21
    alert ("El IVA de " + precio +" es " + iva)
}

let precioIva = prompt("Ingrese el monto del producto a fin de calcular el IVA")
calcularIva(precioIva);

function autenticarUsuario (user, password){
    if ((user === "pepe") && (password === "1234")){
        return true;
    } else {
        return false;
    }    

}

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña")

let autenticado = autenticarUsuario(usuario, contrasenia); 
// Las variables booleanas (true, false) deben ser alojadas en otra variable para que muestren su resultado en el exterior de la funcion


console.log(autenticado);

if(autenticado){
    alert("Bienvenido maquinola")
}else{
    alert("No te veo cara conocida compa no te juno")
}