import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.modules';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpComponent } from './components/http/http.component';
import { FormsComponent } from './components/forms/forms.component';
import { DatatablesComponent } from './components/datatables/datatables.component';

// libreria Toastr (alertas)
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CustomDatatableComponent } from './components/custom-datatable/custom-datatable.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { ProtegidoService } from './services/protegido.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    HttpComponent,
    FormsComponent,
    DatatablesComponent,
    PipesComponent,
    CapitalizePipe,
    CustomDatatableComponent,
    ProtegidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
    DataTablesModule,
    ProtegidoService    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
