import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() public listaPelis: Pelicula[] | null=null;
  @Output() eventoPeliculaElegida: EventEmitter<Pelicula>= new EventEmitter<Pelicula>();

    constructor(private firebase: FirestoreService) {

    }

  ngOnInit(): void {


  }

 elegirPelicula(pelicula: Pelicula)
{
  this.eventoPeliculaElegida.emit(pelicula);
}


}
