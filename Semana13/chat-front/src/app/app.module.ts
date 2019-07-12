import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SalitaComponent } from './components/salita/salita.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ChatComponent } from './components/chat/chat.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 

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

//const config: SocketIoConfig = { url: 'http://localhost:3700', options: {} };
const config: SocketIoConfig = { url: 'https://ysrachat.herokuapp.com/', options: {} };
//const config: SocketIoConfig = { url: 'https://chat-jgarnica-codigo3.herokuapp.com/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SalitaComponent,
    ListaUsuariosComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    SocialLoginModule
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