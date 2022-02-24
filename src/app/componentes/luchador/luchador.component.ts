import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILuchador} from "../../interfaces/i-luchador";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-luchador, [app-luchador]',
  templateUrl: './luchador.component.html',
  styleUrls: ['./luchador.component.css']
})
export class LuchadorComponent implements OnInit {

  @Input() luchador: ILuchador;
  @Input() indiceLuchador: number;
  @Input() numLuchadorSeleccionado: number;
  @Output() actualizarLuchadorSeleccionado = new EventEmitter<number>();

  constructor(private _sanitizer: DomSanitizer) { }

  imagePath: SafeResourceUrl;

  estilosImgHover: any = {
    'border': '5px solid'
  }

  isHover: boolean = false;

  ngOnInit(): void {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador.retrato);
    this.estilosImgHover['border-color'] = this.luchador.colorAsociado;
  }

  quitarBorde() {
    this.isHover = false;
  }

  actualizarClick () {
    this.actualizarLuchadorSeleccionado.emit(this.indiceLuchador);
  }

}
