import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerPagePage } from './pdf-viewer-page.page';

describe('PdfViewerPagePage', () => {
  let component: PdfViewerPagePage;
  let fixture: ComponentFixture<PdfViewerPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
