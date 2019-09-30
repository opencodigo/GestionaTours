import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ToptoursComponent } from './components/toptours/toptours.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms'


// modulos para inicio de sesion para redes sociales

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { RegistrarComponent } from './components/registrar/registrar.component';
import { Registrar2Component } from './components/registrar2/registrar2.component';
import { Registrar3Component } from './components/registrar3/registrar3.component';
import { TourciudadesComponent } from './components/tourciudades/tourciudades.component';
import { HttpClientModule } from '@angular/common/http';
import { CargaComponent } from './components/carga/carga.component';
import { NotfoundComponent } from './components/notfound/notfound.component'
import { RUTAS_APP } from './app.routes';
import { MinicardsComponent } from './components/minicards/minicards.component';
import { DestinoComponent } from './components/destino/destino.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("466947457626-v9tdlf749rf54oiiscrqr6m2na9n82ri.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1673917412742722")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BuscarComponent,
    ToptoursComponent,
    ComentariosComponent,
    LoginComponent,
    RegistrarComponent,
    Registrar2Component,
    Registrar3Component,
    TourciudadesComponent,
    CargaComponent,
    NotfoundComponent,
    MinicardsComponent,
    DestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    RUTAS_APP
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
