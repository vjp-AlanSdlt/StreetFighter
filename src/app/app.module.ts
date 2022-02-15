import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CargaLuchadorService} from "./servicios/carga-luchador.service";
import { AreaSeleccionComponent } from './componentes/area-seleccion/area-seleccion.component';
import { LuchadorComponent } from './componentes/luchador/luchador.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaSeleccionComponent,
    LuchadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CargaLuchadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
