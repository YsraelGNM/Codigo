using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    public class Student
    {
        [Key]
        public int idStudent { get; set; }
        public string studentName { get; set; }
        public DateTime? birth { get; set; }
        public decimal weight { get; set; }
        public decimal height { get; set; }
    }
}
