import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  private token:string;
  public email:string;

  constructor(private _socket:Socket, private _http:HttpClient, private _router:Router) {
    this.checkStatus();
    this.cargarStorage();
  }

  cargarStorage(){
  if (localStorage.getItem('nombre')){
    this._socket.emit('configurar-usuario',localStorage.getItem('nombre'));
    }
  }

  checkStatus(){
    this._socket.on('connect',()=>{
      console.log("Conectado al servidor de sockets");
      this.socketStatus = true;
    });
    this._socket.on('disconnect',()=>{
      console.log("Desconectado al servidor de sockets");
      this.socketStatus = false;
    });
  }

  // login(objUsuario){
  //   this.guardarStorage(objUsuario.email);
  //   this._socket.emit('configurar-usuario',objUsuario);
  // }

  login(objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('http://localhost:3700/auth/login',objUsuario,{headers:headers})
  }

  register(objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('http://localhost:3700/auth/register',objUsuario,{headers:headers})
  }

  getEmail(objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('http://localhost:3700/auth/email',objUsuario,{headers:headers})
  }

  savetoken(token){
    localStorage.setItem('token',token);
    this.token = token;
  }

  getToken(){
    if(!this.token){
      this.token = localStorage.getItem('token');
    }
  }

  getUserDetails(){
    if(this.token){
      let centro = this.token.split(".")[1];
      return window.atob(centro);
    }
    return null;
  }

  isLogged(){
    let userDetails:any = this.getUserDetails();
    if(userDetails){
      let ahora = Date.now()/1000;
      if (JSON.parse(userDetails).exp > ahora){
        return true;
      }
    }
    localStorage.removeItem('token');
    return false;
  }

  logout(){
    this.token = null;
    localStorage.removeItem('token');
    this._router.navigateByUrl('');
  }

  conservarEmail(email){
    this.email = email;
  }

  // guardarStorage(nombre){
  //   localStorage.setItem('nombre',nombre);
  // }

  pedirUsuarios(){
    this._socket.emit('lista-usuarios')
  }

  retornoUsuarios(){
    return this._socket.fromEvent('retorno-usuarios');
  }

  emitirMensaje(mensaje:String){
    this._socket.emit('enviar-mensaje',mensaje);
  }

  enviarVenta(objVenta:any){
    this._socket.emit('enviar-venta',objVenta);
  }

  nuevoMensaje(){
    return this._socket.fromEvent('nuevo-mensaje');
  }

  pedirTiendas(){
    this._socket.emit('lista-tiendas')
  }

  retornoTiendas(){
    return this._socket.fromEvent('retorno-tiendas');
  }
}