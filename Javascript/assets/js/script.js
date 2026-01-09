/*
$(function(){
});
*/


$(document).ready(function(){
// etiqueta, clase, id
//on -> event listener
$("button").on("click", function() {
    $("h1").hide();
});

$('p').click( function(e) {
// asociamos la animacion al click en un elemento <a>  
    $('html, body').animate({
        scrollTop: $("#seccionContacto").offset().top  
    }, 2000);
} );

//De efecto 
//$().click(function(){});
$('#btn1').click(function(){
    $('#parrafo1').hide();
});
$('#btn2').click(function(){
    $('#parrafo1').show();
    $('h1').show();
});
$('#btn3').click(function(){
    $('#parrafo1').toggle();
    $('h1').toggle();
});
//FadeIn y FadeOut
$('#btn4').click(function(){
    //$('#parrafo2').fadeIn();
    $('#parrafo2').fadeIn(5000);
});
$('#btn5').click(function(){
    $('#parrafo2').fadeOut("slow");//fast
});
$('#btn6').click(function(){
    $('#parrafo2').fadeToggle(3000);
});
//slide
$('#btn7').click(function(){
    $('#parrafo3').slideDown();
});
$('#btn8').click(function(){
    $('#parrafo3').slideUp();
});
$('#btn9').click(function(){
    $('#parrafo3').slideToggle();
});

/*CSS - addClass(), removeClass(), css() toggleClass()*/
$('#btn10').click(function(){
    $('p').addClass("color_text");
    $('#parrafo4').addClass("color_fondo");//revisar por que no surge efecto
});
$('#btn11').click(function(){
    $('#parrafo4').removeClass("color_text");
});
$('#btn12').click(function(){
    $('#parrafo4').css("color","red");//solo 1 style
    $('#parrafo4').css({"font-size":"50px", "margin":"15px","border":"1px solid"});//mas de un style
});

/**Manipulacion del html after, before, append, val, ...text, attr, prepend */
let cont_parrafos=5;
$('#btn13').click(function(){
    cont_parrafos++;//se incrementa en 1
    $('#parrafo5').after('<p id="parrafo'+ cont_parrafos+'">Parrafo con after</p>');

});
$('#btn14').click(function(){
    cont_parrafos++;//se incrementa en 1
    $('#parrafo5').before('<p id="parrafo'+ cont_parrafos+'">Parrafo con Before</p>');

});
$('#btn15').click(function(){//append adiciona a posterior dentro del elemento pivote
    $('#parrafo5').append('<b><i><u>texto con append</u></i></b>');
});

$('#btn16').click(function(){//elimina y reemplaza todo
    $('#seccionContacto').html('<h2>Un nuevo titulo con html</h2>');
    $('#seccionContacto').append('<p id="parrafo'+ cont_parrafos+'">Parrafo con Append</p>');
});

$('#btn17').click(function(){
    const nombre = $('#nombre').val();//obtener el dato ingresado en el input
    $('#seccionContacto').append('Nombre:' + nombre);
});

$('#btnRemove').click(function(){
    $( ".hello" ).remove();
});
//fin document ready
});