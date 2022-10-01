import { Pais } from './../../entidades/pais';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public paises: Pais[] | null=null;
  @Output() paisSeleccionado = new EventEmitter<Pais>();

  constructor(private paisServicio: PaisService) { }

  ngOnInit(): void {

    this.paisServicio.traerPaises().subscribe((paises: any)=>{ this.paises=paises;});
  }

  seleccionarPais(pais: Pais)
  {
    //alert(pais.flag);
    this.paisSeleccionado.emit(pais);
  }

}
