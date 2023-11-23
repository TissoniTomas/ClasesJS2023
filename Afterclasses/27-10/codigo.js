class Producto{
    constructor(nombre, categoria, precio,){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

const productos =[
    new Producto("Remera 1", "Ropa", 100),
    new Producto("Lechuga", "Verduras", 200),
    new Producto("Yogurt", "Lacteos", 500),
    new Producto("Buzo 3", "Ropa", 200),
    new Producto ("Arroz", "Legumbres", 700),
]

// Cargar nuestros productos al Front

const renderizarProductos = ()=>{
    const contenedor = document.getElementById("contenedor");
    console.log(contenedor);

    for(const producto of productos){
        const divPadre = document.createElement("div");
        divPadre.className ="col-12 col-sm-4";

        const divCard = document.createElement("div");
        divCard.className ="card";
        if(producto.categoria === "Ropa"){
            divCard.className += " border-5";
        }

        const divCardBody = document.createElement("div");
        divCardBody.className =" card-body";

        const h5 = document.createElement("h5");
        h5.className ="card-title";
        h5.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className ="card-text";
        p.innerHTML = `<strong> Precio: ${producto.precio}</strong>`;

        // Insertar elementos uno del otro
        divCardBody.append(h5, p);
        divCard.append(divCardBody);
        divPadre.append(divCard);
       
        contenedor.append(divPadre);

    }
}
// Funciones
function ordenarPorPrecio() {

    const productosOrdenados = listadoDeProductos.sort( (productoA, productoB) => {

        if(productoA.precio < productoB.precio) {
            return 1;
        } else if(productoA.precio > productoB.precio) {
            return -1;
        }

        return 0;
    });

    // Renderizo los productos
    renderizarProductos(productosOrdenados);
}

function inicializarSelect() {
    const select = document.getElementById("selectOrden");

    select.addEventListener("change", () => {

        const value = select.value;

        switch(value) {

            case 'precio':

                ordenarPorPrecio();

                break;

            case 'nombre':

                // Ordenamos por nombre...
                break;
        }
    });
}

function inicializarInput() {

    const input = document.getElementById("buscarProducto");

    input.addEventListener("keyup", () => {

        // Filtramos los productos por lo que puso el usuario en el input
        const value = input.value;

        const productosFiltrados = listadoDeProductos.filter( (producto) => {
            return producto
                .nombre
                .toLowerCase()
                .includes(
                    value.toLowerCase()
                );
        });

        // Renderizo los productos
        renderizarProductos(productosFiltrados);

    });
}

// Inicio del programa

renderizarProductos(productos);