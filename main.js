$(document).ready(function() {

    // * CAMBIO DE HEADER
    $(window).on('scroll', function() {
        let posiscion = $('#pr').offset();
        if($(window).scrollTop() >= posiscion.top){
            $('header').removeClass('transparente')
        } else{
            $('header').addClass('transparente')
        }
    });
    // offset(): Establece o devuelve las coordenadas de un elemento respecto al documento/web contenedor del mismo
    //.ON()  "ADJUNTA" UN CONTROLADOR DE EVENTOS
    


    //** ACCIONAMIENTO DEL MENU LATERAL
    $('#burger').click( function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    });  



    // * SMOOTH SCROLL
    $('a').on('click', function() {
        if(this.hash != ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    });    
    
    
});