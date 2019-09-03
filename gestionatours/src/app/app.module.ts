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
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
