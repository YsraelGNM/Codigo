import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/models/marcador';
import {MatSnackBar, MatDialog, MatDialogRef} from '@angular/material';
import { MapaEditarComponent } from 'src/app/dialogs/mapa-editar/mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = -16.4310132;
  lng: number = -71.5189799;
  dialogReferencia:MatDialogRef<any>;

  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { 
    //let objMarcador = new Marcador(-16.4310132, -71.5189799);
    //this.marcadores.push(objMarcador);
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    console.log(evento);
    let objMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(objMarcador);
    localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
    this.snackBar.open("Se agrego un marcador", "Cerrar", {
      duration: 2000,
    });
  }

  eliminarMarcador(posicion){
   this.marcadores.splice(posicion,1);
   this.snackBar.open("Se elimino el marcador", "Cerrar", {
    duration: 2000,
  });
  localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
  }

abrirDialog(marcador:Marcador){
  this.dialogReferencia =  this.dialog.open(MapaEditarComponent, {
    data: {
      marcador: marcador
    }
  });

  this.dialogReferencia.afterClosed().subscribe(data => {
    if (data) {
      localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
      this.snackBar.open("Se modifico un marcador", "Cerrar", {
        duration: 2000,
      });
    }
  });
}



}