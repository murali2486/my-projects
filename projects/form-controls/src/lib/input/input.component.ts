import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
