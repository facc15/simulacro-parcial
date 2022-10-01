import { ComponentsModule } from './../components/components/components.module';

import { FormsModule } from '@angular/forms';
import { ActoresModule } from './../actor/actores.module';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';



@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    DetallePeliculaComponent,
    TablaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    ActoresModule,
    FormsModule,
    ComponentsModule
  ],
  exports:[TablaPeliculaComponent,DetallePeliculaComponent],
})
export class PeliculasModule { }
