import {Component, Input, OnInit} from '@angular/core';
import {CargaLuchadorService} from "../../servicios/carga-luchador.service";
import {ILuchador} from "../../interfaces/i-luchador";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-antes-luchar',
  templateUrl: './antes-luchar.component.html',
  styleUrls: ['./antes-luchar.component.css']
})
export class AntesLucharComponent implements OnInit {

  idLuchador: number;
  luchador: any;
  constructor(private route: ActivatedRoute, private cargaLuchador: CargaLuchadorService, public _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.idLuchador = this.route.snapshot.params['id'];
    this.cargaLuchador.getLuchador(this.idLuchador).subscribe(
      luchador => {
        this.luchador = luchador;
      },
      error => console.log(error),
      () => console.log("Fin de observable")
    );

  }

}
