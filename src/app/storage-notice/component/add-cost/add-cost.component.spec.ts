import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostComponent } from './add-cost.component';

describe('AddCostComponent', () => {
  let component: AddCostComponent;
  let fixture: ComponentFixture<AddCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
