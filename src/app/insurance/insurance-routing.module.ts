import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateInsuranceGuard } from 'src/shared/guards/can-deactivate-insurance.guard';
import { ResolveguardGuard } from 'src/shared/guards/resolveguard.guard';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { InsuranceComponent } from './insurance/insurance.component';



export const routes: Routes = [
    { path: '', component: InsuranceComponent,
    canDeactivate:[CanDeactivateInsuranceGuard],
    resolve:[ResolveguardGuard] },
    { path: 'car-insurance', component: CarInsuranceComponent },
    { path: 'claim-insurance', component: ClaimInsuranceComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsuranceRoutingModule { }