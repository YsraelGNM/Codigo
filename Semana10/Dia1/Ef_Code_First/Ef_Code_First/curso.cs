using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ef_Code_First
{
    [Table("tablaCurso", Schema = "administracion")]
    public class curso
    {
        public int cursoID { get; set; }
        public string nombreCurso { get; set; }
        public string anio { get; set; }
        public ICollection<alumno> Alumnos { get; set; }
    }
}
