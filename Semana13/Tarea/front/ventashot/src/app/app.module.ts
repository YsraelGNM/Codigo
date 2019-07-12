import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { ListatiendaComponent } from './components/listatienda/listatienda.component';



let configLogin = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("663713973404-a1vuvlp00a3d8rlgof1aqrqrg4j7pptl.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1018900544985676")
  }
]);

export function provideConfig() {
  return configLogin;
}


const config: SocketIoConfig = { url: 'http://localhost:3700', options: {} };
//const config: SocketIoConfig = { url: 'https://ysrachat.herokuapp.com/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,
    ListatiendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
