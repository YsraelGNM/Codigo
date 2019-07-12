using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimerEntity
{
    class Program
    {
        static void Main(string[] args)
        {
            Exam1SSMDBEntities contex = new Exam1SSMDBEntities();
            Customer mCliente = contex.Customers.FirstOrDefault(item => item.Name == "CMG Information Services");
            Console.WriteLine(mCliente.Name);


            
        }
    }
}
