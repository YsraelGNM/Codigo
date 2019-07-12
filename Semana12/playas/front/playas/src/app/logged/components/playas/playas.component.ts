import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayaService } from '../../service/playa.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PlayasComponent implements OnInit {

  displayedColumns: string[] = ['playa_id', 'playa_nom', 'playa_dir','total', 'libres', 'ocupados', 'playa_lat', 'playa_lng'];
  
  playas = new MatTableDataSource([]);
  expandedElement: PeriodicElement | null;
  estiloMapa=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ];
  

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.playas.paginator = mp;
  }

  @ViewChild(MatSort) set content(ms: MatSort) {
     this.playas.sort = ms;
  }

  constructor(private _sPlaya: PlayaService) { }

  ngOnInit() {
    this.setPlayasList();
  }

  applyFilter(filterValue: string) {
    this.playas.filter = filterValue.trim().toLowerCase();
    if (this.playas.paginator) {
      this.playas.paginator.firstPage();
    }
  }

  setPlayasList(){
    this._sPlaya.getPlayas().subscribe((playas:any)=>{
      playas.content.forEach(playa => {
        let total, libres, ocupados = 0;
        total = playa.t_slotplayas.length;
        libres = playa.t_slotplayas.filter(slot=>slot.slotp_est === 0).length;
        ocupados = playa.t_slotplayas.filter(slot=>slot.slotp_est === 1).length;
        playa.total = total;
        playa.libres = libres;
        playa.ocupados = ocupados;
      });
      this.playas = new MatTableDataSource(playas.content);
      });
  }


}

export interface PeriodicElement {
  playa_id: number;
  playa_nom: string;
  playa_dir: string;
  total: number;
  libres: number;
  ocupados: number;
  playa_lat: number;
  playa_lng: number;
}
