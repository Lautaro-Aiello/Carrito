const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");

function llenarCarro(arrayCarrito){

    for(let producto of arrayCarrito){
        
        let row = document.createElement("tr");
        row.innerHTML= `<td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.subtotal}</td>
                        <td><button id="${producto.id}" class="botonEliminar">Eliminar</button></td>`

        tbody.appendChild(row);               

    }

}

llenarCarro(carrito);

let botonesEliminar = document.querySelectorAll(".botonEliminar");

botonesEliminar.forEach(elemento =>{
    elemento.addEventListener("click", eliminarProducto);
})

function eliminarProducto(evento){
    
    let index = carrito.findIndex(producto => producto.id == evento.target.id)

    carrito.splice(index, 1);

    evento.target.parentNode.parentNode.remove();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
