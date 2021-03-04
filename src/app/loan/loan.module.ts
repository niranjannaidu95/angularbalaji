import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpService } from "../http.service";
import { InsuranceRoutingModule } from "../insurance/insurance-routing.module";
import { ApplyLoanComponent } from "./apply-loan/apply-loan.component";
import { LoanRepaymentComponent } from "./loan-repayment/loan-repayment.component";
import { LoanRoutingModule } from "./loan-routing.module";
import { ProcessLoanComponent } from "./process-loan/process-loan.component";

@NgModule({
    declarations:[
        ApplyLoanComponent,
        ProcessLoanComponent,
        LoanRepaymentComponent,  
    ],
    imports:[
        LoanRoutingModule,
        HttpClientModule
    ],

providers: []
})
export class LoanModule { }

   
