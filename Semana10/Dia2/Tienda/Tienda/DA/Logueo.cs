using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tienda.DA
{
    public class Logueo : ILogueo
    {
        public Persona GetById(string user_name)
        {
            Persona result = null;
            try
            {
                var context = new TiendaEntities();
                result = (from c in context.Persona where c.user_name == user_name select c).FirstOrDefault();
            }
            catch (Exception)
            {
                throw new NotImplementedException();
                throw;
            }
            return result;
        }
    }


}
