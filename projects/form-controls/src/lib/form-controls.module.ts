import { NgModule } from '@angular/core';
import { FormControlsComponent } from './form-controls.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';



@NgModule({
  declarations: [FormControlsComponent, InputComponent, SelectComponent, TextareaComponent, CheckboxComponent, RadioComponent],
  imports: [
  ],
  exports: [FormControlsComponent]
})
export class FormControlsModule { }
