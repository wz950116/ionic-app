import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieComponent } from './supplie.component';

describe('SupplieComponent', () => {
  let component: SupplieComponent;
  let fixture: ComponentFixture<SupplieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
