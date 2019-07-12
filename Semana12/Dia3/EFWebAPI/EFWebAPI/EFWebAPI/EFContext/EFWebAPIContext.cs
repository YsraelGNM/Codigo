using EFWebAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.EFContext
{
   public class EFWebAPIContext : DbContext
   {
      public EFWebAPIContext(DbContextOptions<EFWebAPIContext> options):
         base(options)
      {

      }

      public DbSet<Author> Authors { get; set; }
      public DbSet<Book> Books { get; set; }

   }
}
