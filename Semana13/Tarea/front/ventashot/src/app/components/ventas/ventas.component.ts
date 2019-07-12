import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  usuarioConectado;
  objVenta = {
    monto:'',
    fecha:'',
    idtienda:'',
    email:''
  }
  public chart: any = null;

  constructor(private _sWebSocketService:WebsocketService, private _http:HttpClient) { }

  ngOnInit() {

    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
       labels: [],
       datasets: [
         {
        label: 'Data',
        fill: false,
        data: [],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         }
       ]
        },
        options: {
       tooltips: {
        enabled: false
       },
       legend: {
        display: true,
        position: 'bottom',
        labels: {
         fontColor: 'white'
        }
       },
       scales: {
         yAxes: [{
          ticks: {
           fontColor: "white"
          }
         }],
         xAxes: [{
        ticks: {
         fontColor: "white",
         beginAtZero: true
        }
         }]
       }
        }
     });

    this.obtenerUsuario();

  

    // this.getFromAPI().subscribe(response => {
    //   if(response.message === 'ok') {
    //     let chartTime: any = new Date();
    //     // tslint:disable-next-line: max-line-length
    //     chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
    //     let label: String[]= [];
    //     let data: String[]= [];
    //     response.content.forEach(element => {
    //       label.push(element.fecha)
    //       data.push(element.monto)
    //     });
    //     this.chart.data.labels=label;
    //     this.chart.data.datasets[0].data=data;
    //     // this.chart.data.labels.push(response.content.fecha);
    //     // this.chart.data.datasets[0].data.push(response.content);
    //     this.chart.update();
    //    } else {
    //     console.error("ERROR: The response had an error, retrying");
    //    }
    // }, error => {
    //  console.error("ERROR: Unexpected response");
    // });
  }




  obtenerUsuario(){
    this.usuarioConectado = this._sWebSocketService.email;
    this.objVenta.email = this._sWebSocketService.email;
    this.objVenta.idtienda = '1'; ///No debe ser asi hay que pasar el parametro
  }

  guardar(){
    this._sWebSocketService.enviarVenta(this.objVenta);


    this.getFromAPI().subscribe(response => {
      if(response.message === 'ok') {
        let chartTime: any = new Date();
        // tslint:disable-next-line: max-line-length
        chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
        let label: String[]= [];
        let data: String[]= [];
        response.content.forEach(element => {
          label.push(element.fecha)
          data.push(element.monto)
        });
        this.chart.data.labels=label;
        this.chart.data.datasets[0].data=data;
        // this.chart.data.labels.push(response.content.fecha);
        // this.chart.data.datasets[0].data.push(response.content);
        this.chart.update();
       } else {
        console.error("ERROR: The response had an error, retrying");
       }
    }, error => {
     console.error("ERROR: Unexpected response");
    });



  }

  private getFromAPI(): Observable<any>{
    return this._http.get('http://localhost:3700/venta/getAllVentas',{ responseType: 'json' }
    );
  }
}
