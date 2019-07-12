using System.Collections.Generic;
using System.Linq;

public class Repository : IRepository
{
  public List<Author> Authors = new List<Author>()
  {
    new Author {ID=1, name = "Juan"},
    new Author {ID=2, name = "Crisgon"},
    new Author {ID=3, name = "Shakespeare"},
    new Author {ID=4, name = "Mark Douglas"}
  };

  public List<Author> AddAuthor(Author author)
  {
    Authors.Add(author);
    return Authors;
  }

  public Author GetAuthor(int id)
  {
    return Authors.FirstOrDefault(x => x.ID == id);
  }

  public List<Author> GetAuthors()
  {
    return Authors.ToList();
  }

  public List<Author> RemoveAuthor(int id)
  {
    var otherAuthor = Authors.FirstOrDefault(x => x.ID == id);
    Authors.Remove(otherAuthor);
    return Authors;
  }

  public List<Author> UpdateAuthor(int id, Author author)
  {
    var otherAuthor = Authors.FirstOrDefault(x => x.ID == id);
    otherAuthor.ID = author.ID;
    otherAuthor.name = author.name;
    return Authors;
  }
}