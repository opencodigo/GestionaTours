import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { TourComponent } from './components/tour/tour.component';
import { AdminComponent } from './administrador/components/admin/admin.component';
import { HomeAdminComponent } from './administrador/components/home-admin/home-admin.component';
import { PagarproductoComponent } from './components/pagarproducto/pagarproducto.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ProductoComponent } from './components/producto/producto.component';


const APP_ROUTES: Routes = [

  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'tours', component: ToursComponent },
  { path: 'tour', component: ProductoComponent },
  { path: 'reserva', component: PagarproductoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: '**', component: HomeComponent },
  
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: HomeAdminComponent
    },
    {
        path: 'registro',
        component: HomeAdminComponent
    },
        
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES/* ,{useHash:true} */)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
