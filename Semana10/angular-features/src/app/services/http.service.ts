import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {
    console.log("constructor--------------");
    
   }
    getRestaurant():Observable<any>{
      let url='http://5cbf505706a6810014c665af.mockapi.io/api/restaurant';
      return this._http.get(url);
    }

    createRestaurant(objRestaurant):Observable<any>{
      let url='http://5cbf505706a6810014c665af.mockapi.io/api/restaurant';
      let objRestString = JSON.stringify(objRestaurant);
      let misCabeceras = new HttpHeaders().set('Content-Type', 'application/json')
      return this._http.post(url,objRestString,{headers:misCabeceras});
    }
}

