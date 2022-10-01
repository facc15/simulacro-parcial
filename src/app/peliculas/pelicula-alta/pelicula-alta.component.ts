import { TablaPaisesComponent } from './../../actor/tabla-paises/tabla-paises.component';
import { Actor } from './../../entidades/actor';
import { tipo } from './../../entidades/pelicula';
import { Pelicula } from 'src/app/entidades/pelicula';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { EventType, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public pelicula!: Pelicula;
  public tipo!: tipo;
  public tipoSeleccionado!: string;
    constructor(private firestore: FirestoreService, private router: Router) {
      this.tipoSeleccionado="";
    }

    ngOnInit(): void {
      this.pelicula=new Pelicula("",tipo.otros,"",0,"");
    }
    agregarPelicula()
    {
      this.firestore.insertarPelicula(this.pelicula);
        setTimeout(() => {
          this.router.navigateByUrl('busqueda');
        }, 400);

    }

    public tipos(): Array<string> {
      //enumerado a recorrer
      const keys = Object.keys(tipo);
      //se retorna para ir al ngFor
      return keys;
  }

    actorSeleccionado(actor: Actor)
    {
      this.pelicula.actor=actor;
    }

    capturarSeleccion(event: any)
    {
      this.pelicula.tipo=event.target.value;
    }

    imagenSubida($event: any)
    {
      const file= $event.target.files[0];
      console.log(file);
      this.firestore.file=file;
    }
  }
