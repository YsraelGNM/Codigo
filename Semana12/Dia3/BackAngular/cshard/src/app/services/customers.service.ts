import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
  public objUser = {
    username:'',
    picture:null
  }

  constructor(private _http:HttpClient) { }

  customersInsert(objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('https://localhost:44331/customerInsert',objUsuario,{headers:headers})
  }

  customersGetById(idCustomers):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get('https://localhost:44331/customersGetById/' + idCustomers,{headers:headers})
  }

  customersUpDate(idCustomers,objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('https://localhost:44331/customersUpDate/'+idCustomers, objUsuario, {headers:headers})
  }

  customersDeleted(idCustomers):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete('https://localhost:44331/customersDeleted/'+idCustomers, {headers:headers})
  }

  conservarUser(mData): any{
    this.objUser.username = mData.username;
    this.objUser.picture = mData.picture;
  }
}
