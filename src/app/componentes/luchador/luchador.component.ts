import { Component, Input, OnInit } from '@angular/core';
import {ILuchador} from "../../interfaces/i-luchador";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-luchador, [app-luchador]',
  templateUrl: './luchador.component.html',
  styleUrls: ['./luchador.component.css']
})
export class LuchadorComponent implements OnInit {

  @Input() luchador: ILuchador;

  constructor(private _sanitizer: DomSanitizer) { }

  imagePath: SafeResourceUrl;

  ngOnInit(): void {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador.retrato);
  }

  mostrarNombre() {
    alert(this.luchador.nombre);
  }

}
