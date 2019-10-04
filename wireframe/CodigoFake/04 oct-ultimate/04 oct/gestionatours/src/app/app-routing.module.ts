

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { TourComponent } from './components/tour/tour.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ToursxdepComponent } from './components/toursxdep/toursxdep.component';
import { ViajesProvComponent } from './components/viajes-prov/viajes-prov.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'tours', component: ToursComponent },
  { path: 'tour', component: TourComponent },
  { path: 'tour/:tipo/:prog_id', component: ProductoComponent },
  { path:'tourxdep', component:ToursxdepComponent},
  { path:'tourbyprov/:provid' , component:ViajesProvComponent},
 
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

