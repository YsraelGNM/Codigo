var mDiv1 = document.getElementById("div1");
mDiv1.style.color = "#ff8821";
mDiv1.style.padding = "10px";
mDiv1.style.border = "1px solid red";

///Otras propiedades de los elementos
//clientWidth = obtiene el ancho del elemento
console.log(mDiv1.clientWidth);
console.log(mDiv1.clientHeight);
console.log(mDiv1.offsetTop);
//className => devuelve o setea el nombre de la clase que tiene el elemento.
////mDiv1.className = "rojo";
console.log(mDiv1.className);
console.log(mDiv1.classList);
//classList.add([nombre de la clase]) => agrega una clase al elemento.
mDiv1.classList.add("celeste");
//classList.remove([nombre de la clase]) => elimina una clase al elemento.
mDiv1.classList.remove("celeste");
//classcontains([nombre de la clase]) => devuelve true o false si contiene la clase
console.log(mDiv1.contains("rojo"));
//classList.toogle([nombre de la clase]) => si el elemento tiene el nombre de la clase, borra la clase, si no la tiene la agrega.
setInterval(() => {
    mDiv1.classList.toggle("rojo");
}, 2000);
//modificando su contenido
//innerHTML => declara o devuelve el contenido de un elemento
mDiv1.innerHTML = "Borrar datos";