using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.EFContext
{
    public class EFWebAPIContext : DBContext{
        public EFWebAPIContext(DbContextOptions<EFWebAPIContext> options) : base(options){

        }

        public DbSet<Author> Authors
    }
}
