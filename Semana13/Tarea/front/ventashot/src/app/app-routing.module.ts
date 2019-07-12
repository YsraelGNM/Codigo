import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent
  },
  {
      path: 'ventas',
      component: VentasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
