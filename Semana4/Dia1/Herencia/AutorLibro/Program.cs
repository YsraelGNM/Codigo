using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutorLibro
{
    class Program
    {
        static void Main(string[] args)
        {
            Autor elAutor = new Autor("A","a♦gmail.com",'m');
            Libro miLibro = new Libro("Hola",20,elAutor);
        }
    }

    class Autor
    {
        string _nombre;
        string _email;
        char _genero;

        public string Nombre
        {
            get
            {
                return _nombre;
            }

            set
            {
                _nombre = value;
            }
        }

        public string Email
        {
            get
            {
                return _email;
            }

            set
            {
                _email = value;
            }
        }

        public char Genero
        {
            get
            {
                return _genero;
            }

            set
            {
                _genero = value;
            }
        }

        public Autor (string nombre, string email, char genero)
        {
            this.Nombre = nombre;
            this.Email = email;
            this.Genero = genero;
        } 
    }

    class Libro
    {
        string _titulo;
        int _precio;
        Autor _autor;

        public string Titulo
        {
            get
            {
                return _titulo;
            }

            set
            {
                _titulo = value;
            }
        }

        public int Precio
        {
            get
            {
                return _precio;
            }

            set
            {
                _precio = value;
            }
        }

        internal Autor Autor
        {
            get
            {
                return _autor;
            }

            set
            {
                _autor = value;
            }
        }

        public Libro(string Titulo, int Precio, Autor Autor)
        {
            this.Titulo = Titulo;
            this.Precio = Precio;
            this.Autor = Autor;
        }
    }
}
