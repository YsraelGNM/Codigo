using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationJWT.DbContexts
{
   public class WebAPIAuthContext : IdentityDbContext
   {
      public WebAPIAuthContext(DbContextOptions<WebAPIAuthContext> 
         options) : base (options)
      {

      }

      protected override void OnModelCreating(ModelBuilder builder)
      {
         base.OnModelCreating(builder);

         builder.Entity<IdentityRole>().HasData(
            new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
            new { Id = "2", Name = "User", NormalizedName = "USER" }
            );
      }
   }
}
