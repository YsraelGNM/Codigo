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

let cursos = [

    {
        id:1,
        cursos:['POO','DB','IA'],
    },
    {
        id:2,
        cursos:['Redes','DB','IA'],
    },
    {
        id:3,
        cursos:['POO','Redes','IA'],
    },
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

let getCursosByIdAlumno = (objAlumno, callback) =>{
    for (let index = 0; index < cursos.length; index++) {
        if (cursos[index].id == objAlumno.id){
            callback(null,cursos[index]);
            return
        };
    }
    callback("error, no se encontro",null)
}

getAlumnoById(1,(error,objAlumno)=>{
    if (error){
        console.log(error);
    }else{
        getCursosByIdAlumno(objAlumno,(error,objCursos)=>{
            if (error){
                console.log(`El alumno ${objAlumno}`);
                console.log(`No tiene Cursos registrados.`);
                console.log(error);
            }else{
                console.log(`El alumno encontrado`);
                console.log(objAlumno);
                console.log(`Cursos encontrados.`);
                console.log(objCursos);
            }
        })
    }
})
