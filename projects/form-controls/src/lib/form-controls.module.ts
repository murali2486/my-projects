import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




import { FormControlsComponent } from './form-controls.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';



@NgModule({
  declarations: [FormControlsComponent, InputComponent, SelectComponent, TextareaComponent, CheckboxComponent, RadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [FormControlsComponent, InputComponent, SelectComponent, TextareaComponent, CheckboxComponent, RadioComponent]
})
export class FormControlsModule { }
