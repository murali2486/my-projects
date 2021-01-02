import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input() field;
  @Input() form;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.field);
    console.log(this.form);
    this.createControl(this.field);
  }
  createControl(field) {
    this.form.addControl(field.controlName, this.fb.control(field.value, this.getValidators(field)));
  }
  getValidators(field){
    let validators = [];
    if(field.required){
      validators.push(Validators.required);
    }
    return validators;
  }
  getToggleValue(value){
    this.form.get(this.field.controlName).setValue(value);
  }
}
