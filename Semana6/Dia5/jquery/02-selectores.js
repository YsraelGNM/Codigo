$(function () {
   //alert("Funciona"); 
   //Selectores
   ///Selector por Id
   var btnColor = $("#btnColor");
    ///Selector por Etiquetas
    console.log($("p"));
    $("p").html("Nuevo texto para todos.");
    $("p:eq(2)").html("Texto solo para el parrafo de indice 2.");

    btnColor.click(function () {
        $(this).html("Me hiciste click");
        $(this).css("border-radius","15px")
                .css("padding","10px");
        //añade la clase text-white a todos los elementos p
        $("p").addClass("text-white");
        
    })

    $("#btnClases").click(function () {
        $("p:eq(0)").addClass("btn")
                    .addClass("btn-primary");
        //borra la clase text-white a todos los elementos p
        $("p").removeClass("text-white")
    })
    
});