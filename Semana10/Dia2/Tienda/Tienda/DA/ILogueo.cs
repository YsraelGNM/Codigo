using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tienda.DA
{
    public interface ILogueo
    {
        Persona GetById(string user_name);
    }
}
