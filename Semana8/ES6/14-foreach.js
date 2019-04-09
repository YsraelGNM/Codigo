let arreglo = [{
    nombre:"Ysrael",
    apellido:"Nuñez"
},
{
    nombre:"Paola",
    apellido:"Nuñez"
},
{
    nombre:"Luis",
    apellido:"Nuñez"
},

]

arreglo.forEach((elemento,index)=>{
    console.log(index);
    console.log(elemento.nombre + " " + elemento.apellido);
})
