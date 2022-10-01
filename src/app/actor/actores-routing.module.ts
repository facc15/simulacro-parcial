import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';

const routes: Routes =[
  {path: '',
    children: [
      { path:'alta', component: ActorAltaComponent},
      { path:'listado', component: ActorListadoComponent},
      { path:'paises', component: TablaPaisesComponent},
      {path:'actor-pelicula', component: ActorPeliculaComponent}
    ]
}
]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(routes)
  ]
})
export class ActoresRoutingModule { }
