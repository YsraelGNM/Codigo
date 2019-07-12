using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    public class Course
    {
        [Key]
        public int idCourse { get; set; }
        public int courseName { get; set; }
    }
}
