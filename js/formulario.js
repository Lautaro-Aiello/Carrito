

enviarFormulario()

function enviarFormulario(){
    const btn = document.getElementById("button");
    btn.addEventListener("click", () =>{
        submit()
    })
}


function submit() {
    const mail = document.getElementById("mail").value;
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    
    Swal.fire({
        title: 'Genial!',
        text: 'Mensaje enviado!',
        icon: 'success',
        confirmButtonText: 'Cool',
        showConfirmButton: false,

    })

    
    fetch("https://formsubmit.co/ajax/lautaroaiello2345@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: `${mail}`,
        name: `${nombre}`,
        message: `${mensaje}`
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

}
   

