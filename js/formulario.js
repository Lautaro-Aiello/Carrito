

enviarFormulario()

function enviarFormulario(){
    const btn = document.getElementById("button");
    btn.addEventListener("click", () =>{
        submit()
    })
}


function submit() {
    
    fetch("https://formsubmit.co/ajax/lautaroaiello2345@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: `Email:`,
        name: `Nombre:`,
        message: `Mensaje:`
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
   

