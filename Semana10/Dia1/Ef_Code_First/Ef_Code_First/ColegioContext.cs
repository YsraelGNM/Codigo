using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ef_Code_First
{
    public class ColegioContext : DbContext
    {
        public ColegioContext() : base("name=conexion")
        {
            Database.SetInitializer<ColegioContext>(new DropCreateDatabaseIfModelChanges<ColegioContext>());
        }
        public DbSet<curso> Cursos { get; set; }
        public DbSet<alumno> Alumnos { get; set; }
    }
}