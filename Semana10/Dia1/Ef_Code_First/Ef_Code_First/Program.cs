using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ef_Code_First
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new ColegioContext();
            var alumno = new alumno { nombreAlumno = "Ysrael", apellidoAlumno="Núñez" };
            context.Alumnos.Add(alumno);
            context.SaveChanges();
        }
    }
}
