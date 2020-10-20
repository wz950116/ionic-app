import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcontentComponent } from './cartcontent.component';

describe('CartcontentComponent', () => {
  let component: CartcontentComponent;
  let fixture: ComponentFixture<CartcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartcontentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
