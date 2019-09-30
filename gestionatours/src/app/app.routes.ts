import {Routes,RouterModule } from '@angular/router'
import { CargaComponent } from './components/carga/carga.component'
import { NotfoundComponent } from './components/notfound/notfound.component'
import { BuscarComponent } from './components/buscar/buscar.component'
import { DestinoComponent } from './components/destino/destino.component'

const mis_rutas: Routes = [
    {
        path:'inicio',
        component:BuscarComponent
    },
    {
        path:'encontrados',
        component:CargaComponent
    },
    {
        path:'destino/:id/:tipo/:prog_id',
        component:DestinoComponent
    },
    {
        path:'**',
        component:NotfoundComponent
    }
]

export const RUTAS_APP = RouterModule.forRoot(mis_rutas)
