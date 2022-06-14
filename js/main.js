
let carrito = [];

class Producto{
    constructor(nombre,precio,imagen,id,subtotal){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.cantidad=1;
        this.id=id;
        this.subtotal=precio;
    }
}


let talles = document.querySelectorAll(".talle");

talles.forEach((sizes) =>{
    sizes.addEventListener("click", ()=>{
        talles.forEach((sizes) =>{
            sizes.style.backgroundColor = "black";
            sizes.style.color = "white";
            sizes.style.fontWeight = "300";
        });
        sizes.style.backgroundColor = "white";
        sizes.style.color = "black";
        sizes.style.fontWeight = "300";
    });
});





let botones = document.querySelectorAll(".botonCompra");

botones.forEach(elementos =>{
    elementos.addEventListener("click", anadirAlCarrito)
})

function anadirAlCarrito(evento){

    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))

    if(carritoLocalStorage){
      carrito = carritoLocalStorage;
    }

    let index = carrito.findIndex(producto => producto.id == evento.target.parentNode.children[0].alt)

    let nombre = evento.target.parentNode.children[1].textContent;
    let precio = evento.target.parentNode.children[2].textContent;
    let imagen = evento.target.parentNode.children[0].src;
    let id = evento.target.parentNode.children[0].alt;
    let precioInt = parseFloat(precio.substring(1, precio.length)).toFixed(3)


    if (index == -1) {
        const producto = new Producto(nombre, precioInt, imagen, id);
        carrito.push(producto);
    } else {
        carrito[index].cantidad++;
        let SubTotal = carrito[index].precio * carrito[index].cantidad
        carrito[index].subtotal = SubTotal.toFixed(3);

    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    carritoNav(carrito);

    Toastify({
        text: "Articulo añadido",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#6b0000",
        }
    }).showToast();
    
}

function carritoNav(arrayCarrito){
    let textoCarrito = document.querySelector(".carrito");

    let totalProductos = 0;

    for(let producto of arrayCarrito){
        totalProductos += producto.cantidad;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `<p>Ver Carrito (${totalProductos})</p>`;

}

let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
if(carritoLocalStorage){
    carritoNav(carritoLocalStorage);
}

