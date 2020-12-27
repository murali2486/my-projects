import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'lib-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
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
    return validators;
  }
}
