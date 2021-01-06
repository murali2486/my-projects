import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArrayGroupComponent } from './create-array-group.component';

describe('CreateArrayGroupComponent', () => {
  let component: CreateArrayGroupComponent;
  let fixture: ComponentFixture<CreateArrayGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArrayGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArrayGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
