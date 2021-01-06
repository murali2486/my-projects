import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-create-array-group',
  templateUrl: './create-array-group.component.html',
  styleUrls: ['./create-array-group.component.scss']
})
export class CreateArrayGroupComponent implements OnInit {
@Input() field;
@Input() form;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(
      this.field.formArrayName !== undefined &&
      this.field.formArrayName !== null &&
      this.field.formArrayName !== '' &&
      this.field.formArrayFields.length > 0
      ) {
        this.form.addControl(this.field.formArrayName, this.fb.array([this.createFieldGroup()]));
      }
  }
  createFieldGroup(){
    const fg = this.fb.group({});
    this.field.formArrayFields.forEach(fieldObj => {
      fg.addControl(fieldObj.controlName, this.fb.control(fieldObj.value,this.getValidators(fieldObj)))
    });
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

  getToggleValue(value, i){
    let items = this.form.get(this.field.fieldArrayName) as FormArray;
    items[i].controls.setValue(value);
  }
}
