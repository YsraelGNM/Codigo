using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ef_Code_First
{

    [Table("tablaAlumno",Schema = "administracion")]
    public class alumno
    {
        [Key]
        [Column("alumnoID", Order = 0)]
        public int Id_alumno { get; set; }
        [Column("Nombre de Alumno", Order = 5)]
        public string nombreAlumno { get; set; }
        [Required]
        [Index]
        [MaxLength(100)]
        public string apellidoAlumno { get; set; }
        [Column("Nació", Order = 2, TypeName = "DateTime2")]
        public DateTime? fechaNacimiento { get; set; }
        [NotMapped]
        public decimal altura { get; set; }
        //public decimal peso { get; set; }
        private decimal mPeso;
        public decimal Peso
        {
            get { return mPeso; }
            //set { mPeso = value; }
        }
        [Timestamp]
        public Byte[] RowVersion { get; set; }
        public curso Curso { get; set; }
    }
}
