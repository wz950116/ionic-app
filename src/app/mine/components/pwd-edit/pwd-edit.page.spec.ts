import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdEditPage } from './pwd-edit.page';

describe('PwdEditPage', () => {
  let component: PwdEditPage;
  let fixture: ComponentFixture<PwdEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
