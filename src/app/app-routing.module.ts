import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadInsuranceGuard } from 'src/shared/guards/can-load-insurance.guard';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformbuilderComponent } from './reactiveformbuilder/reactiveformbuilder.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { SigninComponent } from './signin/signin.component';


export const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'reactiveformbuilder',component:ReactiveformbuilderComponent},
  { path:'login',component:LoginComponent},
  {path:'reactiveforms',component:ReactiveformsComponent },
  {path:'autocomplete',component:AutocompleteComponent},
  { path: 'insurance', loadChildren: () => import(`./insurance/insurance-routing.module`).then(m => m.InsuranceRoutingModule),
},


  { path: 'loan', loadChildren: () => import(`./loan/loan-routing.module`).then(m => m.LoanRoutingModule), 
canLoad:[CanLoadInsuranceGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }