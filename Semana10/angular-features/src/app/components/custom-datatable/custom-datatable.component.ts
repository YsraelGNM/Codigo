import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: ['./custom-datatable.component.css']
})
export class CustomDatatableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('assets/datatable/task_manager_list.js');
  }

  public loadScript(url: string){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
