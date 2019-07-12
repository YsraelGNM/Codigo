using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FirstWebAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthorsController : ControllerBase
  {
    private IRepository authors = new Repository();

    // private IRepository authors;

    // public AuthorsController(IRepository authors)
    // {
    //   this.authors = authors;
    // }

    //GET api/authors
    [HttpGet]
    public ActionResult<IEnumerable<Author>> Get()
    {
      return authors.GetAuthors();
    }

    // GET api/authors/5
    [HttpGet("{id}")]
    public ActionResult<Author> Get(int id)
    {
      var author = authors.GetAuthor(id);
      if (author == null)
        return NotFound();
      return Ok(author);
    }

    // POST api/values
    [HttpPost]
    public ActionResult Post([FromBody] Author author)
    {
      authors.AddAuthor(author);
      return Ok(authors);
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] Author author)
    {
      authors.UpdateAuthor(id, author);
      return Ok(authors);
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
      authors.RemoveAuthor(id);
      return Ok(authors);
    }
  }
}
