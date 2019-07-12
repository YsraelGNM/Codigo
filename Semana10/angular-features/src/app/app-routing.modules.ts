import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpComponent } from './components/http/http.component';
import { FormsComponent } from './components/forms/forms.component';
import { DatatablesComponent } from './components/datatables/datatables.component';
import { CustomDatatableComponent } from './components/custom-datatable/custom-datatable.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ProtegidoService } from './services/protegido.service';

const routes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'http',
        component: HttpComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'datatables',
        component: DatatablesComponent
    },
    {
        path: 'customdatatables',
        component: CustomDatatableComponent
    },
    {
        path: 'protegido',
        component: ProtegidoComponent,
        canActivate: [ProtegidoService]
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
