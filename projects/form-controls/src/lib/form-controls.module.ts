import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { FormControlsComponent } from './form-controls.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ButtonComponent } from './button/button.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CreateArrayGroupComponent } from './create-array-group/create-array-group.component';



@NgModule({
  declarations: [
    FormControlsComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    CreateFormComponent,
    ButtonToggleComponent,
    CreateArrayGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonToggleModule
  ],
  exports: [
    FormControlsComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    CreateFormComponent,
    ButtonToggleComponent,
    CreateArrayGroupComponent
  ]
})
export class FormControlsModule { }
