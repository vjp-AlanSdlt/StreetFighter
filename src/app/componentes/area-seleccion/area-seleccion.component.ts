import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../../interfaces/i-luchador";
import {CargaLuchadorService} from "../../servicios/carga-luchador.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-area-seleccion, [app-area-seleccion]',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit {

  constructor(private cargaLuchador: CargaLuchadorService, public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.luchadores = this.cargaLuchador.getLuchadores();
  }
  indiceSeleccionado: number = -1;
  luchadores: ILuchador[];

  actualizarIndice(nuevoIndice: number) {
    if (nuevoIndice === this.indiceSeleccionado) {
      this.indiceSeleccionado = -1;
    } else {
      this.indiceSeleccionado = nuevoIndice;
    }
  }

}
