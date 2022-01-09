let menu = document.querySelector('#menu');

let menu_bar = document.querySelector('#menu-bar');
//HARA LA animacion de mostrar el menu lateral
    menu_bar.addEventListener('click', function(){
        menu.classList.toggle('menu-toggle');
    })