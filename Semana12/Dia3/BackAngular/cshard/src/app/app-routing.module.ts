import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
