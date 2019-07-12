import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  observador:Subscription;
  restaurants:Array<any>;

  constructor(private _sHttp:HttpService) { }

  ngOnInit() {
    console.log("-----ngOninit--------");
    this.observador = this._sHttp.getRestaurant().subscribe(data=>{
      console.log(data);
      this.restaurants = data;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("----ngOnDestroy-----");
    this.observador.unsubscribe();
  }

}
