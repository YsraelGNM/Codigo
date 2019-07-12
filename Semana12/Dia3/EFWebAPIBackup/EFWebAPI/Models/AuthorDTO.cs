using EFWebAPI.Entities;
using EFWebAPI.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Models
{
    public class AuthorDTO
    {
        public int ID { get; set; }
        [Required]
        [CapitalizeFirstLetter]
        [StringLength(50, ErrorMessage = "El campo nombre debe tener 50 caracteres")]
        public string name { get; set; }
        [Range(18, 110)]
        public int age { get; set; }
        [Url]
        public string website { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}
