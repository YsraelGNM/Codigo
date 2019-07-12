using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tienda.BL
{
    class BLLogueo : IBLLogueo
    {
        public Persona GetById(string user_name)
        {
            Persona result = null;
            try
            {
                var resp = new DA.Logueo();
                result = resp.GetById(user_name);
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
