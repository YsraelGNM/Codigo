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

let getAlumnoById = (id) => {
    return new Promise((resolve,reject)=>{
        
        for (let index = 0; index < alumnos.length; index++) {
            if (alumnos[index].id == id){
                resolve(alumnos[index]);
                return
            };
        }
        reject("error, no se encontro")
        
    })
    
}

getAlumnoById(1).then((objAlumno)=>{
    console.log(objAlumno);
}).catch((error)=>{
    console.log(error);
})

