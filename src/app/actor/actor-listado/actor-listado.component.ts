import { Actor } from './../../entidades/actor';
import { FirestoreService } from './../../servicios/firestore.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  public actores!: Actor[];
  @Output() eventoActorSeleccionado= new EventEmitter<Actor>();

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {

    this.firestore.traerActores().subscribe(actores=> {
    this.actores=actores;
    });

  }

  seleccionarActor(actor: Actor)
  {
    this.eventoActorSeleccionado.emit(actor);
  }


}
