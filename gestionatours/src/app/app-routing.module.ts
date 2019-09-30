

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { TourComponent } from './components/tour/tour.component';
import { ProductoComponent } from './components/producto/producto.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'tours', component: ToursComponent },
  { path: 'tour', component: TourComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
