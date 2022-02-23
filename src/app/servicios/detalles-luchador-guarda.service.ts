import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DetallesLuchadorGuardaService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(isNaN(+route.params['id'])) {
      this.router.navigate(['/luchadores']);
      return false;
    }
    return true;
  }
}
