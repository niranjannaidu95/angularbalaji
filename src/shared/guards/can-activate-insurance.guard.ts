import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplyLoanComponent } from 'src/app/loan/apply-loan/apply-loan.component';
import { SampleService } from '../services/sample.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class CanActivateInsuranceGuard implements CanActivate {
  
//   constructor(private sampleService:SampleService){}  
//   canActivate() {
//     checkIfAccessProvided() {
//         if (this.sampleService.sampleNumbers ===0){
//       return true;
//     }

//     return false;
//   }}

