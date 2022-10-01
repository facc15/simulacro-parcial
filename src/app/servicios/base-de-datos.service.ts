import { Pelicula, tipo } from './../entidades/pelicula';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {
public peliculas: Pelicula[];
  constructor() {
    this.peliculas=[
      new Pelicula("It", tipo.terror,"12/01/2017",1000,"https://i0.wp.com/cinefilosfrustrados.com/wp-content/uploads/2017/09/It.jpg?ssl=1"),
      new Pelicula("Rocky",tipo.otros,"10/04/1978",4000,"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/rocky/24008-1-esl-ES/Rocky1.jpg?resize=320:*"),
      new Pelicula("American Pie",tipo.comedia,"10/03/1999",10219,"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/american-pie.jpg?itok=wBQoOMY9")
    ];

  }


}
