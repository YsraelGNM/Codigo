interface iAlumno{
    nombre:string;
    apellido:string;
    getNombreCompleto():string;
}

class Alumno implements iAlumno{
    nombre:string = "";
    apellido:string = "";
    getNombreCompleto():string{
        return "Ysrael Nuñez"
    }
}