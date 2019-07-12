import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Marcador } from './../../models/marcador';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {
  objMarcador: Marcador;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public miReferencia: MatDialogRef<MapaEditarComponent>) {
    this.objMarcador = data.marcador;
  }

  ngOnInit() {
  }
  
  guardarCambios(titulo, descripcion){
    //debugger;
    this.objMarcador.titulo = titulo;
    this.objMarcador.descripcion = descripcion ;
    this.miReferencia.close(this.objMarcador);
  }

  descartar(){
    this.miReferencia.close("Se cerro correctamente.");
  }
}
