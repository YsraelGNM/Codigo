import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject, Promise } from 'q';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  register(objUsuario):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.post('https://localhost:44331/register',objUsuario,{headers:headers})
  }

  login(objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let objUsu = {
      email: objUsuario.email,
      username: objUsuario.username,
      password: objUsuario.password
      }
    return this._http.post('https://localhost:44331/login',objUsu,{headers:headers})
  }

  addimage(objUsuario, callback){
    var formData = new FormData();
    formData.append("email", objUsuario.email);
    formData.append("username", objUsuario.username);
    formData.append("password", objUsuario.password);
    formData.append("picture", objUsuario.picture);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
          callback.apply(this,[JSON.parse(xhr.response)])
        } else {
          reject(xhr.response);
        }
      }
    };
    xhr.open('POST', 'https://localhost:44331/register', true);
    xhr.send(formData);
  }


}
