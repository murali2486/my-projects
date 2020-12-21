import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './components/carousel/carousel.component';
import { LabelComponent } from './components/label/label.component';



@NgModule({
  declarations: [CarouselComponent, LabelComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CarouselComponent,
    LabelComponent
  ]
})
export class SharedModule { }
