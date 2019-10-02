import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ToptoursComponent } from './components/toptours/toptours.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';

// ROUTES

import { AppRoutingModule } from './app-routing.module';


// modulos para inicio de sesion para redes sociales

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { RegistrarComponent } from './components/registrar/registrar.component';
import { TourciudadesComponent } from './components/tourciudades/tourciudades.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { ToursComponent } from './components/tours/tours.component';
import { SliderComponent } from './components/slider/slider.component';
import { TourComponent } from './components/tour/tour.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BusquedaverticalComponent } from './components/busquedavertical/busquedavertical.component';
import { PagarproductoComponent } from './components/pagarproducto/pagarproducto.component';
import { AdminComponent } from './administrador/components/admin/admin.component';
import { HomeAdminComponent } from './administrador/components/home-admin/home-admin.component';
import { FacturaComponent } from './components/factura/factura.component';


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
    TourciudadesComponent,
    ActividadesComponent,
    ToursComponent,
    SliderComponent,
    TourComponent,
    ProductoComponent,
    BusquedaverticalComponent,
    PagarproductoComponent,
    AdminComponent,
    HomeAdminComponent,
    FacturaComponent
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
