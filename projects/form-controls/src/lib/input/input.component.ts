import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() field;
  @Input() form;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
    if(field.type === 'email'){
      validators.push(Validators.email);
    }
    if(field.minLength){
      validators.push(Validators.minLength(field.minLength));
    }
    if(field.maxLength){
      validators.push(Validators.maxLength(field.maxLength));
    }
    if(field.pattern){
      validators.push(Validators.pattern(field.pattern));
    }
    if(field.min){
      validators.push(Validators.min(field.min));
    }
    if(field.max){
      validators.push(Validators.max(field.max))
    }
    return validators;
  }
}
