var btnAbrirPopUp = document.getElementById("btn_comprar"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup"),
    precioCompra = document.getElementById("precioUnitario"),
    totalCompra = document.getElementById("totalCompra"),
    cantidad =document.getElementById("range"),
    btnConfirmaCompra = document.getElementById("btnConfirmaCompra"),
    btnCambios = document.getElementById("btnAplicarCambios"),
    popup2 = document.getElementById("popup2"),
    subtotal= document.getElementById("subTotal"),
    costoEnvio = document.getElementById("precioEnvio"),
    btnConfirmaCompra = document.getElementById("btnConfirmaCompra"),
    popup3 = document.getElementById("popup3"),
    overlay2 = document.getElementById("overlay2"),
    btnAceptar = document.getElementById("aceptar")

btnAbrirPopUp.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    popup2.classList.add('active');
    cambiarImagenJS();
    ObtenerTotalCompra();
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    popup2.classList.remove('active');

});

btnConfirmaCompra.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    popup2.classList.remove('active');
    overlay2.classList.add('active');
    popup3.classList.add('active')
});

btnAceptar.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup3.classList.remove('active')
});
   

function cambiarImagenJS(){
    document.getElementById("img_popup").src = document.getElementById("img_compra").src
}

function ObtenerTotalCompra(){
    var sub_total = Number(precioCompra.innerHTML)*cantidad.value
    var total = (Number(precioCompra.innerHTML)*cantidad.value) + Number(costoEnvio.innerHTML)
    totalCompra.innerHTML = String(total)
    subtotal.innerHTML = String(sub_total)
}

var inputs = document.getElementById("estandar")
inputs.addEventListener('click',function(){

        costoEnvio.innerHTML = 20
        var sub_total = Number(precioCompra.innerHTML)*cantidad.value
        var total = (Number(precioCompra.innerHTML)*cantidad.value) + Number(costoEnvio.innerHTML)
        totalCompra.innerHTML = String(total)
        subtotal.innerHTML = String(sub_total)
});

var inputs2 = document.getElementById("express")
inputs2.addEventListener('click',function(){

        costoEnvio.innerHTML = 50
        var sub_total = Number(precioCompra.innerHTML)*cantidad.value
        var total = (Number(precioCompra.innerHTML)*cantidad.value) + Number(costoEnvio.innerHTML)
        totalCompra.innerHTML = String(total)
        subtotal.innerHTML = String(sub_total)
});

cantidad.addEventListener('click', function(){
        var sub_total = Number(precioCompra.innerHTML)*cantidad.value
        var total = (Number(precioCompra.innerHTML)*cantidad.value) + Number(costoEnvio.innerHTML)
        totalCompra.innerHTML = String(total)
        subtotal.innerHTML = String(sub_total)
});


btnComprarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    popup2.classList.remove('active');

});

