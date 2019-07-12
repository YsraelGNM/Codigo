import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-salita',
  templateUrl: './salita.component.html',
  styleUrls: ['./salita.component.scss']
})
export class SalitaComponent implements OnInit {

  constructor(private _sAuthService:AuthService, private _Router:Router, private _sWebsocket:WebsocketService) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this._sAuthService.signOut().then(()=>{
      this._sWebsocket.logout();
      this._Router.navigateByUrl('');
    }).catch(()=>{
      this._sWebsocket.logout();
      this._Router.navigateByUrl('');
    });
  }
}
