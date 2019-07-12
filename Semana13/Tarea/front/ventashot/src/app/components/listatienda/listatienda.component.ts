import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-listatienda',
  templateUrl: './listatienda.component.html',
  styleUrls: ['./listatienda.component.css']
})
export class ListatiendaComponent implements OnInit {

  tiendas;

  constructor(private _sWebSocketService:WebsocketService) { }

  ngOnInit() {
    this.obtenerTiendas();
  }

  obtenerTiendas(){
    this._sWebSocketService.pedirTiendas();
    this._sWebSocketService.retornoTiendas().subscribe((data)=>{
      this.tiendas = data;
    })
  }
}
