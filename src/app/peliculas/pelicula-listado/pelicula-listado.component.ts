import { FirestoreService } from './../../servicios/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  public fotosPeliculas: string[] | null=null;
  public peliculas: Pelicula[] | null=null;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas()
  {


    /*
    this.firestore.traerPeliculas().subscribe(peliculas=> {
      this.peliculas=peliculas;
      });*/
      
      this.fotosPeliculas=this.firestore.traerFotosPeliculas();
      console.log(this.fotosPeliculas);

    if(this.peliculas!=null)
      {

      }


  }


}
