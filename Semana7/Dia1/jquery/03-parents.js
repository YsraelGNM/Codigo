$(function () {
    console.log($("li.item-2").find("li"));
    
    $("li.item-2").find("li").css("color","red");
    $("li.item-2").find("li").parent().parent().css("border","1px solid green");
})