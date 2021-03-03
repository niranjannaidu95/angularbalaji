import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveformbuilderComponent } from './reactiveformbuilder/reactiveformbuilder.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { OverlayComponent } from './overlay/overlay.component';
import { ApplyLoanComponent } from './loan/apply-loan/apply-loan.component';
import { ProcessLoanComponent } from './loan/process-loan/process-loan.component';
import { LoanRepaymentComponent } from './loan/loan-repayment/loan-repayment.component';
import { CarInsuranceComponent } from './insurance/car-insurance/car-insurance.component';
import { ClaimInsuranceComponent } from './insurance/claim-insurance/claim-insurance.component';
import { InsuranceComponent } from './insurance/insurance/insurance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    AutocompleteComponent,
    ReactiveformsComponent,
    ReactiveformbuilderComponent,
    LeftnavComponent,
    OverlayComponent,
    ApplyLoanComponent,
    ProcessLoanComponent,
    LoanRepaymentComponent,
    CarInsuranceComponent,
    ClaimInsuranceComponent,
    InsuranceComponent,
    

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule ,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
