import { FirestoreService } from 'src/app/servicios/firestore.service';
import { BaseDeDatosService } from './../servicios/base-de-datos.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../entidades/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public peliculas!: Pelicula[];
  public peliculaADetallar!: Pelicula;


  constructor(public baseDeDatos: BaseDeDatosService, private firestore: FirestoreService) {


  }



  ngOnInit(): void {

    this.firestore.traerPeliculas().subscribe(peliculas=> {
      //this.firestore.traerFotosPeliculas();
      this.peliculas=peliculas;
      });


  }

  //Atrapo el evento
  peliculaElegida(peli: Pelicula)
  {
  this.peliculaADetallar=peli;
  }

}
