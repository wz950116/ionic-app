import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseContractApprovalPage } from './qmApproval.page';

describe('PurchaseContractApprovalPage', () => {
  let component: PurchaseContractApprovalPage;
  let fixture: ComponentFixture<PurchaseContractApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseContractApprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseContractApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
