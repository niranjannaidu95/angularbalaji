import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadInsuranceGuard implements CanLoadInsuranceGuard {
  canLoad(): any {
    return true;
  }
  
}
