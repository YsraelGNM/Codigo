using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context1 = new ProgramContext())
            {
                var estudiante = new Student { studentName = "Christian" };
                context1.Students.Add(estudiante);
                context1.SaveChanges();
            }
        }
    }
}
