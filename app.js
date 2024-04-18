const mostrarProductos = (productos) => {
	const contenedorProductos = document.getElementById("contenedor-producto");
	productos.forEach( producto => {
		const div = document.createElement("div");
		div.classList.add("card");
		div.innerHTML = ` 
                        <div class= card" style="width:18rem;">
                            <img src="${producto.img}" class= card-img-top" alt="..">
                            <div class="card-body">
                                <h5 class="cart-title"> ${producto.nombre}</h5>
                                <p class="cart-text"> descripcion: ${producto.nombre}</p>
                                <p class="cart-text"> precio: ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton ${producto.id}>compra</button>
                            </div>   
                        </div>  
        `;  
    });

};