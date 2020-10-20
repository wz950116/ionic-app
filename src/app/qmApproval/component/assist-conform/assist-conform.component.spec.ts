import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistConformComponent } from './assist-conform.component';

describe('AssistConformComponent', () => {
  let component: AssistConformComponent;
  let fixture: ComponentFixture<AssistConformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistConformComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
