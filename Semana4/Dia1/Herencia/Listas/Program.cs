using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Listas
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Ejemplo> listaEjemplo = new List<Ejemplo>();
            Ejemplo ej = new Ejemplo(56);
            listaEjemplo.Add(ej);
            listaEjemplo.ForEach(imprimir);
        }

        public static void imprimir(Ejemplo ej)
        {
            Console.WriteLine();
            Console.Write(ej.getA().ToString());
            Console.WriteLine();
        }

    }

    class Ejemplo
    {
        int a;

        public Ejemplo(int a)
        {
            this.a = a;
        }
        public int getA()
        {
            return a;
        }
    }
}
