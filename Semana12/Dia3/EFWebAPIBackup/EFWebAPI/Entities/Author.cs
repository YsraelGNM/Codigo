using EFWebAPI.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Entities
{
   public class Author : IValidatableObject
   {
      public int ID { get; set; }
      [Required]
      [CapitalizeFirstLetter]
      [StringLength(50, ErrorMessage = "El campo nombre debe tener 50 caracteres")]
      public string name { get; set; }
      [Range(18,110)]
      public int age { get; set; }
      //[CreditCard]
      public string creditCard { get; set; }
      [Url]
      public string website { get; set; }

      public ICollection<Book> Books { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!char.IsUpper(name.ToString(), 0))
                yield return new ValidationResult("La primera letra debe de ser Mayúscula.");
        }
    }
}
