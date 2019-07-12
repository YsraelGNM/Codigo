using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using webBikeStore.Models;




namespace EFWebAPI.Controllers
{
    public class CustomersController : ControllerBase
    {
        private readonly BikeStoresContext context;

        public CustomersController(BikeStoresContext context)
        {
            this.context = context;
        }

        [HttpPost]
        [Route("customerInsert")]
        public ActionResult Post([FromBody] Customers customer)
        {
            context.Add(customer);
            context.SaveChanges();
            return Ok(customer);
            //return new CreatedAtRouteResult("GetCustomers", new { id = cliente.CustomerId }, cliente);
        }

        [HttpGet("customersGetById/{id}")]
        public async Task<ActionResult<Customers>> customersGetById(int id)
        {
            var customer = await context.Customers.Where(x => x.CustomerId.Equals(id)).FirstOrDefaultAsync();
            if (customer == null)
                return BadRequest();
            return Ok(customer);
        }

        //// PUT api/<controller>/5
        //[HttpPut("customersUpDate/{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        [HttpPost("customersUpDate/{id}")]
        public ActionResult Post([FromBody] Customers customer, int id)
        {
            var mcustomer = context.Customers.Find(id);
            if (mcustomer == null)
                return BadRequest();

            mcustomer.FirstName = customer.FirstName;
            mcustomer.LastName = customer.LastName;
            mcustomer.Phone = customer.Phone;
            mcustomer.Email = customer.Email;
            mcustomer.Street = customer.Street;
            mcustomer.City = customer.City;
            mcustomer.State = customer.State;
            mcustomer.ZipCode = customer.ZipCode;


            context.Entry(mcustomer).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        // DELETE api/<controller>/5
        [HttpDelete("customersDeleted/{id}")]
        public ActionResult Delete(int id)
        {
            var mcustomer = context.Customers.Find(id);
            if (mcustomer == null)
                return BadRequest();

            context.Entry(mcustomer).State = EntityState.Deleted;
            context.SaveChanges();
            return Ok();
        }
    }
}