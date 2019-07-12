using webBikeStore.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using System.Web;
using System.Web.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace webBikeStore.Controllers
{
   public class AuthController : ControllerBase
   {
      private readonly UserManager<UserPhoto> _userManager;
      private readonly IConfiguration _configuration;

      public AuthController(UserManager<UserPhoto> userManager, IConfiguration configuration)
      {
         _userManager = userManager;
         _configuration = configuration;
      }

      //// /register
      //[Route("register")]
      //[HttpPost]
      //public async Task<ActionResult> InsertUser([FromBody] Register model)
      //{
      //      string s;
      //      using (var ms = new MemoryStream())
      //      {
      //          model.picture.CopyTo(ms);
      //          var fileBytes = ms.ToArray();
      //          s = Convert.ToBase64String(fileBytes);
      //      }

      //      var user = new UserPhoto
      //  {
      //      Email = model.email,
      //      UserName = model.email,
      //      picture = s,
      //      SecurityStamp = Guid.NewGuid().ToString()
      //  };
      //   var result = await _userManager.CreateAsync(user, model.password);
      //   if (result.Succeeded)
      //   {
      //      await _userManager.AddToRoleAsync(user, "User");
      //   }
      //   return Ok(new { Username = user.UserName });
      //}


        // /register
        [Route("register")]
        [HttpPost]
        public async Task<ActionResult> InsertUser(Register model)
        {
            string s;
            using (var ms = new MemoryStream())
            {
                model.picture.CopyTo(ms);
                var fileBytes = ms.ToArray();
                s = Convert.ToBase64String(fileBytes);
            }

            var user = new UserPhoto
            {
                Email = model.email,
                UserName = model.email,
                picture = s,
                SecurityStamp = Guid.NewGuid().ToString()
            };
            var result = await _userManager.CreateAsync(user, model.password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "User");
            }
            return Ok(new { Username = user.UserName});
        }



        [Route("login")] // /login
      [HttpPost]
      public async Task<ActionResult> Login([FromBody] Login model)
      {
         var user = await _userManager.FindByNameAsync(model.username);
         if (user != null && await _userManager.CheckPasswordAsync(user, model.password))
         {
            var claim = new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName)
                };
            var signinKey = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));

            int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInMinutes"]);

            var token = new JwtSecurityToken(
              issuer: _configuration["Jwt:Site"],
              audience: _configuration["Jwt:Site"],
              expires: DateTime.UtcNow.AddMinutes(expiryInMinutes),
              signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
            );

            return Ok(
              new
              {
                 message = "ok",
                 token = new JwtSecurityTokenHandler().WriteToken(token),
                 expiration = token.ValidTo,
                 Picture = user.picture,
                 Username = user.UserName
              });
         }
         return Ok(
             new
             {
                 message = "Bad"
             }
             );
      }









        [Route("image")]
        [HttpPost]
        public async Task<string> Post(Register files)
        {
            if (files.picture.Length > 0)
            {
                try
                {
                    using (var ms = new MemoryStream())
                    {
                        files.picture.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        string s = Convert.ToBase64String(fileBytes);
                    }
                    return "Ok";
                }
                catch (Exception ex)
                {
                    return ex.ToString();
                }
            }
            else
            {
                return "Unsuccessful";
            }

        }




    }
}
