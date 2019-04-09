$(function(){
    //var cuadrado = $(".cuadradito")[0]; // asi saca el objeto en forma de javascript
    var cuadrado = $(".cuadradito:eq(0)"); // asi saca el objeto en forma de javascript    
    var cuadrado2 = $(".cuadradito2:eq(0)");
    var bolita = $(".bolita:eq(0)");
    var input = $("#nombre");
    var body = $("body:eq(0)");
    // //javascript nativo
    // cuadrado.addEventListener("mouseover",function () {
        
    // })

    // cuadrado.onmouseover = function(){};

    //j query
    cuadrado.mouseover(function() {
        $(this).css("border-radius","50%");
    })
    cuadrado.mouseout(function() {
        $(this).css("border-radius","0%");
    })

    //hover recibe dos funciones, una para mouseover
    //y la otra para mouseout;

    cuadrado2.hover(function() {
        $(this).css("transform","rotate(50deg)");
    },function() {
        $(this).css("transform","rotate(0deg)");
    })

    bolita.click(function() {
        var altura = $(this).css("height");
        altura = +altura.split("p")[0];
        altura = altura + 3;
        $(this).css("height",`${altura}px`);
        $(this).css("width",`${altura}px`);        
    })

    let miFocus = function() {
        $(this).css("outline","none");
        $(this).css("border","2px solid pink");
        $(this).css("border-radius","8px");
    };

    input.focus(miFocus);

    let miBlur = function() {
        $(this).css("outline","none");
        $(this).css("border","2px solid green");
        $(this).css("border-radius","0px");
    };

    input.blur(miBlur);

    body.mousemove(function(evento) {
        let otrabolita = document.createElement("div");
        otrabolita.setAttribute("class","bolita");
        otrabolita.style.position = "absolute";
        otrabolita.style.left = `${evento.clientX}px`;
        otrabolita.style.top = `${evento.clientY}px`;
        $(this).append(otrabolita);
    })

})