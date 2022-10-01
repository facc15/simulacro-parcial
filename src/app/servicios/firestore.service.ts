
import { Pelicula } from './../entidades/pelicula';
import { Actor } from './../entidades/actor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
//import { Storage, ref, uploadBytes} from '@angular/fire/storage';
import { FirebaseStorage, getStorage, ref, uploadBytes, listAll} from '@angular/fire/storage';
import { addDoc,  collection , collectionData } from '@angular/fire/firestore';
import { getDownloadURL, list } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private placeRef: any;
  private refImagen: any;
  public file:any;
  public fullPath!: Promise<string | void>;
  public storage: FirebaseStorage;
  public imagenes: string[];


  constructor(public afs: AngularFirestore  ) {
    this.storage=getStorage();
    this.imagenes=[];
  }

  async insertarPelicula(pelicula: Pelicula){
    try {


      const filePath= "fotos/"+pelicula.nombre;
      this.refImagen = ref(this.storage,filePath);
      const fullp=
      await uploadBytes(this.refImagen,this.file).then(
        async (docRef) =>{
         await getDownloadURL(this.refImagen).then(
          async(res)=>  {
             console.dir(res)
             await addDoc(collection(this.afs.firestore,"peliculas"), {
              nombre: pelicula.nombre,
              tipo: pelicula.tipo,
              cantidadDePublico: pelicula.cantidadDePublico,
              fechaDeEstreno: pelicula.fechaDeEstreno,
              actor: pelicula.actor,
              fotoPelicula: res,
            });

      console.log("Pelicula insertada ", pelicula.nombre);
          }
          ).catch(error=>console.log(error));


      }

      )






/*
      this.refImagen=ref(this.storage, 'images/'+pelicula.nombre);
      uploadBytes(this.refImagen,this.file)
      .then(response=> console.log("Todo ok, se subió la foto"))
      .catch(error=> console.log("Error al subir la foto"));*/

     /*
      */


    }catch (e) {
      console.error("Error al agregar la pelicula ", e);
    }
  }

  async uploadFotosPeliculas(path: string,nombreImagen: string): Promise<string>
  {
    return await new Promise(async(resolve)=>{
      const filePath= path+'/'+nombreImagen;
      this.refImagen = ref(this.storage,filePath);
      await uploadBytes(this.refImagen,this.file);

        getDownloadURL(this.refImagen).then(res=>{
        return res;
      });
      return resolve;
    });
  }



  traerFotosPeliculas(): string[]
  {
    this.refImagen= ref(this.storage,'fotos');
    listAll(this.refImagen)
    .then( async response=>{ console.log(response);
    for(let item of response.items)
    {
      const url=await getDownloadURL(item);
      this.imagenes.push(url);
      console.log(this.imagenes);
    }

    console.log("Se traen las pelis");
    })
    .catch(error=>{console.log(error);});
    return this.imagenes;
  }



  traerPeliculas():Observable<Pelicula[]>
  {
    this.placeRef=collection(this.afs.firestore,"peliculas");
    return collectionData(this.placeRef,{idField:'id'}) as Observable<Pelicula[]>;

  }

  async insertarActor(actor: Actor){
    try {
      const docRef = await addDoc(collection(this.afs.firestore,"actores"), {
        nombre: actor.nombre,
        apellido:actor.apellido,
        dni:actor.dni,
        correo:actor.correo,
        pais:actor.pais,
      });
      console.log("Actor insertado ", actor.nombre +" " + actor.apellido);

    }catch (e) {
      console.error("Error al agregar al actor ", e);
    }
  }

  traerActores(): Observable<Actor[]>
  {
    this.placeRef=collection(this.afs.firestore,"actores");
    return collectionData(this.placeRef,{idField:'id'}) as Observable<Actor[]>;

  }


}
