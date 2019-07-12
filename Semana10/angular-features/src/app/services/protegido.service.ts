import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProtegidoService implements CanActivate {

flag:boolean = false;

  constructor(private _router:Router) { }

  canActivate():boolean{
  if(this.flag){
      return true;
    }else{
      this._router.navigateByUrl('/');
      return false;
    }
  }
}
