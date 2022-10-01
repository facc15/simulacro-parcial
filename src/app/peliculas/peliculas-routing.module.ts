import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';


const routes: Routes =[
  {
    path: '',
    children: [
      {  path: 'alta', component: PeliculaAltaComponent },
      {  path: 'listado', component: PeliculaListadoComponent },
    ]
  },

]



@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ]
})
export class PeliculasRoutingModule { }
