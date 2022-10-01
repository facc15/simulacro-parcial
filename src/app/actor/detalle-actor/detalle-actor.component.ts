import { Actor } from './../../entidades/actor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  @Input() actorDetallado!: Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
