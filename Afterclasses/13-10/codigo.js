// Funciones


const pedirCodigo = () =>{
    return prompt(
        "Ingrese el codigo del producto: 0001 - 10$ / 0002 - 20$ / 0003 - 30$ / 0004- 40$ / 0 - SALIR"
      );
    
}

const concatenarCodigo = (codigoProducto) => {
  if (codigosProducto !== "") {
    codigosProducto += ", ";
  }
  codigosProducto += codigoProducto;
};

function agregarNuevoProducto() {
  let codigoProducto = pedirCodigo();

  while (codigoProducto !== "0") {
    switch (codigoProducto) {
      case "0001":
        concatenarCodigo(codigoProducto);
        total += 10;

        break;

      case "0002":
        concatenarCodigo(codigoProducto);
        total += 20;

        break;

      case "0003":
        concatenarCodigo(codigoProducto);
        total += 30;

        break;

      case "0004":
        concatenarCodigo(codigoProducto);
        total += 40;

        break;

      default:
        alert("CODIGO INCORRECTO VUELVA A INTRODUCIRLO");
        break;
    }

    codigoProducto = pedirCodigo();
  }
}

const restarValorDelTotal = (monto) =>{
    if(monto > total){
        alert("El monto es mayor al total. Ingrese un monto menor")
    }
    else{
        total -= monto;
    }
}

function sacarProducto() {
  let codigoProducto = pedirCodigo();

  while (codigoProducto !== "0") {
    switch (codigoProducto) {
      case "0001":
          restarValorDelTotal(10);
        break;

      case "0002":
        restarValorDelTotal(20);
        break;

      case "0003":
        restarValorDelTotal(30);
        break;
        

      case "0004":
        restarValorDelTotal(40);
        break;

      default:
        alert("CODIGO INCORRECTO VUELVA A INTRODUCIRLO");
        break;
    }

    codigoProducto = pedirCodigo();
  }
}

const mostrarTotal = () => {
  alert(
    "Los productos ingresados son " +
      codigosProducto +
      " El total de los productos es: $ " +
      total
  );
};

const pedirOperacion = () =>{
     return prompt(
        "Que operacion desea realizar? 1- Ingresar nuevo producto / 2- Ver el total de los productos realizados / 3- Elminar productos / 0- SALIR"
      );
}



let codigosProducto = " ";
let total = 0;
let operacion = pedirOperacion();

while (operacion !== "0") {
  switch (operacion) {
    case "1":
      agregarNuevoProducto();
      break;

    case "2":
      mostrarTotal();
      break;



    case "3":
        sacarProducto();
        break;
      default:
      alert("Opcion Incorrecta");
      break;
  }
  operacion = pedirOperacion();
}

alert("Gracias por usar mi sistema");
