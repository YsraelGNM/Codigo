using System.Collections.Generic;

public interface IRepository
{
  List<Author> GetAuthors();
  Author GetAuthor(int id);
  List<Author> AddAuthor(Author author);
  List<Author> UpdateAuthor(int id, Author author);
  List<Author> RemoveAuthor(int id);
}