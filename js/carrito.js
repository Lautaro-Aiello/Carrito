const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody")

function llenarCarro(arrayCarrito){

    for(let producto of arrayCarrito){
        
        let row = document.createElement("tr");
        row.innerHTML= `<td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>$${producto.subtotal}</td>
                        <td>Eliminar</td>`

        tbody.appendChild(row);               

    }

}

llenarCarro(carrito);