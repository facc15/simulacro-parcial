import { Pelicula } from 'src/app/entidades/pelicula';
import { FirestoreService } from './../../servicios/firestore.service';
import { Pais } from './../../entidades/pais';
import { Actor } from './../../entidades/actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  public detallePais!: Pais;
  public actorADetallar!: Actor;
  public peliculas!: Pelicula[];
  public peliculasActuadas: Pelicula[]=[];
  public cantidadPeliculas!: number;
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.traerPeliculas().subscribe(peliculas=> {
      this.peliculas=peliculas;
      });
  }

  actorSeleccionado(actor: Actor)
  {
    this.peliculasActuadas=[];
    this.cantidadPeliculas=0;
      this.detallePais=actor.pais;

      for(let item of this.peliculas)
      {
        if(item.actor.dni==actor.dni)
        {
          console.log(item.actor.dni);
          this.peliculasActuadas.push(item);
          this.cantidadPeliculas++;
        }
      }
      actor.cantidadDePeliculas=this.cantidadPeliculas;
      this.actorADetallar=actor;
  }

}
