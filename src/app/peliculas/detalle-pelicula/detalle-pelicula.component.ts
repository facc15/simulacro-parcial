import { Pelicula } from 'src/app/entidades/pelicula';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaDetallada: Pelicula | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
