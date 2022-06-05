
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

let botones = document.querySelectorAll(".botonCompra");

botones.forEach(elementos =>{
    elementos.addEventListener("click", anadirAlCarrito)
})



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

    if(index == -1){
        const producto = new Producto(nombre,precio,imagen,id);
        carrito.push(producto);
    }else{
        carrito[index].cantidad++;
        carrito[index].subtotal = carrito[index].precio*carrito[index].cantidad;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))

    
}