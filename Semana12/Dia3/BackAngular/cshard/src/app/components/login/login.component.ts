import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { registerContentQuery } from '@angular/core/src/render3';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  objUsuario = {
    email: '',
    username: '',
    password: '',
    picture: ''
  }

  @ViewChild('userimagen')
  public uImagen;

  constructor(private _sloginService: LoginService, private _router: Router, private _scustomer: CustomersService) { }

  ngOnInit() {
  }

  register() {
    //debugger;
    this._sloginService.login(this.objUsuario).subscribe((respuesta) => {
      if (respuesta.message === 'ok' && respuesta.token) {
        //this._sloginService.savetoken(respuesta.token);
        this.objUsuario.email = respuesta.username;
        this.objUsuario.username = respuesta.username;
        this.objUsuario.picture = respuesta.picture;
        this._scustomer.conservarUser(this.objUsuario);
        this._router.navigateByUrl('customers');
      } else {
        // this._sloginService.register(this.objUsuario).subscribe((respuesta)=>{
        //   alert(`No se encontraba registrado el email: ${respuesta.username}. Ahora ya puede ingresar.`);
        //   console.log(respuesta);
        //  });
        this._sloginService.addimage(this.objUsuario,(returnValue)=>{
          this.register();
        }) ;
      }
    });
    //this._sloginService.addimage(this.objUsuario);
  }

  handleInputChange(event) {
    var image = event.target.files[0];
    var pattern = /image-*/;
    //var reader = new FileReader();
    if (!image.type.match(pattern)) {
      console.error('File is not an image');
      return;
    }
    this.objUsuario.picture = image;
    this.readURL(event);
    //   //console.log(this.objUsuario.picture);
    //    // FileReader support
    //   if (FileReader && image && image.length) {
    //     var fr = new FileReader();
    //     fr.onload = function () {
    //       document.getElementById('userimagen').src = fr.result;
    //     }
    //     fr.readAsDataURL(image);
    // }
    //   //this.uImagen.nativeElement.src = image;
  }

  readURL(input) {
    if (input.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        //console.log(e);
        document.getElementById('userimagen').setAttribute('src', e.target.result);
      }
      reader.readAsDataURL(input.target.files[0]);
    }
  }



}
