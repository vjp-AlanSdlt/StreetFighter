import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CargaLuchadorService} from "./servicios/carga-luchador.service";
import { AreaSeleccionComponent } from './componentes/area-seleccion/area-seleccion.component';
import { LuchadorComponent } from './componentes/luchador/luchador.component';
import { AtributosLuchadorComponent } from './componentes/atributos-luchador/atributos-luchador.component';
import {HttpClientModule} from "@angular/common/http";
import {DetallesLuchadorGuardaService} from "./servicios/detalles-luchador-guarda.service";
import {RouterModule} from "@angular/router";
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaSeleccionComponent,
    LuchadorComponent,
    AtributosLuchadorComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'bienvenida', component: BienvenidaComponent},
        {path: 'luchadores', component: AreaSeleccionComponent},
        {path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
        {path: '**', redirectTo: '/bienvenida', pathMatch: 'full'}
      ]
    )
  ],
  providers: [CargaLuchadorService, DetallesLuchadorGuardaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

