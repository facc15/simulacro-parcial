import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/entidades/pais';

@Component({
  selector: 'app-detallepais',
  templateUrl: './detallepais.component.html',
  styleUrls: ['./detallepais.component.css']
})
export class DetallepaisComponent implements OnInit {

  @Input() paisDetallado!: Pais;
  constructor() { }

  ngOnInit(): void {
  }

}
