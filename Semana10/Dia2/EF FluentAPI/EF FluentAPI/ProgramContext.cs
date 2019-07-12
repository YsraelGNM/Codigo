using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    class ProgramContext : DbContext
    {
        public ProgramContext() : base ("SchoolProgram")
        {
            Database.SetInitializer<ProgramContext>
                (new DropCreateDatabaseIfModelChanges<ProgramContext>());
        }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("school");
            
            //base.OnModelCreating(modelBuilder);
        }
    }
}
