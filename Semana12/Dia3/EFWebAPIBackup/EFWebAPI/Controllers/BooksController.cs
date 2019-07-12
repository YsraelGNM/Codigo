using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFWebAPI.EFContext;
using EFWebAPI.Entities;
using EFWebAPI.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFWebAPI.Controllers
{
   [Route("api/[controller]")]
   //[Authorize]
   public class BooksController : Controller
   {

      private readonly EFWebAPIContext context;
      public BooksController(EFWebAPIContext context)
      {
         this.context = context;
      }

      // GET: api/<controller>
      [HttpGet]
      public ActionResult<IEnumerable<Book>> Get()
      {
         return context.Books.Include(x=>x.Author).ToList();
      }

      // GET api/<controller>/5
      [HttpGet("{id}")]
      [ResponseCache(Duration = 10)]
      //[Authorize] //Solo usuarios autorizados pueden acceder a este metodo, tambien sirve arriba para la clase
      [ServiceFilter(typeof(MyActionFilter))]
      public string Get(int id)
      {
         return DateTime.Now.Second.ToString();
      }

      // POST api/<controller>
      [HttpPost]
      public ActionResult Post([FromBody]Book book)
      {
         context.Books.Add(book);
         context.SaveChanges();
         return Ok(book);

      }

      [HttpGet("GetAuthor/{name}")]
      public async Task<ActionResult<Author>> GetAuthor(string name)
      {
         var book = await context.Books.Include(x => x.Author)
            .Where(x => x.title.Contains(name)).FirstOrDefaultAsync();
         if (book == null || book.Author == null )
            return BadRequest();
         return Ok(book.Author);
      }

      // PUT api/<controller>/5
      [HttpPut("{id}")]
      public void Put(int id, [FromBody] string value)
      {
      }

      // DELETE api/<controller>/5
      [HttpDelete("{id}")]
      public void Delete(int id)
      {
      }
   }
}
