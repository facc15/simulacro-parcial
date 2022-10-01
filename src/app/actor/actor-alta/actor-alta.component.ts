import { Pais } from './../../entidades/pais';
import { Router } from '@angular/router';
import { FirestoreService } from './../../servicios/firestore.service';
import { Actor } from './../../entidades/actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
public actor!: Actor;
  constructor(private firestore: FirestoreService, private router: Router) { }

  ngOnInit(): void {
    this.actor=new Actor();
  }

  paisSeleccionado(pais: Pais)
  {
    this.actor.pais=pais;

  }

  agregarActor()
  {
    this.firestore.insertarActor(this.actor);
    this.router.navigateByUrl('busqueda');
  }
}
/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()

*/
