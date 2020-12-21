import { MenuModule } from './menu/menu.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    MenuModule
  ]
})
export class FeaturesModule { }
