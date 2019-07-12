using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webBikeStore.Auth
{
    public class Login
    {
        public string username { get; set; }
        public string password { get; set; }
        //public IFormFile picture { get; set; }
    }
}
