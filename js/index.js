// Escribe tu codigo JS acá

let modal = document.querySelector('.modal')

const envioFormulario=(event)=> {
    event.preventDefault();
    let nombreApellido=document.querySelector('#floatingName').value
    console.log(nombreApellido)
    let email=document.querySelector('#floatingInput').value
    console.log(email)
    let comentario=document.querySelector('#floatingTextarea').value
    console.log(comentario)

    modal.classList.toggle('modal-header')

    const infoNombre=document.querySelector('#data-nombre')
    infoNombre.textContent=nombreApellido;
    const infoEmail=document.querySelector('#data-email')
    infoEmail.textContent=email;
    const infoComent=document.querySelector('#data-mensaje')
    infoComent.textContent=comentario;    
}

const cierreFormulario=()=>{
    modal.classList.toggle('modal-header')
}
