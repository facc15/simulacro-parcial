import { Actor } from './actor';
export class Pelicula {

  public id!: number;
  public nombre!: string;
  public tipo!: tipo;
  public fechaDeEstreno!: string;
  public cantidadDePublico!: number;
  public fotoPelicula!: string;
  public actor!: Actor;


  constructor(nombre: string, tipo: tipo, fecha: string, cantidad: number, foto: string) {
    this.nombre=nombre;
    this.tipo=tipo;
    this.fechaDeEstreno=fecha;
    this.cantidadDePublico=cantidad;
    this.fotoPelicula=foto;

  }

}


export enum tipo {terror="Terror",comedia="Comedia",amor="Amor",otros="Otros"};
