import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objUsuario = {
    email: '',
    password: ''
    }
  
  constructor(private _sWebSocket:WebsocketService, private _router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user:SocialUser) => {
      if (user){
        this.email(user);
      }
    });
  }

  // login(){
  //   this._sWebSocket.login(this.objUsuario);
  //   this._router.navigateByUrl('ventas');
  // }

  login() {
    this._sWebSocket.login(this.objUsuario).subscribe((respuesta)=>{
      if(respuesta.message === 'ok' && respuesta.token){
        this._sWebSocket.savetoken(respuesta.token);
        this._sWebSocket.conservarEmail(respuesta.email);
        this._router.navigateByUrl('ventas');
      }
    });
  }

  email(user: any){
    this.objUsuario.email = user.email;
    this._sWebSocket.getEmail(this.objUsuario).subscribe((respuesta)=>{
      if(respuesta.message === 'ok' && respuesta.content){
        this.objUsuario.password = "123456";
        this.login();
      }else{
        this.objUsuario.password = "123456";
        this._sWebSocket.register(this.objUsuario).subscribe((respuesta)=>{
          if (respuesta.message === "Created" && respuesta.token){
            this.login();
          }
        })
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
}
