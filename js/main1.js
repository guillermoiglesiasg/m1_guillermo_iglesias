//Código javascript y jquery
$(function(){

    $(".boton1").click(function () {
        window.location.href = "Product-view.html";
    });   

    $(".boton2").click(function () {
        window.location.href = "Product-edit.html";
    });   

    $(".boton3").click(function () {

        // confirm nos permite mostrar un alert para que no se borre directamente sin que se pulse aceptar
        if (confirm("¿Está seguro de que desea eliminar este producto?")) {
            // Ocultamos la fila a la que pertecene el botón pulsado
            // Con this accedemos al elemento pulsado
            // con parent accedemos al elemento superior
            $(this).parent().parent().hide();
        }
        return false;


    });


    $("#bot-vol").click(function () {
        window.location.href = "Product-list.html";
    });   


    $("#bot-edi").click(function () {
        window.location.href = "Product-edit.html";
    });   

    $("#bot-bor").click(function () {

        // confirm nos permite mostrar un alert para que no se borre directamente sin que se pulse aceptar
        if (confirm("¿Está seguro de que desea eliminar este producto?")) {
            // Ocultamos la fila a la que pertecene el botón pulsado
            // Con this accedemos al elemento pulsado
            // con parent accedemos al elemento superior
            $(this).parent().parent().parent().hide();
        }
        return false;


    });

    $("#bot-volv").click(function () {
        window.location.href = "Product-list.html";
    });   

    $("#bot-borr").click(function () {

        // confirm nos permite mostrar un alert para que no se borre directamente sin que se pulse aceptar
        if (confirm("¿Está seguro de que desea eliminar este producto?")) {
            // Ocultamos la fila a la que pertecene el botón pulsado
            // Con this accedemos al elemento pulsado
            // con parent accedemos al elemento superior
            $(this).parent().parent().parent().parent().hide();
        }
        return false;


    });



    
  
}); 