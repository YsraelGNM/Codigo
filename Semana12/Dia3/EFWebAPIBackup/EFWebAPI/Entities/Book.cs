using EFWebAPI.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Entities
{
   public class Book
   {
      public int ID { get; set; }

      [Required]
      [CapitalizeFirstLetter]
      public string title { get; set; }

      public Author Author { get; set; }
   }
}
