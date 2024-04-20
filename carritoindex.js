//lo que tenemos que hacer crear el archivo, la funcion , decir donde vanmos a guardar los productos
//declaramos un array vacio que va a ser nuestra contante

const carritoDeCompras =[];

const carritoIndex = (productoId) => {
    const contendorCarrito = document.getElementById("carrito-contenedor"); // esta en nuestro modal
    //vamos a buscar dentro de nuestro array, si coincide con lo que hay en array se renderice en nuestra funcion
    const renderProductosCarrito = () => {
        let producto = productos.find( producto => producto.id == producto.id);
            //vamos a trabajar con nuesstro carrito de compras
            carritoDeCompras.push(producto);

            producto.cantidad = 1;

            //creamos un div con el createElement dl div
        
            let div = document.createElement("div");
            div.classList("productoCarrito");
            div.innerHTML = `<p> ${producto.nombre}</p>
                             <p> precio: ${producto.precio}</p>
                             <p id="cantidad ${producto.id}"> cantidad: ${producto.cantidad}</p>
                             <button id="eliminar ${producto.id}" class="boton-eliminar" <i class="fa-solid fa-trash-can"></i> >Eliminar</button>

            `
            //tomamos el ontenedor carrito y hace el appenChild

            contendorCarrito.append(div);
    }

    renderProductosCarrito()
}

