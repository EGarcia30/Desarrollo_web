const botonMenu = document.getElementById('botonMenu');
const listaMenu = document.getElementById('listaMenu');

botonMenu.addEventListener('click',() => {
    listaMenu.classList.toggle('mostrar')
});

listaMenu.addEventListener('click',() =>{
    listaMenu.className ="navegacion";
});