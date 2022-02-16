import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../../interfaces/i-luchador";
import {CargaLuchadorService} from "../../servicios/carga-luchador.service";

@Component({
  selector: 'app-area-seleccion, [app-area-seleccion]',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit {

  constructor(private cargaLuchador: CargaLuchadorService) { }

  ngOnInit(): void {
    this.luchadores = this.cargaLuchador.getLuchadores();
  }

  luchadores: ILuchador[];

}
