import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundApplyPage } from './fund-apply.page';

describe('FundApplyPage', () => {
  let component: FundApplyPage;
  let fixture: ComponentFixture<FundApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundApplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
