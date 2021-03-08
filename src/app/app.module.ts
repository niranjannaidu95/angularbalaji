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
import { LoanModule } from './loan/loan.module';
import { InsuranceModule } from './insurance/insurance.module';
import { FirstLetterPipe } from 'src/shared/pipes/first-letter.pipe';
import { HightlightDirective } from 'src/shared/directives/hightlight.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from 'src/shared/interceptors/header.interceptor';




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
    FirstLetterPipe,
    HightlightDirective
    

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
    MatIconModule,
    LoanModule,
    InsuranceModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:HeaderInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
