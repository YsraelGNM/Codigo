import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WachimanService implements CanActivate {

  constructor(private _sAuth: AuthService, private _router: Router) { }

  canActivate(){
    if (this._sAuth.isLogged()){
      return true;
    } else {
      this._router.navigateByUrl('');
    }
  }
}
