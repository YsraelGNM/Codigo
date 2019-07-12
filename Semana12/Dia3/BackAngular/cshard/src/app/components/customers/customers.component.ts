import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  objCustomers = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: ''
  }

  codCliente;

  constructor(private _scustomersService:CustomersService) { }

  ngOnInit() {
    var dataImagen = this._scustomersService.objUser;
    document.getElementById('userimagen').setAttribute('src', 'data:image/png;base64,'+dataImagen.picture);
    document.getElementById('user').innerHTML = 'Usuario: ' + dataImagen.username;
  }

  customersInsert(){
    this._scustomersService.customersInsert(this.objCustomers).subscribe((respuesta)=>{
     
     });
  }

  customersGetById(){
    this._scustomersService.customersGetById(this.codCliente).subscribe((respuesta)=>{
      this.objCustomers.firstname = respuesta.firstName;
      this.objCustomers.lastname = respuesta.lastName;
      this.objCustomers.phone = respuesta.phone;
      this.objCustomers.email = respuesta.email;
      this.objCustomers.street = respuesta.street;
      this.objCustomers.city = respuesta.city;
      this.objCustomers.state = respuesta.state;
      this.objCustomers.zipcode = respuesta.zipCode;
     });
  }

  customersUpDate(){
    this._scustomersService.customersUpDate(this.codCliente,this.objCustomers).subscribe((respuesta)=>{

     });
  }

  customersDeleted(){
    this._scustomersService.customersDeleted(this.codCliente).subscribe((respuesta)=>{

    });
  }




}
