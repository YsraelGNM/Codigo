using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFWebAPI.EFContext;
using EFWebAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFWebAPI.Controllers
{
   [Route("api/[controller]")]
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
      public string Get(int id)
      {
         return "value";
      }

      // POST api/<controller>
      [HttpPost]
      public ActionResult<IEnumerable<Book>> Post([FromBody]Book book)
      {
         context.Books.Add(book);
         context.SaveChanges();
         return Ok(book);

      }

      [HttpGet("GetAuthor/{name}")]
      public async Task<ActionResult<Author>> GetAuthor(string name)
      {
         var book = await context.Books.Include(x => x.Author)
            .Where(x => x.Title.Contains(name)).FirstOrDefaultAsync();
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
