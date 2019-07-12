import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: []
})
export class FormsComponent implements OnInit {

  constructor(private _sHttp:HttpService) { }

  objRestaurant = {
        nombre:'',
        direccion:''
  }

  ngOnInit() {
  }

  crearRestaurant(frm){
    this._sHttp.createRestaurant(this.objRestaurant).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })
    console.log(frm);
    console.log(this.objRestaurant);
    
    frm.reset();
    
  }
}
