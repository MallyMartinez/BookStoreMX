var btnAbrirPopUp = document.getElementById("btn_comprar"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup")

btnAbrirPopUp.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    cambiarImagenJS();

});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

function cambiarImagenJS(){
    document.getElementById("img_popup").src = document.getElementById("img_compra").src
}




