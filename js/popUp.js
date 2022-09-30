var btnAbrirPopUp = document.getElementById("btn_comprar"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup"),
    precioCompra = document.getElementById("precioUnitario"),
    totalCompra = document.getElementById("totalCompra"),
    cantidad =document.getElementById("range"),
    btnConfirmaCompra = document.getElementById("btnConfirmaCompra"),
    btnCambios = document.getElementById("btnAplicarCambios");

btnAbrirPopUp.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    cambiarImagenJS();
    ObtenerTotalCompra();
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');

});

btnConfirmaCompra.addEventListener('click', function(){
    
});

btnCambios.addEventListener('click',function(){
    ObtenerTotalCompra();
});
   

function cambiarImagenJS(){
    document.getElementById("img_popup").src = document.getElementById("img_compra").src
}

function ObtenerTotalCompra(){
    var total = Number(precioCompra.innerHTML)*cantidad.value
    totalCompra.innerHTML = String(total)
}

