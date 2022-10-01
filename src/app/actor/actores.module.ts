import { ComponentsModule } from './../components/components/components.module';

import { PaisService } from './../servicios/pais.service';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { ActoresRoutingModule } from './actores-routing.module';
import { FormsModule } from '@angular/forms';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { DetallepaisComponent } from './detallepais/detallepais.component';
import { DetalleActorPeliculaComponent } from './detalle-actor-pelicula/detalle-actor-pelicula.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';


@NgModule({
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    DetallepaisComponent,
    DetalleActorPeliculaComponent,
    DetalleActorComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [ActorAltaComponent, ActorListadoComponent]
})
export class ActoresModule { }
