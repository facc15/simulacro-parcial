import { Pelicula } from 'src/app/entidades/pelicula';
import { FirestoreService } from './../../servicios/firestore.service';
import { Actor } from './../../entidades/actor';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actor-pelicula',
  templateUrl: './detalle-actor-pelicula.component.html',
  styleUrls: ['./detalle-actor-pelicula.component.css']
})
export class DetalleActorPeliculaComponent implements OnInit {

  @Input() public peliculasActuadas!: Pelicula[];
  public peliculas!: Pelicula[];
  public peliculasDetalladas!: Pelicula[];

  constructor() { }

  ngOnInit(): void {



  }

}
