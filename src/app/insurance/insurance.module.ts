import { NgModule } from "@angular/core";
import { CarInsuranceComponent } from "./car-insurance/car-insurance.component";
import { ClaimInsuranceComponent } from "./claim-insurance/claim-insurance.component";
import { InsuranceRoutingModule } from "./insurance-routing.module";
import { InsuranceComponent } from "./insurance/insurance.component";

@NgModule({
    declarations:[
    CarInsuranceComponent,
    ClaimInsuranceComponent,
    InsuranceComponent,
    ],
    imports:[
        InsuranceRoutingModule
    ],

providers: []
})
export class InsuranceModule { }
