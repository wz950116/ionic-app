import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageNoticePage } from './storage-notice.page';

describe('StorageNoticePage', () => {
  let component: StorageNoticePage;
  let fixture: ComponentFixture<StorageNoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageNoticePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
