import { Injectable } from '@angular/core';
import {ILuchador} from "../interfaces/i-luchador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargaLuchadorService {

  private urlLuchadores = 'http://localhost:3000/luchadores';

  constructor(private http: HttpClient) { }

  getLuchadores(): Observable<ILuchador[]> {
    return this.http.get<ILuchador[]>(this.urlLuchadores);
  }
}
