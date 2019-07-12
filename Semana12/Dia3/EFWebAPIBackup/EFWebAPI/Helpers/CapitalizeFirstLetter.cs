using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Helpers
{
    public class CapitalizeFirstLetter : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (char.IsUpper(value.ToString(), 0))
                return ValidationResult.Success;
            else
                return new ValidationResult("La primera letra debe de ser Mayúscula.");
        }

    }
}
