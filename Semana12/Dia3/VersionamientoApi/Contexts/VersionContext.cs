﻿using EFWebAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VersionamientoApi.Contexts
{
    public class VersionContext :  DbContext
    {
        public VersionContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}
