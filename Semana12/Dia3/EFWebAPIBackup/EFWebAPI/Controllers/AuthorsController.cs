using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EFWebAPI.EFContext;
using EFWebAPI.Entities;
using EFWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace EFWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly EFWebAPIContext context;
        private readonly IMapper mapper;

        public AuthorsController(EFWebAPIContext context, IMapper mapper)
        {
            this.context = context;
        }

        [HttpGet("relacionar/{idAuthor}/{idBook}")]
        public ActionResult<Book> Relacionar(int idAuthor, int idBook)
        {
            var author = context.Authors.Find(idAuthor);
            var book = context.Books.Find(idBook);
            book.Author = author;
            context.Entry(book).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(book);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Author author)
        {
            context.Add(author);
            context.SaveChanges();
            return new CreatedAtRouteResult("GetAuthor", new { id = author.ID }, author);
        }

        [HttpGet("{id}", Name = "GetAuthor")]
        public ActionResult<AuthorDTO> Get(int id)
        {
            var author = context.Authors.Find(id);
            var authorDTO = mapper.Map<AuthorDTO>(author);
            if (author == null)
                return BadRequest(id);
            return Ok(authorDTO);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Author>> Get()
        {
            return context.Authors.Include(x => x.Books).ToList();
        }



        [HttpPut]
        public ActionResult Put([FromBody] Author author)
        {
            // if (author == null)
            //   return BadRequest();

            context.Entry(author).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpPatch("{id}")]
        public async Task<ActionResult> Patch (int id,[FromBody] JsonPatchDocument<Author> patchDocument)
        {
            if (patchDocument == null)
                return BadRequest();
            var author = await context.Authors.FirstOrDefaultAsync(x => x.ID == id);
            if (author == null)
                return NotFound();

            patchDocument.ApplyTo(author, ModelState);
            if (TryValidateModel(author))
            {
                await context.SaveChangesAsync();
                return NoContent();
            }
            else
                return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var author = await context.Authors.FirstOrDefaultAsync(x => x.ID == id);
            if (author == null)
                return BadRequest(ModelState);
            context.Authors.Remove(author);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("UpdateName")]
        public ActionResult Put([BindRequired]int id, [BindRequired] string newName)
        {
            var author = context.Authors.Find(id);
            if (author == null)
                return BadRequest();

            author.name = newName;
            context.Entry(author).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
    }
}