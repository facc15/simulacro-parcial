import { environment } from './../environments/environment';
import { ComponentsModule } from './components/components/components.module';
import { ActoresModule } from './actor/actores.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
//import { StorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PeliculasModule,
    ActoresModule,
    ComponentsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
