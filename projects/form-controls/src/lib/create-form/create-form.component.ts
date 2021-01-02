import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  @Input() fieldGroup;
  @Input() form;
  constructor() { }

  ngOnInit(): void {
    console.log(this.fieldGroup);
    console.log(this.form);
  }

}
