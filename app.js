const mostrarProductos = (productos) => { //creamos la funcion con el parametro de nuestro stock
const contenedorProductos = document.getElementById("producto-contenedor");//llamamos al contendor del html

    productos.forEach( producto => { // for que recorre el array
        const div = document.createElement("div"); //creamos el div
        div.classList.add("card"); // llamamos a la clase card del css
        //lo que va aparecen en nuestro sitio
        //card sacada de bootstrap
        div.innerHTML += `<div class="card" atyle="width= 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"> ${producto.nombre}</h5>
                                <p class="card-text"> descripcion: ${producto.desc}</p>
                                <p class="card-text"> precio: ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton ${producto.id}>Comprar</button>
                            </div>
                         </div> `
    
        //donde va a crear el div, necesitamos un padre para este nuevo hijo
        contenedorProductos.appendChild(div);

        //darle funcionalidad a nuestros botones, por id y lo llamamos con el getElementById

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', ()=> {
            
            alert(`se agrego el producto ${producto.nombre}`);
        })


    });

}
//llamamos a la funcion conel parametro productos
mostrarProductos(productos);

