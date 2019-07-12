using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace webBikeStore.Auth
{
    public partial class UserPhoto: IdentityUser
    {
        public String picture { get; set; }
    }
}
