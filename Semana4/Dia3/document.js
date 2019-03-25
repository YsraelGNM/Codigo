//el objeto document sirve para manipular cualquier elemento del DOM
//getElementById([id del elemento]);
var mdiv1 = document.getElementById("div1");
console.log(mdiv1);
//gatElementByClassName([nombre de la clase del/los elemento/s])
var mRojo = document.getElementsByClassName("rojo");
console.log(mRojo);
//getElementByTagName([nombre de la etiqueta del/los elemento/s])
var mDiv = document.getElementsByTagName("div");
console.log(mDiv);
//querySelector([selector como en css3]);
//obtiene un elemento que coincida con el selector, como si estariamos utilizando CSS3
var mIdDiv1 = document.querySelector("#div1");
console.log(mIdDiv1);
var mRojo = document.querySelectorAll(".rojo");
console.log(mRojo);

