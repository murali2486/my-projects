import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormControlsModule } from '../../../../../form-controls/src/public-api';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FormControlsModule
  ]
})
export class LoginModule { }
