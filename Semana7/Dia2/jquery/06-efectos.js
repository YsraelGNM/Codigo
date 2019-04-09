$(function() {
    var btnOcultar = $("#btnOcultar");
    var cuadrado = $("#cuadrado");
    var btnMostrar = $("#btnMostrar");
    var btnToggle = $("#btnToggle");


    btnOcultar.click(function() {
        //cuadrado.hide('slow'); // Ó
        //cuadrado.fadeOut('slow'); // Ó
        cuadrado.slideUp('slow');
    })

    btnMostrar.click(function() {
        //cuadrado.show('slow'); // Ó
        //cuadrado.fadeIn('slow'); //Ó
        cuadrado.slideDown('slow');
    })

    btnToggle.click(function () { 
        //cuadrado.toggle('slow'); //Ó
        cuadrado.fadeToggle('slow');
    });



})