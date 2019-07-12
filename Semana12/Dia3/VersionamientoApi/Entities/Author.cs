using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Entities
{
   public class Author
   {
      public int ID { get; set; }
      public string name { get; set; }
   }
}
