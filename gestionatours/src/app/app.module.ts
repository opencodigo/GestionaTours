import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ToptoursComponent } from './components/toptours/toptours.component';
import { TopdestinosComponent } from './components/topdestinos/topdestinos.component';
import { TourslocalesComponent } from './components/tourslocales/tourslocales.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';


// modulos para inicio de sesion para redes sociales

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


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
    TopdestinosComponent,
    TourslocalesComponent,
    ComentariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
