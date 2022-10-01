import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: BusquedaComponent},
  {path: 'bienvenido', component: BusquedaComponent},
  {path: 'peliculas',
    loadChildren: ()=> import('./peliculas/peliculas.module').then(m=>m.PeliculasModule)
  },
  {path: 'actor',
    loadChildren: ()=> import('./actor/actores.module').then(m=>m.ActoresModule)
  },
  {path: '**', redirectTo: 'bienvenido'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
