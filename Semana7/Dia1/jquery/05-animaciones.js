$(function(){
    var btnAnimar = $("#btnAnimar");
    var objetivo = $("#objetivo");
    var barra = $("#barra");

    btnAnimar.click(function() {
        //animate => recibe un JSON con las propiedades
        //de estilosen JavaScript y sus valores, 
        //adicionalmente, recibe el tiempo que durará la animación.
        objetivo.animate({borderRadius: '50%'},{duration: 3000,
        step: function(valor) {
            objetivo.html(`Cargando ${valor*2}%`);
            objetivo.css("borderRadius", `${valor/2}%`);
            barra.css("width", `${valor*2}px`);
            }
        });
    });









})