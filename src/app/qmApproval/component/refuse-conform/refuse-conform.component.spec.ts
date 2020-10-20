import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseConformComponent } from './refuse-conform.component';

describe('RefuseConformComponent', () => {
  let component: RefuseConformComponent;
  let fixture: ComponentFixture<RefuseConformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseConformComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
