document.addEventListener('DOMContentLoaded', () =>{

    let  nuevoH1 = document.createElement('h1');
    nuevoH1.textContent = 'FIN DEL JUEGO';
    nuevoH1.classList.add('mover-desde-abajo');

    let titulo = document.getElementById("titulo");
    titulo.appendChild(nuevoH1);

    requestAnimationFrame(() =>{
        nuevoH1.classList.add('mostrar');
    });
});



