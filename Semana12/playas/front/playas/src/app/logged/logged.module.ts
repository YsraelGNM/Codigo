import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedRoutingModule } from './logged-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../material.module';
import { PlayasComponent } from './components/playas/playas.component';
import { AgmCoreModule } from '@agm/core';
import { MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, MainContentComponent, PlayasComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E'
    }),
    MatMenuModule
  ]
})
export class LoggedModule { }
