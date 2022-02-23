import {Component, HostListener, OnInit} from '@angular/core';
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
    this.cargaLuchador.getLuchadores().subscribe(
      listaLuchadores => {
        this.luchadores = listaLuchadores;
      },
      error => console.log(error),
      () => console.log("Fin de observable")
    );
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        this.indiceSeleccionado += 2;
        break;
      case 'ArrowUp':
        this.indiceSeleccionado -= 2;
        break;
      case 'ArrowLeft':
        this.indiceSeleccionado--;
        break;
      case 'ArrowRight':
        this.indiceSeleccionado++;
        break;
    }
    this.indiceSeleccionado = Math.min(this.luchadores.length-1, this.indiceSeleccionado);
    this.indiceSeleccionado = Math.max(0, this.indiceSeleccionado);
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
