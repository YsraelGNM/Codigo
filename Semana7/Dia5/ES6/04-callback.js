let alumnos = [

    {
        id:1,
        nombre: "Ysrael",
        edad: 41
    },
    {
        id:2,
        nombre: "Carlos",
        edad: 25
    },
    {
        id:3,
        nombre: "Maria",
        edad: 14
    },
    {
        id:4,
        nombre: "Javier",
        edad: 21
    }
]

let getAlumnoById = (id,callback) => {
    for (let index = 0; index < alumnos.length; index++) {
        if (alumnos[index].id == id){
            callback(null,alumnos[index]);
            return
        };
    }
    callback("error, no se encontro",null)
}

getAlumnoById(30,(error,objAlumno)=>{
    if(error)
        console.log(error);
    else
        console.log(objAlumno);
})

